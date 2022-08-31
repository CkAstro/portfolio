import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: { id: React.ReactNode | string | null } = {
   id: null,
};

export const itemEnabler = createSlice({
   name: 'itemEnabler',
   initialState,
   reducers: {
      enable: (state, action: PayloadAction<React.ReactNode | string | null>) => ({
         id: action.payload,
      }),
      reset: () => ({ ...initialState }),
   },
});

export default itemEnabler.reducer;
