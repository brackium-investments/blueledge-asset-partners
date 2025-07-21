"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/state-hook";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { autoLogout } from "@/actions/authAction";

import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

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
      <TawkMessengerReact
        propertyId="687e4a8b0c2df81912a84b3c"
        widgetId="1j0ml6cl0"
      />
    </>
  );
};

export default AppWrapper;
