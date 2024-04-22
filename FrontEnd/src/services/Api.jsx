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
    return await axiosClient.post("api/logout");
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

  getWorkers: async () => {
    return await axiosClient.get("/api/workers");
  },

  getClient: async () => {
    return await axiosClient.get(`/api/client/`);
  },

  SendRequestJob: async (city, description) => {
      return await axiosClient.post("api/request", {city, description})
  },

  SendReview: async (stars, content, worker_id) => {
    return await axiosClient.post("api/review", {stars, content, worker_id})
  },

  UpdatePhone : async (phone, id) => {
      return await axiosClient.put("api/phone", {phone, id})
  },

  UpdateRole : async (id) => {
    return await axiosClient.put("api/role", {id})
  },

  UpdateAddress : async (address, id) => {
    return await axiosClient.put("api/address", {address, id})
  },

  cancelRequest: async (id) => {
    return await axiosClient.put("api/request/" + id)
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
