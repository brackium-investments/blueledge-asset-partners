/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/state-hook";
import React, { useEffect, useState } from "react";
import noUserImg from "../../../assets/image_255.svg";
import { fileHandler } from "@/utils/fileHandler";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import UpdateInvestorForm from "./UpdateInvestorForm";
import { updateInvestorProfileImageDispatch } from "@/actions/investorActions";

const EditProfileComp = () => {
  const { name, email, phoneNumber, address, image } = useAppSelector(
    (state) => state.investor.details
  );

  const { token } = useAppSelector((state: any) => state.auth);

  const dispatch = useAppDispatch();

  const [profileImg, setProfileImg] = useState<any>(noUserImg);
  const [profileImgObj, setProfileImgObj] = useState<any>();

  const setProfileImage = (e: any) => {
    dispatch(updateInvestorProfileImageDispatch(e.target.files[0], token));
    setProfileImg(fileHandler(e.target.files[0]));
    setProfileImgObj(e.target.files[0]);
  };

  useEffect(() => {
    if (image) setProfileImg(`${image}`);
  }, [image]);

  return (
    <div className=" font-sans ">
      <section className="  rounded-bl-lg rounded-br-lg">
        <div className="flex w-full h-full items-center">
          <label
            htmlFor="profileImg"
            className=" w-[20rem] h-[20rem] sm:mb-[2rem] sm:mr-0 bg-secondary-1 mr-[3rem] rounded-full flex items-center justify-center relative"
          >
            <Image
              src={profileImg}
              alt="profile-img"
              className="w-full h-full rounded-full object-cover"
              width={300}
              height={300}
            />
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={setProfileImage}
              id={"profileImg"}
            />
            <div className="absolute bottom-0 right-0 bg-secondary-2 w-[5rem] h-[5rem] flex items-center justify-center rounded-full cursor-pointer">
              <FaRegEdit className="w-[2.3rem] h-[2.3rem] text-color-white" />
            </div>
          </label>
          <div className="w-[50rem] ml-[3rem] shadow-md   bg-white p-[1.5rem] rounded-lg font-sans capitalize">
            <p className="text-[1.8rem] font-semibold text-black mb-[1rem]">
              Full Name: <span>{name}</span>
            </p>
            <p className="text-[1.8rem] font-semibold text-black mb-[1rem]">
              Email: <span>{email}</span>
            </p>
            <p className="text-[1.8rem] font-semibold text-black mb-[1rem]">
              Address: <span>{address}</span>
            </p>
            <p className="text-[1.8rem] font-semibold text-black ">
              Phone Number: <span>{phoneNumber}</span>
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-between mt-[5rem] p-[3rem] smd:p-[0rem]  rounded-lg bg-white ">
        <div className=" rounded-lg w-full smd:py-[2rem] px-[1.5rem]">
          <p className="text-[1.8rem] text-secondary-1 font-semibold mb-[1.5rem] uppercase">
            Update Info
          </p>
          <UpdateInvestorForm />
        </div>
      </section>
    </div>
  );
};

export default EditProfileComp;
