import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./reducer";
import setUserinfoApi from "./setUserinfoApi";
import loginApi from "./loginApi";
import setGetmemberApi from "./getMemberApi";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["public"],
};

const sliceReducer = combineReducers({
  [setUserinfoApi.reducerPath]: setUserinfoApi.reducer,
  [loginApi.reducerPath]: loginApi.reducer,
  [setGetmemberApi.reducerPath]: setGetmemberApi.reducer,
  ...reducer,
});

const persistedReducer = persistReducer(persistConfig, sliceReducer);

const store = configureStore({
  reducer: persistedReducer,
  // middleware: (middle) => middle().concat([ loginApi.middleware, homeApi.middleware ])
  middleware: (middle) =>
    middle().concat([setUserinfoApi.middleware, loginApi.middleware, setGetmemberApi.middleware]),
});

const persistor = persistStore(store);

export { store, persistor };
