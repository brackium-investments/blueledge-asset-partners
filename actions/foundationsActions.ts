/* eslint-disable @typescript-eslint/no-explicit-any */
import { donateToFoundation } from "@/services/foundationService";
import { Dispatch, ReactNode, SetStateAction } from "react";

export const donateToFoundationDispatch =
  (
    data: { address: string; amount: number },
    token: string,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    toastSuccess: any,
    toastError: any,
    iconSucess: ReactNode,
    iconError: ReactNode,
    reset: () => void
  ) =>
  async () => {
    setIsLoading(true);
    try {
      await donateToFoundation(data, token);
      toastSuccess("Thanks for Donating", iconSucess);
      reset();
      setIsLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toastError("An error occurred while donating", iconError);
      setIsLoading(false);
    }
  };
