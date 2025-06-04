"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { registrationOption } from "@/utils/inputValidator";
import InputComponent from "@/components/InputComponent";
// import { useAppDispatch } from "@/hooks/customHook";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";
import { FallingLines } from "react-loader-spinner";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { forgotPasswordDispatch } from "@/actions/investorActions";

const ForgotPassswordComp = () => {
  //   const pathname = usePathname();
  //   const dispatch = useAppDispatch();
  //   const router = useRouter();

  type FormData = {
    email: string;
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
    },
  });

  const resetForm = () => {
    reset({
      email: "",
    });
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // dispatch(
    //   forgotPasswordDispatch(
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-[2rem]">
      <InputComponent
        placeholder={"Email"}
        type={"email"}
        register={register}
        error={errors}
        name={"email"}
        validation={registrationOption.email}
        borderColor="border-color-blue"
        icon={
          <AiOutlineMail className="absolute w-[2.2rem] h-[2.2rem] top-[1rem] left-[1rem] text-black" />
        }
      />
      <button
        disabled={isLoading}
        type="submit"
        className={`mt-[3rem] py-[1rem] flex justify-center items-center bg-secondary-1 text-white w-full border border-secondary-1 rounded-lg transition-all duration-300 font-semibold ease-in cursor-pointer  hover:shadow-xl ${
          isLoading && "opacity-75"
        }`}
      >
        {isLoading ? (
          <FallingLines height="25" width="25" color={"white"} visible={true} />
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default ForgotPassswordComp;
