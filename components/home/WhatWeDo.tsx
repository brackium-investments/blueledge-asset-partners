"use client";
import React from "react";
import HeaderText from "../HeaderText";
import SectionContainer from "../SectionContainer";
import { whatWeDoData, WhatWeDoType } from "@/data/whatWeDo";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <SectionContainer containerClassname="pt-[8rem] pb-[20rem]  flex flex-col items-center text-center home-clip relative z-40 bg-white font-sans">
      <HeaderText textClassname="text-secondary-1 mb-[1.5rem]">
        What We Do
      </HeaderText>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        viewport={{ once: true }}
      >
        At VMZ Inc., we don&apos;t just provide financial services—we build
        intelligent frameworks that transform capital into opportunity and
        liquidity into leverage. Every offering is strategically designed to
        help individuals, businesses, and institutions move with clarity,
        confidence, and control in an increasingly complex financial world.
      </motion.p>

      <div className="grid grid-cols-3 mt-[4rem] gap-[3rem] text-left">
        {whatWeDoData.map((data: WhatWeDoType, i: number) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100 }}
            transition={{ duration: 0.4, ease: "easeIn", delay: i * 0.2 }}
            viewport={{ once: true }}
            key={data.title}
            className=" text-black border-secondary-1 border   transition-all duration-300 ease-in p-[2rem] rounded-[1rem] shadow-xl"
          >
            <p className="text-[2rem] text-secondary-1 font-bold mb-[1rem]">
              {data.title}
            </p>
            <p>{data.text}</p>
            <div className="mt-[1rem]">
              {data.subTexts.map((text: string) => (
                <div key={text} className="flex mb-[1rem] ">
                  <AiOutlineCheckCircle className="text-current w-[2.4rem] h-[2.4rem]" />
                  <p className="ml-[1rem] flex-1">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default WhatWeDo;
