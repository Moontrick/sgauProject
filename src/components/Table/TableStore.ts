import TableManager from './TableManager';
import {TableState, ThunkAction} from './typings';

export abstract class ThunkTableManager<TS extends TableState = TableState> implements TableManager<TS> {
  public key: string;

  constructor(props: {key: string}) {
    this.key = props.key;
  }

  public actions = {
    resetParams: () => ({
      type: `[TABLE-${this.key}.PARAMS] reset`,
    }),
    changeParams: (payload: Partial<TS['params']>) => ({
      type: `[TABLE-${this.key}.PARAMS] change`,
      payload,
    }),
    changeVisual: (payload: Partial<TS['visual']>) => ({
      type: `[TABLE-${this.key}.VISUAL] change`,
      payload,
    }),
    resetVisual: () => ({
      type: `[TABLE-${this.key}.VISUAL] reset`,
    }),
  };

  public updateState = (newState: Partial<TS['params']>, fetch = true): ThunkAction => (dispatch, getState) => {
    const newParams = {...getState()[this.key].params, ...newState};
    dispatch(this.actions.changeParams(newParams));
    if (fetch) {
      this.onChangeParams(newParams)(dispatch, getState);
    }
  };

  public update(): ThunkAction {
    return (dispatch, getState) => {
      const params = getState()[this.key].params;

      this.onChangeParams(params)(dispatch, getState);
    };
  }

  public abstract onChangeParams(params: TS['params']): ThunkAction;

  public changeQuery(query: Partial<TS['params']['query']>): ThunkAction {
    return (dispatch) => {
      dispatch(this.updateState(Object.assign({query, page: 0})));
    };
  }

  public changePage(page: Partial<TS['params']['page']>): ThunkAction {
    return (dispatch) => {
      dispatch(this.updateState(Object.assign({page})));
    };
  }
  public changeSearchType(searchType: Partial<TS['params']['searchType']>): ThunkAction {
    return (dispatch) => {
      dispatch(this.updateState(Object.assign({searchType, page: 0})));
    };
  }
  public changeViewTable(viewTable: TS['params']['viewTable']): ThunkAction {
    return (dispatch) => {
      dispatch(this.updateState(Object.assign({viewTable}), false));
    };
  }

  public changeFilterTable(filter: Partial<TS['params']['filter']>): ThunkAction {
    return (dispatch) => {
      dispatch(this.updateState(Object.assign({filter, page: 0})));
    };
  }

  public changeSortTable(sort: Partial<TS['params']['sort']>): ThunkAction {
    return (dispatch) => {
      dispatch(this.updateState(Object.assign({sort})));
    };
  }

  public resetVisual(): ThunkAction {
    return (dispatch) => {
      dispatch(this.actions.resetVisual());
    };
  }

  public resetParams(): ThunkAction {
    return (dispatch) => {
      dispatch(this.actions.resetParams());
    };
  }

  public showLoading(loading: TS['visual']['loading']): ThunkAction {
    return (dispatch, getState) => {
      dispatch(this.actions.changeVisual({...getState()[this.key].visual, loading}));
    };
  }
}
