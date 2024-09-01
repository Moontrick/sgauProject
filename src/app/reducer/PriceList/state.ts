import { PriceListTableType } from "../../types/PriceList/types";

export interface PricelistInterface {
    tableData: PriceListTableType[];
  }
    
    export const initialState: PricelistInterface = {
      tableData: [],
    };
    