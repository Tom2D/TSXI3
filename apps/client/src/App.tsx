import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import './App.css';
import './grid/grid.css';
import { ThemeProvider, CssBaseline, Autocomplete, TextField, Button, SelectChangeEvent } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ThemeToggleButton from './components/ThemeToggleButton';
import { DateFilter, DatePickers } from './components/DatePickers';
import TransactionTable from './components/TransactionTable';
import { fetchTransactions, fetchTrnNatures, fetchTrnFlags } from './grid/fetching';
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
import { columnsGet } from './grid/columns-get.ts';
import dayjs, { Dayjs } from 'dayjs';
import { MRT_PaginationState } from 'material-react-table';
import { appTheme2 } from './theme/theme2.ts';
import { enumToString, getEnumStringValues, stringToEnum, TitlesBitfield } from '@tsxinsider/shared';

//import { appTheme1 } from './theme/theme.tsx';
const APP_THEME = appTheme2;
const DEFAULT_TRN_NATURE = 10;

function App() {
  const [trns, setTransactions] = useState<transactions[]>([]);
  const [trnNatures, setTrnNatures] = useState<trnnatures[]>([]);
  const [trnFlags, setTrnFlags] = useState<trnflag[]>([]);
  const [selectedTrnNatures, setSelectedTrnNatures] = useState<trnnatures[]>([]);
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs('2021-01-22'));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs('2021-01-22'));
  const [issuers, setIssuers] = useState<issuers[]>([]);
  const [tickers, setTickers] = useState<tickers[]>([]);
  const [insiders, setInsiders] = useState<insiders[]>([]);
  const [relationsToIssuer, setRelationsToIssuer] = useState<relationstoissuer[]>([]);
  const [securityDesignations, setSecurityDesignations] = useState<securitydesignations[]>([]);
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark');
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [rowCount, setRowCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [issuerName, setIssuerName] = useState('');
  const [insiderName, setInsiderName] = useState('');
  const [selectedTitles, setSelectedTitles] = useState<TitlesBitfield[]>([]);
  const [ticker, setTicker] = useState('');
  const [useTradeDate, setUseTradeDate] = useState(0); // 0 for Filing Date, 1 for Trade Date

  const theme = useMemo(() => APP_THEME(themeMode), [themeMode]);

  const handleThemeToggle = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const startDateRef = useRef(startDate);
  const endDateRef = useRef(endDate);
  const issuerNameRef = useRef(issuerName);
  const insiderNameRef = useRef(insiderName);
  const selectedTrnNaturesRef = useRef(selectedTrnNatures);
  const selectedTitlesRef = useRef(selectedTitles);
  const tickerRef = useRef(ticker);
  const useTradeDateRef = useRef(useTradeDate);
  useEffect(() => {
    startDateRef.current = startDate;
    endDateRef.current = endDate;
    issuerNameRef.current = issuerName;
    insiderNameRef.current = insiderName;
    selectedTrnNaturesRef.current = selectedTrnNatures;
    selectedTitlesRef.current = selectedTitles;
    tickerRef.current = ticker;
    useTradeDateRef.current = useTradeDate;
  }, [startDate, endDate, issuerName, insiderName, selectedTrnNatures, selectedTitles, ticker, useTradeDate, trns]);

  const isInitialFetch = useRef(true);
  const initialPagination = useRef(pagination);

  // Callback for fetchTransactions() to avoid repeating all arguments
  const fetchTransactionsCallback = useCallback(async (pagination: MRT_PaginationState) => {
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
          issuerNameRef,
          insiderNameRef,
          selectedTitlesRef,
          tickerRef,
          useTradeDateRef,
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
      setIsRefetching(false);
      setIsError(true);
      return;
    }
    setIsRefetching(false);
    isInitialFetch.current = false;
  }, []);

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

  const handleIssuerNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIssuerName(event.target.value);
  };

  const handleInsiderNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInsiderName(event.target.value);
  };

  const handleTitlesChange = (_event: any, values: string[]) => {
    const selectedEnumValues = values.map((value) => stringToEnum(TitlesBitfield, value));
    setSelectedTitles(selectedEnumValues);
  };

  const handleTickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTicker(event.target.value);
  };

  const handleUseTradeDateChange = (event: SelectChangeEvent<number>) => {
    setUseTradeDate(Number(event.target.value));
  };

  // prettier-ignore
  const columns = useMemo(() =>
      columnsGet(issuers, tickers, insiders, relationsToIssuer, securityDesignations, trnFlags, trnNatures,),
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
            <div className="date-filters">
              <DatePickers startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
              <DateFilter useTradeDate={useTradeDate} handleUseTradeDateChange={handleUseTradeDateChange} />
            </div>
            <div className="stock-filters">
              <TextField label="Issuer Name" value={issuerName} onChange={handleIssuerNameChange} />
              <TextField label="Insider Name" value={insiderName} onChange={handleInsiderNameChange} />
              <TextField label="Ticker" value={ticker} onChange={handleTickerChange} />
            </div>
            <Autocomplete
              multiple
              limitTags={1}
              options={trnNatures}
              getOptionLabel={(option) => option.description}
              isOptionEqualToValue={(option, value) => option.code === value.code || option.code === value}
              value={selectedTrnNatures}
              onChange={handleTrnNatureChange}
              renderInput={(params) => <TextField {...params} label="Trade Types" />}
            />

            <Autocomplete
              multiple
              limitTags={2}
              options={getEnumStringValues(TitlesBitfield)}
              getOptionLabel={(option: string) => option}
              value={selectedTitles.map((title) => enumToString(TitlesBitfield, title) as string)}
              onChange={handleTitlesChange}
              renderInput={(params) => <TextField {...params} label="Titles" />}
            />
            <Button variant="contained" color="primary" onClick={() => fetchTransactionsCallback(pagination)}>
              Fetch Transactions
            </Button>
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
