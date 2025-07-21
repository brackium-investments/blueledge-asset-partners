/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const loanSlice = createSlice({
  name: "loan",
  initialState: {
    loanType: "",
    loans: [],
  },
  reducers: {
    setLoanType: (state, action) => {
      state.loanType = action.payload;
    },
    createLoan: (state: any, action: { payload: any }) => {
      if (action.payload) {
        state.loans.push(action.payload);

        localStorage.setItem("loans", JSON.stringify(state.loans));
      }
    },
    setLoansList: (state: any, action: any) => {
      state.loans = [...action.payload];
      localStorage.setItem("loans", JSON.stringify(action.payload));
    },
    updateLoanItem: (
      state: any,
      action: { payload: { id: string; loan: any } | any }
    ) => {
      const itemIndex = state.loans.findIndex(
        (item: any) => item._id === action.payload.id
      );
      state.loans[itemIndex] = action.payload.loan;
    },
  },
});

export const loanActions = loanSlice.actions;

export default loanSlice;
