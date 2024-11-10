import React from "react";
import Sidebar from "../components/sidebar.jsx";
import Header from "../components/header.jsx";
import { MdAdd } from "react-icons/md";

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center">
          <button className="flex items-center space-x-2 ">
            <span className="text-2xl font-semibold flex items-center">
              {" "}
              <span className="bg-[#344BFD] w-8 h-8 mr-3 rounded-full flex items-center justify-center">
                <MdAdd color="white" size={"20px"} />
              </span>{" "}
              Create my first campaign
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
