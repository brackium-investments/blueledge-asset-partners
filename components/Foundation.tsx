import React from "react";
import SectionContainer from "./SectionContainer";
import HeaderText from "./HeaderText";
import { FoundationType, foundationData } from "@/data/foundation";
import Image from "next/image";

const Foundation = () => {
  return (
    <SectionContainer containerClassname={"mb-[10rem] max-smd:mb-[8rem]"}>
      <HeaderText textClassname={"text-secondary-1 mb-[1.5rem] text-center"}>
        Our Foundation: Giving Back to the Society
      </HeaderText>
      <p className="mb-[5rem] text-center">
        At Blueledge asset partners, we believe that true success is measured
        not only by financial growth but by the positive impact we have on the
        world around us. Our commitment to social responsibility is embodied in
        our Giving Back Initiative, a heartfelt endeavor that transcends
        business objectives to touch lives, uplift communities, and inspire
        collective well-being.
      </p>
      <div className="flex flex-col">
        {foundationData.map((item: FoundationType, index: number) => (
          <div
            key={index}
            className="flex max-md:flex-col  justify-between mb-[5rem] items-center"
          >
            <div
              className={`w-[45%] max-lg:w-[48%] max-md:w-full max-md:text-center ${
                index % 2 === 0 ? "order-1" : "order-2 max-md:order-1"
              } `}
            >
              <p className="text-secondary-1 text-[2.5rem]  font-semibold ">
                {item.title}
              </p>
              <div className="bg-black max-md:mx-auto w-[5rem] mt-[0.5rem] mb-[2rem] h-[0.2rem]"></div>
              <p className="text-black">{item.description}</p>
            </div>
            <div
              className={`h-[40rem] w-[45%] max-lg:w-[48%] max-md:w-[85%] max-sm:w-full max-md:mt-[3rem] bg-amber-500 ${
                index % 2 === 0 ? "order-2" : "order-1"
              } rounded-[0.6rem] overflow-hidden`}
            >
              <Image
                src={item.image}
                alt={item.title}
                priority
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Foundation;
