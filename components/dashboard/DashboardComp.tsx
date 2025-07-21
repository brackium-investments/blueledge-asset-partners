"use client";
import React from "react";
import { BsCashCoin } from "react-icons/bs";
import formatAmount from "@/utils/formatAmount";
import InvestorGraph from "@/components/dashboard/InvestorGraph";
import { useAppSelector } from "@/hooks/state-hook";

const DashboardComp = () => {
  const { availableBalance, totalDeposited, totalWithdrawn } = useAppSelector(
    (state) => state.dashboard
  );

  const data = [
    {
      title: "Available Balance",
      value: availableBalance,
      bgcolor: "bg-blue-100",
      iconColor: "text-blue-700",
    },
    {
      title: "Total Deposited",
      value: totalDeposited,
      bgcolor: "bg-green-100",
      iconColor: "text-green-700",
    },
    {
      title: "Total Withdrawn",
      value: totalWithdrawn,
      bgcolor: "bg-red-100",
      iconColor: "text-red-700",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-[4rem]">
        {data.map((item) => (
          <div
            key={item.title}
            className="w-full  rounded-[1rem] bg-white p-[2rem] shadow-md flex flex-col"
          >
            <div
              className={`${item.bgcolor} ${item.iconColor} w-[7rem] h-[7rem] flex items-center justify-center rounded-[0.6rem]`}
            >
              <BsCashCoin
                className={` w-[2.5rem] h-[2.5rem] text-color-current`}
              />
            </div>
            <div className="flex-1 mt-[2rem]">
              <p
                className={` text-[2rem] text-secondary-1 mb-[2rem]  font-nunito font-semibold`}
              >
                {item.title}
              </p>
              <p className="text-[2.5rem] font-nunito font-semibold">
                ${formatAmount(String(item.value))}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full  bg-white rounded-[1rem] shadow-md mt-[5rem] p-[3rem] mb-[3rem]">
        <InvestorGraph />
      </div>
    </div>
  );
};

export default DashboardComp;
