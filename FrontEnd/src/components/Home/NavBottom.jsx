import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <nav className="bg-[#D9D9D9] bg-opacity-50 border-gray-200 dark:bg-gray-900 px-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pr-16">
          <ul className="font-semibold hidden sm:flex  mx-9 text-[12px] text-dark flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg lg:space-x-20 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/transactions"}>JOBS</Link>
            </li>
            <li>
              <Link to={"/transactions"}>CITIES</Link>
            </li>
            <li>
              <Link to={"/transactions"}>SERVICES</Link>
            </li>
          </ul>

          <div className="flex gap-8 ">
            <ul className="flex space-x-8 hidden sm:flex">
              <li>
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/fluency/48/facebook-new.png"
                  alt="facebook-new"
                />
              </li>
              <li>
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/fluency/48/linkedin.png"
                  alt="linkedin"
                />
              </li>
              <li>
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/fluency/48/twitter.png"
                  alt="twitter"
                />
              </li>
            </ul>
            <div
              className="w-full  md:w-auto -my-4 pl-48 sm:pl-0"
              id="navbar-default"
            >
              <button className="h-full  bg-white p-[17px] text-sm">
                REQUEST A JOB
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
