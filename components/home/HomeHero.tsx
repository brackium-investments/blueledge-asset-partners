/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
/* eslint-disable react/jsx-key */
import { homeSec1Data } from "@/data/home";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineSketch } from "react-icons/ai";
import { RiBankCardLine } from "react-icons/ri";
import SectionContainer from "../SectionContainer";
import Link from "next/link";

const iconClassname = "w-[2.8rem] h-[2.8rem] text-color-curentColor";

const icons: ReactNode[] = [
  <BsGraphUpArrow className={iconClassname} />,
  <AiOutlineSketch className={iconClassname} />,
  <RiBankCardLine className={iconClassname} />,
];

const data: { title: string; text: string; icon: ReactNode }[] =
  homeSec1Data.map((data: { title: string; text: string }, i: number) => {
    return {
      title: data.title,
      text: data.text,
      icon: icons[i],
    };
  });

const HomeHero = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const items = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <div className="w-full min-h-[calc(100vh-8rem)] flex flex-col  bg-hero home-clip font-sans relative z-[60] ">
      <SectionContainer containerClassname="w-full h-full flex-1 bg-[rgba(0,0,0,0.85)] py-[10rem]  flex  items-center justify-between  py-[10rem] home-clip ">
        <div className=" text-white text-center flex flex-col items-center">
          <motion.p
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 100 }}
            // transition={{ duration: 0.8, ease: "easeIn" }}
            className="text-secondary-1 text-[5rem] max-ssm:text-[4rem] font-bold"
          >
            Welcome to Blueledge - Where your Financial Future Meets Strategic
            Excellence.
          </motion.p>
          <motion.p
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 100 }}
            // transition={{ duration: 0.8, ease: "easeIn", delay: 0.3 }}
            className="w-[70%] max-smd:w-full"
          >
            Global Liquidity, Personal Integrity. Unlock the Power of Digital
            Assets with a Trusted Private Liquidity Partner. When others see
            volatility, we see opportunity. We provide fast, compliant, and
            strategic access to liquidity in the digital asset world - bridging
            fiat, tokens, and commodities - so you can scale, hedge, or invest
            with peace of mind.
          </motion.p>
          {/* <p>
            At Blueledge, we don’t just offer services; we craft pathways to
            enduring prosperity. Our suite of offerings is designed to empower
            individuals and businesses alike, ensuring that every financial
            decision is a step toward greater security and growth.
          </p> */}
          <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 100 }}
            // transition={{ duration: 0.8, ease: "easeIn", delay: 0.5 }}
            className="mt-[4rem]"
          >
            <Link
              href={"/register"}
              type="button"
              className="bg-white text-black  px-[2rem] py-[1rem] rounded-[0.6rem] mr-[2rem] hover:bg-secondary-1 hover:text-white transition-all duration-150 ease-in"
            >
              Request Access
            </Link>
            <Link
              href={"/contact-us"}
              className="bg-secondary-1 text-white px-[2rem] py-[1rem] rounded-[0.6rem] hover:bg-white hover:text-black duration-150 ease-in transition-all cursor-pointer"
            >
              Schedule a call
            </Link>
          </motion.div>
        </div>
        {/* <div className="w-[45%] bg-amber-300">
          <p>Ejim</p>
        </div> */}
        {/* <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
          className="text-[7rem]  text-white mb-[4rem] font-medium"
        >
          Innovation Synergy
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
          className="grid grid-cols-3 gap-[5rem] "
        >
          {data.map(
            (item: { title: string; text: string; icon: ReactNode }, i) => (
              <motion.div
                key={i}
                className="p-[2.5rem] bg-secondary-1 rounded-[1.6rem] flex items-center flex-col"
                variants={items}
              >
                <div className="w-[6rem] h-[6rem] bg-white rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="mt-[2rem] text-center">
                  <p className="text-[2rem] font-semibold mb-[1rem]">
                    {item.title}
                  </p>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            )
          )}
        </motion.div> */}
      </SectionContainer>
    </div>
  );
};

export default HomeHero;
