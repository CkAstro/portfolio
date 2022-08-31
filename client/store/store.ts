import { combineReducers, configureStore } from '@reduxjs/toolkit';
import itemEnabler from './itemEnabler';
import mouseLocation from './mouseLocation';

const reducer = combineReducers({
   itemEnabler,
   mouseLocation,
});

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
