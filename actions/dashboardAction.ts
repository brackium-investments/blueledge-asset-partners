/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDashboard } from "@/services/dashboardService";
import { dashboardActions } from "@/slices/dashboardSlice";

export const getDashboardDispatch =
  (token: string) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type: "dashbaord/setDashboardDetails";
    }) => void
  ) => {
    try {
      const res = await getDashboard(token);

      dispatch(dashboardActions.setDashboardDetails(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };
