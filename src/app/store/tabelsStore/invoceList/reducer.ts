
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { colums } from "../../../pages/InvoceList/components/Table/columns";

const defaultState = {
    params:{
        sort: '',
        query: '',
        page: 0,
        searchType: 'nameOfItem.contains',
    },
    
};
const tableInvoceListReducer = createSlice({
    name: 'tableInvoceList',
    initialState: defaultState,
    reducers: {
    setSearchType: (state, action: PayloadAction<string>) => {
        state.params.searchType = action.payload;
        },
    }
    
});
export const {setSearchType} = tableInvoceListReducer.actions;
export default tableInvoceListReducer.reducer;