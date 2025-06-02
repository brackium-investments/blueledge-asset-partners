import React, { ReactNode } from "react";
import SectionContainer from "../SectionContainer";
import HeaderText from "../HeaderText";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoBusinessSharp } from "react-icons/io5";
import { HiLightBulb } from "react-icons/hi";
import { TbTargetArrow } from "react-icons/tb";

const iconClassname = "w-[3.5rem] h-[3.5rem] text-secondary-1";

const data: { text: string; icon: ReactNode }[] = [
  {
    text: "Developing Financing Options",
    icon: <FaMoneyBillTrendUp className={iconClassname} />,
  },
  {
    text: "Improving Your Business Planning",
    icon: <IoBusinessSharp className={iconClassname} />,
  },
  {
    text: "Financial Modeling and Analytics",
    icon: <HiLightBulb className={iconClassname} />,
  },
  {
    text: "Delivering Financing Solutions",
    icon: <TbTargetArrow className={iconClassname} />,
  },
];

const data2: { title: string; text: string }[] = [
  {
    title: "We are able to give truly independent advice",
    text: "The flexibility of being able to make money by accessing the stock market from almost anywhere with internet connection is one of the main attractions to this possible income stream.",
  },
  {
    title: "Financial advice based on your goals",
    text: "Join a growing community of everyday people who are serious about making money through stocks, trading and crypto commodities. we will help you to make the best choices for your future and your finances!",
  },
  {
    title: "We’re here to help during market volatility",
    text: "The markets are continually breaking record highs and there has NEVER been a better time to get involved in the industry of stocks and crypto. The time to get active is NOW! You don’t want to miss out on this historic time and we want to help!",
  },
];

const FutureIsBrighterComp = () => {
  return (
    <SectionContainer containerClassname="font-sans flex flex-col py-[10rem] bg-white">
      <div className="flex justify-between ">
        <div className="w-[45%]">
          <HeaderText textClassname="text-secondary-1 font-bold">
            Future is brighter when you’re more prepared
          </HeaderText>
          <p className="text-black mt-[1rem]">
            We believe that access to financial freedom is a fundamental human
            right. Our mission is to make sure everyone has the opportunity to
            exercise that right by making simple, sophisticated, and affordable
            financial products.
          </p>
        </div>
        <div className="w-[45%] grid grid-cols-2 gap-[3rem] ">
          {data.map((dt) => (
            <div key={dt.text} className="flex flex-col">
              {dt.icon}
              <p className="mt-[1.5rem] text-[2rem] text-black font-semibold">
                {dt.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[3rem] mt-[10rem]">
        {data2.map((dt, index: number) => (
          <div key={dt.title} className="border-t border-t-gray-300 pt-[2rem]">
            <p className="text-[1.4rem] text-secondary-1">0{index + 1}</p>
            <p className="my-[1rem] text-[2.5rem] font-semibold text-black">
              {dt.title}
            </p>
            <p className="text-gray-500">{dt.text}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default FutureIsBrighterComp;
