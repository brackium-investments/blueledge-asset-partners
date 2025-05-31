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
    header: "Affiliate Marketing",
    text: "Third party for customers to businesses (goods & services)",
  },
  {
    image: mission2,
    header: "Partnerships",
    text: "Partner with organizations for growth and viability",
  },
  {
    image: mission3,
    header: "Investing",
    text: "Equities, Bonds, C.D.’s, Cryptocurrencies, and Startup",
  },
  {
    image: mission4,
    header: "Training & Development",
    text: "We train and develop our employees in all areas.",
  },
];

export type TradingPlan = {
  type: string;
  min: number;
  max: number;
  roi: number;
  roiDuration: string;
  compounding?: boolean;
  support?: boolean;
  timeFrame?: string;
};

const forexTradingPlans: TradingPlan[] = [
  {
    type: "BEGINNERS",
    min: 200,
    max: 2499,
    roi: 2,
    roiDuration: "daily",
  },
  {
    type: "REGULAR",
    min: 2500,
    max: 4999,
    roi: 2.5,
    compounding: true,
    roiDuration: "daily",
    support: true,
  },
  {
    type: "ACCESS",
    min: 5000,
    max: 24999,
    roi: 3,
    compounding: true,
    roiDuration: "daily",
    support: true,
    timeFrame: "6 weeks",
  },
  {
    type: "INTERMEDIATE",
    min: 25000,
    max: 99999,
    roi: 3.5,
    compounding: true,
    roiDuration: "daily",
    support: true,
  },
  {
    type: "ADVANCED",
    min: 100000,
    max: 1000000000,
    roi: 4,
    compounding: true,
    roiDuration: "daily",
    support: true,
  },
];

const matrixTradingPlans: TradingPlan[] = [
  {
    type: "CBD",
    min: 80000,
    max: 150000,
    roi: 3,
    roiDuration: "daily",
    compounding: true,
    support: true,
  },
  {
    type: "Oil & Gas",
    min: 100000,
    max: 250000,
    roi: 3.5,
    roiDuration: "daily",
    compounding: true,
    support: true,
  },
  {
    type: "Real Estate",
    min: 200000,
    max: 250000000000,
    roi: 4.2,
    roiDuration: "daily",
    compounding: true,
    support: true,
    timeFrame: "1 year",
  },
];

const btcTradingPlans: TradingPlan[] = [
  {
    type: "Regular Phase",
    min: 1,
    max: 9,
    roi: 13,
    roiDuration: "10 days",
    compounding: true,
    support: true,
  },
  {
    type: "Intermediate Phase",
    min: 10,
    max: 29,
    roi: 17,
    roiDuration: "10 days",
    compounding: true,
    support: true,
  },
  {
    type: "Expert Phase",
    min: 30,
    max: 49,
    roi: 20,
    roiDuration: "10 days",
    compounding: true,
    support: true,
  },
  {
    type: "Gold Phase",
    min: 50,
    max: 60,
    roi: 24,
    roiDuration: "10 days",
    compounding: true,
    support: true,
  },
];

export type Plan = {
  category: string;
  plans: TradingPlan[];
};

export const plans: Plan[] = [
  {
    category: "forex trading plans",
    plans: forexTradingPlans,
  },
  {
    category: "matrix trading plans",
    plans: matrixTradingPlans,
  },
  {
    category: "BTC trading plans",
    plans: btcTradingPlans,
  },
];
