import { DataEditorProps, GridColumn } from "@glideapps/glide-data-grid";

export const initialColumns: GridColumn[] = [
    { id: "trnFlagId", title: "Flag", width: 50 },
    { id: "filingDate", title: "Filing Date", width: 100 },
    { id: "trnDate", title: "Trade Date", width: 100 },
    { id: "issuerId", title: "Issuer ID", width: 100 },
    { id: "insiderId", title: "Insider ID", width: 100 },
    { id: "trnNatureCode", title: "Trade Type", width: 100 },
    { id: "price", title: "Price", width: 90 },
    { id: "nb", title: "Number", width: 100 },
    { id: "securityId", title: "Security Type", width: 100 },
    { id: "closingBalance", title: "New Balance", width: 100 },
    { id: "ownershipType", title: "Ownership", width: 125 },
    { id: "GeneralRemarks", title: "General Remarks", width: 200, grow: 1 },
];

export const gridProps: Partial<DataEditorProps> = {
    smoothScrollX: true,
    smoothScrollY: true,
    isDraggable: false,
    rowMarkers: "none",
    width: "100%",
    getCellsForSelection: true, // Allow copying
};