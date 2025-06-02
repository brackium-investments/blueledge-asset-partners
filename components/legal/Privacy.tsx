/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import HeaderText from "../HeaderText";

export const privacyData = [
  {
    title: "WHO WE ARE",
    texts: [
      "Creststone Investments Limited is a company registered in United States and  United Kingdom for Crypto forex and many more types of trading. Creststone Investments Limited is the controls and is responsible for the data of its Client disclosed, to register for a Trading Account and/or to make use of any other services offered by the Creststone Investments Limited through the (hereinafter “Website”) (this term shall at all times include Website’s desktop and mobile versions). Creststone Investments Limited exercises control over the processing of data in undertakings affiliated to it and which belong to the Creststone Investments Limited Group of companies.",
      "This Privacy Policy addresses the privacy issues of the Creststone Investments Limited Group so when we mention “Creststone Investments Limited”, “Company”, “we”, “us” or “our” in this Privacy Policy, we are referring to the relevant company in Creststone Investments Limited responsible for collecting and/or processing your data when you use the Trading Platform through the Website, either for a Trading Account or more(or their mobile/desktop versions) (hereinafter the Service(s)). In Creststone Investments LTD, we respect your privacy and therefore all companies within the Creststone Investments LTD is committed to protect your data, which it collects, uses and/or has access to.",
      "The Company takes measures to implement advanced data protection policies and procedures and to update them from time to time for the purpose of safeguarding its Client’s data and the Client’s account. Your data is protected by the legal, administrative and technical measures that we take to ensure the privacy, integrity and accessibility of data. To prevent security incidents with your data, we use a mixed organizational and technical approach based on the results of annual risk assessment.",
      "The Company shall not divulge any private information of its Clients and former Clients unless the Client approves in writing such disclosure or unless such disclosure is required under applicable law or is required in order to verify the Client’s identity or it is required for Creststone Investments LTD to perform its contractual obligations under any agreement concluded with the Client. The Clients’ information is processed only by the employees of the Company and/or employees of the Premium Trade limited group and/or trusted third parties which provide specific support services, dealing with the specific Client’s Accounts and necessary for the provision of our services. All such information shall be stored on electronic and physical storage media according to applicable law here in the United state of America.",
    ],
  },
  {
    title: "DATA USAGE",
    subTitle:
      "We may collect, use, store and transfer different kinds of data about you which we have grouped together as follows:",
    texts: [
      "Identity Data includes first name, last name, and patronymic (if available)’s number, and copy of photo.",
      "Contact Data includes billing address, email address and telephone numbers.",
      "Financial Data includes bitcoin addresses or any other related address.",
      "Transaction Data includes details about the transactions performed by you, details about payments, withdrawals, exchanges, trading history, profit, balance, deposited and withdrawal amount methods, and any other details in relation to the services you have made use of through our Website.",
      "Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in type and versions, operating system and platform, and other technologies on the devices you use to access the Website and use of cookies stored on your device.",
      "Profile Data includes your Client’s account details, username and password, transactions made by you, your interests, preferences, feedback and/or information received through your interaction with us within the course of providing our services and survey responses.",
      "Usage Data includes information about how you use the Website, products and services, registration date, account category, trading cluster, number of complaints, number of requests filed and IP history.",
      "Marketing and Communication Data includes your preferences in receiving marketing from us and your communication preferences.",
      "Special Categories of Data/ ‘Sensitive’ Data includes details about your religious belief and/or criminal convictions and offences.",
      "Conformity Data includes details about your education, employment status, trading experience, self-assessment test.",

      "Data in KYC (Know your customer) includes identity document information, including copies of recent dated Utility Bills, Identity Card, Passport, and/or Driver’s License.",
      "Economic Profile Data includes details on annual income, net profit, expected annual amount of investment, sources of funds.",
      "Location Data includes details on your actual location when interacting with our Website (for example, a set of parameters that determine regional settings of your interface, namely residency country, time zone, and the interface language)",
      "Audio Data includes full voice recordings of calls that you receive from us or make to us. (the above collectively referred to as Personal Data)",
    ],
  },
];

const Privacy = () => {
  return (
    <div className="flex flex-col">
      <HeaderText textClassname="text-secondary-1 font-bold mb-[2rem] text-center">
        Privacy
      </HeaderText>
      <p>
        Beacon Trades respects your privacy and is committed to protecting your
        personal data. This privacy policy aims to give you information on how
        we collect and process any personal data and how we look after your
        personal data when you visit our website (regardless of where you visit
        it from) and tell you about your privacy rights and how the law protects
        you. i.e. information about a Client (as defined below) who is a natural
        person on the basis of which that Client can be identified (hereinafter
        the data) in accordance with the applicable data protection legislation
        and best practice.
      </p>
      <p className="my-[2rem]">
        We strive to create the most secure infrastructure of any broker in
        United state and the world at large. In this privacy policy we would
        like to tell why you can trust us with your data and rest assured that
        your data is safe.
      </p>
      <p>
        It is important that you read this privacy policy together with any
        other privacy policy we may provide on specific occasions when we are
        collecting or processing your data about you so that you are fully aware
        of how and why we are using your data.
      </p>
      <div className="mt-[3rem]">
        <ol className="list-upperAlpha mx-[3rem] xlg:mx-[2rem] ">
          {privacyData.map((data: any, i: number) => (
            <li key={i} className="list-item text-justify">
              <p className="mb-[1.5rem]">{data.title}</p>
              {data.subTitle && <p className="mb-[2rem]">{data.subTitle}</p>}
              <ol className="list-lowerAlpha mx-[2rem]">
                {data.texts.map((text: string) => (
                  <li
                    key={text}
                    className={`${
                      data.subTitle ? "list-item" : "list-none"
                    } mb-[2rem]`}
                  >
                    <p>{text}</p>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Privacy;
