/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "@/utils/inputValidator";
import InputComponent from "../InputComponent";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import { useAppDispatch } from "@/hooks/state-hook";
import { RotatingLines } from "react-loader-spinner";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";
import { IoMdLock } from "react-icons/io";
import { useRouter } from "next/navigation";
import ProofImgComp from "../ProofOfImg";
import noImg from "../../assets/no-img.svg";
import { fileHandler } from "@/utils/fileHandler";
import { registerInvestorDispatch } from "@/actions/investorActions";

type FormData = {
  fullName: string;
  email: string;
  address: string;
  phoneNumber: string;
  password: string;
  ssn: string;
};

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [stateIssuedIDImg, setStateIssuedIDImg] = useState<any>(noImg);
  const [stateIssuedIDFileName, setStateIssuedIDFileName] =
    useState<string>("");
  const [stateIssuedIDImgObj, setStateIssuedIDImgObj] = useState<any>();
  const [stateIssuedIDErr, setStateIssuedIDErr] = useState<boolean>(false);

  const [driversLicenseImg, setDriversLicenseImg] = useState<any>(noImg);
  const [driversLicenseFileName, setDriversLicenseFileName] =
    useState<string>("");
  const [driversLicenseImgObj, setDriversLicenseImgObj] = useState<any>();
  const [driversLicenseErr, setDriversLicenseErr] = useState<boolean>(false);

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
      ssn: "",
    },
  });

  const resetForm = () => {
    reset({
      fullName: "",
      email: "",
      address: "",
      phoneNumber: "",
      password: "",
      ssn: "",
    });

    router.push("/login");

    setStateIssuedIDImg(noImg);
    setStateIssuedIDImgObj(noImg);
    setDriversLicenseImg(noImg);
    setDriversLicenseImgObj(noImg);
  };

  const stateIssuedIDImgHandler = (e: { target: { files: any } }) => {
    if (!e.target.files[0]) {
      return;
    }
    if (e.target.files[0].type.includes("image")) {
      setStateIssuedIDImg(fileHandler(e.target.files[0]));
      setStateIssuedIDErr(false);
    } else {
      setStateIssuedIDImg(undefined);
      setStateIssuedIDFileName(e.target.files[0].name);
      setStateIssuedIDErr(false);
    }

    setStateIssuedIDImgObj(e.target.files[0]);
  };

  const driversLicenseImgHandler = (e: { target: { files: any } }) => {
    if (!e.target.files[0]) {
      return;
    }
    if (e.target.files[0].type.includes("image")) {
      setDriversLicenseImg(fileHandler(e.target.files[0]));
      setDriversLicenseErr(false);
    } else {
      setDriversLicenseImg(undefined);
      setDriversLicenseFileName(e.target.files[0].name);
      setDriversLicenseErr(false);
    }
    setDriversLicenseImgObj(e.target.files[0]);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (stateIssuedIDImg === noImg && !stateIssuedIDFileName) {
      setStateIssuedIDErr(true);
      return;
    } else {
      setStateIssuedIDErr(false);
    }
    if (driversLicenseImg === noImg && !driversLicenseFileName) {
      setDriversLicenseErr(true);
      return;
    } else {
      setDriversLicenseErr(false);
    }

    const formattedData = {
      fullname: data.fullName,
      email: data.email,
      address: data.address,
      phoneNumber: data.phoneNumber,
      password: data.password,
      ssn: data.ssn,
      stateIssuedID: stateIssuedIDImgObj,
      driversLicense: driversLicenseImgObj,
    };

    console.log("Form Data:", formattedData);
    dispatch(
      registerInvestorDispatch(
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full">
      <p className="font-medium text-[2rem] mb-[1.5rem] text-secondary-1">
        Personal Info
      </p>
      <div className=" flex flex-wrap justify-between">
        <InputComponent
          placeholder={"Enter your fullname"}
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
          placeholder={"Enter your email"}
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
          placeholder={"Enter your phone number"}
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
          placeholder={"Enter your address"}
          type={"text"}
          register={register}
          error={errors}
          name={"address"}
          pl="pl-[1rem]"
          label="Address"
          containerWidth="w-[45%] "
          validation={registrationOption.address}
        />
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
      </div>
      <div className="mt-[3rem]">
        <p className="font-medium text-[2rem] mb-[1.5rem] text-secondary-1">
          KYC Info
        </p>
        <div className="w-full mt-[1rem] mb-[3rem] flex justify-between  ">
          <ProofImgComp
            name="State Issued ID"
            img={stateIssuedIDImg}
            fileName={stateIssuedIDFileName}
            setFileName={setStateIssuedIDFileName}
            setImg={stateIssuedIDImgHandler}
            text="Please make sure to upload a very clear image."
            err={stateIssuedIDErr}
          />
          <ProofImgComp
            fileName={driversLicenseFileName}
            setFileName={setDriversLicenseFileName}
            name="Driver's License"
            img={driversLicenseImg}
            setImg={driversLicenseImgHandler}
            text="Please make sure to upload a very clear image."
            err={driversLicenseErr}
          />
        </div>
        <InputComponent
          placeholder={"XXX-XX-XXXX"}
          label="Social Security Number (SSN)"
          type={"password"}
          register={register}
          error={errors}
          name={"ssn"}
          validation={registrationOption.ssn}
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
          <RotatingLines width="25" strokeColor="white" />
        ) : (
          "Register"
        )}
      </button>
    </form>
  );
};

export default RegisterForm;
