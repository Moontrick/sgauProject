import {slice} from './reducer';

export const {
    setTableData,
} = slice.actions;

export * from './selector';

export default slice.reducer;
