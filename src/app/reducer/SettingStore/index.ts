import {slice} from './reducer';

export const {
    showLoading,
    showErrorModal,
    hideLoading
} = slice.actions;

export * from './selector';

export default slice.reducer;
