"use client";
import React from "react";
import { motion } from "framer-motion";
import formatDate from "@/utils/formatDate";
import { formatNumber } from "@/utils/formatAmount";
import { LoanItemType } from "@/app/dashboard/loan-history/page";

const LoanItem = ({
  amount,
  dateCreated,
  contractPeriod,
  loanState,
}: LoanItemType) => {
  const itemVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 30 },
  };

  const data = [
    {
      text: "loan amount",
      val: `$ ${formatNumber(amount)}`,
    },

    {
      text: "contract period",
      val: `${formatDate(contractPeriod)}`,
    },
  ];

  return (
    <motion.div
      variants={itemVariant}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`border border-black w-full h-[25rem] rounded-lg overflow-hidden flex flex-col justify-between pb-[1rem] `}
    >
      <motion.div
        layout
        transition={{ duration: 0.3, ease: "easeIn" }}
        className={`w-full  p-[2rem]   bg-secondary-1 text-white rounded-bl-lg rounded-br-lg`}
      >
        <motion.p layout>{formatDate(dateCreated)}</motion.p>
        <motion.p layout>{loanState}</motion.p>
      </motion.div>
      <div className={`px-[1.5rem]  mt-[5rem] flex flex-wrap  justify-between`}>
        {data.map((item, i) => (
          <div
            key={i}
            className="rounded-lg border border-color-primary-3 p-[.5rem] w-[45%]  text-[1.3rem] mb-[1rem]"
          >
            <p className="text-color-secondary-1 capitalize mb-[0.3rem]">
              {item.text}
            </p>
            <p>{item.val}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default LoanItem;
