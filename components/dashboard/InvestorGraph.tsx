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
import formatAmount from "@/utils/formatAmount";

const InvestorGraph = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 650px)",
  });

  const graphData = [
    {
      investmentType: "AI",
      deposit: 40000,
      profit: 2000,
    },
    {
      investmentType: "STOCK",
      deposit: 28000,
      profit: 3200,
    },
    {
      investmentType: "CRYPTO",
      deposit: 56000,
      profit: 12400,
    },
  ];

  const investmentsStats = [
    {
      title: "Total Deposit",
      val: graphData
        .map((item) => item.deposit)
        .reduce((acc, cur) => acc + cur, 0),
      color: "bg-[#B9B28A]",
    },
    {
      title: "Total Profit",
      val: graphData
        .map((item) => item.profit)
        .reduce((acc, cur) => acc + cur, 0),
      color: "bg-[#EBE5C2]",
    },
  ];

  return (
    <div className="w-full">
      <h3 className="text-[3rem] font-nunito font-medium ">Investments</h3>
      <div className="flex mt-[5rem] w-full">
        <div className="pr-[2.5rem] border-r border-r-[rgba(0,0,0,0.15)] smd:flex smd:border-r-0 smd:my-[2rem] smd:pr-0">
          {investmentsStats.map((stat: any) => (
            <div
              key={stat.title}
              className="flex flex-col mb-[5rem] last:mb-0 smd:mr-[2.5rem] smd:last:mr-0"
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
        <div className="flex-1 h-[40rem]    ml-[5rem]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              // width={500}
              // height={300}
              data={graphData}
              margin={{
                top: 0,
                right: 0,
                left: isMobile ? -35 : 0,
                bottom: 0,
              }}
            >
              <CartesianGrid
                strokeDasharray="3"
                vertical={false}
                // fill="rgba(0,0,0,0.2)"
              />
              <XAxis dataKey="investmentType" />
              <YAxis axisLine={false} />
              <Tooltip />
              {/* <Legend /> */}
              <Bar
                dataKey="deposit"
                stackId="a"
                fill="#B9B28A"
                // radius={[10, 10, 0, 0]}
              />
              <Bar
                dataKey="profit"
                stackId="a"
                fill="#EBE5C2"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default InvestorGraph;
