"use client";
import { HeaderNav, headerNavLinks } from "@/data/headerNavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  return (
    <header
      className={` ${
        pathname.includes("dashboard") ? "hidden" : "flex"
      } h-[8rem] items-center justify-between px-[8rem] border-b border-gray-200 font-geist-sans relative z-[90] `}
    >
      <div className="flex items-center text-[3rem] font-bold font-geist-mono uppercase">
        <span className="">Beacon</span>
        <span className="text-secondary-1">Trades</span>
      </div>
      <nav>
        <ul className="flex items-center">
          {headerNavLinks.map((navLink: HeaderNav) => (
            <li
              key={navLink.title}
              className="mr-[2rem] last:mr-0 capitalize text-[1.8rem]"
            >
              <Link
                href={navLink.link}
                className={`${
                  pathname === navLink.link
                    ? "text-secondary-1"
                    : "hover:text-secondary-1 text-black"
                } ${
                  navLink.title.includes("login") ||
                  navLink.title.includes("register")
                    ? "bg-secondary-1 hover:text-secondary-1 border-secondary-1 border hover:bg-transparent text-white  rounded-[2rem] "
                    : ""
                } transition-all duration-150 ease-in cursor-pointer px-[1.5rem] py-[0.8rem]  `}
              >
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
