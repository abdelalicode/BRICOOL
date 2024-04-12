import React, { createContext, useContext } from 'react'
import { useState } from 'react';
import Api from './../services/Api';
import { useNavigate } from 'react-router';
import { HOME } from './../router/index';



export const  UserStateContext = createContext({

    user: {},
    setUser: () => {},
    allUsers: {},
    setAllUsers: () => {},
    authenticated : false, 
    logout: ()=>{},
    login: (email, password) => {},
    setAuthenticated: () => {}
})

export default function UserContext({children}) {
    const [user, setUser]= useState({})
    const [allUsers, setAllUsers]= useState({})

    const [authenticated, _setAuthenticated ] =useState(window.localStorage.getItem('AUTHENTICATED'))

    const login = async (email, password) => {
       return  Api.login(email, password)
     
    }



    const logout =  () => {

      setUser({});
      _setAuthenticated(false);
    }

    const setAuthenticated = (isAuthenticated) =>
    {
      _setAuthenticated(isAuthenticated)
      window.localStorage.setItem('AUTHENTICATED', isAuthenticated)
    }

  return (
        
    <UserStateContext.Provider value={{
        user,
        setUser,
        allUsers,
        setAllUsers,
        login,
        logout,
        authenticated,
        setAuthenticated
    }}>
      {children}
    </UserStateContext.Provider>


)
  
}

export const useUserContext = () => useContext(UserStateContext)



