import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import Api from "../services/Api";
import { useNavigate } from "react-router";
import { HOME } from "../router/index";

export const StateContext = createContext({
  cities: {},
  jobs: {},
  authenticated: false,
  setCities: () => {},
  setJobs: () => {},
  setAuthenticated: () => {},
});

export default function HomeContext({ children }) {
  const [cities, setCities] = useState(null);
  const [jobs, setJobs] = useState(null);
  // const [user, setUser]= useState()
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      const cities = await Api.getCities();
      setCities(cities);
    };

    fetchCities();

    const fetchJobs = async () => {
      const jobs = await Api.getJobs();
      setJobs(jobs);
    };

    fetchJobs();
  }, []);

  return (
    <>
      <StateContext.Provider
        value={{
          cities,
          jobs,
          setCities,
          setJobs,
          authenticated,
          setAuthenticated,
        }}
      >
        {children}
      </StateContext.Provider>
    </>
  );
}

export const useHomeContext = () => useContext(StateContext);
