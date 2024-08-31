import {createSelector} from '@reduxjs/toolkit';
import { AppState } from '../..';


// export const invoceListTableParamsSelector = ({tableInvoceList}: AppState) => tableInvoceList.params;
// export const invoceListTableSearchTypeSelector = createSelector(
//     invoceListTableParamsSelector,
//   (params) => params.searchType,
// );

export const invoceListTableParamsSearchTypeSelector = (state: AppState) => state.tableInvoceList.params.searchType;