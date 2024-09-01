

import { DefacturaDataType } from '../../types/Defactura/DefacturaTypes';
import {initialState} from './state';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export const slice = createSlice({
  name: 'defacturaList',
  initialState,
  reducers: {
    setTableData: (state, action: PayloadAction<DefacturaDataType[]>) => {
      state.tableData = action.payload;
    },
    resetState: () => {
      return initialState;
    },
  },
});
