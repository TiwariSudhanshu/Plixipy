import React from "react";
// import { PlusCircleIcon, ViewListIcon, WalletIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';
import { MdAdd } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { MdQuestionMark } from "react-icons/md";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

const Sidebar = () => {
  return (
    <div className="bg-[#000042] h-screen px-5 flex flex-col  items-center py-4">
      <div className="py-2">
        <HiMiniBars3CenterLeft color="white" size={"26px"}/>
      </div>
      <nav className="space-y-10 mt-[4vmax]">
        <div className="text-white flex flex-col items-center justify-center">
          <span className="bg-[#344BFD] w-11 h-11 rounded-full flex items-center justify-center">
            <MdAdd color="white" size={"20px"} />
          </span>
          <p className="mt-1 text-[1em] font-semibold">Create</p>
        </div>
        <div className="text-white flex flex-col items-center opacity-70">
        <span className="w-11 h-11 rounded-full flex items-center justify-center">
            <FaLayerGroup color="white" size={"20px"} />
          </span>
          <p className="text-[1em] font-semibold">Campaigns</p>
        </div>
        <div className="text-white flex flex-col items-center opacity-70">
        <span className="w-11 h-11 rounded-full flex items-center justify-center">
            <FaWallet color="white" size={"20px"} />
          </span>
          <p className="text-[1em] font-semibold">Wallet</p>
        </div>
      </nav>
      <div className="text-white mt-auto flex flex-col items-center opacity-70">
      <span className="rounded-full flex items-center justify-center">
            <MdQuestionMark color="white" size={"20px"} />
          </span>
        <p className="font-semibold">Help</p>
      </div>
    </div>
  );
};

export default Sidebar;
