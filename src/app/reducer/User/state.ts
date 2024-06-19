import { getValueOnStorage } from "../../../components/utils";

export interface userTable {
  name: string;
  isAuth: boolean;
}
const userData = getValueOnStorage('accessToken');
  export const initialState: userTable = {
    name: '',
    isAuth: userData,
  };
  