import { useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";
import TransactionContext from "./context/TransactionContext";
import UserContext from "./context/UserContext";

function App() {
    return (
        <>
            <UserContext>
                <TransactionContext>
                    <RouterProvider router={router} />
                </TransactionContext>
            </UserContext>
        </>
    );
}

export default App;
