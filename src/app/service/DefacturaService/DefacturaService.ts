import { baseService } from "../../../api";
import { CONFIG } from "../../../api/config";
import { TableState } from "../../../components/Table/typings";
import { DefacturaDataType } from "../../types/Defactura/DefacturaTypes";
import { OrderListType } from "../../types/OrderList/OrderList";

const MAIN_URL = CONFIG.MAIN_API


const getTable= async (oldParams: TableState['params']) => {
  const params: Record<string, string> = {}
  if(oldParams.query){
    params[oldParams.searchType] = oldParams.query
  }
  const res = await baseService.get<DefacturaDataType[]>(`${MAIN_URL}/api/defectura`, {params});
    return res.data;
  };


  export const defacturaListService = {
    getTable,
  };
  