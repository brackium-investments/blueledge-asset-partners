/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getInvestmentsDispatch } from "@/actions/investmentActions";
import InvestmentItem from "@/components/dashboard/deposit/InvestmentItem";
import { useAppDispatch, useAppSelector } from "@/hooks/state-hook";
import { formatNumber } from "@/utils/formatAmount";
import { dateDiffInDays } from "@/utils/helperFns";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const getLatestInvRoi = (inv: any) => {
  const roi = inv.activeDate
    ? dateDiffInDays(new Date(inv.activeDate).getTime(), new Date().getTime()) *
      0.16
    : 0;

  const investmentTime = dateDiffInDays(
    new Date(inv.dateCreated).getTime(),
    new Date(inv.nextPayout).getTime()
  );

  // if the time has passed the next payout date then investment top amount is the static roi x the difference in active date and next payout

  if (
    dateDiffInDays(new Date(inv.nextPayout).getTime(), new Date().getTime()) > 0
  ) {
    return investmentTime * 0.16;
  }

  // if the roi is greater than the choosen max drawdown for that particular inv then set the max drawdown as the roi
  if (roi >= inv.maximumDrawdown) {
    return inv.maximumDrawdown;
  }
  return roi.toFixed(2);
};

export type InvestmentItemType = {
  _id: string;
  amount: number;
  activeDate: string;
  dateCreated: string;
  investmentState?: string;
  roi: number;
  isActive?: boolean | string;
  payoutAvailable: any;
  investmentType: string;
  payoutDate: string;
};

export default function InvestmentsPage() {
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

  const dispatchFn = useAppDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { investments } = useAppSelector((state) => state.investment);
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatchFn(getInvestmentsDispatch(token, setIsLoading));
  }, [dispatchFn, token]);

  return (
    <main className=" font-nunito w-full">
      <section className=" rounded-br-lg rounded-bl-lg   flex w-full  flex-col  ">
        {investments.length <= 0 ? (
          <div className="w-full border border-secondary-1 rounded-[0.6rem] p-[3rem] text-center h-full ">
            <p>You have no investments!</p>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            className="flex-1  rounded-lg    grid grid-cols-3 max-smd:p-[1.5rem] max-2xl:grid-cols-2 max-smd:grid-cols-1 gap-[3rem] bg-secondary-2 mb-[2rem] p-[2rem] "
          >
            {investments
              .slice()
              .reverse()
              .map((investment: InvestmentItemType) => (
                <InvestmentItem
                  key={investment._id}
                  _id={investment._id}
                  activeDate={investment.activeDate}
                  amount={investment.amount}
                  dateCreated={investment.dateCreated}
                  roi={getLatestInvRoi(investment)}
                  investmentType={investment.investmentType}
                  investmentState={investment.investmentState}
                  payoutAvailable={
                    getLatestInvRoi(investment)
                      ? formatNumber(
                          Math.round(
                            (investment.amount * getLatestInvRoi(investment)) /
                              100
                          )
                        )
                      : 0
                  }
                  payoutDate={investment.payoutDate}
                />
              ))}
          </motion.div>
        )}
      </section>
    </main>
  );
}
