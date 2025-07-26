/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  contactUs,
  registerInvestor,
  updateInfo,
  updateInvestorPassword,
  updateInvestorProfileImg,
} from "@/services/investorService";
import { investorActions } from "@/slices/investorSlice";
import { Dispatch, ReactNode, SetStateAction } from "react";

export const registerInvestorDispatch =
  (
    data: any,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    toastSuccess: any,
    toastError: any,
    iconSucess: ReactNode,
    iconError: ReactNode,
    reset: () => void
  ) =>
  async (dispatch: any) => {
    setIsLoading(true);
    try {
      await registerInvestor(data);
      setIsLoading(false);
      toastSuccess("Created successfully", iconSucess);
      reset();
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
      toastError(error.response.data.message, iconError);
    }
  };

export const updateInvestorDispatch =
  (
    data: any,
    token: string,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    toastSuccess: (msg: string, icon: ReactNode) => void,
    toastError: (msg: string, icon: ReactNode) => void,
    iconSucess: ReactNode,
    iconError: ReactNode,
    reset: () => void
  ) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type: "investor/setInvestorDetails";
    }) => void
  ) => {
    setIsLoading(true);
    try {
      const res = await updateInfo(data, token);

      dispatch(investorActions.setInvestorDetails(res.data.data));
      setIsLoading(false);
      toastSuccess("Updated successfully", iconSucess);
      reset();
    } catch (error) {
      setIsLoading(false);
      toastError("Something went wrong!", iconError);
    }
  };

export const updateInvestorProfileImageDispatch =
  (imgFile: any, token: string) =>
  async (
    dispatchFn: (arg0: {
      payload: any;
      type: "investor/setInvestorDetails";
    }) => void
  ) => {
    try {
      const res = await updateInvestorProfileImg(token, imgFile);

      dispatchFn(investorActions.setInvestorDetails(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

export const updateMyPasswordDispatch =
  (
    data: any,
    token: string,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    toastSuccess: (msg: string, icon: ReactNode) => void,
    toastError: (msg: string, icon: ReactNode) => void,
    iconSucess: ReactNode,
    iconError: ReactNode,
    reset: () => void,
    logout: () => void
  ) =>
  async () => {
    setIsLoading(true);
    try {
      await updateInvestorPassword(data, token);

      toastSuccess("Updated successfully", iconSucess);
      setIsLoading(false);
      reset();
      logout();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toastError("Something went wrong!", iconError);
    }
  };

export const contactUsDispatch =
  (
    data: any,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    toastSuccess: (msg: string, icon: ReactNode) => void,
    toastError: (msg: string, icon: ReactNode) => void,
    iconSucess: ReactNode,
    iconError: ReactNode,
    reset: () => void
  ) =>
  async () => {
    setIsLoading(true);
    try {
      await contactUs(data);

      toastSuccess("Sent successfully", iconSucess);
      setIsLoading(false);
      reset();
    } catch (error) {
      setIsLoading(false);
      toastError("Something went wrong!", iconError);
    }
  };
