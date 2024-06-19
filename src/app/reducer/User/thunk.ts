import { setAuthUser } from '.';
import {AppThunkResult} from '../../store/index';
import { hideLoading, showErrorModal, showLoading } from '../SettingStore';

  export function getAuth(): AppThunkResult {
    return async (dispatch) => {
        try {
          dispatch(showLoading())
          dispatch(setAuthUser(true))
        } catch (error) {
          let erMessage = 'Ошибка';
          if (error instanceof Error) {
            erMessage = error.message
          }
          dispatch(showErrorModal({isOpen: true, errorMessage: {errorMessage: erMessage, code: 123}}))
        }finally {
          window.location.reload();
          dispatch(hideLoading());
        }
    };
    }