import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashbaord",
  initialState: {
    availableBalance: 0,
    totalDeposited: 0,
    totalWithdrawn: 0,
    graphData: [
      {
        investmentType: "CRYPTO",
        deposit: 0,
        profit: 0,
      },
      {
        investmentType: "STOCKS & ETFs",
        deposit: 0,
        profit: 0,
      },
      {
        investmentType: "MUTUAL FUNDS",
        deposit: 0,
        profit: 0,
      },
    ],
  },
  reducers: {
    setDashboardDetails(state, action) {
      state.availableBalance = action.payload.availableBalance;
      state.totalDeposited = action.payload.totalDeposited;
      state.totalWithdrawn = action.payload.totalWithdrawn;
      state.graphData = action.payload.graphData;
    },
  },
});

export const dashboardActions = dashboardSlice.actions;

export default dashboardSlice;
