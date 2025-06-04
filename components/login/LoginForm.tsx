"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "@/utils/inputValidator";
import InputComponent from "../InputComponent";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
// import { useAppDispatch } from "../../hooks/customHook";
// import { loginInvestorHandler } from "@/actions/investorAction";
// import { toastError, toastSuccess } from "@/utils/toastFuncs";
// import { FaRegCircleCheck } from "react-icons/fa6";
// import { LuBadgeAlert } from "react-icons/lu";
import { FallingLines } from "react-loader-spinner";
// import { useRouter } from "next/navigation";
import Link from "next/link";
// import { loginInvestorDispatch } from "@/actions/investorActions";

const LoginForm = () => {
  type FormData = {
    email: string;
    password: string;
  };

  //   const router = useRouter();

  //   const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const resetForm = () => {
    reset({
      email: "",
      password: "",
    });
    // router.replace(`/dashboard`);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // dispatch(
    //   loginInvestorDispatch(
    //     data,
    //     setIsLoading,
    //     toastSuccess,
    //     toastError,
    //     <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-blue" />,
    //     <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] text-color-red" />,
    //     resetForm
    //   )
    // );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <InputComponent
        placeholder={"Email"}
        type={"email"}
        register={register}
        error={errors}
        name={"email"}
        validation={registrationOption.email}
        borderColor="border-color-blue"
        icon={
          <AiOutlineMail className="absolute w-[2.2rem] h-[2.2rem] top-[1rem] left-[1rem] text-color-blue" />
        }
      />
      <InputComponent
        placeholder={"Password"}
        type={"password"}
        register={register}
        error={errors}
        name={"password"}
        validation={registrationOption.password}
        borderColor="border-color-blue"
        icon={
          <IoMdLock className="absolute w-[2.2rem] h-[2.2rem] top-[1rem] left-[1rem] text-color-primary-1" />
        }
      />
      <div className="flex justify-end">
        <Link href={"/forgot-password"} className="text-color-blue">
          Forgot Password?
        </Link>
      </div>
      <button
        disabled={isLoading}
        type="submit"
        className={`mt-[3rem] py-[1rem] flex justify-center items-center bg-secondary-1 text-white w-full border border-secondary-1 rounded-lg transition-all duration-300 font-semibold  ease-in cursor-pointer hover:shadow-xl ${
          isLoading && "opacity-75"
        }`}
      >
        {isLoading ? (
          <FallingLines height="25" width="25" color={"white"} visible={true} />
        ) : (
          "Login"
        )}
      </button>
    </form>
  );
};

export default LoginForm;
