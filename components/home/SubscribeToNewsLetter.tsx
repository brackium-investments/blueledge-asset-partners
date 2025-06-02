/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import SectionContainer from "../SectionContainer";
import { FallingLines } from "react-loader-spinner";

const SubscribeToNewsLetter = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubscribeSubmit = async (e: any) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter a valid email");
      return;
    }
    setIsLoading(true);
  };

  return (
    <SectionContainer
      containerClassname={` pt-[40rem] -mt-[30rem] font-sans pb-[15rem]  bg-secondary-2 relative z-10 $ flex items-center justify-between`}
    >
      <div className="w-[45%]">
        <h3 className="text-secondary-1 font-bold text-[5rem]">
          Subscribe to our newsletter
        </h3>
        <p>
          Sign up to receive our latest research on the forces shaping global
          economies and markets.
        </p>
      </div>
      <div className="w-[45%]">
        <form
          onSubmit={(e) => {
            handleSubscribeSubmit(e);
          }}
        >
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-[1rem] font-medium text-color-primary-1 smd:text-left"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleInputChange}
              id="email"
              className="border ring-0 outline-0 border-gray-400 px-[2rem] py-[1rem] rounded-md text-black bg-white"
            />
            {error && <small className="text-red-500">{error}</small>}
          </div>
          <button className="mt-[2rem] smd:w-full bg-secondary-1 text-white rounded-md text-center py-[1rem] px-[2.5rem] font-medium  md:hover:text-secondary-1 md:hover:bg-transparent transition-all duration-150 ease-in border-secondary-1 border cursor-pointer flex items-center justify-center text-[1.8rem] ">
            {isLoading ? (
              <FallingLines
                height="30"
                width="30"
                color={"white"}
                visible={true}
              />
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
      </div>
    </SectionContainer>
  );
};

export default SubscribeToNewsLetter;
