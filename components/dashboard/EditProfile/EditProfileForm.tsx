"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "../../../utils/inputValidator";
import InputComponent from "../../InputComponent";
// import { toastError, toastSuccess } from "../../../utils/toastFuncs";
// import { useAppDispatch } from "@/hooks/stateHooks";
import { FallingLines } from "react-loader-spinner";
// import { FaRegCircleCheck } from "react-icons/fa6";
// import { LuBadgeAlert } from "react-icons/lu";
import { useRouter } from "next/navigation";

type FormData = {
  fullName: string;
  email: string;
  address: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

const EditProfileForm = () => {
  //   const dispatch = useAppDispatch();
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const resetForm = () => {
    reset({
      fullName: "",
      email: "",
      address: "",
      phoneNumber: "",
    });

    router.push("/sign-in");
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const formattedData = {
      fullName: data.fullName,
      email: data.email,
      address: data.address,
      phoneNumber: data.phoneNumber,
    };

    console.log(formattedData);

    // dispatch(
    //   createUserDispatch(
    //     formattedData,
    //     setIsLoading,
    //     toastSuccess,
    //     toastError,
    //     <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
    //     <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />,
    //     resetForm
    //   )
    // );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="w-full text-color-white"
    >
      <div className=" flex flex-wrap justify-between pt-[2.5rem] ">
        <InputComponent
          placeholder={"Enter your fullname"}
          type={"text"}
          register={register}
          error={errors}
          name={"fullName"}
          label="Full Name"
          labelTextColor="text-black"
          pl="pl-[1rem]"
          containerWidth="w-[48%] "
          borderColor="border-color-blue"
          validation={registrationOption.name(false)}
        />
        <InputComponent
          placeholder={"Enter your mail address"}
          type={"email"}
          register={register}
          error={errors}
          name={"email"}
          pl="pl-[1rem]"
          label="Email"
          containerWidth="w-[48%] "
          labelTextColor="text-black"
          borderColor="border-color-blue"
          validation={registrationOption.email(false)}
        />
        <InputComponent
          placeholder={"Enter your phone number"}
          type={"text"}
          register={register}
          error={errors}
          name={"phoneNumber"}
          pl="pl-[1rem]"
          label="Phone Number"
          containerWidth="w-[48%] "
          labelTextColor="text-black"
          borderColor="border-color-blue"
          validation={registrationOption.phoneNumber(false)}
        />
        <InputComponent
          placeholder={"Enter your home address"}
          type={"text"}
          register={register}
          error={errors}
          name={"address"}
          pl="pl-[1rem]"
          label="Address"
          containerWidth="w-[48%] "
          labelTextColor="text-black"
          borderColor="border-color-blue"
          validation={registrationOption.address(false)}
        />
      </div>
      <button
        type="submit"
        className={`mt-[3rem] py-[1rem] flex justify-center items-center bg-color-primary-1 text-color-white w-max px-[2rem] border border-color-woody-2 rounded-lg transition-all duration-300 font-semibold bg-color-woody-2 ease-in  `}
      >
        {isLoading ? (
          <FallingLines height="25" width="25" color={"white"} visible={true} />
        ) : (
          "Update"
        )}
      </button>
    </form>
  );
};

export default EditProfileForm;
