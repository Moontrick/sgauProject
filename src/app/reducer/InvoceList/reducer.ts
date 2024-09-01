import { InvoceTableType } from '../../types/InvoceList/invoceListTypes';
import {initialState} from './state';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export const slice = createSlice({
  name: 'invoceList',
  initialState,
  reducers: { 
    setTableData: (state, action: PayloadAction<InvoceTableType[]>) => {
      state.tableData = action.payload;
    },
    setOpenModal: (state, action: PayloadAction<boolean>) => {
      state.openModal = action.payload;
    },
    resetState: () => {
      return initialState;
    },
  },
});
