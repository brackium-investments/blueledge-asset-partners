"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { HeaderNav, headerNavLinks } from "@/data/headerNavLinks";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="  text-[1.6rem] w-full flex flex-col  bg-black text-white px-[8rem] py-[10rem]">
      <div className="w-full flex items-start justify-between">
        <div className="flex flex-col w-[40%]">
          <div className="flex items-center text-[3rem] font-bold font-geist-mono uppercase">
            <span className="">Beacon</span>
            <span className="text-secondary-1">Trades</span>
          </div>
          <p className=" text-[1.8rem]">Innovation Synergy</p>
          <p className="mt-[2rem] font-semibold text-gray-500">DISCLAIMER</p>
          <p className="text-[1.4rem] text-gray-500">
            Futures, stocks, cryptocurrency and options trading involves
            substantial risk of loss and is not suitable for every investor.
            Before you use these products, please take into consideration your
            level of experience, financial objectives and seek independent
            advice if necessary. It is the responsibility of the Client to
            ascertain whether he/she is permitted to use the services of the
            IBM’s brand based on the legal requirements in his/her country of
            residence. Please read IBM’s full Risk Disclosure.
          </p>
        </div>
        <div className="flex items-center  ">
          {headerNavLinks.slice(0, -2).map((linkObj: HeaderNav, i: number) => (
            <Link
              key={i}
              href={linkObj.link}
              className={`mr-[2rem]  capitalize ${
                pathname === linkObj.link
                  ? "text-secondary-1"
                  : "hover:text-secondary-1 text-white"
              } transition-all duration-200 ease-in text-[1.8rem]`}
            >
              {linkObj.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full text-center mt-[8rem]">
        <p>© 2025 BeaconTrades. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
