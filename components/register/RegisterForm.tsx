"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "@/utils/inputValidator";
import InputComponent from "../InputComponent";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
// import { fileHandler } from "../utils/helper-functions";
// import { useAppDispatch } from "@/hooks/customHook";
// import { createInvestorDispatch } from "@/actions/investorAction";
import { FallingLines } from "react-loader-spinner";
// import noImg from "../assets/no-image-svgrepo-com.svg";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";
import { IoMdLock } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
// import { registerInvestorDispatch } from "@/actions/investorActions";

type FormData = {
  fullName: string;
  email: string;
  address: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  //   const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const [referralId, setReferralId] = useState<string>(pathname.split("/")[3]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      email: "",
      address: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const resetForm = () => {
    reset({
      fullName: "",
      email: "",
      address: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });

    router.push("/login");
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const formattedData = {
      name: data.fullName,
      email: data.email,
      address: data.address,
      phoneNumber: data.phoneNumber,
      referralId: referralId,
      password: data.password,
      passwordConfirm: data.confirmPassword,
    };
    // dispatch(
    //   registerInvestorDispatch(
    //     formattedData,
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full">
      <div className=" flex flex-wrap justify-between">
        <InputComponent
          placeholder={"Joseph Rice"}
          type={"text"}
          register={register}
          error={errors}
          name={"fullName"}
          label="Full Name"
          pl="pl-[1rem]"
          containerWidth="w-[45%] "
          validation={registrationOption.name}
        />
        <InputComponent
          placeholder={"jo@gmail.com"}
          type={"email"}
          register={register}
          error={errors}
          name={"email"}
          pl="pl-[1rem]"
          label="Email"
          containerWidth="w-[45%] "
          validation={registrationOption.email}
        />
        <InputComponent
          placeholder={"2104-2216-9139"}
          type={"text"}
          register={register}
          error={errors}
          name={"phoneNumber"}
          pl="pl-[1rem]"
          label="Phone Number"
          containerWidth="w-[45%] "
          validation={registrationOption.phoneNumber}
        />
        <InputComponent
          placeholder={"Texas, USA"}
          type={"text"}
          register={register}
          error={errors}
          name={"address"}
          pl="pl-[1rem]"
          label="Address"
          containerWidth="w-[45%] "
          validation={registrationOption.address}
        />
        {/* <div className="w-[45%] mb-[2rem]">
          <label htmlFor="referral-id" className="mb-0">
            Referral (Optional)
          </label>
          <input
            type="text"
            name="referral-id"
            id="referral-id"
            placeholder="Referral"
            className="w-full p-[1rem] rounded-lg mt-[.5rem] focus:ring-0 focus:outline-none outline-none ring-0 border border-color-blue"
            value={referralId}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) => {
              setReferralId(e.target.value);
            }}
          />
        </div> */}
        <InputComponent
          placeholder={"Password"}
          label="Password"
          type={"password"}
          register={register}
          error={errors}
          name={"password"}
          validation={registrationOption.password}
          containerWidth="w-[45%] "
          icon={
            <IoMdLock className="absolute w-[2.2rem] h-[2.2rem] top-[1rem] left-[1rem] text-black" />
          }
        />
        <InputComponent
          placeholder={"Confirm Password"}
          label="Confirm Password"
          type={"password"}
          register={register}
          error={errors}
          name={"confirmPassword"}
          validation={registrationOption.password}
          containerWidth="w-[45%] "
          icon={
            <IoMdLock className="absolute w-[2.2rem] h-[2.2rem] top-[1rem] left-[1rem] text-black" />
          }
        />
      </div>
      <button
        type="submit"
        className={`mt-[3rem] py-[1rem] flex justify-center items-center bg-secondary-1 text-white w-full border border-secondary-1 rounded-lg transition-all duration-300 font-semibold  ease-in cursor-pointer  hover:shadow-xl `}
      >
        {isLoading ? (
          <FallingLines height="20" width="20" color={"white"} visible={true} />
        ) : (
          "Register"
        )}
      </button>
    </form>
  );
};

export default RegisterForm;
