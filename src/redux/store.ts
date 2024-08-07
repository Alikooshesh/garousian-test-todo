// store.js
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunk),
  });

export default store;

export type IRootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;