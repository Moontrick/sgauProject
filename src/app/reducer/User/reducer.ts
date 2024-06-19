import { setValueToStorage } from '../../../components/utils';
import {initialState} from './state';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export const slice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<any>) => {
      state.name = action.payload;
    },
    setAuthUser: (state, action: PayloadAction<boolean>) => {
      setValueToStorage('accessToken', action.payload);
      state.isAuth = action.payload;
    },
    resetState: () => {
      return initialState;
    },
  },
});
