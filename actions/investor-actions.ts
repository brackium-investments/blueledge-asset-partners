/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import calculateExpirationTime from "@/utils/calculateExpirationTime";

// import { investmentActions } from '@/slices/investmentSlice';
import { investorActions } from "@/slices/investorSlice";
import {
  forgotPasswordService,
  getInvestorService,
  loginInvestor,
  registerInvestor,
  resetPasswordService,
  updateInfo,
  updateInvestorProfileImg,
  updateMyPassword,
} from "@/services/investorService";

let logoutTimer: any;

export const registerInvestorDispatch =
  (
    data: any,
    setIsLoading: Function,
    toastSuccess: any,
    toastError: any,
    successIcon: any,
    errorIcon: any,
    resetFunc: Function
  ) =>
  async () => {
    setIsLoading(true);
    try {
      const res = await registerInvestor(data);
      console.log(res);
      toastSuccess("Successful!", successIcon);
      resetFunc();
      setIsLoading(false);
    } catch (err: any) {
      console.log(err);
      toastError(err.response.data.message, errorIcon);
      setIsLoading(false);
    }
  };

export const loginInvestorDispatch =
  (
    data: any,
    setIsLoading: Function,
    toastSuccess: any,
    toastError: any,
    successIcon: any,
    errorIcon: any,
    resetFunc: Function
  ) =>
  async (dispatch: (arg0: any) => void) => {
    setIsLoading(true);
    try {
      const res = await loginInvestor(data);
      const {
        name,
        email,
        _id: id,
        phoneNumber,
        address,
        image,
        referrals,
        investments,
      } = res.data.data.investor;

      // login expires an hour
      const expirationTime = new Date(new Date().getTime() + 3600 * 1000);

      // calculating the remaining time
      const remainingTime = calculateExpirationTime(
        expirationTime.toISOString()
      );
      toastSuccess("Login Successful!", successIcon);
      dispatch(
        investorActions.setInvestorToken({
          token: res.data.token,
          expirationTime: expirationTime.toISOString(),
        })
      );

      dispatch(
        investorActions.setInvestorDetails({
          id,
          name,
          email,
          phoneNumber,
          address,
          image: image ?? "",
          referrals: referrals ?? [],
        })
      );
      resetFunc();

      // dispatch(investmentActions.setInvestmentsList(investments));

      // setting a logout timer as soon as one logs in
      logoutTimer = setTimeout(() => {
        dispatch(investorActions.autoLogoutHandler());
      }, remainingTime);

      setIsLoading(false);
    } catch (err: any) {
      console.log(err);
      toastError(err.message ?? err.response.data.message, errorIcon);
      setIsLoading(false);
    }
  };

export const userLogout = () => {
  return (dispatch: any) => {
    dispatch(investorActions.logoutHandler({ logoutTimer }));
  };
};

// autologout when page is refreshed
export const autoLogout = (tokenDuration: any) => {
  return (dispatch: any) => {
    logoutTimer = setTimeout(() => {
      dispatch(investorActions.autoLogoutHandler());
    }, tokenDuration);
  };
};

export const forgotPasswordDispatch =
  (
    data: any,
    setIsLoading: Function,
    toastSuccess: any,
    toastError: any,
    successIcon: any,
    errorIcon: any,
    resetFunc: Function
  ) =>
  async () => {
    setIsLoading(true);
    try {
      const res = await forgotPasswordService(data);

      console.log(res);

      toastSuccess("Email Sent!", successIcon);
      resetFunc();
      setIsLoading(false);
    } catch (err: any) {
      console.log(err);
      toastError(err.response.data.message, errorIcon);
      setIsLoading(false);
    }
  };

export const resetPasswordDispatch =
  (
    data: any,
    token: string,
    setIsLoading: Function,
    toastSuccess: any,
    toastError: any,
    successIcon: any,
    errorIcon: any,
    resetFunc: Function
  ) =>
  async () => {
    setIsLoading(true);
    try {
      const res = await resetPasswordService(data, token);

      console.log(res);

      toastSuccess("Successful!", successIcon);
      resetFunc();
      setIsLoading(false);
    } catch (err: any) {
      console.log(err);
      toastError(err.response.data.message, errorIcon);
      setIsLoading(false);
    }
  };

export const updateMyPasswordDispatch =
  (
    data: {
      passwordCurrent: string;
      newPassword: string;
      confirmNewPassword: string;
    },
    jwtToken: string,
    setIsLoading: Function,
    toastSuccess: any,
    toastError: any,
    iconSuccess: any,
    iconError: any,
    resetForm: Function,
    logoutHandler: Function
  ) =>
  async (dispatch: any) => {
    setIsLoading(true);
    try {
      const res = await updateMyPassword(data, jwtToken);

      console.log(res);
      setIsLoading(false);
      toastSuccess("Password updated successfully!", iconSuccess);
      resetForm();
      logoutHandler();
    } catch (err: any) {
      setIsLoading(false);
      toastError(err.response.data.message, iconError);
    }
  };

export const updateInfoDispatch =
  (
    data: any,
    jwtToken: string,
    setIsLoading: Function,
    toastSuccess: any,
    toastError: any,
    iconSuccess: any,
    iconError: any,
    resetForm: Function
  ) =>
  async (dispatch: any) => {
    setIsLoading(true);
    try {
      const res = await updateInfo(data, jwtToken);
      const {
        name,
        email,
        _id: id,
        phoneNumber,
        address,
      } = res.data.data.investor;
      setIsLoading(false);
      dispatch(
        investorActions.setInvestorDetails({
          id,
          name,
          email,
          phoneNumber,
          address,
        })
      );
      setIsLoading(false);
      toastSuccess("Updated successfully!", iconSuccess);
      resetForm();
    } catch (err: any) {
      setIsLoading(false);
      toastError(err.response.data.message, iconError);
    }
  };

export const getInvestorDispatch =
  (investorId: string, jwtToken: string) => async (dispatch: any) => {
    try {
      const res = await getInvestorService(investorId, jwtToken);
      const {
        name,
        email,
        id,
        phoneNumber,
        address,
        shareholding,
        image,
        referrals,
      } = res.data.data.doc;

      dispatch(
        investorActions.setInvestorDetails({
          id,
          name,
          email,
          phoneNumber,
          address,
          shareholding,
          image,
          referrals,
        })
      );
    } catch (err) {
      // console.log(err);
    }
  };

export const updateInvestorProfileImgDispatch =
  (jwtToken: string, imgFile: any) => async (dispatch: any) => {
    try {
      const res = await updateInvestorProfileImg(jwtToken, imgFile);
      dispatch(investorActions.updateProfileImage(res.data.data.image));
    } catch (err) {
      // console.log(err);
    }
  };
