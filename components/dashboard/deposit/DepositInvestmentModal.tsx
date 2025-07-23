"use client";
import React from "react";
import QrCode from "../../QrCode";
import CopyAddressToClipboard from "../../CopyAddressToClipboard";
import DepositInvestmentForm from "./DepositInvestmentForm";

const DepositInvestmentModal = () => {
  return (
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
          Instructions on how to make payment.
        </p>
        <ol className="list-decimal text-color-secondary-2">
          <li>
            Copy or scan address for payment. (please make sure your are sending
            with BSC network).
          </li>
          <li>Make payment to the wallet address.</li>
          <li>
            Input your wallet address, investment type, plan and the amount you
            paid.
          </li>
          <li>Create an investment and wait for it to be verified. </li>
        </ol>
      </div>
      <div className="px-[2rem]  max-smd:px-0 pb-[4rem]">
        <DepositInvestmentForm />
      </div>
    </div>
  );
};

export default DepositInvestmentModal;
