import { baseService } from "../../../api";
import { CONFIG } from "../../../api/config";
import { TestType } from "../../types/InvoceList/invoceListTypes";
import { PagedResponse } from "../../types/shared/shared";



const MAIN_URL = CONFIG.MAIN_API
const TEST_URL = CONFIG.TEST_API

const getTable = async () => {
  const params = {
    json: '%7B"key":"value"%7D'
  }
    const res = await baseService.get<PagedResponse<any>>(`${MAIN_URL}/`, {params});
    return res.data;
  };
const getTest= async () => {
    const res = await baseService.get<PagedResponse<TestType[]>>(`${TEST_URL}/api/test`);
    return res.data;
  };


  export const invoceListService = {
    getTable,
    getTest,
  };
  