import React, { useState } from "react";
import { useEffect } from "react";
import Api from "../../services/Api";
import { Badge } from "flowbite-react";
import { AddOffer } from "./AddOffer";
import { useUserContext } from "../../context/UserContext";
import CancelOfferModal from "./CancelOfferModal";

export default function Offers() {
  const [workerOffers, setWorkerOffers] = useState([]);
  const { user } = useUserContext();

  useEffect(() => {
    const fetchWorkerOffers = async () => {
      const response = await Api.getWorkerOffers();
      setWorkerOffers(response.data);
    };
    fetchWorkerOffers();
  }, []);

  console.log(workerOffers);

  const fetchUpdatedOffers = async () => {
    const response = await Api.getWorkerOffers();
    setWorkerOffers(response.data);
    console.log(user);
  };

  return (
    <div>
      <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg">
        {user.city_id != null && user.job_id != null ? (
          <AddOffer fetchUpdatedOffers={fetchUpdatedOffers} />
        ) : (
          <div
            className="p-4 w-full sm:w-1/2 mb-4 text-sm text-red-800 rounded-md bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span className="font-medium">Info Needed!</span> Add Your City and Job
            To Your Profile Section
          </div>
        )}
        <table className="w-full text-sm text-left rtl:text-right text-white dark:text-white">
          <thead className="text-xs text-white uppercase dark:text-white">
            <tr className="border-b border-8 border-slate-800 dark:border-gray-700">
              <th scope="col" className="px-3 py-3 bg-slate-500 dark:bg-slate-800">
                Title
              </th>
              <th scope="col" className="px-3 py-3 bg-slate-600">
                Description
              </th>
              <th scope="col" className="px-3 py-3 bg-slate-500 dark:bg-slate-700">
                Start Date
              </th>
              <th scope="col" className="px-3 py-3 bg-slate-600">
                End Date
              </th>
              <th scope="col" className="px-3 py-3 bg-slate-500">
                Hourly Rate
              </th>
              <th scope="col" className="px-3 py-3 bg-slate-600">
                Status
              </th>
              <th scope="col" className="px-3 py-3 bg-slate-500">
                Cancel Offer
              </th>
            </tr>
          </thead>
          <tbody>
            {workerOffers.length > 0 ? (
              workerOffers.map((offer, key) => (
                <tr key={offer.id} className="border-b border-8 border-slate-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-white whitespace-nowrap bg-slate-600 dark:text-white dark:bg-slate-800"
                  >
                    {offer.title}
                  </th>
                  <td className="px-3 py-4 bg-slate-700">
                    {offer.description.slice(0, 50) + "..."}
                  </td>
                  <td className="px-3 py-4 bg-slate-600 dark:bg-slate-800">
                    <Badge className="justify-center " color="indigo">
                      {offer.start_date}
                    </Badge>
                  </td>
                  <td className="px-3 py-4 bg-slate-700">
                    <Badge className="justify-center " color="warning">
                      {offer.end_date}
                    </Badge>
                  </td>
                  <td className="px-3 py-4 bg-slate-600 dark:bg-slate-800">
                    {offer.hourly_rate}
                  </td>
                  <td className="px-3 py-4 bg-slate-700">
                    {offer.cancelled
                      ? "Cancelled"
                      : offer.client_id != null
                      ? "Taken By " +
                        offer.client.firstname +
                        " " +
                        offer.client.lastname
                      : "Not Enrolled Yet"}
                  </td>
                  <td className="px-3 py-4 bg-slate-600">
                  {!offer.cancelled &&  <CancelOfferModal
                            fetchUpdatedOffers={fetchUpdatedOffers}
                            offerid={offer.id}
                          />}      
                  
                  </td>
                </tr>
              ))
            ) : (
              <span className="m-12 text-xl font-semibold">
                No Offers From You Yet!
              </span>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
