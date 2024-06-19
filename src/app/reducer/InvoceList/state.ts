import { InvoceTableType } from "../../types/InvoceList/invoceListTypes";

export interface userTable {
    tableData: InvoceTableType[];
    openModal: boolean;
  }
    
    export const initialState: userTable = {
      tableData: [],
      openModal: false,
    };
    