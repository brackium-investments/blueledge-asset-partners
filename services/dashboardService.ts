import { investment } from "@/axios.config";

export const getDashboard = async (token: string) => {
  return await investment.get("dashboard", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
