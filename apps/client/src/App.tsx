import { useEffect, useState, useCallback } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SERVER_AUTHORITY } from '@tsxinsider/shared';
import {
  transactions,
  trnnatures,
  issuers,
  insiders,
  tickers,
  relationstoissuer,
  trnflag,
  securitydesignations,
} from './prisma-types';
import { FormatDateUTC } from './util/date';
import Select, { MultiValue, StylesConfig } from 'react-select';
import DataEditor, {
  GridCell,
  GridCellKind,
  GridColumn,
  Item,
} from '@glideapps/glide-data-grid';
import '@glideapps/glide-data-grid/dist/index.css';
import { darkTheme } from './grid/dark-theme';
import { initialColumns, gridProps } from './grid/constants';

const DEFAULT_TRN_NATURE = 10;

const customStyles: StylesConfig<trnnatures> = {
  control: (provided) => ({
    ...provided,
    width: 300,
    backgroundColor: '#333', // Dark background for the control
    color: '#fff', // White text
    border: '1px solid #444', // Border color to match dark theme
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#333', // Dark background for the menu
    color: '#fff', // White text
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#555', // Dark background for selected options
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: '#fff', // White text for selected options
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#555'
      : state.isFocused
      ? '#444'
      : '#333',
    color: '#fff', // White text for options
    '&:hover': {
      backgroundColor: '#444', // Background color on hover
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#fff', // White text for single value
  }),
  input: (provided) => ({
    ...provided,
    color: '#fff', // White text for input
  }),
};

function App() {
  const [trns, setTransactions] = useState<transactions[]>([]);
  const [trnNatures, setTrnNatures] = useState<trnnatures[]>([]);
  const [trnFlags, setTrnFlags] = useState<trnflag[]>([]);
  const [selectedTrnNatures, setSelectedTrnNatures] = useState<number[]>([
    DEFAULT_TRN_NATURE,
  ]);
  const [startDate, setStartDate] = useState<Date | null>(
    new Date('2021-01-22'),
  );
  const [endDate, setEndDate] = useState<Date | null>(new Date('2021-01-22'));
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [columns, setColumns] = useState<GridColumn[]>(initialColumns);
  const [issuers, setIssuers] = useState<issuers[]>([]);
  const [tickers, setTickers] = useState<tickers[]>([]);
  const [insiders, setInsiders] = useState<insiders[]>([]);
  const [relationsToIssuer, setRelationsToIssuer] = useState<
    relationstoissuer[]
  >([]);
  const [securityDesignations, setSecurityDesignations] = useState<
    securitydesignations[]
  >([]);

  useEffect(() => {
    fetchTrnNatures();
    fetchTrnFlags();
  }, []);

  const fetchTrnNatures = async () => {
    try {
      const response = await fetch(`${SERVER_AUTHORITY}/trn-natures`);
      if (response.ok) {
        setTrnNatures(await response.json());
      } else {
        console.error('Failed to fetch transaction natures');
      }
    } catch (error) {
      console.error('Error fetching transaction natures:', error);
    }
  };

  const fetchTrnFlags = async () => {
    try {
      const response = await fetch(`${SERVER_AUTHORITY}/trn-flags`);
      if (response.ok) {
        setTrnFlags(await response.json());
      } else {
        console.error('Failed to fetch transaction flags');
      }
    } catch (error) {
      console.error('Error fetching transaction flags:', error);
    }
  };

  function getTrnNaturesSelectOptions() {
    return trnNatures.map((trnNature) => ({
      value: trnNature.code,
      label: trnNature.description,
    }));
  }

  const fetchTransactions = async (pageNumber = 1) => {
    if (!startDate || !endDate) {
      alert('Please select both start and end dates.');
      return;
    }

    try {
      const startDateStr = FormatDateUTC(startDate);
      const endDateStr = FormatDateUTC(endDate);
      const trnNatureCodes = selectedTrnNatures.join(',');
      const response = await fetch(
        `${SERVER_AUTHORITY}/transactions?beginFilingDate=${startDateStr}&endFilingDate=${endDateStr}&limit=${limit}&page=${pageNumber}&trnNatureCodes=${trnNatureCodes}`,
      );

      if (response.ok) {
        const data = await response.json();
        setTransactions(data.transactions);
        setIssuers(data.issuers);
        setTickers(data.tickers);
        setInsiders(data.insiders);
        setRelationsToIssuer(data.relationsToIssuer);
        setSecurityDesignations(data.securityDesignations);
        setPage(pageNumber);
      } else {
        console.error('Failed to fetch transactions');
      }
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const handleTrnNatureChange = (
    selectedOptions: MultiValue<{ value: number; label: string }>,
  ) => {
    const selectedCodes = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    setSelectedTrnNatures(selectedCodes);
  };

  const getData = useCallback(
    ([col, row]: Item): GridCell => {
      const transaction = trns[row];
      const column = columns[col];
      const value = transaction[column.id as keyof transactions];

      const kind = GridCellKind.Text;
      const allowOverlay = false;
      let data = value ? String(value) : '';
      let allowWrapping = false;

      const getName = (id: number, objs: any[]): string => {
        const obj = objs.find((obj) => obj.id === id);
        return obj ? obj.name : '';
      };

      const getTrnNatureDescription = (code: number): string => {
        const trnNature = trnNatures.find(
          (trnNature) => trnNature.code === code,
        );
        return trnNature ? trnNature.description : '';
      };

      const getTickerName = (issuerId: number): string => {
        const issuer = issuers.find((issuer) => issuer.id === issuerId);
        return getName(issuer.tickerId, tickers);
      };

      const getTitles = (insiderId: number): string => {
        const relations = relationsToIssuer.filter(
          (relation) => relation.insiderId === insiderId,
        );
        return relations.map((relation) => relation.type).join(', ');
      };

      switch (column.id) {
        case 'trnFlagId':
          data = getName(transaction.TrnFlagId, trnFlags);
          break;

        case 'ticker':
          data = getTickerName(transaction.issuerId);
          break;

        case 'issuer':
          data = getName(transaction.issuerId, issuers);
          allowWrapping = true;
          break;

        case 'insider':
          data = getName(transaction.insiderId, insiders);
          allowWrapping = true;
          break;

        case 'titles':
          data = getTitles(transaction.insiderId);
          allowWrapping = true;
          break;

        case 'securityId':
          data = getName(transaction.securityId, securityDesignations);
          allowWrapping = true;
          break;

        case 'trnDate':
        case 'filingDate':
          data = new Date(value as string).toLocaleDateString();
          break;

        case 'trnNatureCode':
          data = getTrnNatureDescription(value as number);
          allowWrapping = true;
          break;

        case 'GeneralRemarks':
          allowWrapping = true;
          break;

        default:
          break;
      }

      return {
        kind: kind,
        allowOverlay: allowOverlay,
        displayData: data,
        data: data,
        allowWrapping: allowWrapping,
      };
    },
    [
      trns,
      trnNatures,
      trnFlags,
      columns,
      issuers,
      tickers,
      insiders,
      relationsToIssuer,
      securityDesignations,
    ],
  );

  const onColumnResize = useCallback(
    (column: GridColumn, newSize: number) => {
      setColumns((prevColsMap: GridColumn[]) => {
        const index = columns.findIndex((ci) => ci.title === column.title);
        const newArray = [...prevColsMap];
        newArray.splice(index, 1, {
          ...prevColsMap[index],
          width: newSize,
        });
        return newArray;
      });
    },
    [columns],
  );

  return (
    <div className="App">
      <h1>Transactions</h1>
      <div className="filters">
        <div>
          <label>Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div>
          <label>End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
        <div>
          <label>Results Limit:</label>
          <select
            value={limit}
            onChange={(e) => setLimit(parseInt(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
        <div>
          <label>Transaction Natures:</label>
          <Select
            styles={customStyles}
            options={getTrnNaturesSelectOptions()}
            isMulti
            defaultValue={getTrnNaturesSelectOptions().find(
              (option) => option.value === DEFAULT_TRN_NATURE,
            )}
            onChange={handleTrnNatureChange}
          />
        </div>
        <button onClick={() => fetchTransactions(1)}>Fetch Transactions</button>
      </div>
      <div className="grid-container dark-theme">
        <DataEditor
          theme={darkTheme}
          {...gridProps}
          columns={columns}
          rows={trns.length}
          getCellContent={getData}
          onColumnResize={onColumnResize}
        />
      </div>
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => fetchTransactions(page - 1)}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => fetchTransactions(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default App;
