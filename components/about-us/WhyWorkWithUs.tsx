"use client";

import React, { ReactNode } from "react";
import HeaderText from "../HeaderText";
import { GiTakeMyMoney } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { SiLiquibase } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";
import SectionContainer from "../SectionContainer";

const iconClassname = "w-[2.8rem] h-[2.8rem] text-secondary-1";

const whyWorkWithUsData: {
  icon: ReactNode;
  header: string;
  text: string;
}[] = [
  {
    icon: <GiTakeMyMoney className={iconClassname} />,
    header: "Earn with Purpose",
    text: "We earn commission through our services, and our clients earn more because of them. Every transaction is backed by strategy, transparency, and partnership.",
  },
  {
    icon: <GoLaw className={iconClassname} />,
    header: "Legal & Compliant",
    text: "We operate under international standards, observing Know Your Client (KYC) and Anti-Money Laundering (AML) guidelines across all platforms we serve—just like Robinhood, Binance, and Vanguard.",
  },
  {
    icon: <SiLiquibase className={iconClassname} />,
    header: "Tailored Access to U.S. Liquidity Pools",
    text: "America boasts the world’s deepest liquidity, most dynamic credit systems, and endless commodities. We bring that access to you—no matter where you are.",
  },
  {
    icon: <BsGraphUpArrow className={iconClassname} />,
    header: "Proven Track Record",
    text: "From individuals to small corporations, we’ve quietly fueled profitable liquidity solutions for years. Now we’re stepping into the global stage—bringing integrity and excellence with us.",
  },
];

const WhyWorkWithUs = () => {
  return (
    <SectionContainer containerClassname="pt-[8rem] pb-[10rem]  flex flex-col items-center text-center relative z-40 bg-white font-sans">
      <HeaderText textClassname={"text-secondary-1 mb-[1.5rem]"}>
        Why Work With Us
      </HeaderText>
      <div className="grid grid-cols-4 gap-[3rem] mt-[6rem]">
        {whyWorkWithUsData.map(
          (value: { icon: ReactNode; header: string; text: string }) => (
            <div
              key={value.header}
              className="bg-secondary-2 rounded-[1rem] p-[2rem] flex items-center flex-col "
            >
              <div className="w-[6rem] h-[6rem] rounded-full bg-white  flex items-center justify-center">
                {value.icon}
              </div>
              <p className="my-[1rem] text-secondary-1 font-medium uppercase text-[1.8rem]">
                {value.header}
              </p>
              <p className="text-[1.4rem]">{value.text}</p>
            </div>
          )
        )}
      </div>
    </SectionContainer>
  );
};

export default WhyWorkWithUs;
