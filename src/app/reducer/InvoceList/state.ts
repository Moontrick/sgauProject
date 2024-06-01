import { InvoceTableType } from "../../types/InvoceList/invoceListTypes";

export interface userTable {
    tableData: InvoceTableType[];
  }
    
    export const initialState: userTable = {
      tableData: [],
    };
    