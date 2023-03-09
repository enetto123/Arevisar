import { configureStore } from '@reduxjs/toolkit';
//import conteoReducer from '../features/counter';
import cosasReducer from '../features/cosas';

export const store = configureStore({
  reducer: {
    //conteo: conteoReducer,
    cosas: cosasReducer,
  },
});
