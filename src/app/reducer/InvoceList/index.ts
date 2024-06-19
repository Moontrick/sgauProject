import {slice} from './reducer';

export const {
    setTableData,
    setOpenModal,
} = slice.actions;

export * from './selector';

export default slice.reducer;
