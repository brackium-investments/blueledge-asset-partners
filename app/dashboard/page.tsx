"use client";
import { getDashboardDispatch } from "@/actions/dashboardAction";
import DashboardComp from "@/components/dashboard/DashboardComp";
import { useAppDispatch, useAppSelector } from "@/hooks/state-hook";
import { investorActions } from "@/slices/investorSlice";
import React, { useCallback, useEffect } from "react";

export default function Dashboard() {
  const { token } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const getStoredInvestorDetails = useCallback(() => {
    if (typeof window !== "undefined") {
      const details = localStorage.getItem("investorDetails");
      const detailObj = JSON.parse(details!);
      dispatch(investorActions.setInvestorDetails(detailObj));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDashboardDispatch(token));
    getStoredInvestorDetails();
    // dispatch(get)
  }, [dispatch, getStoredInvestorDetails, token]);

  return <DashboardComp />;
}
