import { AppState } from "../../store/index";

export const nameSelector = (state: AppState) => state.userInfo.name;
// export const passwordSelector = (state: AppState) => state.userTable.password;
// export const navigationSelector = (state: AppState) => state.userTable.navigationPage;