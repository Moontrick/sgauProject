
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { colums } from "../../../pages/InvoceList/components/Table/columns";

const defaultState = {
    params:{
        sort: '',
        query: '',
        page: 0,
        searchType: 'tovcod.contains',
    },
    
};
const tableOrderListReducer = createSlice({
    name: 'tableOrderList',
    initialState: defaultState,
    reducers: {
    setSearchType: (state, action: PayloadAction<string>) => {
        state.params.searchType = action.payload;
        },
    }
    
});
export const {setSearchType} = tableOrderListReducer.actions;
export default tableOrderListReducer.reducer;