import {slice} from './reducer';

export const {
    setName,
    setAuthUser,
} = slice.actions;

export * from './selector';

export default slice.reducer;
