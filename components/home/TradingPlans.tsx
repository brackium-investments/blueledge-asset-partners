import React from "react";
import SectionContainer from "../SectionContainer";
import HeaderText from "../HeaderText";
import formatAmount from "@/utils/formatAmount";
import { InvestmentPlan, investmentPlans } from "@/data/home";

const TradingPlans = () => {
  return (
    <SectionContainer containerClassname="pt-[20rem] pb-[10rem] -mt-[10rem]  relative z-20  bg-white ">
      <HeaderText textClassname="text-secondary-1 capitalize mb-[2rem]">
        Investment Plans
      </HeaderText>
      <p className="mb-[1rem]">
        At VMZ Inc, we believe every investor deserves the tools, clarity, and
        confidence to build lasting wealth. Whether you&apos;re saving for a
        milestone or planning for long-term financial growth, our tailored
        strategies and expert support are designed to meet you where you are —
        and take you further.
      </p>
      <p>
        With a professionally managed brokerage account, you can access a range
        of investment options — within stocks and ETFs, mutual funds and crypto
        — all within a plan built around your goals.
      </p>
      <div className="grid grid-cols-3 gap-[4rem] mt-[5rem]">
        {investmentPlans.map((inv: InvestmentPlan) => (
          <div
            key={inv.type}
            className="border-dashed border border-secondary-1 p-[2rem] rounded-[0.6rem] shadow-lg flex flex-col items-center font-semibold"
          >
            <p className="text-[2.5rem] font-semibold text-secondary-1 mb-[1.5rem]">
              {inv.type}
            </p>
            <p className="mb-[1rem]">Min: ${formatAmount(String(inv.min))}</p>
            <p className="mb-[1rem]">
              Expected Returns: ${formatAmount(String(inv.expectedReturn))}
            </p>
            <p className="mb-[1rem]">Roi: {inv.roi}%</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default TradingPlans;
