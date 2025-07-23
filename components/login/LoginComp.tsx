"use client";
import React from "react";
import Link from "next/link";
import Auth from "../Auth";
import LoginForm from "./LoginForm";

const LoginComp = () => {
  return (
    <Auth containerClassName="w-[35%] max-2xl:w-[45%] max-xlg:w-[55%] max-md:w-[65%] max-smd:w-[80%] max-sm:w-[90%]">
      <div className="w-full flex flex-col ">
        <p className="text-[2.5rem] font-semibold text-secondary-1 text-center mb-[3rem]">
          Login
        </p>
        <LoginForm />
        <div className="flex items-center justify-center mt-[3rem]">
          <p>Don&apos;t have an account?</p>
          <Link href="/register" className="text-secondary-1 ml-[0.75rem]">
            Register
          </Link>
        </div>
      </div>
    </Auth>
  );
};

export default LoginComp;
