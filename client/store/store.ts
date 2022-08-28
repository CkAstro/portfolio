import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mouseLocation from './mouseLocation';

const reducer = combineReducers({
   mouseLocation,
});

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
