

import { setTableData } from '.';
import { TableState } from '../../../components/Table/typings';
import { invoceListService } from '../../service/invoceList/invoceList';
import { priceListService } from '../../service/priceList/PriceListService';
import {AppThunkResult} from '../../store/index';
import { InvoceTableType } from '../../types/InvoceList/invoceListTypes';
import { hideLoading, showErrorModal, showLoading } from '../SettingStore';

export function getPriceTableData(params: TableState['params']): AppThunkResult {
    return async (dispatch) => {
        try {
          dispatch(showLoading())
          const data = await priceListService.getTable(params)
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