import { AppState } from "../../store/index";

export const tableDataSelector = (state: AppState) => state.invoceList.tableData;
export const openModalSelector = (state: AppState) => state.invoceList.openModal;
