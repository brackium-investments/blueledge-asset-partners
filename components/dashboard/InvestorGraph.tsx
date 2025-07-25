"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useMediaQuery } from "react-responsive";
import formatAmount, { formatNumber } from "@/utils/formatAmount";
import { useAppSelector } from "@/hooks/state-hook";

const InvestorGraph = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 650px)",
  });

  const { graphData } = useAppSelector((state) => state.dashboard);

  // const graphData = [
  //   {
  //     investmentType: "STOCKS & ETFs",
  //     deposit: 0,
  //     profit: 0,
  //   },
  //   {
  //     investmentType: "MUTUAL FUNDS",
  //     deposit: 0,
  //     profit: 0,
  //   },
  //   {
  //     investmentType: "CRYPTO",
  //     deposit: 0,
  //     profit: 0,
  //   },
  // ];

  const investmentsStats = [
    {
      title: "Total Deposit",
      val: graphData
        .map((item) => item.deposit)
        .reduce((acc, cur) => acc + cur, 0),
      color: "bg-[#dd9933]",
    },
    {
      title: "Total Profit",
      val: graphData
        .map((item) => item.profit)
        .reduce((acc, cur) => acc + cur, 0),
      color: "bg-[#f3dbb7]",
    },
  ];

  return (
    <div className="w-full">
      <h3 className="text-[3rem] font-nunito font-medium text-secondary-1 ">
        Active Investments
      </h3>
      <div className="flex mt-[5rem] w-full max-md:flex-col">
        <div className="pr-[2.5rem] border-r border-r-[rgba(0,0,0,0.15)] max-md:flex  max-md:border-r-0 ">
          {investmentsStats.map((stat: any) => (
            <div
              key={stat.title}
              className="flex flex-col mb-[5rem] max-md:mb-0 max-md:mr-[3rem] last:mb-0 "
            >
              <div className="flex items-center">
                <div
                  className={`w-[1rem] h-[1rem] ${stat.color} rounded-[0.2rem] mr-[0.5rem] `}
                ></div>
                <p>{stat.title}</p>
              </div>
              <p className="text-[3.2rem] font-medium">
                ${formatAmount(String(stat.val))}
              </p>
            </div>
          ))}
        </div>
        <div className="flex-1 h-[40rem] max-smd:h-[50rem]    ml-[5rem] max-md:ml-0  max-md:mt-[3rem]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              // width={500}
              // height={300}
              data={graphData}
              margin={{
                top: 0,
                right: 0,
                left: isMobile ? 0 : 0,
                bottom: 0,
              }}
            >
              <CartesianGrid
                strokeDasharray="3"
                vertical={false}
                // fill="rgba(0,0,0,0.2)"
              />
              <XAxis dataKey="investmentType" />
              <YAxis
                axisLine={false}
                tickFormatter={(value) => `$${formatNumber(value)}`}
                tick={{ fill: "#555335" }}
              />
              <Tooltip />
              {/* <Legend /> */}
              <Bar
                dataKey="deposit"
                stackId="a"
                fill="#dd9933"
                // radius={[10, 10, 0, 0]}
              />
              <Bar
                dataKey="profit"
                stackId="b"
                fill="#f3dbb7"
                // radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default InvestorGraph;
