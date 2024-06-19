
import {ErrorModalType, initialState} from './state';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export const slice = createSlice({
  name: 'settingStore',
  initialState,
  reducers: {
    showErrorModal:(state, action: PayloadAction<{isOpen: boolean, errorMessage: ErrorModalType}>) => {
      state.errorModal = {
        isErrorOpen: action.payload.isOpen,
        errorInfo: action.payload.errorMessage
      }
    },
    showLoading: (state) => {
      state.showLoading += 1;
    },
    hideLoading: (state) => {
      state.showLoading -= 1;
    },
    resetState: () => {
      return initialState;
    },
  },
});
