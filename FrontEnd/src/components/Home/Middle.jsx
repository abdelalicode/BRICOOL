import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import { useHomeContext } from "../../context/HomeContext";
import Api from "./../../services/Api";

export default function () {

  const navigate = useNavigate();


  const {
    cities,
    jobs,
    loading,
    setLoading,
    selectedCity,
    setSelectedCity,
    selectedJob,
    setSelectedJob,
    selectedDate,
    setSelectedDate,
    filteredOffers, 
    setFilteredOffers
  } = useHomeContext();


  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleJobChange = (event) => {
    setSelectedJob(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    offersby();
  };

  const offersby = async () => {
    const data = await Api.filterOffers(selectedCity, selectedJob, selectedDate)
      setFilteredOffers(data.data);
      navigate("/filteredoffers");
  };


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

          <div className="mt-8  text-[12px] min-w-[558px] min-h-[60px] bg-[#D9D9D9] rounded-lg bg-opacity-40 backdrop-blur-xl flex items-center">
            <form onSubmit={handleSubmit}>
              <select
                onChange={handleCityChange}
                value={selectedCity}
                className="ml-6 text-white py-2.5 text-sm text-gray-500 bg-transparent border-0 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option value="">Which city</option>
                {cities &&
                  cities.data.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
              </select>
              <select
                onChange={handleJobChange}
                value={selectedJob}
                className="ml-5 text-white py-2.5 text-sm text-gray-500 bg-transparent border-0  border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option value="">What type of work</option>
                {jobs &&
                  jobs.data.data.map((job) => (
                    <option key={job.id} value={job.id}>
                      {job.type}
                    </option>
                  ))}
              </select>
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="ml-5 text-white py-2.5 text-sm bg-transparent border-0 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:border-gray-200 peer"
              />
              {/* <Link
                to={{
                  pathname: "/filteredoffers",
                }}
              > */}
                <button className="font-semibold text-[12px] bg-yellow-500 px-6 py-2 ml-2">
                  SUBMIT
                </button>
              {/* </Link> */}
            </form>
          </div>
          
        </div>

        <div className="... min-h-[956px]"></div>
      </div>
    </>
  );
}
