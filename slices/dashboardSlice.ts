import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashbaord",
  initialState: {
    availableBalance: 0,
    totalDeposited: 0,
    totalWithdrawn: 0,
    totalBorrowed: 0,
    graphData: [
      {
        investmentType: "CRYPTO",
        deposit: 0,
        profit: 0,
      },
      {
        investmentType: "STOCKS & ETFS",
        deposit: 0,
        profit: 0,
      },
      {
        investmentType: "MUTUAL FUNDS",
        deposit: 0,
        profit: 0,
      },
    ],
    loanGraphData: [
      {
        type: "Total Borrowed",
        amount: 0,
      },
      {
        type: "Total Paided",
        amount: 0,
      },
    ],
  },
  reducers: {
    setDashboardDetails(state, action) {
      state.availableBalance = action.payload.availableBalance;
      state.totalDeposited = action.payload.totalDeposited;
      state.totalWithdrawn = action.payload.totalWithdrawn;
      state.totalBorrowed = action.payload.totalBorrowed;
      state.graphData = action.payload.graphData;
      state.loanGraphData = action.payload.loanGraphData;
    },
  },
});

export const dashboardActions = dashboardSlice.actions;

export default dashboardSlice;
