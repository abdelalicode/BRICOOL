import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useLocation  } from "react-router-dom";
import { axiosClient } from "../../api/axios";
import { useHomeContext } from "../../context/HomeContext";
import Api from "../../services/Api";
import { useUserContext } from "../../context/UserContext";
import { HOME, LOGIN, WORKERHOME } from "../../router";
import { Button } from "@/components/ui/button";
import NavTop from "../../components/Home/NavTop";
import NavTup from "../../components/Home/NavTup";
import NavBottom from "../../components/Home/NavBottom";
import "../../App.css";
import MyFooter from "../../components/Home/MyFooter";
import Banner from "../../components/Home/Banner";

export default function ClientHomeLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  // const [transaction, setTransaction] = useState({});
  const {
    user,
    setUser,
    authenticated,
    setAuthenticated,
    logout: contextLogout,
  } = useUserContext();
  
  const [loading, setLoading] = useState(true);



  const logout = async () => {
    Api.logout().then(() => {
      contextLogout();
      navigate(HOME);
    });
  };

  useEffect(() => {
    if (!authenticated)
    {
        navigate(HOME)
    }

  }, []);

  

 

  return (
    <>
    <div className={location.pathname === HOME ? "background" : ""}>
      <header>
        <NavTup />
        <NavBottom logout={logout} />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
    <footer>
  </footer>
  </>
  );
}
