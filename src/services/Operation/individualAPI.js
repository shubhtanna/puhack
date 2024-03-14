import toast from "react-hot-toast";
import { individualEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";

const {
    UPDATE_INDIVIDUAL_API,
    GET_ALL_INDIVIDUAL_ACCOUNT_API,
    GET_POST_OF_PRODUCT,
    GET_SHOP_BY_CITY,
} = individualEndpoints

export const updateIndividualUser = async(data,token) => {
    let result = null;
    const toastId = toast.loading("Loading...");
    try {
        const response = await apiConnector("POST", UPDATE_INDIVIDUAL_API,data,
            { authorization: `Bearer ${token}`,}
        );

        console.log("UPDATE_INDIVIDUAL_API RESPONSE....",Response)

        if(!response?.data?.success){
            throw new Error("could not update the individual")
        }

        toast.success("individula update succesfully");
        result = response?.data?.data
    } catch (error) {
        console.log("UPDATE_INDIVIDUAL_API ERROR....",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId)
    return result
}

export const allIndividual = async() => {
    const toastId = toast.loading("Loading.....")
    let result = [];
    try {
        const response = await apiConnector("GET",
        GET_ALL_INDIVIDUAL_ACCOUNT_API);

        if(!response?.data?.success){
            throw new Error("could not fetch all individual accounts")
        }

        result = response?.data?.data;
    } catch (error) {
        console.log("GET_ALL_INDIVIDUAL_ACCOUNT_API ERROR....",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result
}

export const getUserProducts = async (token) => {
    let result = [];
    const toastId = toast.loading("Loading....");
    try {
        const response = await apiConnector("GET", GET_POST_OF_PRODUCT,             { authorization: `Bearer ${token}`,}
        );

        if(!response?.data?.success){
            throw new Error("could not fetched userproducts data")
        }

        result = response?.data?.data
    } catch (error) {
        console.log("GET_POST_OF_PRODUCT ERROR",error)
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result
}

export const getShopByCity = async(token) => {
    let result = [];
    const toastId = toast.loading("Loading....")
    try {
        const response = await apiConnector("GET", GET_SHOP_BY_CITY, 
        { authorization: `Bearer ${token}`,}
        );

        if(!response?.data?.success){
            throw new Error("could not fetch getshop by city data")
        }

        result = response?.data?.data;
    } catch (error) {
        console.log("GET_SHOP_BY_CITY ERROR...",error);
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result
}