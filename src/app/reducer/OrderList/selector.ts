import { AppState } from "../../store/index";

export const tableDataSelector = (state: AppState) => state.orderList.tableData;
