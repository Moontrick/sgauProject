import {slice} from './reducer';

export const {
    setName,
} = slice.actions;

export * from './selector';

export default slice.reducer;
