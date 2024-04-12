import { createBrowserRouter } from "react-router-dom";
import Home from "./../pages/Home";
import Register from "./../pages/Register";
import Login from "./../pages/Login";
import Transactions from "../pages/Transactions";
import NotFound from "../pages/NotFound";
import Layout from "./../layouts/Layout";
import ClientHomeLayout from "../layouts/Client/ClientHomeLayout";
import GuestLayout from "../layouts/GuestLayout";
import SendTransaction from "../pages/SendTransaction";
import UpdateProfile from "../pages/UpdateProfile";
import ADminDashboardLayout from "../layouts/Admin/AdminDashboardLayout";
import AdminHome from "../pages/AdminHome";
import Test from "../pages/Test";

export const HOME = "/";
export const ADMINHOME = "/admin";
export const TRANSACTIONS = "/transactions";
export const SENDTRANSACTION = "/sentransaction";
export const LOGIN = "/login";
export const UPDATEPROFILE = "/updateprofile";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/test",
        element: <Test />,
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
        path: TRANSACTIONS,
        element: <Transactions />,
      },
      {
        path: SENDTRANSACTION,
        element: <SendTransaction />,
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
