import {AnyFunc, TableState} from './typings';

interface TableManager<TS extends TableState = TableState> {
  update(): AnyFunc;

  onChangeParams(params: TS['params']): AnyFunc;

  changeQuery(query: Partial<TS['params']['query']>): AnyFunc;

  changeViewTable(viewTable: Partial<TS['params']['viewTable']>): AnyFunc;

  changeFilterTable(filter: Partial<TS['params']['filter']>): AnyFunc;

  changeSortTable(sort: Partial<TS['params']['sort']>): AnyFunc;

  resetVisual(callback?: (params: TS['visual']) => void): AnyFunc;
  showLoading(loading: TS['visual']['loading']): AnyFunc;
}

export default TableManager;

