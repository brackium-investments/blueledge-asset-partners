import React, { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useAppSelector, useAppDispatch } from "@/hooks/state-hook";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";
import InputComponent from "../../InputComponent";
import { useForm, SubmitHandler } from "react-hook-form";
import { registrationOption } from "@/utils/inputValidator";
import { updateInvestorDispatch } from "@/actions/investorActions";

const UpdateInvestorForm = () => {
  const dispatch = useAppDispatch();

  type FormData = {
    name: string;
    email: string;
    address: string;
    phoneNumber: string;
  };

  const { token }: { token: string } = useAppSelector((state) => state.auth);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
    },
  });

  const resetForm = () => {
    reset({
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
    });
  };

  // manage loading state
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const formData: Record<string, string> = { ...data };

    const updatedData: Record<string, string> = {};

    let objectIsActive = false;

    Object.keys(formData).forEach((info) => {
      if (formData[info].length > 0) {
        updatedData[`${info}`] = formData[info].trim();
        objectIsActive = true;
      }
    });

    if (objectIsActive) {
      dispatch(
        updateInvestorDispatch(
          updatedData,
          token,
          setIsLoading,
          toastSuccess,
          toastError,
          <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
          <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />,
          resetForm
        )
      );
    } else {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap  w-full justify-between">
        <InputComponent
          placeholder={"Enter full name"}
          type={"text"}
          register={register}
          error={errors}
          name={"name"}
          label="Full Name"
          pl="pl-[1rem]"
          containerWidth="w-[45%] xmd:w-[48%] sm:w-full"
          validation={registrationOption.name(false)}
        />
        <InputComponent
          placeholder={"Enter email address"}
          type={"email"}
          register={register}
          error={errors}
          name={"email"}
          pl="pl-[1rem]"
          label="Email"
          containerWidth="w-[45%] xmd:w-[48%] sm:w-full "
          validation={registrationOption.email(false)}
        />
        <InputComponent
          placeholder={"Enter phone number"}
          type={"text"}
          register={register}
          error={errors}
          name={"phoneNumber"}
          pl="pl-[1rem]"
          label="Phone Number"
          containerWidth="w-[45%] xmd:w-[48%] sm:w-full"
          validation={registrationOption.phoneNumber(false)}
        />
        <InputComponent
          placeholder={"Enter home address"}
          type={"text"}
          register={register}
          error={errors}
          name={"address"}
          pl="pl-[1rem]"
          label="Address"
          containerWidth="w-[45%] xmd:w-[48%] sm:w-full"
          validation={registrationOption.address(false)}
        />
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

export default UpdateInvestorForm;
