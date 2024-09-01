
import { OrderListType } from '../../types/OrderList/OrderList';
import {initialState} from './state';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export const slice = createSlice({
  name: 'orderList',
  initialState,
  reducers: {
    setTableData: (state, action: PayloadAction<OrderListType[]>) => {
      state.tableData = action.payload;
    },
    resetState: () => {
      return initialState;
    },
  },
});
