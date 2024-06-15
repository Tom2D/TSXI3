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
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import '@mui/material/styles';
import { initialColumns } from './grid/constants';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  TextField,
  Autocomplete,
  IconButton,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

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
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="App">
          <h1>Transactions</h1>
          <IconButton
            sx={{ ml: 1 }}
            onClick={handleThemeToggle}
            color="inherit"
          >
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          <div className="filters">
            <div>
              <DatePicker
                label="Start Date"
                value={startDate}
                onChange={(newDate) => setStartDate(newDate)}
                slotProps={{
                  field: { clearable: true },
                }}
              />
            </div>
            <div>
              <DatePicker
                label="End Date"
                value={endDate}
                onChange={(newDate) => setEndDate(newDate)}
                slotProps={{
                  field: { clearable: true },
                }}
              />
            </div>
            <div>
              <Autocomplete
                multiple
                limitTags={1}
                options={trnNatures}
                getOptionLabel={(option) => option.description}
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
          <div className="grid-container">
            <MaterialReactTable
              columns={columns}
              data={trns}
              enableColumnResizing
              enableColumnOrdering={false}
              enableColumnActions={false}
              enableSorting={false}
              enableRowSelection={false}
              enableDensityToggle={false}
              manualPagination
              onPaginationChange={setPagination}
              rowCount={rowCount}
              state={{
                pagination,
                isLoading,
                showProgressBars: isRefetching,
                showAlertBanner: isError,
              }}
              initialState={{
                showColumnFilters: false,
                density: 'compact',
                columnVisibility: {
                  ownershipType: false,
                },
              }}
              muiTableBodyCellProps={{
                style: { whiteSpace: 'normal', wordBreak: 'break-word' },
              }}
              muiPaginationProps={{
                rowsPerPageOptions: [10, 25, 100],
              }}
              muiToolbarAlertBannerProps={
                isError
                  ? { color: 'error', children: 'Error loading data' }
                  : undefined
              }
            />
          </div>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
