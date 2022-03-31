import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';

let initialState: string | null = '';

export const authSlice = createSlice({
  name: 'jwt',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    set_jwt: (state, action: PayloadAction<string>) => {
      state = action.payload;
      /* Save jwt in localStorage */
      SecureStore.setItemAsync('jwt', action.payload);
      return state;
    },
  },
});
export const { set_jwt } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
