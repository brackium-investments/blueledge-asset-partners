"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "@/utils/inputValidator";
import InputComponent from "@/components/InputComponent";
import { IoMdLock } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "@/hooks/state-hook";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";
import { RotatingLines } from "react-loader-spinner";
import { updateMyPasswordDispatch } from "@/actions/investorActions";
import { investorActions } from "@/slices/investorSlice";
import { userLogout } from "@/actions/authAction";

const UpdatePasswordForm = () => {
  type FormData = {
    passwordCurrent: string;
    newPassword: string;
  };

  const { token }: { token: string } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      passwordCurrent: "",
      newPassword: "",
    },
  });

  const resetForm = () => {
    reset({
      passwordCurrent: "",
      newPassword: "",
    });
  };

  const logoutHandler = () => {
    dispatch(investorActions.logoutHandler());
    dispatch(userLogout());
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const formattedData = {
      currentPassword: data.passwordCurrent,
      newPassword: data.newPassword,
    };

    dispatch(
      updateMyPasswordDispatch(
        formattedData,
        token,
        setIsLoading,
        toastSuccess,
        toastError,
        <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
        <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />,
        resetForm,
        logoutHandler
      )
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex flex-wrap  w-full justify-between">
        <InputComponent
          placeholder={"Current Password"}
          label="Current Password"
          type={"password"}
          register={register}
          error={errors}
          name={"passwordCurrent"}
          containerWidth="w-[45%] xmd:w-[48%] sm:w-full"
          validation={registrationOption.password}
          icon={
            <IoMdLock className="absolute w-[2.2rem] h-[2.2rem] top-[1rem] left-[1rem] text-black" />
          }
        />
        <InputComponent
          placeholder={"New Password"}
          type={"password"}
          label="New Password"
          register={register}
          error={errors}
          containerWidth="w-[45%] xmd:w-[48%] sm:w-full"
          name={"newPassword"}
          validation={registrationOption.password}
          icon={
            <IoMdLock className="absolute w-[2.2rem] h-[2.2rem] top-[1rem] left-[1rem] text-black" />
          }
        />
        {/* <InputComponent
          placeholder={"New Password Confirm"}
          type={"password"}
          label="New Password Confirm"
          register={register}
          error={errors}
          containerWidth="w-[45%] xmd:w-[48%] sm:w-full"
          name={"confirmNewPassword"}
          validation={registrationOption.password}
          icon={
            <IoMdLock className="absolute w-[2.2rem] h-[2.2rem] top-[1rem] left-[1rem] text-black" />
          }
        /> */}
      </div>

      <button
        disabled={isLoading}
        type="submit"
        className={`mt-[4rem] py-[1rem] flex justify-center items-center bg-secondary-1 text-white w-full border border-secondary-1 rounded-lg transition-all duration-300 ease-in cursor-pointer ${
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

export default UpdatePasswordForm;
