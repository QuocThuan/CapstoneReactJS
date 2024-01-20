import { configureStore } from "@reduxjs/toolkit";
import UserReducers from "./Reducers/UserReducers";

export const store = configureStore({
  reducer: {
    hoTen: () => {
      return "Laika";
    },
    userReducers: UserReducers,
  },
});
