import React, { FC } from "react";

const HeaderText: FC<{ children: string; textClassname: string }> = ({
  children,
  textClassname,
}) => {
  return (
    <h3 className={`${textClassname} text-[4rem] font-bold font-sans`}>
      {children}
    </h3>
  );
};

export default HeaderText;
