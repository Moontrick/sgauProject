import { AppThunkDispatch } from "../..";
import { ThunkTableManager } from "../../../../components/Table/TableThunk";
import { TableState } from "../../../../components/Table/typings";
import { getOrderTableData } from "../../../reducer/OrderList/thunk";


export class OrderListTableManager extends ThunkTableManager<TableState> {
  public onChangeParams = (params: TableState['params']) => (dispatch: AppThunkDispatch) => {
    dispatch(getOrderTableData(params));
  };
  
}

export const orderListTableManager = new OrderListTableManager({key: 'tableOrderList'});
