import React from 'react';
import { FaBell } from "react-icons/fa6";
import { RiSailboatFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="bg-[#000042] py-4 flex items-center justify-between">
      <h2 className='text-white font-semibold md:text-2xl'>Plixipy</h2>
      <div className='flex gap-x-3 px-3'>
      <span className="bg-[#F3F4F6] w-11 h-11 rounded-full flex items-center justify-center">
            <FaBell color="black" size={"20px"} />
          </span>
          <span className="bg-[#F3F4F6] w-11 h-11 rounded-full flex items-center justify-center">
            <RiSailboatFill color="red" size={"20px"} />
          </span>
      </div>
    </div>
  );
};

export default Header;
