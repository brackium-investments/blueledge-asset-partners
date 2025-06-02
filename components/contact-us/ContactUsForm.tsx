/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputComponent from "../InputComponent";
import { FallingLines } from "react-loader-spinner";
// import { toastError, toastSuccess } from "@/utils/toastFuncs";
// import { FaRegCircleCheck } from "react-icons/fa6";
// import { LuBadgeAlert } from "react-icons/lu";
// import { useAppDispatch } from "@/hooks/customHook";
// import { contactMeDispatch } from "@/actions/contactMeActions";
import { registrationOption } from "@/utils/inputValidator";

type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const ContactForm = () => {
  //   const dispatch = useAppDispatch();
  const [message, setMessage] = useState<string>("");
  const [msgError, setMsgError] = useState<string>("");
  const [loading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const resetFunc = () => {
    reset({
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  const onSubmit: SubmitHandler<FormData> = async (data: any) => {
    if (!message) {
      setMsgError("Please enter some message");
      return;
    }
    if (message.length > 150) {
      setMsgError("Message should not exceed 150 characters");
      return;
    }

    const modifiedData = {
      name: data.fullName,
      email: data.email,
      number: data.phoneNumber,
      message,
    };

    // dispatch(contactMeDispatch(modifiedData));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
      <InputComponent
        placeholder={"Enter your fullname"}
        type={"text"}
        register={register}
        error={errors}
        name={"fullName"}
        label="Full Name"
        pl="pl-[1rem]"
        containerWidth="w-full"
        validation={registrationOption.name}
      />
      <InputComponent
        placeholder={"Enter your email"}
        type={"email"}
        register={register}
        error={errors}
        name={"email"}
        label="Email"
        pl="pl-[1rem]"
        containerWidth="w-full"
        validation={registrationOption.email}
      />
      <InputComponent
        placeholder={"Enter your phone number"}
        type={"number"}
        register={register}
        error={errors}
        name={"phoneNumber"}
        pl="pl-[1rem]"
        label="Phone Number"
        containerWidth="w-full"
        validation={registrationOption.phoneNumber}
      />
      <div className="flex flex-col w-full">
        <label className="mb-[0.5rem] text-color-blue">Message</label>
        <textarea
          rows={6}
          maxLength={150}
          required
          value={message}
          placeholder="Enter your message"
          onChange={(e: any) => {
            setMessage(e.target.value);
          }}
          className="rounded-md resize-none  focus:ring-0 focus:outline-none outline-none ring-0 p-[1rem] border border-color-border "
        />
        <small>{msgError}</small>
      </div>
      <button
        type="submit"
        className="mt-[4rem] flex items-center justify-center w-full py-[1rem] text-center text-[2rem] font-medium rounded-md bg-secondary-1 text-white hover:text-secondary-1 hover:bg-transparent transition-all duration-150 ease-in border border-secondary-1 cursor-pointer"
      >
        {loading ? (
          <FallingLines color="#ffffff" width="30" visible={true} />
        ) : (
          "Send"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
