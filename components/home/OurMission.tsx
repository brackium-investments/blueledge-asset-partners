"use client";
import { OurMissionBox, ourMissionBox } from "@/data/home";
import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Image from "next/image";
import SectionContainer from "../SectionContainer";
import HeaderText from "../HeaderText";

const OurMission = () => {
  const [onHoverMissionBox, setOnHoverMissionBox] = useState<boolean | number>(
    false
  );

  const ourMissionData = [
    "Beacon Trades Platforms Group understand the importance of having investment types that suit everyone.",
    "Beacon Trades Platforms group seeks to be an opportunity and high-quality to our investors, clients, and customers related to investing in eleven major sectors, Consumer Discretionary, Information Technology, Real Estate, Utilities, Consumer Staples, Communication Services, Financials(crypto/stock commodities), Health Care, Industrials, Materials, and Energy.",
    "Founded in 2017, Beacon Trades Platforms Group is a minority-owned investment group that focuses on making income and value-add investments in securities, crypto/stock commodities and real estate (commercial, residential and undeveloped land) throughout the United States, Europe, South America, and Africa. Our team of investors has a combined experience of 15 years. Beacon Trades Platforms Group employs a team of advisors across economic sectors to advise securities, stock/crypto commodities and real estate investments, both domestically and internationally, to identify trends to maximize income growth while operating efficiently.",
  ];

  const solutions = [
    "Valuation Services",
    "Development of Financial Models",
    "Corporate Financial Advisory",
    "Deal Structuring",
    "Feasibility Studies & Business Plans",
  ];

  return (
    <SectionContainer containerClassname="py-[25rem] relative z-50  flex justify-between font-sans bg-secondary-2 -mt-[10rem] home-clip">
      <div className="flex flex-col w-[45%]">
        <HeaderText textClassname="text-secondary-1 mb-[1.5rem]">
          Our Mission
        </HeaderText>
        <div className="">
          {ourMissionData.map((text: string) => (
            <p key={text} className="text-black mb-[1rem]">
              {text}
            </p>
          ))}
        </div>
        <ul className="flex flex-col mt-[1rem]">
          {solutions.map((text: string) => (
            <li key={text} className="flex items-center mb-[1rem]">
              <FaRegCheckCircle className="text-secondary-1 w-[2.4rem] h-[2.4rem] mr-[1rem]" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap justify-between w-[45%] gap-y-[3rem] items-start">
        {ourMissionBox.map((box: OurMissionBox, index: number) => (
          <div
            key={box.header}
            className={`w-[45%] rounded-[1rem] overflow-hidden shadow-2xl bg-white ${
              index % 2 !== 0 ? "-mt-[7rem]" : ""
            } `}
            onMouseEnter={() => {
              setOnHoverMissionBox(index);
            }}
            onMouseLeave={() => {
              setOnHoverMissionBox(false);
            }}
          >
            <div className="w-full h-[20rem] overflow-hidden">
              <Image
                src={box.image}
                alt={`${box.header} image`}
                priority
                width={500}
                height={500}
                className={`w-full h-full ${
                  onHoverMissionBox === index ? "scale-[1.10]" : "scale-100"
                } transition-all duration-300 ease-in `}
              />
            </div>
            <div className="p-[2rem]">
              <p className="text-[1.8rem] text-secondary-1 mb-[1rem] font-medium">
                {box.header}
              </p>
              <p className="text-[1.5rem]">{box.text}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default OurMission;
