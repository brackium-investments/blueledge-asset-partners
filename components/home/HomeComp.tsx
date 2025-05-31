import React from "react";
import HomeHero from "./HomeHero";
import OurMission from "./OurMission";
import OurGoalsAndValues from "./OurGoalsAndValues";
import HelpOurClient from "./HelpOurClient";
import TradingPlans from "./TradingPlans";
import SubscribeToNewsLetter from "./SubscribeToNewsLetter";

const HomeComp = () => {
  return (
    <main className="bg-white">
      <HomeHero />
      <OurMission />
      <OurGoalsAndValues />
      <HelpOurClient />
      <TradingPlans />
      <SubscribeToNewsLetter />
    </main>
  );
};

export default HomeComp;
