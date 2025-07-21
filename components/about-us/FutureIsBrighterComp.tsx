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
    text: "Private Liquidity Solutions",
    icon: <FaMoneyBillTrendUp className={iconClassname} />,
  },
  {
    text: "Technology Investment Banking",
    icon: <IoBusinessSharp className={iconClassname} />,
  },
  {
    text: "Digital Asset Conversion",
    icon: <HiLightBulb className={iconClassname} />,
  },
  {
    text: "Wealth Management Strategy",
    icon: <TbTargetArrow className={iconClassname} />,
  },
];

const data2: { title: string; text: string }[] = [
  {
    title: "70 Years of Trusted Experience",
    text: "Our legacy reflects a steadfast commitment to protecting and growing wealth, guided by transparency, accountability, and shared success.",
  },
  {
    title: "Bespoke Financial Solutions",
    text: "Tailored strategies designed to fit the intricate contours of your financial world, adapting with you every step of the way.",
  },
  {
    title: "Global Technology Investment Banking",
    text: "Industry specialists across London, Hong Kong, Tokyo, Frankfurt, and Singapore delivering strategic advisory services for the entire technology ecosystem.",
  },
];

const FutureIsBrighterComp = () => {
  return (
    <SectionContainer containerClassname="font-sans flex flex-col pb-[10rem] bg-white relative z-[30]">
      <div className="flex justify-between ">
        <div className="w-[45%]">
          <HeaderText textClassname="text-secondary-1 font-bold">
            Future is brighter when you’re more prepared
          </HeaderText>
          <p className="text-black mt-[1rem]">
            When you choose Blueledge Asset Partners, you’re not just selecting
            a financial firm. You’re aligning with a trusted partner—one who
            understands the complexities of modern wealth and is committed to
            helping you realize the full potential of your financial future.
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
