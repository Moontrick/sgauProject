import { DefacturaDataType } from "../../types/Defactura/DefacturaTypes";

export interface DefacturaInterface {
    tableData: DefacturaDataType[];
  }
    
    export const initialState: DefacturaInterface = {
      tableData: [],
    };
    