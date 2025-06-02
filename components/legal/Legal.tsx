import React from "react";
import SectionContainer from "../SectionContainer";
import Privacy from "./Privacy";
import TermsAndCondiition from "./TermsAndConditions";
// import TermsAndCondiition from "./TermsAndCondiition";

const Legal = () => {
  return (
    <SectionContainer containerClassname="py-[8rem]">
      <Privacy />
      <TermsAndCondiition />
    </SectionContainer>
  );
};

export default Legal;
