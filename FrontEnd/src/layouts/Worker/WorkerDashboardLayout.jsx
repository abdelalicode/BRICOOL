import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import "../../App.css";
import ClientsRequests from "../../components/Worker/ClientsRequests";
import Offers from "../../components/Worker/Offers";
import { useUserContext } from "../../context/UserContext";

export default function WorkerDashboardLayout() {

  const {user, setUser} = useUserContext()

  useEffect(() => {

    const storedUser = window.localStorage.getItem('user');
    if (storedUser || user === null) {
        const userObject = JSON.parse(storedUser);
        setUser(userObject);
        console.log(user);
    }


  } , [])
  return (
    <div className="bg-slate-800 h-full min-h-screen w-screen">
      <header>
        <div className="flex p-12 space-x-8 justify-center sm:justify-around items-center">
          <img
            width="144"
            height="144"
            src="https://i.ibb.co/kDVqMN5/LOGO-3.png"
            alt="BRICOOL"
            className="h-full"
          />
          <h1 className="text-white font-bold text-2xl">WORKER DASHBOARD</h1>
        </div>
      </header>
      <main className="px-24 text-white text-md">
        <p className="text-4xl mb-4 capitalize">Hello {user.firstname} {user.lastname} !</p>
        <Tabs aria-label="Tabs with underline" className="border-0 tabs" style="underline">
          <Tabs.Item active title="Client's Requests" icon={HiUserCircle} >
            <div className="font-medium py-6 p-5 text-3xl text-center text-gray-50 dark:text-white">
            </div>
            <ClientsRequests/>
          </Tabs.Item>
          <Tabs.Item title="My offers" icon={MdDashboard}>
          <div className="font-medium py-3 text-3xl text-center text-gray-50 dark:text-white">
            </div>
            <Offers/>
          </Tabs.Item>
          <Tabs.Item title="Settings" icon={HiAdjustments}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </Tabs.Item>
        </Tabs>
      </main>
    </div>
  );
}
