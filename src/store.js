
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import RootReducer from "./RootReducer";

const store = configureStore({
  reducer: RootReducer,
  ...RootReducer,
  middleware: [thunk],
});

export default store;
