import React from "react";
import SectionContainer from "../SectionContainer";
import { Plan, plans, TradingPlan } from "@/data/home";
import HeaderText from "../HeaderText";
import Link from "next/link";
import formatAmount from "@/utils/formatAmount";

const TradingPlans = () => {
  return (
    <SectionContainer containerClassname="pt-[20rem] pb-[40rem] -mt-[10rem] home-clip relative z-20  bg-white ">
      <div>
        {plans.map((plan: Plan) => (
          <div className={"mb-[5rem]"} key={plan.category}>
            <HeaderText textClassname="text-secondary-1 capitalize">
              {plan.category}
            </HeaderText>
            <div className="grid grid-cols-4 gap-[4rem] mt-[2rem]">
              {plan.plans.map((tradingPlan: TradingPlan) => (
                <div
                  key={tradingPlan.type}
                  className="bg-secondary-2 flex flex-col text-center rounded-[1rem] pb-[2rem] shadow-xl"
                >
                  <p className="pt-[2rem] pb-[1rem] text-[2rem] font-semibold text-black">
                    {tradingPlan.type}
                  </p>
                  <p className="py-[1rem]">
                    Min: {!plan.category.toLowerCase().includes("btc") && "$"}
                    {formatAmount(String(tradingPlan.min))}{" "}
                    {plan.category.toLowerCase().includes("btc") && "BTC"}
                  </p>
                  <p className="py-[1rem]">
                    Max:{" "}
                    {tradingPlan.max < 250000
                      ? formatAmount(String(tradingPlan.max))
                      : "Unlimited"}{" "}
                    {plan.category.toLowerCase().includes("btc") && "BTC"}
                  </p>
                  <p
                    className={`py-[1rem] ${
                      !tradingPlan.support && "mb-[3rem]"
                    }`}
                  >
                    {tradingPlan.roi}%{" "}
                    {tradingPlan.roiDuration.includes("daily")
                      ? "daily"
                      : `every ${tradingPlan.roiDuration}`}
                  </p>
                  {tradingPlan.compounding && (
                    <p className="py-[1rem]">
                      Compounding: {tradingPlan.compounding && "yes"}
                    </p>
                  )}
                  {tradingPlan.support && (
                    <p className="py-[1rem] mb-[3rem]">24/7 Support</p>
                  )}
                  <Link
                    href={"/login"}
                    className="bg-secondary-1 text-white rounded-[1rem] border border-secondary-1 hover:bg-transparent hover:text-secondary-1 transition-all duration-200 ease-in py-[1rem] px-[1.5rem] mt-auto block w-max self-center"
                  >
                    Invest now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default TradingPlans;
