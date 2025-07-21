import React, { ReactNode } from "react";
import SectionContainer from "../SectionContainer";
import HeaderText from "../HeaderText";
import { IoBusinessSharp } from "react-icons/io5";
import { GiCash } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi";
import { GrDocumentPerformance } from "react-icons/gr";
import Link from "next/link";

const iconClassname = "w-[2.8rem] h-[2.8rem] text-secondary-1";

const coreValuesData: {
  icon: ReactNode;
  header: string;
  text: string;
}[] = [
  {
    icon: <IoBusinessSharp className={iconClassname} />,
    header: "INNOVATION",
    text: "We champion innovation, partnering with visionary entrepreneurs to bring transformative solutions to underserved communities.",
  },
  {
    icon: <GrDocumentPerformance className={iconClassname} />,
    header: "DEDICATION",
    text: "We are deeply dedicated to the communities we serve, aligning our strategies with the principles of the World Economic Forum.",
  },
  {
    icon: <GiCash className={iconClassname} />,
    header: "STRATEGIC INVESTING",
    text: "We aim to achieve strong returns by strategically investing in commodities for maximum growth.",
  },
  {
    icon: <HiLightBulb className={iconClassname} />,
    header: "OUR PHILOSOPHY",
    text: "We are committed to sustainable investment strategies that deliver long-term, risk-adjusted returns.",
  },
];

const OurGoalsAndValues = () => {
  return (
    <SectionContainer containerClassname="pt-[8rem] pb-[15rem]  flex flex-col items-center text-center home-clip relative z-40 bg-white font-sans">
      <HeaderText textClassname={"text-secondary-1 mb-[1.5rem]"}>
        OUR GOALS AND VALUES
      </HeaderText>
      <p className="w-[50%] text-gray-600 leading-[4rem] text-[1.8rem]">
        We has a strong commitment to the community in which we invest. Our
        principles models after the that of the World Economic Forum,
        &quot;committed to improving the state of the world by engaging
        business, political, academic, and other leaders of society to shape
        global, regional, and industry agendas&quot;, which in turn assist
        underserved communities to thrive in both economic and health standards.
      </p>
      <div className="grid grid-cols-4 gap-[3rem] mt-[6rem]">
        {coreValuesData.map(
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
      <Link
        href={"/register"}
        className="block mt-[5rem] py-[1rem] px-[1.5rem] border-secondary-1 text-secondary-1 border rounded-[1.6rem] hover:bg-secondary-1 hover:text-white transition-all duration-200 ease-in"
      >
        Get Started
      </Link>
    </SectionContainer>
  );
};

export default OurGoalsAndValues;
