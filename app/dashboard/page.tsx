"use client";
import { getDashboardDispatch } from "@/actions/dashboardAction";
import DashboardComp from "@/components/dashboard/DashboardComp";
import { useAppDispatch, useAppSelector } from "@/hooks/state-hook";
import React, { useEffect } from "react";

export default function Dashboard() {
  const { token } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDashboardDispatch(token));
  }, [dispatch, token]);

  return <DashboardComp />;
}
