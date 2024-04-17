import { createBrowserRouter } from "react-router-dom";
import Home from "./../pages/Home";
import Register from "./../pages/Register";
import Login from "./../pages/Login";
import Transactions from "../pages/FilteredOffers";
import NotFound from "../pages/NotFound";
import Layout from "./../layouts/Layout";
import ClientHomeLayout from "../layouts/Client/ClientHomeLayout";
import GuestLayout from "../layouts/GuestLayout";
import SendTransaction from "../pages/SendTransaction";
import UpdateProfile from "../pages/UpdateProfile";
import ADminDashboardLayout from "../layouts/Admin/AdminDashboardLayout";
import AdminHome from "../pages/AdminHome";
import FilteredOffers from "../pages/FilteredOffers";
import Jobs from "../pages/Jobs";
import Cities from "../pages/Cities";
import OfferByCities from "../pages/OfferByCities";
import OfferByJobs from "../pages/OfferByJobs";
import WorkerProfile from "../pages/WorkerProfile";

export const HOME = "/";
export const ADMINHOME = "/admin";
export const FILTEREDOFFERS = "/filteredoffers";
export const SENDTRANSACTION = "/sentransaction";
export const LOGIN = "/login";
export const UPDATEPROFILE = "/updateprofile";
export const JOBS = "/jobs";
export const CITIES = "/cities";
export const OFFERBYJOBS = "/jobs:id";
export const OFFERBYCITIES = "/cities/:id";
export const WORKERPROFILE = "/worker/:id";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/signup",
        element: <Register />,
      },
    ],
  },
  {
    element: <ClientHomeLayout />,
    children: [
      {
        path: HOME,
        element: <Home />,
      },

      {
        path: FILTEREDOFFERS,
        element: <FilteredOffers />,
      },
      {
        path: JOBS,
        element: <Jobs />,
      },
      {
        path: CITIES,
        element: <Cities />,
      },
      {
        path: OFFERBYCITIES,
        element: <OfferByCities />,
      },
      {
        path: OFFERBYJOBS,
        element: <OfferByJobs />,
      },
      {
        path: WORKERPROFILE,
        element: <WorkerProfile />,
      },
      {
        path: UPDATEPROFILE,
        element: <UpdateProfile />,
      },
    ],
  },
  {
    element: <ADminDashboardLayout />,
    children: [
      {
        path: ADMINHOME,
        element: <AdminHome />,
      },
    ],
  },
]);
