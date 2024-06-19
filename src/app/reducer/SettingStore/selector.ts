import { AppState } from "../../store/index";

export const isShowLoading = (state: AppState) => state.settingStore.showLoading;
export const isErrorOpen = (state: AppState) => state.settingStore.errorModal;
