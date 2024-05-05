import {initialState} from './state';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export const slice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<any>) => {
      state.name = action.payload;
    },
    // setPassword: (state, action: PayloadAction<any>) => {
    //   state.password = action.payload;
    // },
    // setNavigation: (state, action: PayloadAction<any>) => {
    //   state.navigationPage = action.payload;
    // },
    resetState: () => {
      return initialState;
    },
  },
});
