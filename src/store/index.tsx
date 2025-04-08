import { combineReducers, configureStore } from '@reduxjs/toolkit';
import store from './store';

const rootReducer = combineReducers({
    themeConfig: store,
});

export default configureStore({
    reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
