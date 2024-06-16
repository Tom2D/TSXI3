// App.tsx
import { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import './App.css';
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
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Autocomplete,
  TextField,
} from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { getDesignTokens } from './theme.tsx';
import ThemeToggleButton from './components/ThemeToggleButton';
import DatePickers from './components/DatePickers';
import TransactionTable from './components/TransactionTable';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { getColumns } from './grid/get-columns.ts';

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
  const hasData = useRef(Boolean(trns.length));
  useEffect(() => {
    endDateRef.current = endDate;
    selectedTrnNaturesRef.current = selectedTrnNatures;
    startDateRef.current = startDate;
    hasData.current = Boolean(trns.length);
  }, [startDate, endDate, selectedTrnNatures, trns]);

  const fetchTransactions = useCallback(
    async (pageIndex = 0, pageSize = 10) => {
      if (!hasData) {
        setIsLoading(true);
      } else {
        setIsRefetching(true);
      }

      try {
        const startDateStr = FormatDateUTC(startDateRef.current);
        const endDateStr = FormatDateUTC(endDateRef.current);
        const trnNatureCodes = selectedTrnNaturesRef.current
          .map((option) => option.code)
          .join(',');
        const response = await fetch(
          `${SERVER_AUTHORITY}/transactions?beginFilingDate=${startDateStr}&endFilingDate=${endDateStr}&limit=${pageSize}&page=${pageIndex}&trnNatureCodes=${trnNatureCodes}`,
        );

        if (response.ok) {
          const data = await response.json();
          setTransactions(data.transactions);
          setIssuers(data.issuers);
          setTickers(data.tickers);
          setInsiders(data.insiders);
          setRelationsToIssuer(data.relationsToIssuer);
          setSecurityDesignations(data.securityDesignations);
          setRowCount(data.total); // Set the total row count
        } else {
          console.error('Failed to fetch transactions');
          setIsError(true);
          return;
        }
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setIsError(true);
        return;
      }
      setIsLoading(false);
      setIsRefetching(false);
      setIsError(false);
    },
    [],
  );

  const isInitialFetch = useRef(true);

  useEffect(() => {
    const fetchTrnNatures = async () => {
      try {
        const response = await fetch(`${SERVER_AUTHORITY}/trn-natures`);
        if (response.ok) {
          const trnNatures = await response.json();
          setTrnNatures(trnNatures);
          const defaultTrnNature = trnNatures.filter(
            (option: trnnatures) => option.code === DEFAULT_TRN_NATURE,
          );
          setSelectedTrnNatures(defaultTrnNature);
          selectedTrnNaturesRef.current = defaultTrnNature; // Pour que fetchTransactions le considère
        } else {
          console.error('Failed to fetch transaction natures');
        }
      } catch (error) {
        setIsError(true);
        console.error('Error fetching transaction natures:', error);
      }
    };

    const initialFetchTransactions = async () => {
      await fetchTrnNatures();
      fetchTransactions();
      isInitialFetch.current = false;
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
        setIsError(true);
        console.error('Error fetching transaction flags:', error);
      }
    };

    initialFetchTransactions();
    fetchTrnFlags();
  }, [fetchTransactions]);

  useEffect(() => {
    if (isInitialFetch.current) {
      // Refetch data on page change only. Does not do initial fetch.
      return;
    }
    fetchTransactions(pagination.pageIndex, pagination.pageSize);
  }, [fetchTransactions, pagination.pageIndex, pagination.pageSize]);

  const handleTrnNatureChange = (_event: any, values: trnnatures[]) => {
    setSelectedTrnNatures(values);
  };

  const columns = useMemo(
    () =>
      getColumns(
        issuers,
        tickers,
        insiders,
        relationsToIssuer,
        securityDesignations,
        trnFlags,
        trnNatures,
      ),
    [
      issuers,
      tickers,
      insiders,
      relationsToIssuer,
      securityDesignations,
      trnFlags,
      trnNatures,
    ],
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
            <button onClick={() => fetchTransactions(0, pagination.pageSize)}>
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
