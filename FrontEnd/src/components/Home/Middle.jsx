import React from "react";
import { Link } from "react-router-dom";
import "../../App.css"

export default function () {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 pl-[200px] pt-[240px]">
        <div className="... min-h-[956px] mb-12">
          <div className="bg-[#1B242F] w-1/2  py-2 mb-12 relative">
            <p className="text-[12px] mx-12 text-white font-medium">
              Your working needs SOLUTION
            </p>

            <div className="absolute top-0 left-0 h-full w-1.5 bg-yellow-500"></div>
          </div>
          <h1 className="text-white text-[54px] font-semibold mb-10">
            Connecting Clients with Skilled Workers
          </h1>
          <p className="text-[12px] text-white font-medium mb-10">
            Are you in need of reliable and skilled professionals for your home
            or business projects? <br /> Look no further! <br />
            Bricool™ is here to simplify your search and connect you with
            top-notch workers in your area.
          </p>

          <p className="mt-16 bg-yellow-500 font-semibold w-[175px] h-[44px] text-[12px] text-center py-3">
            CHECK CATEGORIES
          </p>

          <p className="text-[14px] font-light text-white mt-20">
            Browse through a wide range of categories <br /> and find the
            perfect match for your needs
          </p>

          <div class="mt-8  text-[12px] min-w-[558px] min-h-[60px] bg-[#D9D9D9] rounded-lg bg-opacity-40 backdrop-blur-xl flex items-center">
            <select class="ml-6 text-white py-2.5  text-sm text-gray-500 bg-transparent border-0 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option selected>Which city</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <select class="ml-5 text-white py-2.5  text-sm text-gray-500 bg-transparent border-0  border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            <option selected>What type of work</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <select class="ml-5 text-white py-2.5  text-sm text-gray-500 bg-transparent border-0  border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            <option selected>Date</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>

            <button className="font-semibold text-[12px] bg-yellow-500 px-6 py-2 ml-2">SUBMIT</button>
          </div>
        </div>

        <div className="... min-h-[956px]"></div>
      </div>
    </>
  );
}
