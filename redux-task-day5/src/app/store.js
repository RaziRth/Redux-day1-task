// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),

  devTools: true,
});

export default store;