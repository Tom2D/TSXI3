import { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import './App.css';
import './grid/grid.css';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Autocomplete,
  TextField,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { getDesignTokens } from './theme.tsx';
import ThemeToggleButton from './components/ThemeToggleButton';
import DatePickers from './components/DatePickers';
import TransactionTable from './components/TransactionTable';
import {
  fetchTransactions,
  fetchTrnNatures,
  fetchTrnFlags,
} from './grid/fetching';
import {
  issuers,
  tickers,
  insiders,
  relationstoissuer,
  securitydesignations,
  transactions,
  trnflag,
  trnnatures,
} from './prisma-types';
import { getColumns } from './grid/get-columns.ts';
import dayjs, { Dayjs } from 'dayjs';
import { MRT_PaginationState } from 'material-react-table';

const DEFAULT_TRN_NATURE = 10;

function App() {
  const [trns, setTransactions] = useState<transactions[]>([]);
  const [trnNatures, setTrnNatures] = useState<trnnatures[]>([]);
  const [trnFlags, setTrnFlags] = useState<trnflag[]>([]);
  const [selectedTrnNatures, setSelectedTrnNatures] = useState<trnnatures[]>(
    [],
  );
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs('2021-01-22'));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs('2021-01-22'));
  const [issuers, setIssuers] = useState<issuers[]>([]);
  const [tickers, setTickers] = useState<tickers[]>([]);
  const [insiders, setInsiders] = useState<insiders[]>([]);
  const [relationsToIssuer, setRelationsToIssuer] = useState<
    relationstoissuer[]
  >([]);
  const [securityDesignations, setSecurityDesignations] = useState<
    securitydesignations[]
  >([]);
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark');
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [rowCount, setRowCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [isError, setIsError] = useState(false);

  const theme = useMemo(
    () => createTheme(getDesignTokens(themeMode)),
    [themeMode],
  );

  const handleThemeToggle = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const endDateRef = useRef(endDate);
  const selectedTrnNaturesRef = useRef(selectedTrnNatures);
  const startDateRef = useRef(startDate);
  useEffect(() => {
    endDateRef.current = endDate;
    selectedTrnNaturesRef.current = selectedTrnNatures;
    startDateRef.current = startDate;
  }, [startDate, endDate, selectedTrnNatures, trns]);

  const isInitialFetch = useRef(true);
  const initialPagination = useRef(pagination);

  // Callback for fetchTransactions() to avoid repeating all arguments
  const fetchTransactionsCallback = useCallback(
    async (pagination: MRT_PaginationState) => {
      try {
        if (isInitialFetch.current) {
          setIsLoading(true);
          if (
            !(await fetchTrnNatures(
              setTrnNatures,
              setSelectedTrnNatures,
              selectedTrnNaturesRef,
              DEFAULT_TRN_NATURE,
              setIsError,
            ))
          ) {
            return; // Error during fetch
          }
          if (!(await fetchTrnFlags(setTrnFlags, setIsError))) {
            return; // Error during fetch
          }
        }

        if (
          !fetchTransactions(
            pagination.pageIndex,
            pagination.pageSize,
            startDateRef,
            endDateRef,
            selectedTrnNaturesRef,
            setTransactions,
            setIssuers,
            setTickers,
            setInsiders,
            setRelationsToIssuer,
            setSecurityDesignations,
            setRowCount,
            setIsLoading,
            setIsRefetching,
            setIsError,
          )
        ) {
          return; // Error during fetch
        }
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
        setIsError(true);
        return;
      }
      isInitialFetch.current = false;
    },
    [],
  );

  useEffect(() => {
    fetchTransactionsCallback(initialPagination.current);
  }, [fetchTransactionsCallback]);

  useEffect(() => {
    if (isInitialFetch.current) {
      // Refetch data on page change only. Does not do initial fetch.
      return;
    }
    fetchTransactionsCallback(pagination);
  }, [fetchTransactionsCallback, pagination]);

  const handleTrnNatureChange = (_event: any, values: trnnatures[]) => {
    setSelectedTrnNatures(values);
  };

  // prettier-ignore
  const columns = useMemo(() =>
            getColumns(issuers, tickers, insiders, relationsToIssuer, securityDesignations, trnFlags, trnNatures,),
        [issuers, tickers, insiders, relationsToIssuer, securityDesignations, trnFlags, trnNatures,],
    );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="App">
          <h1>Transactions</h1>
          <ThemeToggleButton onToggle={handleThemeToggle} />
          <div className="filters">
            <DatePickers
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
            <div>
              <Autocomplete
                multiple
                limitTags={1}
                options={trnNatures}
                getOptionLabel={(option) => option.description}
                isOptionEqualToValue={(option, value) =>
                  option.code === value.code || option.code === value
                }
                value={selectedTrnNatures}
                onChange={handleTrnNatureChange}
                renderInput={(params) => (
                  <TextField {...params} label="Trade Types" />
                )}
              />
            </div>
            <button onClick={() => fetchTransactionsCallback(pagination)}>
              Fetch Transactions
            </button>
          </div>
          <TransactionTable
            columns={columns}
            data={trns}
            pagination={pagination}
            rowCount={rowCount}
            isLoading={isLoading}
            isRefetching={isRefetching}
            isError={isError}
            setPagination={setPagination}
          />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
