import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { axiosClient } from "../../api/axios";
import Transactions from "../../pages/FilteredOffers";
import Api from "../../services/Api";
import { useUserContext } from "../../context/UserContext";
import { LOGIN } from "../../router";
import { Button } from "@/components/ui/button";
import AdminHome from "./../../pages/AdminHome";

export default function ADminDashboardLayout() {
  const navigate = useNavigate();
  // const [transaction, setTransaction] = useState({});
  const { transaction, setTransaction } = useTransactionContext();
  const {
    user,
    setUser,
    authenticated,
    setAuthenticated,
    logout: contextLogout,
  } = useUserContext();
  const context = useUserContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();

    Api.getUser()
      .then(({ data }) => {
        setUser(data);
        if (data.role.name == "client") {
          navigate("/");
        }
        setAuthenticated(true);
      })
      .catch((reason) => {
        contextLogout();
        navigate(LOGIN);
      });
  }, []);

  const fetchData = async () => {
    const transactions = await Api.getTransaction();
    setTransaction(transactions);
    setLoading(false);
  };

  const logout = async () => {
    Api.logout().then(() => {
      contextLogout();
      navigate(LOGIN);
    });
  };

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/avantgarde/100/wallet.png"
                alt="wallet"
              />
              <span
                className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-blue-800"
                style={{ fontFamily: "Tac One, sans-serif" }}
              >
                YOUWALLET
              </span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <ul className="flex place-items-center flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link to={"/admin"}>All Transactions</Link>
                </li>
                <li>
                  <Button onClick={logout}>Log out</Button>
                  <Link to={"/logout"}></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <h1 className="mt-12 ml-24 text-4xl font-medium">
          Welcome to your Admin Dashboard
        </h1>
        <AdminHome transactions={transaction} loading={loading} />
      </main>
      <footer></footer>
    </>
  );
}
