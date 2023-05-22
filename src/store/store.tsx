import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice'
import themeColorSlice from './slices/themeColorSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    theme: themeColorSlice,
    // comment: commentSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
