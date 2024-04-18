import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHomeContext } from "../context/HomeContext";
import "../App.css";
import { Link, useParams } from "react-router-dom";
import Api from "../services/Api";

export default function OfferByCities() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

 

  useEffect(() => {
    const fetchData = async () => {
      const response = await Api.OffersByCity(id);   
      setOffers(response.data);
      setLoading(false);

    };
    fetchData();
  }, [id]);

  console.log(offers);

  if (loading) {
    return <div className="mx-auto mt-24 spinner"></div>;
  }


  return (
    <>
      <h1 className="text-center my-12 m-4 text-4xl">AVAILABLE OFFERS</h1>
      <div className="flex justify-center mt-12">
        <div className="flex gap-6 flex-wrap">
          {offers.length > 0 ? offers.map((offer, key) => (
            <div className="max-w-md mb-8 overflow-hidden bg-white rounded-lg dark:bg-gray-800">
              <img
                className="object-cover w-full h-64 rounded-md"
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Article"
              />

              <div className="p-6">
                <div>
                  <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                    Enroll Offer
                  </span>
                  <a
                    href="#"
                    className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                    tabIndex="0"
                    role="link"
                  >
                    {offer.title}
                  </a>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {offer.description}
                  </p>
                </div>

                <div className="mt-4">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <img
                        className="object-cover h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                        alt="Avatar"
                      />
                      <Link to={`/worker/${offer.worker.id}`}>
                      <p
                        className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                        tabIndex="0"
                      >
                        {offer.worker.firstname} {offer.worker.lastname}
                      </p>
                      </Link>
                    </div>
                    <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                    AVAILABLE FROM {offer.start_date} <br /> TO {offer.end_date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )) : <h1>No Offers Available!</h1>}
        </div>
      </div>
    </>
  );
}
