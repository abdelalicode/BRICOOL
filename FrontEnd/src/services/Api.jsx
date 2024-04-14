import { axiosClient } from "../api/axios";
import SendTransaction from "../pages/SendTransaction";




const Api = {

    getCsrfToken : async () =>{
        return await axiosClient.get('/sanctum/csrf-cookie');
    },


    login : async (email, password) => {
        return  await axiosClient.post("api/login", {email, password})
    },

    signup : async (firstname, lastname, email, password , c_password) => {
        return  await axiosClient.post("api/register", {firstname, lastname, email, password , c_password})
    }, 

    logout : async () => {
        return  await axiosClient.post("logout")
    },

    // SendTransaction: async (receiver_wallet_id, amount) => {
    //     return await axiosClient.post("api/transfer", {receiver_wallet_id, amount})
    // },

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
        return await  axiosClient.get('api/job')
      },

    getCities: async () => {
        return await  axiosClient.get('api/cities')
    },

    getUser: async () => {
      return await  axiosClient.get('api/user')
    },

    UpdateProfile: async (firstname, lastname, email) => {
        return await axiosClient.put("/api/update", {firstname, lastname, email})
    },
}

export default Api;