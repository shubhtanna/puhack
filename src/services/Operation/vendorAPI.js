import { apiConnector } from "../apiConnector";
import { vendorEndpoints } from "../apis";
import { toast } from "react-hot-toast";

const {
    GET_ALL_VENDOR_DETAILS_API,
    UPDATE_VENDOR_DETAILS_API
} = vendorEndpoints

export const updateVendorDetails = async(data,token) => {
    let result = null ;
    const toastId = toast.loading("LOading....")
    try {
        const response = await apiConnector("POST", UPDATE_VENDOR_DETAILS_API,data,{
            authorization: `Bearer ${token}`,
        });

        console.log("UPDATE_VENDOR_DETAILS_API RESPONSE .....",response);
        if(!response?.data?.success){
            throw new Error("could not update vendor")
        }

        toast.success("Vendor updated successfully")
        result = response?.data?.data
    } catch (error) {
        console.log("UPDATE_VENDOR_DETAILS_API ERROR.....",error)
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result
}

export const getallVendorDetails = async() => {
    const toastId = toast.loading("Loading....")
    let result = [];
    try {
        const response = await apiConnector("GET", GET_ALL_VENDOR_DETAILS_API, )
        if(!response?.data?.success){
            throw new Error ("Could not fetch get all vendor api")
        }

        result = response?.data?.data
    } catch (error) {
        console.log("GET_ALL_VENDOR_DETAILS_API ERROR.....",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result
}

