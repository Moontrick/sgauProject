export type ErrorModalType = {
  errorMessage: string;
  code: number;
}

export interface settingState {
    showLoading: number;
    errorModal: {
      isErrorOpen: boolean;
      errorInfo: ErrorModalType;
    }
  }
    
export const initialState: settingState = {
    showLoading: 0,
    errorModal: {
      isErrorOpen: false,
      errorInfo: {
        errorMessage: '',
        code: 0
      }
    }
};
