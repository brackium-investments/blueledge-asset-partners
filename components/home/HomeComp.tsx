import React from "react";
import HomeHero from "./HomeHero";
import OurMission from "./OurMission";
// import OurGoalsAndValues from "./OurGoalsAndValues";
import HelpOurClient from "./HelpOurClient";
import TradingPlans from "./TradingPlans";
import SubscribeToNewsLetter from "./SubscribeToNewsLetter";
import WhatWeDo from "./WhatWeDo";
import FutureIsBrighterComp from "../about-us/FutureIsBrighterComp";

const HomeComp = () => {
  return (
    <main className="bg-white">
      <HomeHero />
      <OurMission />
      <WhatWeDo />
      {/* <OurGoalsAndValues /> */}
      <HelpOurClient />
      <TradingPlans />
      <FutureIsBrighterComp />
      <SubscribeToNewsLetter />
    </main>
  );
};

export default HomeComp;
