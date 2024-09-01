import {createSelector} from '@reduxjs/toolkit';
import { AppState } from '../..';


export const defacturaListTableParamsSearchTypeSelector = (state: AppState) => state.tableDefacturaList.params.searchType;