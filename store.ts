import { configureStore } from "@reduxjs/toolkit";
import investorSlice from "./slices/investorSlice";
import authSlice from "./slices/authSlice";
import investmentSlice from "./slices/investmentSlice";
import loanSlice from "./slices/loanSlice";
import dashboardSlice from "./slices/dashboardSlice";

const store = configureStore({
  reducer: {
    investor: investorSlice.reducer,
    auth: authSlice.reducer,
    investment: investmentSlice.reducer,
    loan: loanSlice.reducer,
    dashboard: dashboardSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
