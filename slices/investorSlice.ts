/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice } from "@reduxjs/toolkit";

const investorSlice = createSlice({
  name: "investor",
  initialState: {
    details: {
      id: "",
      name: "",
      email: "",
      image: "",
      address: "",
      phoneNumber: "",
      referrals: [],
    },
  },
  reducers: {
    setInvestorDetails(state: any, action: { payload: any }) {
      if (!action.payload) {
        return;
      }
      state.details.name = action.payload.fullname;
      state.details.email = action.payload.email;
      state.details.id = action.payload.id;
      state.details.address = action.payload.address;
      state.details.phoneNumber = action.payload.phoneNumber;
      state.details.image = action.payload.image;
      state.details.referrals = action.payload.referrals;
      localStorage.setItem("investorDetails", JSON.stringify(action.payload));
    },

    // logout handler
    logoutHandler(state: any) {
      state.details.name = "";
      state.details.email = "";
      state.details.id = "";
      state.details.address = "";
      state.details.phoneNumber = "";
      state.details.image = "";
      state.details.referrals = [];
      emptyLocalStorage();

      // if (action.payload.logoutTimer) {
      //   clearTimeout(action.payload.logoutTimer);
      // }
    },
    // auto logout
    autoLogoutHandler(state: any) {
      state.details.name = "";
      state.details.email = "";
      state.details.id = "";
      state.details.address = "";
      state.details.phoneNumber = "";
      state.details.image = "";
      state.details.referrals = [];
      emptyLocalStorage();
    },
    updateProfileImage(state: any, action) {
      state.details.image = action.payload;
    },
  },
});

function emptyLocalStorage() {
  localStorage.removeItem("investorDetails");
  localStorage.removeItem("investments");
}

export const investorActions = investorSlice.actions;

export default investorSlice;
