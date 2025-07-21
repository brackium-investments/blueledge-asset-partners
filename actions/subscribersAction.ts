import { createSubscriber } from "@/services/subscriberService";
import { Dispatch, ReactNode, SetStateAction } from "react";

export const createSubscriberDispatch =
  (
    email: string,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    toastSuccess: (msg: string, icon: ReactNode) => void,
    toastError: (msg: string, icon: ReactNode) => void,
    iconSuccess: ReactNode,
    iconError: ReactNode,
    reset: () => void
  ) =>
  async () => {
    setIsLoading(true);
    try {
      await createSubscriber(email);
      setIsLoading(false);
      toastSuccess("Subscribed successfully", iconSuccess);
      reset();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toastError("Something went wrong!", iconError);
    }
  };
