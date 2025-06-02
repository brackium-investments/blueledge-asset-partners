import React from "react";
import SectionContainer from "../SectionContainer";
import ContactForm from "./ContactUsForm";
import HeaderText from "../HeaderText";
import SubscribeToNewsLetter from "../home/SubscribeToNewsLetter";

const data: { subHeader: string; title: string; text: string }[] = [
  {
    subHeader: "HEADQUARTERS",
    title: "FRANCE",
    text: "Erskine House, 68-73 Queen Street, Edinburgh, EH2 4NR",
  },
  {
    subHeader: "PLAN YOUR VISIT",
    title: "Working hours:",
    text: "Monday - Friday 9 am to 7 pm EST",
  },
];

const ContactUsComp = () => {
  return (
    <div className=" font-sans ">
      <SectionContainer containerClassname="home-clip bg-white pt-[10rem] pb-[15rem]  relative z-50">
        <div className="flex justify-between">
          <div className="w-[45%]">
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
          <div className="w-[45%] ">
            <ContactForm />
          </div>
        </div>
      </SectionContainer>
      <SubscribeToNewsLetter />
    </div>
  );
};

export default ContactUsComp;
