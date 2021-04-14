import React from 'react';
import logo from "../../assets/logo.svg";
import profile from "../../assets/profile.jpeg";
import { SearchIcon, ChevronDoubleRightIcon, ChevronDoubleLeftIcon, BellIcon, VideoCameraIcon, ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid';

const Header = (props) => {
  const { hamburgerNavState, setHamburgerNavState } = props;
  return (
    <header className="text-gray-400 bg-gray-800 body-font border-b border-gray-700 shadow-md">
      <div className="flex flex-wrap p-2 flex-col md:flex-row items-center justify-between">
        <div className="flex flex-row w-1/3 justify-start items-center">
          <button onClick={() => {
            setHamburgerNavState(!hamburgerNavState);
          }} className="inline-flex items-center py-1 px-6 mr-2 text-base font-sans">
            {hamburgerNavState
              ? <ChevronDoubleLeftIcon className="h-6 w-auto text-gray-200" />
              : <ChevronDoubleRightIcon className="h-6 w-auto text-gray-200" />
            }
          </button>
          <a href="shunyaek.se" className="ml-2 flex title-font font-medium items-center text-white">
            <img src={logo} alt="Logo" className="w-36"></img>
          </a>
        </div>
        <div className="flex flex-row justify-center items-center w-1/3 p-0 m-0">
          <input name="header_search" id="header_search" type="text" placeholder="Search" className="w-full shadow-inner items-center text-gray-100 bg-gray-900 py-1 px-2 border border-gray-600 focus:border-red-600 hover:border-red-600 hover:bg-gray-900 focus:bg-gray-900 hover:text-gray-200 rounded-l text-base font-sans"></input>
          <button className="inline-flex items-center bg-gray-700 py-1 px-3 border border-gray-600 focus:border-red-600 hover:border-red-600 focus:outline-none hover:bg-gray-700 rounded-r text-base font-sans"><SearchIcon className="h-6 w-auto text-gray-500" /></button>
          <button className="inline-flex items-center py-1 px-1 mx-4 text-base font-sans">
            <MicrophoneIcon className="h-6 w-auto text-gray-200" />
          </button>
        </div>
        <div className="flex flex-row w-1/3 py-0 my-0 justify-end">
          <div className="flex flex-row justify-around mx-4">
            <button className="inline-flex items-center py-1 px-1 mx-2 text-base font-sans">
              <VideoCameraIcon className="h-6 w-auto text-gray-200" />
            </button>
            <button className="inline-flex items-center py-1 px-1 mx-2 text-base font-sans">
              <ViewGridIcon className="h-6 w-auto text-gray-200" />
            </button>
            <button className="inline-flex items-center py-1 px-1 mx-2 text-base font-sans">
              <BellIcon className="h-6 w-auto text-gray-200" />
            </button>
          </div>
          <img src={profile} alt="Profile" className="w-10 h-10 rounded-full shadow-lg py-0 my-0 mr-4"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
