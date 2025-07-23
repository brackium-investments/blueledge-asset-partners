"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "@/utils/inputValidator";
import InputComponent from "@/components/InputComponent";
import { useAppDispatch } from "@/hooks/state-hook";
import { IoMdLock } from "react-icons/io";
import { useRouter } from "next/navigation";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";
import { RotatingLines } from "react-loader-spinner";
import { useAppSelector } from "@/hooks/state-hook";
import { resetPasswordDispatch } from "@/actions/authAction";

const ResetPassword = () => {
  const dispatch = useAppDispatch();

  const { otp } = useAppSelector((state) => state.auth);
  const router = useRouter();

  type FormData = {
    password: string;
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      password: "",
    },
  });

  const resetForm = () => {
    reset({
      password: "",
    });
    router.replace(`/login`);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const formattedData = {
      otp,
      password: data.password,
    };
    dispatch(
      resetPasswordDispatch(
        formattedData,
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-[2rem]">
      <InputComponent
        placeholder={"Password"}
        type={"password"}
        register={register}
        error={errors}
        name={"password"}
        validation={registrationOption.password}
        borderColor="border-color-blue"
        icon={<IoMdLock className=" w-[2.2rem] h-[2.2rem]  text-black" />}
      />

      <button
        disabled={isLoading}
        type="submit"
        className={`mt-[3rem] py-[1rem] flex justify-center items-center bg-secondary-1 text-white w-full border border-secondary-1 rounded-lg transition-all duration-300 font-semibold  ease-in cursor-pointer  hover:shadow-xl ${
          isLoading && "opacity-75"
        }`}
      >
        {isLoading ? (
          <RotatingLines width="25" strokeColor="white" />
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default ResetPassword;
