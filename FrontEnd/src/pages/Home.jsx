import { useUserContext } from "../context/UserContext";
import "../../src/App.css";
import AddTransaction from "../components/Client/AddTransaction";
import { Link } from "react-router-dom";
import { useState } from "react";
import Middle from "../components/Home/Middle";

export default function Home() {
  const [showBalance, setShowBalance] = useState(false);
  console.log(showBalance);
  const show = () => {
    setShowBalance(!showBalance);
  };

  const context = useUserContext();
  return (
    <>
      <Middle/>
    </>
  );
}