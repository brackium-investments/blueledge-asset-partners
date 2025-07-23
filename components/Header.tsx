"use client";
import { HeaderNav, headerNavLinks } from "@/data/headerNavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo-dark.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const pathname = usePathname();

  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);

  const toggleMenuIsVisibleHandler = () => {
    setMenuIsVisible((prevState) => !prevState);
  };

  return (
    <header
      className={` ${
        pathname.includes("dashboard") ? "hidden" : "flex"
      } h-[8rem] items-center justify-between px-[8rem] max-xl:px-[5rem] max-xlg:px-[3rem] max-sm:px-[2rem] border-b border-gray-200 font-geist-sans relative z-[90] `}
    >
      {/* <h1 className="flex items-center text-[3rem] font-bold font-geist-mono uppercase">
        <span className="">Blue</span>
        <span className="text-secondary-1">Ledge</span>
      </h1> */}
      <div className="w-[30rem] max-xlg:w-[25rem]">
        <Image
          src={logo}
          alt="logo image"
          priority
          width={300}
          height={200}
          className="w-full h-full"
        />
      </div>
      <nav
        className={`max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:right-0 max-lg:w-full max-lg:h-screen max-lg:bg-[rgba(0,0,0,0.5)] ${
          menuIsVisible ? "max-lg:translate-x-0" : "max-lg:-translate-x-[100%]"
        } max-lg:transition-all max-lg:duration-300 max-lg:ease-in-out `}
        onClick={toggleMenuIsVisibleHandler}
      >
        <ul className="flex items-center max-lg:bg-secondary-1 max-lg:w-[50%] max-ssm:w-[60%] max-lg:h-full max-lg:flex-col max-lg:items-start max-lg:py-[3rem]">
          {headerNavLinks.map((navLink: HeaderNav) => (
            <li
              key={navLink.title}
              className={`${
                navLink.title.includes("legal") ? "hidden" : "flex"
              } mr-[2rem] max-lg:mb-[1rem]  last:mr-0 capitalize text-[1.8rem] max-lg:text-[2rem] max-lg:mr-0 max-lg:w-full`}
            >
              <Link
                href={navLink.link}
                className={`${
                  pathname === navLink.link
                    ? "text-secondary-1 max-lg:text-black "
                    : "hover:text-secondary-1 max-lg:hover:text-white max-lg:text-white text-black"
                } ${
                  navLink.title.includes("login") ||
                  navLink.title.includes("register")
                    ? "bg-secondary-1   hover:text-secondary-1 max-lg:hover:text-white border-secondary-1 border hover:bg-transparent text-white  rounded-[2rem] max-lg:rounded-[0rem]"
                    : ""
                } transition-all duration-150 ease-in cursor-pointer px-[1.5rem] max-lg:px-[3rem] py-[0.8rem] max-lg:py-[1.5rem] block max-lg:w-full `}
              >
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        type="button"
        className="hidden max-lg:block  ml-auto"
        onClick={toggleMenuIsVisibleHandler}
      >
        <HiOutlineMenuAlt3 className="w-[3rem] h-[3rem]" />
      </button>
    </header>
  );
};

export default Header;
