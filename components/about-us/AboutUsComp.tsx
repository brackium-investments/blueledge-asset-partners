import React from "react";
import AboutUsHero from "./AboutUsHero";
import OurGoalsAndValues from "../home/OurGoalsAndValues";
import HelpOurClient from "../home/HelpOurClient";
import WhyWorkWithUs from "./WhyWorkWithUs";
import Foundation from "../Foundation";

const AboutUsComp = () => {
  return (
    <main>
      <AboutUsHero />
      <OurGoalsAndValues />
      <HelpOurClient />
      <WhyWorkWithUs />
      <Foundation />
    </main>
  );
};

export default AboutUsComp;
