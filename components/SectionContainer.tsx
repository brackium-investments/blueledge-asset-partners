import React, { FC, ReactNode } from "react";

const SectionContainer: FC<{
  children: ReactNode;
  containerClassname: string;
}> = ({ children, containerClassname }) => {
  return (
    <section
      className={`${containerClassname} px-[8rem] max-xl:px-[5rem] max-xlg:px-[3rem]  max-sm:px-[2rem]`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
