"use client";
import React from "react";
import Auth from "../Auth";
import RegisterForm from "./RegisterForm";

const RegisterComp = () => {
  return (
    <Auth containerClassName="w-[54%] max-2xl:w-[60%] max-xl:w-[70%] max-lg:w-[85%] max-md:w-[90%]  ">
      <p className="text-[2.5rem] font-semibold text-secondary-1 text-center mb-[3rem]">
        Register
      </p>
      <RegisterForm />
    </Auth>
  );
};

export default RegisterComp;
