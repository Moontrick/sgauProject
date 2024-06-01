import * as reducers from '../reducer';
import * as tableReudcer from '../store/tabelsStore';
import {Action, combineReducers, configureStore} from '@reduxjs/toolkit';
import {createSelectorHook, useDispatch} from 'react-redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import { TableState } from '../../components/Table/typings';
import { TableColumn } from '../../components/Table/types';

export const rootReducer = combineReducers({
  ...reducers,
  ...tableReudcer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
    });
  },
});

export type AppStore = typeof store;

export type AppState = ReturnType<typeof rootReducer>;
type AppExtraArg = undefined;
export type AppThunkResult<R = Promise<void>> = ThunkAction<R, AppState, AppExtraArg, Action<string>>;
export type ThunkResult<R = void> = ThunkAction<R, AppState, AppExtraArg, Action<string>>;
export type AppThunkDispatch = ThunkDispatch<AppState, AppExtraArg, Action<string>>;

export const useAppDispatch = (): AppThunkDispatch => useDispatch<AppThunkDispatch>();
export const useSelector = createSelectorHook();

export const managerSelector = (key: string) => (state: {[key: string]: TableState}) => state[key];
