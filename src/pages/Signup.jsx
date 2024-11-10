import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLock } from "react-icons/sl";
import { BsPencilSquare } from "react-icons/bs";
import img from "../assets/sign-in-up.png";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="h-screen w-full">
      <div className="w-full py-4 bg-[#000042]">
        <h2 className="text-white font-semibold ml-6 text-xl">Plixipy</h2>
      </div>
      <div className="w-full md:h-[90%] h-[92vh] md:flex md:flex-row flex flex-col items-center justify-center xl:gap-x-20 md:gap-x-10 lg:p-10 md:p-4 sm:p-10 px-5">
        <div className="xl:w-1/3 h-full md:w-[40%] hidden md:block lg:w-[40%]">
          <img
            src={img}
            alt=""
            className="w-full h-full object-center object-contain "
          />
        </div>
        <div className="md:w-[50%] w-full xl:w-[40%] lg:w-[50%]  flex flex-col items-center bg-[#F3F4F6] rounded-xl py-5 px-8">
          <h1 className="text-[#11187] text-2xl">Create an account</h1>
          <form className="w-full mt-4 space-y-4">
            <section>
              <label htmlFor="name">Name</label>
              <div className="w-full mt-1 flex items-center bg-white rounded-md relative">
                <input
                  id="name"
                  type="text"
                  className="w-full outline-none py-2 bg-transparent px-4"
                  required
                />
                <span className="bg-[#0B056D] w-11 h-11 rounded-full absolute -right-2 flex items-center justify-center">
                  <BsPencilSquare size={"20px"} color="white" />
                </span>
              </div>
            </section>

            <section>
              <label htmlFor="name">Mobile Number</label>
              <div className="w-full mt-1 flex items-center bg-white rounded-md relative">
                <input
                  id="name"
                  type="text"
                  className="w-full outline-none py-2 bg-transparent px-4"
                  required
                />
                <span className="bg-[#0B056D] w-11 h-11 rounded-full absolute -right-2 flex items-center justify-center">
                  <FaPhone size={"20px"} color="white" />
                </span>
              </div>
            </section>

            <section>
              <label htmlFor="name">Email</label>
              <div className="w-full mt-1 flex items-center bg-white rounded-md relative">
                <input
                  id="name"
                  type="email"
                  className="w-full outline-none py-2 bg-transparent px-4"
                  required
                />
                <span className="bg-[#0B056D] w-11 h-11 rounded-full absolute -right-2 flex items-center justify-center">
                  <MdOutlineMailOutline color="white" size={"20px"} />
                </span>
              </div>
            </section>

            <section>
              <label htmlFor="name">Password</label>
              <div className="w-full mt-1 flex items-center bg-white rounded-md relative">
                <input
                  id="name"
                  type="password"
                  className="w-full outline-none py-2 bg-transparent px-4"
                  required
                />
                <span className="bg-[#0B056D] w-11 h-11 rounded-full absolute -right-2 flex items-center justify-center">
                  <SlLock color="white" size={"20px"} />
                </span>
              </div>
            </section>
            <section className="flex items-center">
              <input
                type="checkbox"
                name=""
                id="check"
                className="p-2"
                required
              />
              <label htmlFor="check" className="ml-3">
                Accept the{" "}
                <a href="" className="text-blue-400">
                  Terms & Conditions
                </a>
              </label>
            </section>
            <button className="px-4 py-2 shadow-md shadow-[#344BFD] bg-[#0B056D] w-full rounded-md text-white">
              Create an account
            </button>
            <div className="flex items-center my-4 px-3">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-2 text-gray-500">OR</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <Link to="/login">
            <button className="px-4 mt-3 py-2 border border-black w-full rounded-md text-black">
              Sign In
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
