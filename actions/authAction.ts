/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import calculateExpirationTime from "../utils/calculateExpirationTime";
import {
  forgotPassword,
  loginUser,
  resetPassword,
  sendRefreshToken,
} from "@/services/authService";
import { authActions } from "@/slices/authSlice";
// import { dashboardActions } from "@/slices/dashboardSlice";
import { investorActions } from "@/slices/investorSlice";
import { ReactNode } from "react";

let logoutTimer: any;

export const userLoginDispatch =
  (
    userData: { email: string; password: string },
    setIsLoading: Function,
    toastSuccess: any,
    toastError: any,
    iconSucess: ReactNode,
    iconError: ReactNode,
    reset: Function
  ) =>
  async (dispatch: Function) => {
    setIsLoading(true);
    try {
      const res = await loginUser(userData);

      const { accessToken, refreshToken, user } = res.data.data;

      console.log(res);

      //  dispatch auth to store token, user and investments

      // login expires an hour
      const expirationTime = new Date(new Date().getTime() + 3600 * 1000);

      // calculating the remaining time
      const remainingTime = calculateExpirationTime(
        expirationTime.toISOString()
      );

      // setting a logout timer as soon as one logs in
      logoutTimer = setTimeout(async () => {
        dispatch(authActions.autoLogoutHandler());
        // homeRoute();
      }, remainingTime);

      dispatch(
        authActions.setUserTokens({
          accessToken,
          refreshToken,
          expirationTime: expirationTime.toISOString(),
        })
      );

      dispatch(investorActions.setInvestorDetails(user));

      setIsLoading(false);
      toastSuccess("Login successful", iconSucess);

      reset();
    } catch (error: any) {
      setIsLoading(false);
      toastError(error.response.data.message, iconError);
    }
  };

export const userLogout = () => {
  return (dispatch: any) => {
    dispatch(authActions.logoutHandler({ logoutTimer }));
  };
};

// autologout when page is refreshed
export const autoLogout = (tokenDuration: any, navToHome: Function) => {
  console.log("auto", tokenDuration);

  return (dispatch: any) => {
    logoutTimer = setTimeout(async () => {
      dispatch(authActions.autoLogoutHandler());
      navToHome();
    }, tokenDuration);
  };
};

export const autoLogin =
  (tokenDuration: any, refreshToken: string) => async (dispatch: Function) => {
    if (tokenDuration > 6000 && tokenDuration <= 60000) {
      const expirationTime = new Date(new Date().getTime() + 3600 * 1000);
      // User is still active
      const res = await sendRefreshToken(refreshToken);

      const { accessToken: newToken, refreshToken: newRefreshToken } =
        res.data.data;

      dispatch(
        authActions.setUserTokens({
          accessToken: newToken,
          refreshToken: newRefreshToken,
          expirationTime: expirationTime.toISOString(),
        })
      );
    }
  };

export const forgotPasswordDispatch =
  (
    email: string,
    setIsLoading: Function,
    toastSuccess: any,
    toastError: any,
    iconSucess: ReactNode,
    iconError: ReactNode,
    reset: Function
  ) =>
  async (dispatch: Function) => {
    setIsLoading(true);
    try {
      const res = await forgotPassword(email);
      console.log(res);
      toastSuccess("Email sent successfully", iconSucess);
      reset();
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      toastError(error.response.data.message, iconError);
    }
  };

export const resetPasswordDispatch =
  (
    data: { otp: number; password: string },
    setIsLoading: Function,
    toastSuccess: any,
    toastError: any,
    iconSucess: ReactNode,
    iconError: ReactNode,
    reset: Function
  ) =>
  async (dispatch: Function) => {
    setIsLoading(true);
    try {
      const res = await resetPassword(data);
      console.log(res);
      toastSuccess("Password reset successful", iconSucess);
      reset();
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      toastError(error.response.data.message, iconError);
    }
  };
