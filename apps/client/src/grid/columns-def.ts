import { MRT_Cell, MRT_ColumnDef, MRT_Row } from 'material-react-table';
import { transactions } from '../prisma-types';
import { useTheme } from '@mui/material/styles';

const toLocaleNumber = (cellOrValue: MRT_Cell<any> | number, removeDecimals = false): string | null => {
  const value = typeof cellOrValue == 'number' ? cellOrValue : cellOrValue.getValue<number>();

  if (value == 0) {
    return null;
  }

  const options = removeDecimals ? { maximumFractionDigits: 0 } : {};
  return value !== null && value !== undefined ? value.toLocaleString(undefined, options) : null;
};

const noWrap = {
  muiTableBodyCellProps: {
    style: { whiteSpace: 'nowrap' }, // Disable text wrapping
  },
};

const useRedGreenBackground = {
  muiTableBodyCellProps: ({ row }) => {
    return {
      style: {
        backgroundColor: getTrnValueColor(row),
      },
    };
  },
};

const getTrnValue = (row: MRT_Row<any>) => {
  return row.original.price * row.original.nb;
};

const getTrnValueColor = (row: MRT_Row<any>) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const green = isDark ? '#001a00' : '#C8E6C9'; // Darker green for dark mode
  const red = isDark ? '#4d0000' : '#FFCDD2'; // Darker red for dark mode

  const value = getTrnValue(row);
  if (value > 0) {
    return green;
  } else if (value < 0) {
    return red;
  }
  return 'inherit'; // Default background, no color
};

export const initialColumns: MRT_ColumnDef<transactions>[] = [
  { accessorKey: 'trnFlagId', header: 'Flag', size: 50, ...noWrap, ...useRedGreenBackground },
  { accessorKey: 'filingDate', header: 'Filing Date', size: 90, ...noWrap, ...useRedGreenBackground },
  { accessorKey: 'trnDate', header: 'Trade Date', size: 90, ...noWrap, ...useRedGreenBackground },
  { accessorKey: 'ticker', header: 'Ticker', size: 60, ...noWrap, ...useRedGreenBackground },
  { accessorKey: 'issuer', header: 'Issuer', size: 200, ...useRedGreenBackground },
  { accessorKey: 'insider', header: 'Insider', size: 120, ...useRedGreenBackground },
  { accessorKey: 'titles', header: 'Titles', size: 125, ...useRedGreenBackground },
  { accessorKey: 'trnNatureCode', header: 'Trade Type', size: 180, ...useRedGreenBackground },
  {
    accessorKey: 'price',
    header: 'Price',
    size: 60,
    ...noWrap,
    Cell: ({ cell }) => toLocaleNumber(cell),
    ...useRedGreenBackground,
  },
  {
    accessorKey: 'nb',
    header: 'Quantity',
    size: 80,
    ...noWrap,
    Cell: ({ cell }) => toLocaleNumber(cell),
    ...useRedGreenBackground,
  },
  {
    accessorKey: 'value',
    header: 'Value',
    size: 85,
    ...noWrap,
    Cell: ({ row }) => {
      return toLocaleNumber(getTrnValue(row), true);
    },
    ...useRedGreenBackground,
    muiTableBodyCellProps: ({ row }) => {
      return {
        style: {
          backgroundColor: getTrnValueColor(row),
        },
      };
    },
  },
  {
    accessorKey: 'closingBalance',
    header: 'Balance',
    size: 85,
    Cell: ({ cell }) => toLocaleNumber(cell),
    ...noWrap,
    ...useRedGreenBackground,
  },
  { accessorKey: 'securityId', header: 'Security Type', size: 150 },
  { accessorKey: 'ownershipType', header: 'Ownership', size: 90 },
  {
    accessorKey: 'GeneralRemarks',
    header: 'General Remarks',
    size: 200,
    ...useRedGreenBackground,
    //muiTableBodyCellProps: { sx: { whiteSpace: 'normal' } },
  },
];
