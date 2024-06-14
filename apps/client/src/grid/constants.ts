import { MRT_Cell, MRT_ColumnDef } from 'material-react-table';
import { transactions } from '../prisma-types';

const toLocaleNumber = (cell: MRT_Cell<any>): string | null => {
  const value = cell.getValue<number>();
  return value !== null ? value.toLocaleString() : null;
};

export const initialColumns: MRT_ColumnDef<transactions>[] = [
  { accessorKey: 'trnFlagId', header: 'Flag', size: 50 },
  { accessorKey: 'filingDate', header: 'Filing Date', size: 90 },
  { accessorKey: 'trnDate', header: 'Trade Date', size: 90 },
  { accessorKey: 'ticker', header: 'Ticker', size: 60 },
  { accessorKey: 'issuer', header: 'Issuer', size: 200 },
  { accessorKey: 'insider', header: 'Insider', size: 125 },
  { accessorKey: 'titles', header: 'Titles', size: 150 },
  { accessorKey: 'trnNatureCode', header: 'Trade Type', size: 200 },
  {
    accessorKey: 'price',
    header: 'Price',
    size: 60,
    Cell: ({ cell }) => toLocaleNumber(cell),
  },
  {
    accessorKey: 'nb',
    header: 'Quantity',
    size: 80,
    Cell: ({ cell }) => toLocaleNumber(cell),
  },
  { accessorKey: 'securityId', header: 'Security Type', size: 150 },
  {
    accessorKey: 'closingBalance',
    header: 'Balance',
    size: 85,
    Cell: ({ cell }) => toLocaleNumber(cell),
    muiTableBodyCellProps: {
      style: { whiteSpace: 'nowrap' }, // Disable text wrapping
    },
  },
  { accessorKey: 'ownershipType', header: 'Ownership', size: 90 },
  {
    accessorKey: 'GeneralRemarks',
    header: 'General Remarks',
    size: 200,
    muiTableBodyCellProps: { sx: { whiteSpace: 'normal' } },
  },
];
