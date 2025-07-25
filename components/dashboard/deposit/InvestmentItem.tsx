/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/hooks/state-hook";
import { InvestmentItemType } from "@/app/dashboard/investments/page";
import formatDate from "@/utils/formatDate";
import { formatNumber } from "@/utils/formatAmount";
import { dateDiffInDays } from "@/utils/helperFns";
import { RotatingLines } from "react-loader-spinner";

const InvestmentItem = ({
  _id,
  amount,
  dateCreated,
  roi,
  investmentState,
  payoutAvailable,
  payoutDate,
  investmentType,
}: InvestmentItemType) => {
  const itemVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 30 },
  };

  const dispatchFn = useAppDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { token } = useAppSelector((state) => state.auth);

  const data = [
    {
      text: "capital",
      val: `$ ${formatNumber(amount)}`,
    },
    {
      text: "roi",
      val: `${roi ? roi : 0} %`,
    },

    // {
    //   text: "payout available",
    //   val: `$ ${payoutAvailable}`,
    // },

    {
      text: "payout date",
      val: `${formatDate(payoutDate)}`,
    },
  ];

  const withdrawInvestmentHandler = () => {
    // dispatchFn(
    //   makeWithdrawalRequestDispatch(
    //     token,
    //     details.id,
    // _id,
    //     setIsLoading,
    //     toastSuccess,
    //     toastError,
    //     <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
    //     <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />
    //   )
    // );
  };

  const isWithdrawalActive: boolean =
    dateDiffInDays(new Date(data[2].val).getTime(), new Date().getTime()) < 0;

  return (
    <motion.div
      variants={itemVariant}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`border border-color-primary-1 w-full h-[42rem]  rounded-lg overflow-hidden bg-white  flex flex-col justify-between pb-[2rem] relative`}
    >
      <div
        className={`w-full  bg-secondary-1 p-[2rem] absolute top-0 bottom-0 text-white left-0 right-0 z-30 h-[15rem]  rounded-bl-lg rounded-br-lg`}
      >
        <p>{investmentType}</p>
        <p>{formatDate(dateCreated)}</p>
        <p>{investmentState}</p>
      </div>
      <div className={`px-[1.5rem] mt-[17rem] flex flex-wrap  justify-between`}>
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
      <button
        disabled={isWithdrawalActive || investmentState === "withdraw pending"}
        className="py-[1rem] w-[90%] sm:w-[95%] text-center rounded-lg flex items-center justify-center self-center bg-secondary-1 text-white font-semibold disabled:bg-[#dee2e6] disabled:text-[#868e96] disabled:cursor-not-allowed "
        onClick={withdrawInvestmentHandler}
      >
        {isLoading ? (
          <RotatingLines width="25" strokeColor="white" />
        ) : (
          "Request Withdrawal"
        )}
      </button>
    </motion.div>
  );
};

export default InvestmentItem;
