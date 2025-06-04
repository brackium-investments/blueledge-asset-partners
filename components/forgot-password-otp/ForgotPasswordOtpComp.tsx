"use client";
// import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
// import { authActions } from "@/slices/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
// import { FallingLines } from "react-loader-spinner";
// import OtpInput from "react-otp-input";
import OtpInput from "react18-input-otp";

const ForgotPasswordOtpComp = () => {
  //   const { otp } = useAppSelector((state) => state.auth);
  //   const dispatchFn = useAppDispatch();

  const [otp, setOtp] = useState();

  const router = useRouter();

  return (
    <div className="font-outfit flex flex-cols items-center flex-col ">
      <h3 className="text-[4rem] font-medium sm:text-[3rem]">
        Forgot Password
      </h3>
      <p className="text-[#22222299] text-center">
        We sent a code to{" "}
        <span className="text-[#222222]">johndoe@gmail.com</span>
      </p>
      <div className="self-stretch flex flex-col items-center mt-[4rem]">
        <OtpInput
          value={otp}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(enteredOtp: any) => {
            // dispatchFn(authActions.setResetOtp(enteredOtp));
            setOtp(enteredOtp);
          }}
          numInputs={4}
          isInputNum={true}
          successStyle={"!border-color-purple-1"}
          inputStyle="!border-[0.2rem] !border-secondary-1 ring-0 outline-none focus:ring-0  focus:outline-0  !rounded-[0.8rem] !text-black-1 !active:border-secondary-1 !:outline-transparent   !w-[9.4rem] !h-[9.4rem] !text-[4rem] !font-sans otp "
          separator={<span className="w-[2rem]"></span>}
        />
        <button
          disabled={!otp}
          type="submit"
          className={`mt-[3.5rem] py-[2rem] flex justify-center hover:shadow-lg  font-medium items-center bg-secondary-1 text-white w-full border border-secondary-1 h  rounded-lg transition-all duration-300 ease-in  cursor-pointer `}
          onClick={() => {
            router.push("/auth/reset-password");
          }}
        >
          Reset password
        </button>
      </div>
      <div className="flex flex-col items-center mt-[2.4rem]">
        <div className="flex items-center">
          <p className="text-[#222222CC]">Didn’t receive the email? </p>
          <button
            type="button"
            className="text-secondary-1  transition-all duration-300 ease-in ml-[0.5rem]"
          >
            Click to resend
          </button>
        </div>
        <Link
          href="/login"
          className="flex mt-[1rem] items-center text-secondary-1   transition-all duration-150 ease-in"
        >
          <IoIosArrowRoundBack className="w-[3rem] h-[3rem] text-current mr-[0.5rem]" />
          <p className="text-current">Back to login</p>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordOtpComp;
