"use client";
import React from "react";
import QrCode from "@/components/QrCode";
import CopyAddressToClipboard from "@/components/CopyAddressToClipboard";
import ApplyForLoanForm from "./ApplyForLoanForm";

const ApplyForLoanModal = () => {
  return (
    <div
      className={`bg-white flex font-nunito w-full mb-[2rem] rounded-[0.6rem] `}
    >
      <div className="overflow-y-auto w-full">
        <div className="py-[1.5rem] px-[1rem]  border-b border-secondary-1 flex items-center justify-between">
          <p className="w-full md:w-auto md:text-left text-center  text-[2rem]  text-secondary-1 font-bold uppercase">
            Apply for Loan
          </p>
        </div>

        <div className="flex flex-col w-full p-[3rem] max-smd:p-[1.5rem]">
          <p className="text-secondary-1 font-medium text-center mt-[2rem] text-[1.8rem]">
            USDT (BEP20)
          </p>
          <div className="flex w-full items-center justify-center mt-[3rem]">
            <QrCode />
          </div>
          <div className="flex items-center justify-center mt-[1.5rem] ]">
            <CopyAddressToClipboard />
          </div>
          <div className="py-[2rem] pl-[3rem] pr-[2rem]">
            <p className="text-[1.8rem] text-secondary-1 font-semibold ">
              Instructions
            </p>
            <ol className="list-decimal text-color-secondary-2">
              <li>
                Copy or scan address for payment. (please make sure your are
                sending with BSC network).
              </li>
              <li>
                Make a payment of{" "}
                <span className="text-secondary-1">
                  25% of the loan requested
                </span>{" "}
                for to the wallet address.
              </li>
              <li>
                Input the amount you want to borrow and the wallet address used
                for payment and submit
              </li>
              <li>Wait for it to be verified.</li>
            </ol>
          </div>
          <div className="px-[2rem] max-smd:px-0 pb-[4rem]">
            <ApplyForLoanForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyForLoanModal;
