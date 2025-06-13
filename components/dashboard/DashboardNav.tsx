"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import { LuHouse, LuUsersRound } from "react-icons/lu";
import { FiLock } from "react-icons/fi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { PiHandWithdraw } from "react-icons/pi";
import { AiOutlinePoweroff } from "react-icons/ai";
import Link from "next/link";
import { MdOutlineChevronRight } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useAppDispatch } from "@/hooks/state-hook";
import { investorActions } from "@/slices/investorSlice";
import { userLogout } from "@/actions/authAction";
// import { FaM } from "react-icons/fa6";

const DashboardNav: React.FC<{ children: ReactNode }> = ({ children }) => {
  const iconClassname = "text-color-current w-[2rem] h-[2rem] mr-[2rem] ";

  const dispatch = useAppDispatch();

  const pathname = usePathname();

  const [expanded, setExpanded] = useState<false | number>(false);

  const data = [
    {
      title: "Dashboard",
      link: "/dashboard",
      icon: <LuHouse className={iconClassname} />,
    },
    {
      title: "Account Management",
      subTitle: "Account settings",
      icon: <FiLock className={iconClassname} />,
      links: [
        {
          text: "edit profile",
          link: "edit-profile",
        },
        {
          text: "change password",
          link: "change-password",
        },
      ],
    },
    {
      title: "Deposit Management",
      subTitle: "Deposit",
      icon: <FaMoneyBillAlt className={iconClassname} />,
      links: [
        {
          text: "deposit",
          link: "deposit",
        },
        {
          text: "deposit history",
          link: "deposit-history",
        },
      ],
    },
    {
      title: "Withdrawal Management",
      subTitle: "Withdrawal",
      icon: <PiHandWithdraw className={iconClassname} />,
      links: [
        {
          text: "withdraw funds",
          link: "withdraw-funds",
        },
        {
          text: "withdrawal history",
          link: "withdrawal-history",
        },
      ],
    },
    {
      title: "Referrals Management",
      subTitle: "Referrals",
      linkText: "referrals",
      icon: <LuUsersRound className={iconClassname} />,
    },
    {
      title: "End Session",
      subTitle: "Logout",
      funcText: "logout",

      icon: <AiOutlinePoweroff className={iconClassname} />,
    },
  ];

  const logout = () => {
    dispatch(investorActions.setInvestorDetails(null));
    dispatch(userLogout());
  };

  return (
    <div>
      <header className="h-[7rem] flex items-center px-[3rem] border-b border-color-woody-1">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="logo"
            priority
            width={50}
            height={50}
            className="w-[4rem] h-[4rem]"
          />
          <h1 className="capitalize flex text-[2.2rem] ml-[.5rem] font-bold">
            <span className="">frey</span>
            <span className="text-color-woody-1">wood</span>
          </h1>
        </div>
      </header>
      <div className="w-full h-[calc(100vh-7rem)] flex">
        <div className="w-[30rem] h-full ">
          {data.map((item: any, index: number) => {
            if (item.link) {
              return (
                <Link
                  href={item.link}
                  key={item.title}
                  className={`flex items-center p-[1.5rem] border-l-[1rem] bg-white ${
                    pathname === item.link
                      ? "text-color-woody-1 border-color-woody-1 "
                      : "border-color-white"
                  }`}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              );
            }

            if (item.linkText) {
              return (
                <div key={item.title} className="bg-white ]">
                  <p className=" pl-[2.5rem] py-[1.5rem] pr-[1.5rem] uppercase text-[1.3rem] text-gray-400">
                    {item.title}
                  </p>
                  <Link
                    href={`/dashboard/${item.linkText}`}
                    className={`flex items-center p-[1rem] border-l-[1rem] ${
                      pathname === `/dashboard/${item.linkText}`
                        ? "text-color-woody-1 border-color-woody-1"
                        : "border-color-white text-gray-500 "
                    }`}
                  >
                    {item.icon}
                    <span
                      className={`${
                        pathname === `/dashboard/${item.linkText}`
                          ? "text-color-woody-1"
                          : "text-black"
                      }`}
                    >
                      {item.subTitle}
                    </span>
                  </Link>
                </div>
              );
            }

            if (item.funcText) {
              return (
                <div key={item.title} className="bg-white pl-[1rem]">
                  <p className="p-[1.5rem] uppercase text-[1.3rem] text-gray-400">
                    {item.title}
                  </p>
                  <button
                    className="flex items-center p-[1rem] text-color-black  hover:text-color-woody-1 w-full"
                    onClick={logout}
                  >
                    <div className="">{item.icon}</div>
                    <span className="">{item.subTitle}</span>
                  </button>
                </div>
              );
            }

            if (item.links) {
              return (
                <div key={item.title} className="bg-white">
                  <p className="pl-[2.5rem] py-[1.5rem] pr-[1.5rem] uppercase text-[1.3rem] text-gray-400">
                    {item.title}
                  </p>
                  <div
                    className={`border-l-[1rem] ${
                      pathname.includes(item.links[0].link) ||
                      pathname.includes(item.links[1].link)
                        ? "border-color-woody-1"
                        : "border-color-white"
                    }`}
                  >
                    <div
                      className="flex items-center px-[1.5rem] pb-[1rem] text-gray-500 cursor-pointer"
                      onClick={() => {
                        setExpanded(index === expanded ? false : index);
                      }}
                    >
                      {item.icon}
                      <span className="text-black">{item.subTitle}</span>
                      <MdOutlineChevronRight
                        className={`w-[1.8rem] h-[1.8rem] ml-auto transition-all duration-300 ease-in-out ${
                          index === expanded ? "rotate-90" : "rotate-0"
                        }`}
                      />
                    </div>
                    <AnimatePresence>
                      {index === expanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="flex flex-col pl-[5.5rem] capitalize"
                        >
                          {item.links.map((link: any) => (
                            <Link
                              key={link.link}
                              href={`/dashboard/${link.link}`}
                              className={`block py-[1rem] ${
                                pathname === `/dashboard/${link.link}`
                                  ? "text-color-woody-1"
                                  : "text-black"
                              }`}
                            >
                              {link.text}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="flex-1 bg-slate-200 p-[3rem] flex flex-col overflow-y-auto">
          {children}
          <p className="text-center mt-auto">
            © 2025 Freywood. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
