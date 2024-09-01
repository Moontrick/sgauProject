import { baseService } from "../../../api";
import { CONFIG } from "../../../api/config";
import { TableState } from "../../../components/Table/typings";
import { TestType, InvoceTableType } from "../../types/InvoceList/invoceListTypes";
import { PriceListTableType } from "../../types/PriceList/types";
import { PagedResponse } from "../../types/shared/shared";



const MAIN_URL = CONFIG.MAIN_API


const getTable= async (oldParams: TableState['params']) => {
  const params: Record<string, string> = {}
  if(oldParams.query){
    params[oldParams.searchType] = oldParams.query
  }
  const res = await baseService.get<PriceListTableType[]>(`${MAIN_URL}/api/price_list`, {params});
    return res.data;
  };


  export const priceListService = {
    getTable,
  };
  