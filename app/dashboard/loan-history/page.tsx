"use client";
import { getLoansDispatch } from "@/actions/loanActions";
import LoanItem from "@/components/dashboard/apply-for-loan/LoanItem";
import { useAppDispatch, useAppSelector } from "@/hooks/state-hook";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

export type LoanItemType = {
  _id: string;
  amount: number;
  activeDate: string;
  dateCreated: string;
  loanState?: string;
  isActive?: boolean | string;
  contractPeriod: string;
};

export default function ApplyForLoanPage() {
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

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatchFn = useAppDispatch();

  const { loans } = useAppSelector((state) => state.loan);
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatchFn(getLoansDispatch(token, setIsLoading));
  }, [dispatchFn, token]);

  return (
    <main className=" font-nunito w-full">
      <section className=" rounded-br-lg rounded-bl-lg   flex w-full  flex-col  ">
        {isLoading ? (
          <div className="flex justify-center items-center w-full h-[calc(100vh-20rem)] mb-[2rem] bg-white rounded-[0.6rem]">
            <RotatingLines width="25" strokeColor="orange" />
          </div>
        ) : loans.length <= 0 ? (
          <div className="w-full border border-secondary-1 rounded-[0.6rem] p-[3rem] text-center h-full ">
            <p>You have no loans!</p>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            className="flex-1  rounded-lg   grid grid-cols-3 p-[3rem] max-smd:p-[1.5rem] max-2xl:grid-cols-2 max-smd:grid-cols-1  gap-[3rem] bg-secondary-2  "
          >
            {loans
              .slice()
              .reverse()
              .map((loan: LoanItemType) => (
                <LoanItem
                  key={loan._id}
                  _id={loan._id}
                  activeDate={loan.activeDate}
                  amount={loan.amount}
                  dateCreated={loan.dateCreated}
                  contractPeriod={loan.contractPeriod}
                  loanState={loan.loanState}
                />
              ))}
          </motion.div>
        )}
      </section>
    </main>
  );
}
