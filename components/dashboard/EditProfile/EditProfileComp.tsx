"use client";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import EditProfileForm from "./EditProfileForm";

const EditProfileComp = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="bg-white w-[70%] p-[2.5rem] rounded-[0.6rem]">
        <p className="text-[2rem] font-nunito font-semibold">
          Profile Settings
        </p>
        <div className="mt-[1rem] ">
          <div className="flex items-center text-blue-500 capitalize pb-[1rem] border-b border-b-gray-200">
            <FaRegUser className="w-[2rem] h-[2rem] mr-[1rem] " />
            <p>personal info</p>
          </div>
          <EditProfileForm />
        </div>
      </div>
    </div>
  );
};

export default EditProfileComp;
