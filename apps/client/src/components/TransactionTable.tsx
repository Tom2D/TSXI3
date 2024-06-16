import { MaterialReactTable, MRT_ColumnDef } from 'material-react-table';
import { transactions } from '../prisma-types';

interface Props {
  columns: MRT_ColumnDef<transactions>[];
  data: transactions[];
  pagination: { pageIndex: number; pageSize: number };
  rowCount: number;
  isLoading: boolean;
  isRefetching: boolean;
  isError: boolean;
  setPagination: (pagination: { pageIndex: number; pageSize: number }) => void;
}

const TransactionTable: React.FC<Props> = ({
  columns,
  data,
  pagination,
  rowCount,
  isLoading,
  isRefetching,
  isError,
  setPagination,
}) => (
  <MaterialReactTable
    columns={columns}
    data={data}
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
      isError ? { color: 'error', children: 'Error loading data' } : undefined
    }
  />
);

export default TransactionTable;
