"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "@/utils/inputValidator";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import { RotatingLines } from "react-loader-spinner";
import { useAppDispatch, useAppSelector } from "@/hooks/state-hook";
import InputComponent from "../../InputComponent";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { futureMonth } from "@/utils/helperFns";
import { createLoanDispatch } from "@/actions/loanActions";

const ApplyForLoanForm = () => {
  const dispatchFn = useAppDispatch();

  const router = useRouter();

  const { token } = useAppSelector((state) => state.auth);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [contractPeriod, setContractPeriod] = useState<any>(futureMonth(8));

  type FormData = {
    address: string;
    amountRequested: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      address: "",
      amountRequested: "",
    },
  });

  const resetForm = () => {
    reset({
      address: "",
      amountRequested: "",
    });

    router.push(`/dashboard/loan-history`);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const newData = {
      address: data.address,
      amount: data.amountRequested,
      contractPeriod,
    };

    console.log(newData);
    dispatchFn(
      createLoanDispatch(
        newData,
        token,
        setIsLoading,
        toastSuccess,
        toastError,
        <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-black" />,
        <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />,
        resetForm
      )
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex flex-wrap justify-between w-full">
        <InputComponent
          placeholder={"Enter your wallet address"}
          type={"text"}
          label="Your Wallet Address"
          register={register}
          error={errors}
          name={"address"}
          pl="pl-[2rem]"
          validation={registrationOption.walletAddress}
          containerWidth="w-[45%] max-xmd:w-[48%] max-smd:w-full"
          inputBg="bg-color-primary-2"
          labelTextColor="text-black"
        />

        <InputComponent
          placeholder={"Enter amount requested"}
          type={"number"}
          label="Amount (eqv in USD)"
          register={register}
          error={errors}
          name={"amountRequested"}
          pl="pl-[2rem]"
          min={100}
          containerWidth="w-[45%] max-xmd:w-[48%] max-smd:w-full"
          inputBg="bg-color-primary-2"
          validation={registrationOption.amountPaid(10_000, 100_000)}
          labelTextColor="text-black"
        />
      </div>
      <div className="w-[45%] max-xmd:w-[48%] max-smd:w-full mb-[2rem]">
        <label
          htmlFor="contract-period"
          className="capitalize  text-color-primary-1   "
        >
          Contract period
        </label>
        <div className="px-[1rem] bg-white  rounded-md border border-color-primary-1 mt-[1rem]">
          <select
            name="contract-period"
            id="contract-period"
            className="mt-[.5rem] w-full py-[1rem]  text-color-primary-1 focus:border-0 focus:outline-none focus:ring-0 ring-0 outline-none"
            onChange={(e) => {
              setContractPeriod(e.target.value);
            }}
          >
            <option value={`${futureMonth(8)}`}>8 months</option>
            <option value={`${futureMonth(12)}`}>1 year</option>
            <option value={`${futureMonth(16)}`}>1 year and 4 months</option>
            <option value={`${futureMonth(20)}`}>1 year and 8 months</option>
            <option value={`${futureMonth(24)}`}>2 years</option>
          </select>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          checked={acceptTerms}
          onChange={() => {
            setAcceptTerms((prevState) => !prevState);
          }}
        />
        <label htmlFor="terms" className="ml-[0.5rem] cursor-pointer">
          Accept terms and conditions
        </label>
      </div>
      <button
        disabled={!acceptTerms || isLoading}
        type="submit"
        className={`mt-[2rem] py-[1rem] flex justify-center items-center bg-secondary-1 px-[3rem] sm:w-full sm:mt-[3rem] text-white  border border-secondary-1 rounded-lg transition-all duration-300 ease-in disabled:bg-gray-300 disabled:border-gray-300 disabled:cursor-not-allowed cursor-pointer max-smd:w-full  ${
          isLoading && "opacity-75"
        }`}
      >
        {isLoading ? (
          <RotatingLines width="25" strokeColor="white" />
        ) : (
          "Apply for Loan"
        )}
      </button>
    </form>
  );
};

export default ApplyForLoanForm;
