import { loan } from "@/axios.config";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createLoan = async (data: any, token: string) => {
  return await loan.post("", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getLoans = async (token: string) => {
  return await loan.get("", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
