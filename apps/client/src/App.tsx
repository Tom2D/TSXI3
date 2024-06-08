import { useEffect, useState, useCallback } from "react";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SERVER_AUTHORITY } from "@tsxinsider/shared";
import { transactions, trnnatures } from "./prisma-types";
import { FormatDateUTC } from "./util/date";
import Select, { MultiValue, StylesConfig } from 'react-select';
import DataEditor, { DataEditorProps, GridCell, GridCellKind, GridColumn, Item } from "@glideapps/glide-data-grid";
import "@glideapps/glide-data-grid/dist/index.css"
import { darkTheme } from "./grid/dark-theme.tsx";

const DEFAULT_TRN_NATURE = 10;

const customStyles: StylesConfig<trnnatures> = {
  control: (provided) => ({
    ...provided,
    width: 300,
    backgroundColor: '#333',  // Dark background for the control
    color: '#fff',            // White text
    border: '1px solid #444', // Border color to match dark theme
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#333', // Dark background for the menu
    color: '#fff',           // White text
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
    backgroundColor: state.isSelected ? '#555' : state.isFocused ? '#444' : '#333',
    color: '#fff', // White text for options
    '&:hover': {
      backgroundColor: '#444', // Background color on hover
    }
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

const columns: GridColumn[] = [
  { id: "id", title: "ID" },
  { id: "sediId", title: "SEDI ID" },
  { id: "insiderId", title: "Insider ID" },
  { id: "issuerId", title: "Issuer ID" },
  { id: "securityId", title: "Security ID" },
  { id: "trnFlagId", title: "Transaction Flag ID" },
  { id: "trnDate", title: "Transaction Date" },
  { id: "filingDate", title: "Filing Date" },
  { id: "ownershipType", title: "Ownership Type" },
  { id: "trnNatureCode", title: "Transaction Nature Code" },
  { id: "nb", title: "Number" },
  { id: "price", title: "Price" },
  { id: "priceCurrencyId", title: "Price Currency ID" },
  { id: "closingBalance", title: "Closing Balance" },
  { id: "calculatedBalance", title: "Calculated Balance" },
  { id: "underlyingSecurityId", title: "Underlying Security ID" },
  { id: "GeneralRemarks", title: "General Remarks" },
];

function App() {
  const [trns, setTransactions] = useState<transactions[]>([]);
  const [trnNatureOptions, setTrnNatureOptions] = useState<{ value: number; label: string }[]>([]);
  const [selectedTrnNatures, setSelectedTrnNatures] = useState<number[]>([DEFAULT_TRN_NATURE]);
  const [startDate, setStartDate] = useState<Date | null>(new Date("2021-01-22"));
  const [endDate, setEndDate] = useState<Date | null>(new Date("2021-01-22"));
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchTrnNatures();
  }, []);

  const fetchTrnNatures = async () => {
    try {
      const response = await fetch(`${SERVER_AUTHORITY}/trn-natures`);
      if (response.ok) {
        const data: trnnatures[] = await response.json();
        const options = data.map((trnNature) => ({
          value: trnNature.code,
          label: trnNature.description,
        }));
        setTrnNatureOptions(options);
      } else {
        console.error("Failed to fetch transaction natures");
      }
    } catch (error) {
      console.error("Error fetching transaction natures:", error);
    }
  };

  const fetchTransactions = async (pageNumber: number = 1) => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }

    try {
      const startDateStr = FormatDateUTC(startDate);
      const endDateStr = FormatDateUTC(endDate);
      const trnNatureCodes = selectedTrnNatures.join(",");
      const response = await fetch(
          `${SERVER_AUTHORITY}/transactions?beginFilingDate=${startDateStr}&endFilingDate=${endDateStr}&limit=${limit}&page=${pageNumber}&trnNatureCodes=${trnNatureCodes}`
      );

      if (response.ok) {
        const data: transactions[] = await response.json();
        setTransactions(data);
        setPage(pageNumber);
      } else {
        console.error("Failed to fetch transactions");
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const handleTrnNatureChange = (selectedOptions: MultiValue<{ value: number; label: string }>) => {
    const selectedCodes = selectedOptions ? selectedOptions.map((option) => option.value) : [];
    setSelectedTrnNatures(selectedCodes);
  };

  const getData = useCallback(
      ([col, row]: Item): GridCell => {
        const transaction = trns[row];
        const column = columns[col];
        const value = transaction[column.id as keyof transactions];

        if (column.id === "trnDate" || column.id === "filingDate") {
          return {
            kind: GridCellKind.Text,
            allowOverlay: false,
            displayData: new Date(value as string).toLocaleDateString(),
            data: new Date(value as string).toLocaleDateString(),
          };
        }

        return {
          kind: GridCellKind.Text,
          allowOverlay: false,
          displayData: String(value),
          data: String(value),
        };
      },
      [trns]
  );

  const gridProps: Partial<DataEditorProps> = {
    smoothScrollX: true,
    smoothScrollY: true,
    isDraggable: false,
    rowMarkers: "none",
    width: "100%",
  };

  return (
      <div className="App">
        <h1>Transactions</h1>
        <div className="filters">
          <div>
            <label>Start Date:</label>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
          <div>
            <label>End Date:</label>
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
          </div>
          <div>
            <label>Results Limit:</label>
            <select value={limit} onChange={(e) => setLimit(parseInt(e.target.value))}>
              <option value={10}>10</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
          <div>
            <label>Transaction Natures:</label>
            <Select
                styles={customStyles}
                options={trnNatureOptions}
                isMulti
                defaultValue={trnNatureOptions.find(option => option.value === DEFAULT_TRN_NATURE)}
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
              rowHeight={35}
          />
        </div>
        <div className="pagination">
          <button disabled={page === 1} onClick={() => fetchTransactions(page - 1)}>
            Previous
          </button>
          <span>Page {page}</span>
          <button onClick={() => fetchTransactions(page + 1)}>Next</button>
        </div>
      </div>
  );
}

export default App;
