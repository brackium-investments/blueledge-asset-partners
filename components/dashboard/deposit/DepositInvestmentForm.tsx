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
import { InvestmentPlan, investmentPlans } from "@/data/home";
import { createInvestmentDispatch } from "@/actions/investmentActions";
import { useRouter } from "next/navigation";

const DepositInvestmentForm = () => {
  const router = useRouter();

  const dispatchFn = useAppDispatch();

  const { token } = useAppSelector((state) => state.auth);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
  const [investmentPlan, setInvestmentPlan] = useState<string>("Regular Phase");
  const [investmentType, setInvestmentType] = useState<string>("STOCKS");

  type FormData = {
    address: string;
    amountPaid: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      address: "",
      amountPaid: "",
    },
  });

  const resetForm = () => {
    reset({
      address: "",
      amountPaid: "",
    });

    router.push("/dashboard/investments");
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const newData = {
      address: data.address,
      amount: Number(data.amountPaid),
      investmentPlan: investmentPlan.split(" ")[0].toLocaleUpperCase(),
      investmentType: investmentType,
    };

    dispatchFn(
      createInvestmentDispatch(
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

  const minAmountToBePaid = investmentPlans.filter(
    (invPlan: InvestmentPlan) => invPlan.type === investmentPlan
  )[0].min;

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

        <div className="w-[45%]  max-xmd:w-[48%] max-smd:w-full mb-[2rem]">
          <label htmlFor="investment-type" className="capitalize  text-black  ">
            Investment Type
          </label>
          <div className="px-[1rem] bg-white  rounded-md border border-black mt-[0.5rem]">
            <select
              name="investment-type"
              id="investment-type"
              className="mt-[.5rem] w-full  text-black py-[0.8rem] focus:border-0 focus:outline-none focus:ring-0 ring-0 outline-none"
              onChange={(e) => {
                setInvestmentType(e.target.value);
              }}
            >
              <option value={`STOCKS`}>Stock and ETFs</option>
              <option value={`CRYPTO`}>Crypto</option>
              <option value={`MUTUALFUNDS`}>Mutual funds</option>
            </select>
          </div>
        </div>

        <div className="w-[45%]  max-xmd:w-[48%] max-smd:w-full mb-[2rem]">
          <label htmlFor="investment-plan" className="capitalize  text-black  ">
            Investment Plan
          </label>
          <div className="px-[1rem] bg-white  rounded-md border border-black mt-[0.5rem]">
            <select
              name="investment-plan"
              id="investment-plan"
              className="mt-[.5rem] w-full py-[0.9rem]  text-black focus:border-0 focus:outline-none focus:ring-0 ring-0 outline-none"
              onChange={(e) => {
                setInvestmentPlan(e.target.value);
              }}
            >
              {investmentPlans.map((invPlan: InvestmentPlan) => (
                <option value={invPlan.type} key={invPlan.type}>
                  {invPlan.type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <InputComponent
          placeholder={"Enter amount paid"}
          type={"number"}
          label="Amount (eqv in USD)"
          register={register}
          error={errors}
          name={"amountPaid"}
          pl="pl-[2rem]"
          min={100}
          containerWidth="w-[45%]  max-xmd:w-[48%] max-smd:w-full"
          inputBg="bg-color-primary-2"
          validation={registrationOption.amountPaid(minAmountToBePaid)}
          labelTextColor="text-black"
        />
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
          "Create Investment"
        )}
      </button>
    </form>
  );
};

export default DepositInvestmentForm;
