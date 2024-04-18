import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useLocation  } from "react-router-dom";
import { axiosClient } from "../../api/axios";
import { useHomeContext } from "../../context/HomeContext";
import Api from "../../services/Api";
import { useUserContext } from "../../context/UserContext";
import { HOME, LOGIN } from "../../router";
import { Button } from "@/components/ui/button";
import NavTop from "../../components/Home/NavTop";
import NavBottom from "../../components/Home/NavBottom";
import "../../App.css";

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


  const logout = async () => {
    Api.logout().then(() => {
      contextLogout();
      navigate(HOME);
    });
  };

  

  return (
    <div className={location.pathname === HOME ? "background" : ""}>
      <header>
        <NavTop />

        <NavBottom logout={logout} />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
