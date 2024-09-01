import {createSelector} from '@reduxjs/toolkit';
import { AppState } from '../..';


export const orderListTableParamsSearchTypeSelector = (state: AppState) => state.tableOrderList.params.searchType;