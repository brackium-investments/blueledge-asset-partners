import { subscriber } from "@/axios.config";

export const createSubscriber = async (email: string) => {
  return await subscriber.post("", { email });
};
