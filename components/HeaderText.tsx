"use client";
import { motion } from "framer-motion";
import React, { FC } from "react";

const HeaderText: FC<{ children: string; textClassname: string }> = ({
  children,
  textClassname,
}) => {
  return (
    <motion.h3
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 100 }}
      // transition={{ duration: 0.4, ease: "easeIn" }}
      // viewport={{ once: true }}
      className={`${textClassname} text-[4rem] max-sm:text-[3rem] font-bold font-sans`}
    >
      {children}
    </motion.h3>
  );
};

export default HeaderText;
