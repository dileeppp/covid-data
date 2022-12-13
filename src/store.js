import { configureStore } from "@reduxjs/toolkit";
import { casesReducer } from "./redux/reducer/reducer";
import thunk from "redux-thunk";

const rootReducer = {
  case: casesReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
