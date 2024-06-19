import { AppState } from "../../store/index";

export const nameSelector = (state: AppState) => state.userInfo.name;
export const userAuthSelector = (state: AppState) => state.userInfo.isAuth;
