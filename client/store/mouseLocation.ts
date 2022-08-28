import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { MouseLocation } from '@/types';

const initialState: MouseLocation = {
   x: 200,
   y: window.innerHeight - 200,
   isActive: false,
};

export const mouseLocation = createSlice({
   name: 'mouseLocation',
   initialState,
   reducers: {
      update: (state, action: PayloadAction<MouseLocation>) => ({ ...state, ...action.payload }),
      reset: () => ({ ...initialState }),
   },
});

export default mouseLocation.reducer;
