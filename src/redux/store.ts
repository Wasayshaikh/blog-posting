import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from './slices/AuthSlice'
import { persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";
import persistStore from "redux-persist/es/persistStore";



const persistConfig =  {
  key:"root",
  storage:localStorage,
  whitelist:['auth']
}
const rootReducer = combineReducers({
  auth:authSlice,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
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