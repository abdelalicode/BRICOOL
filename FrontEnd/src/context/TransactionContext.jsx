import React, { createContext, useContext } from 'react'
import { useState } from 'react';
import Api from './../services/Api';
import { useNavigate } from 'react-router';
import { HOME } from './../router/index';



export const  StateContext = createContext({

    // user: null,
    // setUser: () => {},
    transaction: {},
    authenticated : false, 
    setTransaction: ()=>{},
    // logout: ()=>{},
    // login: (email, password) => {},
    setAuthenticated: () => {}
})

export default function TransactionContext({children}) {
    const [transaction, setTransaction]= useState(null)
    // const [user, setUser]= useState()

    const [authenticated, setAuthenticated ] =useState(false)

    // const login = async (email, password) => {
    //    await Api.getCsrfToken ()
    //    return await Api.login(email, password)
    // }
    

    const logout =  () => {}

    // console.log(transaction);
    // console.log(user);

  return (
    <>
        
    <StateContext.Provider value={{
        transaction,
        setTransaction,
        // user,
        // setUser,
        // login,
        // logout,
        authenticated,
        setAuthenticated
    }}>
      {children}
    </StateContext.Provider>

    </>

)
  
}

export const useTransactionContext = () => useContext(StateContext)




