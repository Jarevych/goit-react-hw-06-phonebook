import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './ContactSlice';
// import { filterReducer } from './filterSlice';

import {
  persistStore,
//   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import persistReducer from 'redux-persist/es/persistReducer';



export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    // filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);