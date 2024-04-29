import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createReducer } from 'redux-orm';
import orm from './orm';
import stateReducer from "./reducers/stateReducer";

const ormReducer = createReducer(orm);

const rootReducer = combineReducers({
    orm: ormReducer,
    State:stateReducer
});

const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch
export default store;
