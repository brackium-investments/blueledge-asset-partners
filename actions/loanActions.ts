/* eslint-disable @typescript-eslint/no-explicit-any */
import { createLoan, getLoans } from "@/services/loanService";
import { loanActions } from "@/slices/loanSlice";
import { Dispatch, ReactNode, SetStateAction } from "react";

export const createLoanDispatch =
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
    dispatchFn: (arg0: { payload: any; type: "loan/createLoan" }) => void
  ) => {
    setIsLoading(true);
    try {
      const res = await createLoan(data, token);
      console.log(res);

      dispatchFn(loanActions.createLoan(res.data.data));

      toastSuccess("Loan application successful", iconSucess);
      setIsLoading(false);
      reset();
    } catch (error: any) {
      console.log(error);
      toastError(error.response.data.message, iconError);
      setIsLoading(false);
    }
  };

export const getLoansDispatch =
  (token: string, setIsLoading: Dispatch<SetStateAction<boolean>>) =>
  async (
    dispatchFn: (
      arg0:
        | { payload: undefined; type: "loan/setLoansList" }
        | { payload: any; type: "loan/setLoansList" }
    ) => void
  ) => {
    setIsLoading(true);
    try {
      const res = await getLoans(token);
      console.log(res);
      dispatchFn(loanActions.setLoansList(res.data.data));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
