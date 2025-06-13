/* eslint-disable @typescript-eslint/no-explicit-any */
import { user } from "@/axios.config";

export const registerInvestor = async (data: any) => {
  return await user.post("/investors", data);
};

export const loginInvestor = async (data: any) => {
  return await user.post("/investors/login", data);
};

export const forgotPasswordService = async (data: any) => {
  return await user.post("/investors/forgot-password", data);
};

export const resetPasswordService = async (data: any, token: string) => {
  return await user.post(`/investors/reset-password/${token}`, data);
};

export const updateMyPassword = async (data: any, jwtToken: string) => {
  return await user.patch("/investors/updateMyPassword", data, {
    headers: {
      Authorization: "Bearer " + jwtToken,
    },
  });
};

export const updateInfo = async (data: any, jwtToken: string) => {
  return await user.patch(`/investors/updateMe`, data, {
    headers: {
      Authorization: "Bearer " + jwtToken,
    },
  });
};

export const getInvestorService = async (
  investorId: string,
  jwtToken: string
) => {
  return await user.get(`/investors/${investorId}`, {
    headers: {
      Authorization: "Bearer " + jwtToken + " investor",
    },
  });
};

export const updateInvestorProfileImg = async (
  jwtToken: string,
  imgFile: any
) => {
  const formData = new FormData();
  formData.append("image", imgFile);

  return await user.patch(`/investors/update-profile-img`, formData, {
    headers: {
      Authorization: "Bearer " + jwtToken,
    },
  });
};
