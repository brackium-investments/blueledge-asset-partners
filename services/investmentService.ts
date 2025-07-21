import { investment } from "@/axios.config";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createInvestment = async (data: any, token: string) => {
  return await investment.post("", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getInvestments = async (token: string) => {
  return await investment.get("", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
