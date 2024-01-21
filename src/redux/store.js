import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import UserReducers from "./Reducers/UserReducers";


export const store = configureStore({
  reducer: {
    CartSlice,
    userReducers: UserReducers,
  },
});
