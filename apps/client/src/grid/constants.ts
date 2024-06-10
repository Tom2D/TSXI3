import { DataEditorProps, GridColumn } from "@glideapps/glide-data-grid";

export const initialColumns: GridColumn[] = [
  { id: "trnFlagId", title: "Flag", width: 40 },
  { id: "filingDate", title: "Filing Date", width: 85 },
  { id: "trnDate", title: "Trade Date", width: 85 },
  { id: "ticker", title: "Ticker", width: 55 },
  { id: "issuer", title: "Issuer", width: 150 },
  { id: "insider", title: "Insider", width: 125 },
  { id: "titles", title: "Titles", width: 150 },
  { id: "trnNatureCode", title: "Trade Type", width: 200 },
  { id: "price", title: "Price", width: 60 },
  { id: "nb", title: "Quantity", width: 80 },
  { id: "securityId", title: "Security Type", width: 100 },
  { id: "closingBalance", title: "Balance", width: 80 },
  { id: "ownershipType", title: "Ownership", width: 80  },
  { id: "GeneralRemarks", title: "General Remarks", width: 200, grow: 1 },
];

export const gridProps: Partial<DataEditorProps> = {
  smoothScrollX: true,
  smoothScrollY: true,
  isDraggable: false,
  rowMarkers: "none",
  width: "100%",
  rowHeight: 53, // 53 to allow 3 lines of text
  minColumnWidth: 40,
  getCellsForSelection: true, // Allow copying
};
