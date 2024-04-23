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

   
  getRequests: async () => {
    return await axiosClient.get("/api/request");
  },

  getWorkerOffers: async () => {
    return await axiosClient.get("/api/workeroffers");
  },

  

  TakeRequest: async (id) => {
    return await axiosClient.put("/api/takerequest", {id});
  },

  getClient: async () => {
    return await axiosClient.get(`/api/client/`);
  },

  SendRequestJob: async (city, description) => {
      return await axiosClient.post("api/request", {city, description})
  },

  AddOffer: async (title, description , start_date, end_date, hourly_rate) => {
    return await axiosClient.post("api/offer", {title, description , start_date, end_date, hourly_rate})
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

  cancelOffer: async (id) => {
    return await axiosClient.put("api/offer/" + id)
  },
  
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
