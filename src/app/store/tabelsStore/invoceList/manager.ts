import { AppThunkDispatch } from "../..";
import { ThunkTableManager } from "../../../../components/Table/TableThunk";
import { TableState } from "../../../../components/Table/typings";
import { getTableData } from "../../../reducer/InvoceList/thunk";


export class InvoceListTableManager extends ThunkTableManager<TableState> {
  public onChangeParams = (params: TableState['params']) => (dispatch: AppThunkDispatch) => {
    dispatch(getTableData(params));
  };
}

export const invoceListTableManager = new InvoceListTableManager({key: 'tableInvoceList'});
