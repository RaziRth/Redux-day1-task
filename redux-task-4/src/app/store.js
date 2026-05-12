
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'; 

const loggerMiddleware = (store) => (next) => (action) => {
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('Updated State:', store.getState());
  return result;
};


const store = configureStore({
  reducer: {
    counter: counterReducer, 
  },
  devTools: true, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware), // Add middleware
});

export default store;