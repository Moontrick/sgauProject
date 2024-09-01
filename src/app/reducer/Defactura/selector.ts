import { AppState } from "../../store/index";

export const tableDataSelector = (state: AppState) => state.defacturaList.tableData;
