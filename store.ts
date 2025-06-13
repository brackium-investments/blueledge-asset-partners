import { configureStore } from "@reduxjs/toolkit";
import investorSlice from "./slices/investorSlice";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    investor: investorSlice.reducer,
    auth:authSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
