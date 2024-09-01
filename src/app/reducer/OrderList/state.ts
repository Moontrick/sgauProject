import { OrderListType } from "../../types/OrderList/OrderList";

export interface OrderlistInterface {
    tableData: OrderListType[];
  }
    
    export const initialState: OrderlistInterface = {
      tableData: [],
    };
    