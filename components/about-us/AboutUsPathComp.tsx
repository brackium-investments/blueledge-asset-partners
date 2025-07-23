import { AboutUsPath, aboutUsPaths } from "@/data/aboutUs";
import React from "react";

const AboutUsPathComp = () => {
  return (
    <div className="flex flex-col w-full">
      {aboutUsPaths.map((path: AboutUsPath, index: number) => (
        <div key={path.text} className="flex items-end justify-end ">
          <div className="mr-[2rem] max-xmd:mr-0 max-xmd:order-2  flex-1 p-[2rem] rounded-[1rem] bg-white capitalize flex flex-col items-end max-xmd:items-start ">
            {/* <p className="text-[1.4rem]">{path.date}</p> */}
            <p className="text-[1.8rem] font-semibold text-black max-xmd:text-left">
              {path.text}
            </p>
          </div>
          <div className="flex flex-col max-xmd:order-1 items-center">
            <div className="w-[8rem] h-[8rem] rounded-full border flex items-center justify-center text-center bg-black text-white">
              {path.year}
            </div>
            <div className="w-[0.2rem] h-[3rem] bg-secondary-1"></div>
            <div className="w-[1.5rem] h-[1.5rem] bg-secondary-1 rounded-full"></div>
            <div
              className={`w-[0.2rem] h-[3rem] bg-secondary-1 ${
                aboutUsPaths.length - 1 === index ? "hidden" : "block"
              }`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUsPathComp;
