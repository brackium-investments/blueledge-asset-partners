/* eslint-disable @typescript-eslint/no-explicit-any */
import { createInvestment, getInvestments } from "@/services/investmentService";
import { investmentActions } from "@/slices/investmentSlice";
import { Dispatch, ReactNode, SetStateAction } from "react";

export const createInvestmentDispatch =
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
    dispatchFn: (arg0: {
      payload: any;
      type: "investment/createInvestment";
    }) => void
  ) => {
    setIsLoading(true);
    try {
      const res = await createInvestment(data, token);
      console.log(res);

      dispatchFn(investmentActions.createInvestment(res.data.data));

      toastSuccess("Investment created successfully", iconSucess);
      setIsLoading(false);
      reset();
    } catch (error) {
      console.log(error);
      toastError("Something went wrong!", iconError);
      setIsLoading(false);
    }
  };

export const getInvestmentsDispatch =
  (token: string, setIsLoading: Dispatch<SetStateAction<boolean>>) =>
  async (
    dispatchFn: (
      arg0:
        | { payload: undefined; type: "investment/setInvestmentsList" }
        | { payload: any; type: "investment/setInvestmentsList" }
    ) => void
  ) => {
    setIsLoading(true);
    try {
      const res = await getInvestments(token);
      console.log(res);
      dispatchFn(investmentActions.setInvestmentsList(res.data.data));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
