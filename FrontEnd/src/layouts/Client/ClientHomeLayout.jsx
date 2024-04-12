import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { axiosClient } from "../../api/axios";
import Transactions from "../../pages/Transactions";
import { useTransactionContext } from "../../context/TransactionContext";
import Api from "../../services/Api";
import { useUserContext } from "../../context/UserContext";
import { LOGIN } from "../../router";
import { Button } from "@/components/ui/button";
import NavTop from "../../components/Home/NavTop";
import NavBottom from "../../components/Home/NavBottom";
import "../../App.css"

export default function ClientHomeLayout() {
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

  // useEffect(() => {
  //     fetchData();

  //     Api.getUser()
  //         .then(({ data }) => {
  //             setUser(data);
  //             if(data.role.name == "admin")
  //             {
  //                 navigate('/admin')
  //             }
  //             setAuthenticated(true);

  //         })
  //         .catch((reason) => {
  //             contextLogout()
  //             navigate(LOGIN);
  //         });

  // }, []);

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
    <div  className="background">
      <header>
        <NavTop/>
        
        <NavBottom/>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
