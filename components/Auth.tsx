"use client";
import React from "react";

const Auth: React.FC<{
  children: React.ReactNode;
  containerClassName?: string;
}> = ({ children, containerClassName }) => {
  return (
    <section
      className={`w-full min-h-[80vh] flex justify-center items-center bg-secondary-2 font-sans py-[5rem] `}
    >
      <div
        className={`bg-white px-[2rem] py-[3rem] rounded-xl  shadow-lg ${containerClassName} `}
      >
        {children}
      </div>
    </section>
  );
};

export default Auth;
