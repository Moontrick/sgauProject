

import { setTableData } from '.';
import { TableState } from '../../../components/Table/typings';
import { invoceListService } from '../../service/invoceList/invoceList';
import { orderListService } from '../../service/OrderListService/OrderListService';
import {AppThunkResult} from '../../store/index';
import { InvoceTableType } from '../../types/InvoceList/invoceListTypes';
import { hideLoading, showErrorModal, showLoading } from '../SettingStore';

export function getOrderTableData(params: TableState['params']): AppThunkResult {
    return async (dispatch) => {
        try {
          dispatch(showLoading())
          const data = await orderListService.getTable(params)
          dispatch(setTableData(data))
        } catch (error) {
          let erMessage = 'Ошибка';
          if (error instanceof Error) {
            erMessage = error.message
          }
          dispatch(showErrorModal({isOpen: true, errorMessage: {errorMessage: erMessage, code: 123}}))
        }finally {
          dispatch(hideLoading());
        }
    };
    }