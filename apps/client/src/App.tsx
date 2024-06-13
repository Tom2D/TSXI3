import { useEffect, useState, useMemo } from 'react';
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
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import '@mui/material/styles';
import { initialColumns } from './grid/constants';

const DEFAULT_TRN_NATURE = 10;

const customStyles: StylesConfig<trnnatures> = {
  control: (provided) => ({
    ...provided,
    width: 300,
    backgroundColor: '#333',
    color: '#fff',
    border: '1px solid #444',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#333',
    color: '#fff',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#555',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: '#fff',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#555'
      : state.isFocused
      ? '#444'
      : '#333',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#444',
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#fff',
  }),
  input: (provided) => ({
    ...provided,
    color: '#fff',
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

  const columns = useMemo<MRT_ColumnDef<transactions>[]>(() => {
    const getName = (id: number, objs: any[]): string => {
      const obj = objs.find((obj) => obj.id === id);
      return obj ? obj.name : '';
    };

    const getTrnNatureDescription = (code: number): string => {
      const trnNature = trnNatures.find((trnNature) => trnNature.code === code);
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

    return initialColumns.map((column) => {
      let accessorFn: ((row: transactions) => string) | undefined;
      switch (column.accessorKey) {
        case 'trnFlagId':
          accessorFn = (row) => getName(row.trnFlagId, trnFlags);
          break;

        case 'ticker':
          accessorFn = (row) => getTickerName(row.issuerId);
          break;

        case 'issuer':
          accessorFn = (row) => getName(row.issuerId, issuers);
          break;

        case 'insider':
          accessorFn = (row) => getName(row.insiderId, insiders);
          break;

        case 'titles':
          accessorFn = (row) => getTitles(row.insiderId);
          break;

        case 'securityId':
          accessorFn = (row) => getName(row.securityId, securityDesignations);
          break;

        case 'trnDate':
        case 'filingDate':
          accessorFn = (row) =>
            new Date(row[column.accessorKey]).toLocaleDateString();
          break;

        case 'trnNatureCode':
          accessorFn = (row) => getTrnNatureDescription(row.trnNatureCode);
          break;

        default:
          accessorFn = undefined;
          break;
      }
      return accessorFn ? { ...column, accessorFn } : column;
    });
  }, [
    issuers,
    tickers,
    insiders,
    relationsToIssuer,
    securityDesignations,
    trnFlags,
    trnNatures,
  ]);

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
      <div className="grid-container">
        <MaterialReactTable
          columns={columns}
          data={trns}
          enableColumnResizing
          enableColumnOrdering={false}
          enableColumnActions={false}
          enableSorting={false}
          enableRowSelection={false}
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
