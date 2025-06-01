import React from "react";
import SectionContainer from "../SectionContainer";
import HeaderText from "../HeaderText";
import { FaRegCheckCircle } from "react-icons/fa";
import AboutUsPathComp from "./AboutUsPathComp";

const aboutUsData: string[] = [
  "We have the needed investment experience in spades",
  "At Beacon Trades Platforms, we provide differentiated strategic and tactical advice as well as unparalleled execution to financial sponsors for both public and private companies across a broad range of industry sectors and geographies. We help our clients identify and pursue strategic priorities, devise strategies to enhance shareholder value, and develop new ideas and deeper perspective to achieve their goals.",
  "Our risk management protocols include rigorous internal controls and limits. All trades are taken with a focus on risk management and proper leverage.",
];

const solutions = [
  "Valuation Services",
  "Development of Financial Models",
  "Corporate Financial Advisory",
  "Deal Structuring",
  "Feasibility Studies & Business Plans",
];

const AboutUsHero = () => {
  return (
    <SectionContainer containerClassname="font-sans pt-[8rem] pb-[20rem] bg-secondary-2 flex justify-between items-center home-clip">
      <div className="w-[45%]">
        <HeaderText textClassname="text-secondary-1 font-bold mb-[2rem]">
          We Are A Trusted Company With 4+ Years Of Experience
        </HeaderText>
        {aboutUsData.map((text: string) => (
          <p key={text} className="text-gray-700 mb-[1rem] last:mb-0">
            {text}
          </p>
        ))}
        <div className="flex flex-col mt-[2rem]">
          {solutions.map((text: string) => (
            <li key={text} className="flex items-center mb-[1rem]">
              <FaRegCheckCircle className="text-secondary-1 w-[2.4rem] h-[2.4rem] mr-[1rem]" />
              <span>{text}</span>
            </li>
          ))}
        </div>
      </div>
      <div className="w-[45%]">
        <AboutUsPathComp />
      </div>
    </SectionContainer>
  );
};

export default AboutUsHero;
