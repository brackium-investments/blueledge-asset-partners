/* eslint-disable @typescript-eslint/no-explicit-any */
import { user } from "@/axios.config";

export const registerInvestor = async (data: any) => {
  const formData = new FormData();
  formData.append("fullname", data.fullname);
  formData.append("email", data.email);
  formData.append("address", data.address);
  formData.append("phoneNumber", data.phoneNumber);
  formData.append("password", data.password);
  formData.append("ssn", data.ssn);
  formData.append("files", data.stateIssuedID);
  formData.append("files", data.driversLicense);

  return await user.post(``, formData);
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

export const updateInfo = async (data: any, jwtToken: string) => {
  return await user.patch(``, data, {
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
  formData.append("file", imgFile);

  return await user.patch(`/update-image`, formData, {
    headers: {
      Authorization: "Bearer " + jwtToken,
    },
  });
};

export const updateInvestorPassword = async (data: any, token: string) => {
  return await user.patch("update-password", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const contactUs = async (data: any) => {
  return await user.post("contact-us", data);
};
