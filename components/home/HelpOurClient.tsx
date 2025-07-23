import React from "react";
import SectionContainer from "../SectionContainer";
import Link from "next/link";

const HelpOurClient = () => {
  return (
    <div className="bg-help-client  bg-fixed home-clip max-smd:mt-0 -mt-[13rem] max-xlg:-mt-[15rem] max-lg:-mt-[18rem] relative z-30">
      <SectionContainer containerClassname=" pt-[30rem] max-smd:pt-[20rem] pb-[20rem] flex items-center bg-[rgba(0,0,0,0.8)] w-full">
        <div className="w-[50%] max-xlg:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-smd:w-full max-smd:text-center max-smd:flex max-smd:flex-col max-smd:items-center  ">
          <h4 className="text-white font-bold text-[6rem] max-smd:text-[5rem] max-sm:text-[4rem]">
            We help our clients identify and pursue strategic priorities
          </h4>
          <p className="text-white ">
            At Blueledge Asset Partners, we don’t just offer services; we craft
            pathways to enduring prosperity. Our suite of offerings is designed
            to empower individuals and businesses alike, ensuring that every
            financial decision is a step toward greater security and growth.
          </p>
          <Link
            href={"/register"}
            className="bg-secondary-1 text-white rounded-[1rem] border border-secondary-1 hover:bg-transparent hover:text-white transition-all duration-200 ease-in py-[1rem] px-[1.5rem] mt-[3rem] block w-max "
          >
            Join us now
          </Link>
        </div>
      </SectionContainer>
    </div>
  );
};

export default HelpOurClient;
