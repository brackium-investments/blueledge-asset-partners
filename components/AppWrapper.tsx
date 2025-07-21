"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/state-hook";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { autoLogout } from "@/actions/authAction";

const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  const dispatchFn = useAppDispatch();

  const { token, isLoggedIn, remainingTime } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isLoggedIn && token) {
      router.replace(`/dashboard`);
    } else {
      router.replace("/");
    }
  }, [token, isLoggedIn, router]);

  useEffect(() => {
    if (remainingTime) {
      dispatchFn(autoLogout(remainingTime));
    }
  }, [dispatchFn, remainingTime]);

  return (
    <>
      <Header />
      {children}
      <Footer />
      <ToastContainer />
    </>
  );
};

export default AppWrapper;
