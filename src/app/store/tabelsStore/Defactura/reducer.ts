
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { colums } from "../../../pages/InvoceList/components/Table/columns";

const defaultState = {
    params:{
        sort: '',
        query: '',
        page: 0,
        searchType: 'docnumber.contains',
    },
    
};
const tableDefacturaListReducer = createSlice({
    name: 'tableDefacturaList',
    initialState: defaultState,
    reducers: {
    setSearchType: (state, action: PayloadAction<string>) => {
        state.params.searchType = action.payload;
        },
    }
    
});
export const {setSearchType} = tableDefacturaListReducer.actions;
export default tableDefacturaListReducer.reducer;