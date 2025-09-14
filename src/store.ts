import { configureStore } from '@reduxjs/toolkit';
import ecrSlice from './slices/ecrSlice';

export type RootState = ReturnType<typeof ecrSlice>;
export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: ecrSlice,
});

export default store;
