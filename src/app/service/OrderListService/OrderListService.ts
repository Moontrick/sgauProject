import { baseService } from "../../../api";
import { CONFIG } from "../../../api/config";
import { TableState } from "../../../components/Table/typings";
import { OrderListType } from "../../types/OrderList/OrderList";

const MAIN_URL = CONFIG.MAIN_API


const getTable= async (oldParams: TableState['params']) => {
  const params: Record<string, string> = {}
  if(oldParams.query){
    params[oldParams.searchType] = oldParams.query
  }
  const res = await baseService.get<OrderListType[]>(`${MAIN_URL}/api/order`, {params});
    return res.data;
  };


  export const orderListService = {
    getTable,
  };
  