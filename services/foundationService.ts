import { foundation } from "@/axios.config";

export const donateToFoundation = async (
  data: { address: string; amount: number },
  jwtToken: string
) => {
  return await foundation.post("", data, {
    headers: {
      Authorization: "Bearer " + jwtToken,
    },
  });
};
