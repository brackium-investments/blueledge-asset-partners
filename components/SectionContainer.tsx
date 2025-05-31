import React, { FC, ReactNode } from "react";

const SectionContainer: FC<{
  children: ReactNode;
  containerClassname: string;
}> = ({ children, containerClassname }) => {
  return (
    <section className={`${containerClassname} px-[8rem]`}>{children}</section>
  );
};

export default SectionContainer;
