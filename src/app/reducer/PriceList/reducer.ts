
import { PriceListTableType } from '../../types/PriceList/types';
import {initialState} from './state';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export const slice = createSlice({
  name: 'priceList',
  initialState,
  reducers: {
    setTableData: (state, action: PayloadAction<PriceListTableType[]>) => {
      state.tableData = action.payload;
    },
    resetState: () => {
      return initialState;
    },
  },
});
