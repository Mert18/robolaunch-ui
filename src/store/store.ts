import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './features/menu/menuSlice';
import fleetReducer from './features/fleet/fleetSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { pokemonApi } from './services/testings';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* Data must be persisted in order not to lose them on page refresh. */
/* Redux-persist basically saves the data into localStorage so the data is not lost on refresh. */
const persistConfig = {
  key: 'fleet',
  version: 1,
  storage
};

const persistedReducerFleet = persistReducer<any, any>(persistConfig, fleetReducer);

const store = configureStore({
  reducer: {
    menu: menuReducer,
    fleet: persistedReducerFleet,
    [pokemonApi.reducerPath]: pokemonApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(pokemonApi.middleware)
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
