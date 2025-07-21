import { StaticImageData } from "next/image";
import mission1 from "../assets/home/mission-1.jpg";
import mission2 from "../assets/home/mission-2.jpg";
import mission3 from "../assets/home/mission-3.jpg";
import mission4 from "../assets/home/mission-4.jpg";

export const homeSec1Data: {
  title: string;
  text: string;
}[] = [
  {
    title: "Strategic Investment Innovation",
    text: "We prioritize groundbreaking strategies and analytical solutions to achieve exceptional returns in dynamic markets.",
  },
  {
    title: "Advanced Trading Technologies",
    text: "Leveraging cutting-edge data analytics and trading platforms, we drive precise insights and execution in global financial markets.",
  },
  {
    title: "Trader and Investor Focused",
    text: "Our core mission is to deliver consistent, high-alpha returns for our traders and investors across all market conditions.",
  },
];

export type OurMissionBox = {
  image: StaticImageData;
  header: string;
  text: string;
};

export const ourMissionBox: OurMissionBox[] = [
  {
    image: mission1,
    header: "Investment & Private Liquidity",
    text: "Investment solutions and private liquidity services",
  },
  {
    image: mission2,
    header: "Wealth Management",
    text: "Personalized wealth management strategies",
  },
  {
    image: mission3,
    header: "Private Liquidity Provision",
    text: "Liquidity solutions across diverse asset classes",
  },
  {
    image: mission4,
    header: "Asset Management",
    text: "Professional portfolio management services",
  },
];

export type InvestmentPlan = {
  type: string;
  min: number;
  expectedReturn: number;
  roi: number;
};

export const investmentPlans: InvestmentPlan[] = [
  {
    type: "Regular Phase",
    min: 10_000,
    expectedReturn: 12_500,
    roi: 25,
  },
  {
    type: "Intermediate Phase",
    min: 18_000,
    expectedReturn: 23_400,
    roi: 30,
  },
  {
    type: "Expert Phase",
    min: 20_000,
    expectedReturn: 27_000,
    roi: 35,
  },
  {
    type: "Gold Phase",
    min: 25_000,
    expectedReturn: 35_000,
    roi: 40,
  },
  {
    type: "Premium Phase",
    min: 30_000,
    expectedReturn: 43_500,
    roi: 45,
  },
  {
    type: "Executive Phase",
    min: 50_000,
    expectedReturn: 75_000,
    roi: 50,
  },
  {
    type: "VIP Phase",
    min: 75_000,
    expectedReturn: 116_250,
    roi: 55,
  },
  {
    type: "Ultimate Phase",
    min: 100_000,
    expectedReturn: 160_000,
    roi: 60,
  },
];
