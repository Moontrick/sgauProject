
import {Dispatch, SetStateAction} from 'react';
import { TableColumn } from './types';

export interface SortItem {
  label: string;
  method: string;
}

export interface ISortContext {
  visible: boolean;
  onClose: () => void;
  setTab: (v: {tab: 0 | 1; edit?: SortItem}) => void;
  sort: SortItem[];
  setSort: (v: SortItem[]) => void;
  header: TableColumn<any>[];
  initHint: boolean;
  setInitHint: Dispatch<SetStateAction<boolean>>;
}
