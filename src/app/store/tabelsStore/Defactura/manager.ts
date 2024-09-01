import { AppThunkDispatch } from "../..";
import { ThunkTableManager } from "../../../../components/Table/TableThunk";
import { TableState } from "../../../../components/Table/typings";
import { getOrderTableData } from "../../../reducer/Defactura/thunk";


export class DefacturaListTableManager extends ThunkTableManager<TableState> {
  public onChangeParams = (params: TableState['params']) => (dispatch: AppThunkDispatch) => {
    dispatch(getOrderTableData(params));
  };
  
}

export const defacturaListTableManager = new DefacturaListTableManager({key: 'tableDefacturaList'});
