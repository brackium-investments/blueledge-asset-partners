"use client";
/* eslint-disable react/jsx-key */
import { homeSec1Data } from "@/data/home";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineSketch } from "react-icons/ai";
import { RiBankCardLine } from "react-icons/ri";
import SectionContainer from "../SectionContainer";

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
    <div className="w-full h-[calc(100vh-8rem)] bg-hero home-clip font-sans relative z-[60] ">
      <SectionContainer containerClassname="w-full h-full bg-[rgba(0,0,0,0.7)] flex flex-col items-center justify-center  py-[10rem] home-clip px-[8rem]">
        <motion.h2
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
        </motion.div>
      </SectionContainer>
    </div>
  );
};

export default HomeHero;
