"use client";
import { OurMissionBox, ourMissionBox } from "@/data/home";
import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Image from "next/image";
import SectionContainer from "../SectionContainer";
import HeaderText from "../HeaderText";
import { motion } from "framer-motion";

const OurMission = () => {
  const [onHoverMissionBox, setOnHoverMissionBox] = useState<boolean | number>(
    false
  );

  const ourMissionData = [
    "Blueledge Asset Partners understands the importance of providing diversified digital asset solutions that meet the unique needs of every investor and business.",
    "We seek to be the premier opportunity and high-quality financial partner for our investors, clients, and customers across five core service areas: Private Liquidity Provision, Investment & Private Liquidity, Business Loans for Eligible Registered Members, Wealth Management, and Asset Management. We specialize in bridging traditional finance with digital asset opportunities while maintaining the highest standards of integrity and strategic excellence.",
    "Blueledge Asset Partners employs a comprehensive team of advisors across private equity, wealth management, and alternative investment sectors to guide investment strategies, liquidity solutions, and business financing, both domestically and internationally. We identify emerging trends in private markets and digital assets to maximize growth opportunities and strategic wealth building while maintaining operational excellence and regulatory compliance.",
  ];

  const solutions = [
    "Private Liquidity Provision",
    "Investment & Private Liquidity",
    "Business Loans for Eligible Registered Members",
    "Wealth Management",
    "Asset Management",
  ];

  return (
    <SectionContainer containerClassname="py-[25rem] max-smd:py-[8rem] max-smd:mt-0 relative z-50  flex max-lg:flex-col justify-between font-sans bg-secondary-2 -mt-[10rem] max-lg:-mt-[13rem] home-clip">
      <div className="flex flex-col w-[45%] max-lg:w-full ">
        <HeaderText textClassname="text-secondary-1 mb-[1.5rem]">
          Our Mission
        </HeaderText>
        <div className="">
          {ourMissionData.map((text: string, i: number) => (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 100 }}
              transition={{ duration: 0.4, ease: "easeIn", delay: i * 0.2 }}
              viewport={{ once: true }}
              key={text}
              className="text-black mb-[1rem]"
            >
              {text}
            </motion.p>
          ))}
        </div>
        <ul className="flex flex-col mt-[1rem]">
          {solutions.map((text: string, i: number) => (
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 100 }}
              transition={{ duration: 0.4, ease: "easeIn", delay: i * 0.2 }}
              viewport={{ once: true }}
              key={text}
              className="flex items-center mb-[1rem]"
            >
              <FaRegCheckCircle className="text-secondary-1 w-[2.4rem] h-[2.4rem] mr-[1rem]" />
              <span>{text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap justify-between w-[45%] max-2xl:w-[50%] max-lg:w-full max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-[4rem] max-lg:mt-[3rem] max-lg:px-[5rem] max-md:px-0 gap-y-[3rem] items-start">
        {ourMissionBox.map((box: OurMissionBox, index: number) => (
          <div
            key={box.header}
            className={`w-[45%] max-2xl:w-[48%] max-lg:h-full max-lg:w-full rounded-[1rem]  shadow-2xl bg-white ${
              index % 2 !== 0 ? "-mt-[7rem] max-lg:mt-0" : ""
            } `}
            onMouseEnter={() => {
              setOnHoverMissionBox(index);
            }}
            onMouseLeave={() => {
              setOnHoverMissionBox(false);
            }}
          >
            <div className="w-full h-[20rem] max-lg:h-[40rem] overflow-hidden rounded-[1rem]">
              <Image
                src={box.image}
                alt={`${box.header} image`}
                priority
                width={500}
                height={500}
                className={`w-full h-full object-cover ${
                  onHoverMissionBox === index ? "scale-[1.10]" : "scale-100"
                } transition-all duration-300 ease-in `}
              />
            </div>
            <div className="p-[2rem] h-auto w-full">
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
