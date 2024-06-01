
import {AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import { TableColumn } from './types';
import { SortItem } from './TableSort';

export type TableStateParams<P extends Record<string, unknown> = Record<string, unknown>> = {
  viewTable: TableColumn<any>[];
  sort: SortItem[];
  query: string;
  page: number;
} & P;

export interface TableStateVisual {
  loading: boolean;
}

export interface TableState<P extends Record<string, unknown> = Record<string, unknown>> {
  params: TableStateParams<P>;
  visual: TableStateVisual;
}

export type AnyFunc = (...args: any[]) => void;
export type ManagerThunkDispatch = ThunkDispatch<any, any, AnyAction>;
export type ThunkAction = (dispatch: (...args: any[]) => any, getState: () => any) => void;
export interface ManagerAction<P extends TableStateParams | TableStateVisual> {
  type: string;
  payload?: P;
}
