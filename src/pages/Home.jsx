import React from 'react';
import Sidebar from '../components/sidebar.jsx'
import Header from '../components/header.jsx';

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center">
          <button className="flex items-center space-x-2 ">
            <span className='text-2xl font-semibold'>Create my first campaign</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
