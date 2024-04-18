import { axiosClient } from "../api/axios";
import SendTransaction from "../pages/RequestJob";

const Api = {
  getCsrfToken: async () => {
    return await axiosClient.get("/sanctum/csrf-cookie");
  },

  login: async (email, password) => {
    return await axiosClient.post("api/login", { email, password });
  },

  signup: async (firstname, lastname, email, password, c_password) => {
    return await axiosClient.post("api/register", {
      firstname,
      lastname,
      email,
      password,
      c_password,
    });
  },

  logout: async () => {
    return await axiosClient.post("logout");
  },

  filterOffers: async (selectedCity, selectedJob, selectedDate) => {
    return await axiosClient.post("api/offersby", {
      city_id: selectedCity,
      job_id: selectedJob,
      selected_date: selectedDate,
    });
  },

  OffersByCity: async (id) => {
    return await axiosClient.get(`/api/showbycity/${id}`);
  },

  OffersByJob: async (id) => {
    return await axiosClient.get(`/api/showbyjob/${id}`);
  },

  getWorker: async (id) => {
    return await axiosClient.get(`/api/worker/${id}`);
  },

  getClient: async () => {
    return await axiosClient.get(`/api/client/`);
  },

  SendRequestJob: async (city, description) => {
      return await axiosClient.post("api/request", {city, description})
  },

  // getTransaction : async () => {
  //     const sentTransResponse = await axiosClient.get("api/senttrans");
  //     // console.log(sentTransResponse.data);

  //     const receivedTransResponse = await axiosClient.get(
  //         "api/receivedtrans"
  //     );
  //     // console.log(receivedTransResponse.data);

  //     const AllTransactions = {
  //         sentTransactions: sentTransResponse.data,
  //         receivedTransactions: receivedTransResponse.data,
  //     };

  //     return AllTransactions
  // },
  getJobs: async () => {
    return await axiosClient.get("api/job");
  },

  getCities: async () => {
    return await axiosClient.get("api/cities");
  },

  getUser: async () => {
    return await axiosClient.get("api/user");
  },

  UpdateProfile: async (firstname, lastname, email) => {
    return await axiosClient.put("/api/update", { firstname, lastname, email });
  },
};

export default Api;
