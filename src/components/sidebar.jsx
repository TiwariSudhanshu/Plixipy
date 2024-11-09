import React from 'react';
// import { PlusCircleIcon, ViewListIcon, WalletIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';

const Sidebar = () => {
  return (
    <div className="bg-[#000042] h-screen w-1/12 flex flex-col  items-center py-4">
      <nav className="space-y-4 mt-[5vmax]">
        <div className="text-white flex flex-col items-center">
          {/* <PlusCircleIcon className="h-6 w-6" /> */}
          <p className="text-xs  mt-[4vmax] text-[1em]">Create</p>
        </div>
        <div className="text-white flex flex-col items-center">
          {/* <ViewListIcon className="h-6 w-6" /> */}
          <p className="text-xs mt-[4vmax] text-[1em]">Campaigns</p>
        </div>
        <div className="text-white flex flex-col items-center">
          {/* <WalletIcon className="h-6 w-6" /> */}
          <p className="text-xs  mt-[4vmax] text-[1em]">Wallet</p>
        </div>
      </nav>
      <div className="text-white mt-auto flex flex-col items-center">
        {/* <QuestionMarkCircleIcon className="h-6 w-6" /> */}
        <p className="text-xs mb-[2vmax] text-[1em]">Help</p>
      </div>
    </div>
  );
};

export default Sidebar;
