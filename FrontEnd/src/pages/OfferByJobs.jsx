import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHomeContext } from "../context/HomeContext";
import "../App.css";

export default function OfferByJobs() {
  const {loading } = useHomeContext();

  if (loading) {
    return <div className="mx-auto mt-24 spinner"></div>;
  }
  return (
    <div className="mt-12">
     
    </div>
  );
}
