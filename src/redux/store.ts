import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from './slices/AuthSlice'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { expireTransform } from "./slices/persistTransform";


export type RootReducerType = ReturnType<typeof rootReducer>;

const persistConfig =  {
  key:"root",
  storage,
  whitelist:['auth'],
  transforms:[expireTransform]
  
}
const rootReducer = combineReducers({
  auth:authSlice,
})

const persistedReducer = persistReducer<RootReducerType>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
})

const persistor = persistStore(store);

export default persistor;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;