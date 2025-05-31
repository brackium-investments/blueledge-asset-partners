import React from "react";
import SectionContainer from "../SectionContainer";
import Link from "next/link";

const HelpOurClient = () => {
  return (
    <div className="bg-help-client  bg-fixed home-clip -mt-[10rem] relative z-30">
      <SectionContainer containerClassname="h-[calc(100vh-8rem)] pt-[10rem] flex items-center bg-[rgba(0,0,0,0.8)] w-full">
        <div className="w-[50%] ">
          <h4 className="text-white font-bold text-[6rem]">
            We help our clients identify and pursue strategic priorities
          </h4>
          <p className="text-white ">
            We provide differentiated strategic and tactical advice as well as
            unparalleled execution to financial sponsors for both public and
            private companies across a broad range of industry sectors and
            geographies.
          </p>
          <Link
            href={"/register"}
            className="bg-secondary-1 text-white rounded-[1rem] border border-secondary-1 hover:bg-transparent hover:text-white transition-all duration-200 ease-in py-[1rem] px-[1.5rem] mt-[3rem] block w-max"
          >
            Join us now
          </Link>
        </div>
      </SectionContainer>
    </div>
  );
};

export default HelpOurClient;
