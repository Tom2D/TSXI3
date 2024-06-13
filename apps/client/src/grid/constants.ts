import { MRT_ColumnDef } from 'material-react-table';
import { transactions } from '../prisma-types';

export const initialColumns: MRT_ColumnDef<transactions>[] = [
  { accessorKey: 'trnFlagId', header: 'Flag', size: 50 },
  { accessorKey: 'filingDate', header: 'Filing Date', size: 90 },
  { accessorKey: 'trnDate', header: 'Trade Date', size: 90 },
  { accessorKey: 'ticker', header: 'Ticker', size: 55 },
  { accessorKey: 'issuer', header: 'Issuer', size: 150 },
  { accessorKey: 'insider', header: 'Insider', size: 125 },
  { accessorKey: 'titles', header: 'Titles', size: 150 },
  { accessorKey: 'trnNatureCode', header: 'Trade Type', size: 200 },
  { accessorKey: 'price', header: 'Price', size: 60 },
  { accessorKey: 'nb', header: 'Quantity', size: 80 },
  { accessorKey: 'securityId', header: 'Security Type', size: 100 },
  { accessorKey: 'closingBalance', header: 'New Balance', size: 80 },
  { accessorKey: 'ownershipType', header: 'Ownership', size: 80 },
  {
    accessorKey: 'GeneralRemarks',
    header: 'General Remarks',
    size: 200,
    muiTableBodyCellProps: { sx: { whiteSpace: 'normal' } },
  },
];
