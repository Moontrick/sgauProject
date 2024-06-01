
import { createSlice } from "@reduxjs/toolkit";
import { colums } from "../../../pages/InvoceList/components/Table/columns";



const defaultState = {
    params:{
        sort: '',
        query: '',
        page: 0,
    }
};
const tableInvoceListReducer = createSlice({
    name: 'tableInvoceList',
    initialState: defaultState,
    reducers: {}
});
export default tableInvoceListReducer.reducer;