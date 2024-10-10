// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Pastikan path ini sesuai dengan struktur project kamu

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Definisikan tipe RootState
export type RootState = ReturnType<typeof store.getState>;

// Definisikan tipe Dispatch
export type AppDispatch = typeof store.dispatch;

export default store;
