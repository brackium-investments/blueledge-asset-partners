import React from "react";
import SectionContainer from "../SectionContainer";
import ContactForm from "./ContactUsForm";
import HeaderText from "../HeaderText";
import SubscribeToNewsLetter from "../home/SubscribeToNewsLetter";

const data: { subHeader: string; title: string; text: string }[] = [
  {
    subHeader: "HEADQUARTERS",
    title: "LONDON",
    text: "1 Canary Wharf, London E14 5AB, United Kingdom",
  },
  {
    subHeader: "PLAN YOUR VISIT",
    title: "Working hours:",
    text: "Monday - Friday 9 am to 6 pm GMT",
  },
];

const ContactUsComp = () => {
  return (
    <div className=" font-sans ">
      <SectionContainer containerClassname="home-clip bg-white pt-[10rem] max-smd:pt-[8rem]  pb-[15rem] max-smd:pb-[8rem]  relative z-50">
        <div className="flex max-smd:flex-col justify-between">
          <div className="w-[45%] max-smd:w-full ">
            <HeaderText textClassname="text-secondary-1 font-bold ">
              Contact Us
            </HeaderText>
            <p>Get in touch with us, we are available 24 hours</p>
            <div className="mt-[3rem]">
              {data.map((dt) => (
                <div key={dt.title} className="mb-[3rem] last:mb-0">
                  <p className="text-[1.4rem] text-gray-700 ">{dt.subHeader}</p>
                  <p className="my-[1rem] font-semibold text-black text-[2rem]">
                    {dt.title}
                  </p>
                  <p>{dt.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[45%] max-lg:w-[50%] max-smd:w-full max-smd:mt-[3rem]  ">
            <ContactForm />
          </div>
        </div>
      </SectionContainer>
      <SubscribeToNewsLetter />
    </div>
  );
};

export default ContactUsComp;
