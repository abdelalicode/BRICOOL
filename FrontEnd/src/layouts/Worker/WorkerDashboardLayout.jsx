import React from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

export default function WorkerDashboardLayout() {
  return (
    <div className="bg-slate-800 h-screen w-screen">
      <div className="flex p-16 space-x-8 justify-center sm:justify-around items-center">
        <img
          width="144"
          height="144"
          src="https://i.ibb.co/kDVqMN5/LOGO-3.png"
          alt="BRICOOL"
          className="h-full"
        />
        <h1 className=" text-white font-bold text-2xl">WORKER DASHBOARD</h1>
      </div>

      <header></header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
