import {createSelector} from '@reduxjs/toolkit';
import { AppState } from '../..';


export const invoceListTableParamsSearchTypeSelector = (state: AppState) => state.tablePriceList.params.searchType;