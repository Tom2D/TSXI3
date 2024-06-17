import { MRT_Cell, MRT_ColumnDef } from 'material-react-table';
import { transactions } from '../prisma-types';

const toLocaleNumber = (cellOrValue: MRT_Cell<any> | number): string | null => {
  const value =
    typeof cellOrValue == 'number'
      ? cellOrValue
      : cellOrValue.getValue<number>();

  return value !== null && value !== undefined ? value.toLocaleString() : null;
};

const noWrap = {
  muiTableBodyCellProps: {
    style: { whiteSpace: 'nowrap' }, // Disable text wrapping
  },
};

export const initialColumns: MRT_ColumnDef<transactions>[] = [
  { accessorKey: 'trnFlagId', header: 'Flag', size: 50, ...noWrap },
  { accessorKey: 'filingDate', header: 'Filing Date', size: 90, ...noWrap },
  { accessorKey: 'trnDate', header: 'Trade Date', size: 90, ...noWrap },
  { accessorKey: 'ticker', header: 'Ticker', size: 60 },
  { accessorKey: 'issuer', header: 'Issuer', size: 200 },
  { accessorKey: 'insider', header: 'Insider', size: 125 },
  { accessorKey: 'titles', header: 'Titles', size: 125 },
  { accessorKey: 'trnNatureCode', header: 'Trade Type', size: 200 },
  {
    accessorKey: 'price',
    header: 'Price',
    size: 60,
    ...noWrap,
    Cell: ({ cell }) => toLocaleNumber(cell),
  },
  {
    accessorKey: 'nb',
    header: 'Quantity',
    size: 80,
    ...noWrap,
    Cell: ({ cell }) => toLocaleNumber(cell),
  },
  {
    accessorKey: 'value',
    header: 'Value',
    size: 85,
    ...noWrap,
    Cell: ({ row }) => {
      const price = row.original.price;
      const nb = row.original.nb;
      return toLocaleNumber(price * nb);
    },
  },
  {
    accessorKey: 'closingBalance',
    header: 'Balance',
    size: 85,
    Cell: ({ cell }) => toLocaleNumber(cell),
    ...noWrap,
  },
  { accessorKey: 'securityId', header: 'Security Type', size: 150 },
  { accessorKey: 'ownershipType', header: 'Ownership', size: 90 },
  {
    accessorKey: 'GeneralRemarks',
    header: 'General Remarks',
    size: 200,
    muiTableBodyCellProps: { sx: { whiteSpace: 'normal' } },
  },
];
