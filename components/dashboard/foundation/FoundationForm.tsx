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

import { donateToFoundationDispatch } from "@/actions/foundationsActions";

const FoundationForm = () => {
  const dispatchFn = useAppDispatch();

  const { token } = useAppSelector((state) => state.auth);

  const [isLoading, setIsLoading] = useState<boolean>(false);

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
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const newData = {
      address: data.address,
      amount: Number(data.amountPaid),
    };

    dispatchFn(
      donateToFoundationDispatch(
        newData,
        token,
        setIsLoading,
        toastSuccess,
        toastError,
        <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-blue" />,
        <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] text-color-red" />,
        resetForm
      )
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex flex-wrap justify-between w-full max-smd:flex-col">
        <InputComponent
          placeholder={"Enter your wallet address"}
          type={"text"}
          label="Your Wallet Address"
          register={register}
          error={errors}
          name={"address"}
          pl="pl-[2rem]"
          validation={registrationOption.walletAddress}
          containerWidth="w-[45%] max-xmd:w-[48%] max-smd:w-full "
          inputBg="bg-color-primary-2"
          labelTextColor="text-black"
        />

        <InputComponent
          placeholder={"Enter amount to be donated"}
          type={"number"}
          label="Amount (USDT BEP20)"
          register={register}
          error={errors}
          name={"amountPaid"}
          pl="pl-[2rem]"
          min={100}
          containerWidth="w-[45%] max-xmd:w-[48%] max-smd:w-full"
          inputBg="bg-color-primary-2"
          validation={registrationOption.amountPaid(0, 100_000_000)}
          labelTextColor="text-black"
        />
      </div>

      <button
        type="submit"
        className={`mt-[2rem] py-[1rem] flex justify-center items-center bg-secondary-1 px-[3rem] sm:w-full sm:mt-[3rem] text-white  border border-secondary-1 rounded-lg transition-all duration-300 ease-in disabled:bg-gray-300 disabled:border-gray-300 disabled:cursor-not-allowed cursor-pointer max-smd:w-full  ${
          isLoading && "opacity-75"
        }`}
      >
        {isLoading ? (
          <RotatingLines width="25" strokeColor="white" />
        ) : (
          "Donate"
        )}
      </button>
    </form>
  );
};

export default FoundationForm;
