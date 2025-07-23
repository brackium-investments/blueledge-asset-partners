import React from "react";
import SectionContainer from "../SectionContainer";
import HeaderText from "../HeaderText";
import { FaRegCheckCircle } from "react-icons/fa";
import AboutUsPathComp from "./AboutUsPathComp";

const aboutUsData: string[] = [
  "At Blueledge Asset Partners, trust is not just a principle—it’s the cornerstone of everything we do. With over 70 years of enduring experience, our legacy reflects a steadfast commitment to protecting and growing the wealth of our clients, guided by a philosophy rooted in transparency, accountability, and shared success.",
  "We recognize that every financial journey is unique. That’s why our approach to Private Liquidity and Financial Investments is tailored to fit the intricate contours of your financial world. Whether you're navigating the evolving dynamics of the market, planning for generational wealth, or optimizing liquidity, our bespoke strategies are designed to adapt with you—every step of the way.",
  "Blueledge Asset Partners is more than a financial partner; we are a collaborator in crafting solutions that reflect your values, aspirations, and legacy. Our team of seasoned professionals brings a holistic lens to wealth management, ensuring that your financial strategy supports not just your current goals but your long-term vision.",
  "In addition to our expertise in private wealth, Blueledge Asset Partners is a global leader in technology investment banking. With industry specialists based in London, Hong Kong, Tokyo, Frankfurt, and Singapore, we offer a full spectrum of strategic advisory services. From hardware and semiconductors to semi-cap equipment and emerging tech sectors, our integrated solutions span the entire technology ecosystem. Whether you're a startup seeking capital or a corporation exploring M&A opportunities, we deliver insights that move you forward—with a proven track record to back it up.",
];

const solutions = [
  "Private Liquidity Provision",
  "Investment & Private Liquidity",
  "Business Loans for Eligible Registered Members",
  "Wealth Management",
  "Asset Management",
];

const AboutUsHero = () => {
  return (
    <SectionContainer containerClassname="font-sans pt-[8rem] pb-[20rem] max-xmd:pb-[25rem] max-smd:pb-[8rem] bg-secondary-2 flex max-xmd:flex-col justify-between items-center home-clip">
      <div className="w-[45%] max-xl:w-[50%] max-xmd:w-full">
        <HeaderText textClassname="text-secondary-1 font-bold mb-[2rem]">
          We Are A Trusted Company With 70+ Years Of Experience
        </HeaderText>
        {aboutUsData.map((text: string) => (
          <p key={text} className="text-gray-700 mb-[1rem] last:mb-0">
            {text}
          </p>
        ))}
        <div className="flex flex-col mt-[2rem]">
          {solutions.map((text: string) => (
            <li key={text} className="flex items-center mb-[1rem]">
              <FaRegCheckCircle className="text-secondary-1 w-[2.4rem] h-[2.4rem] mr-[1rem]" />
              <span>{text}</span>
            </li>
          ))}
        </div>
      </div>
      <div className="w-[45%] max-xmd:w-full max-xmd:mt-[3rem]">
        <AboutUsPathComp />
      </div>
    </SectionContainer>
  );
};

export default AboutUsHero;
