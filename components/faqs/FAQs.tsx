"use client";
import React, { useState } from "react";
import AccordionItem from "../AccordionItem";
import SectionContainer from "../SectionContainer";
import HeaderText from "../HeaderText";

const faqs: { title: string; text: string }[] = [
  {
    title: "How to register for a personal account at your service?",
    text: "To create personal account, please, click on the 'Request access' button and fill in the form that opens with all required details. Make sure that all the information is correct and images are clear before submission.",
  },
  {
    title: "How much do I pay to register for a personal account?",
    text: "Registration and creation of personal accounts is free of charge for any user.",
  },
  {
    title: "How to recover the password that was forgotten?",
    text: "Make use of password ‘Recovery’ option. In case of problem, please, contact our technical support. Before contacting us, however, please, make sure that you originally put in correct login and password.",
  },
  {
    title: "What are the requirements for investments?",
    text: "Any person of legal age can invest, irrespective of nationality, social status and religious preferences.",
  },
  {
    title: "Is it possible to change personal account information?",
    text: "In order to make changes to your personal data you just need to login to your account after registration, click on the 'Edit profile' to see form for changing personal information.",
  },
  {
    title: "What payment systems are available for deposits and withdrawals?",
    text: "For the time being we accept Bitcoin and Tether USDT-TRC20.",
  },
  {
    title: "What is the maximum number of deposits for one investor?",
    text: "There are no limits for a number of deposits. It is up to individual investor to decide depending on his/her wishes, goals and financial capacities.",
  },
  {
    title: "How the profit accruals?",
    text: "Accruals are made in accordance with the terms of investment plan chosen.",
  },
  {
    title:
      "Are there any limits for withdrawals of funds from account balance?",
    text: "There are no limits for withdrawals as far as the withdrawal is available for an investment",
  },
  {
    title: "How to make a withdrawal of funds from the system?",
    text: "The order of withdrawal of funds is as follows: login to your personal account, get to ‘Invest’ section, create a request to withdraw.",
  },
  {
    title: "How much time is required to process a withdrawal?",
    text: "After your withdrawal request, the funds shall be immediately transferred to your wallet after verification.",
  },
];

const FAQs = () => {
  const [expanded, setExpanded] = useState<boolean | number>(false);

  return (
    <SectionContainer containerClassname="pt-[8rem] pb-[12rem] flex items-center flex-col font-sans">
      <HeaderText textClassname="text-secondary-1 font-bold">FAQs</HeaderText>
      <div className="w-[70%] mt-[4rem]">
        {faqs.map((faq: { title: string; text: string }, index: number) => (
          <AccordionItem
            key={faq.title}
            index={index}
            expanded={expanded}
            setExpanded={setExpanded}
            title={faq.title}
          >
            <p className="pt-[1.5rem] text-[1.4rem] text-[rgba(123,132,135,1)]">
              {faq.text}
            </p>
          </AccordionItem>
        ))}
      </div>
    </SectionContainer>
  );
};

export default FAQs;
