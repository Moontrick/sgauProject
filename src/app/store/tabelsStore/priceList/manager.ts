import { AppThunkDispatch } from "../..";
import { ThunkTableManager } from "../../../../components/Table/TableThunk";
import { TableState } from "../../../../components/Table/typings";
import { getPriceTableData } from "../../../reducer/PriceList/thunk";


export class PriceListTableManager extends ThunkTableManager<TableState> {
  public onChangeParams = (params: TableState['params']) => (dispatch: AppThunkDispatch) => {
    dispatch(getPriceTableData(params));
  };
  
}

export const priceListTableManager = new PriceListTableManager({key: 'tablePriceList'});
