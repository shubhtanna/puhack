import toast from "react-hot-toast";
import { brandEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";

const {
    CREATE_BRAND_API,
    UPDATE_BRAND_API,
    DELETE_BRAND_API
} = brandEndpoints

export const createBrand = async(data,token) => {
    const toastId = toast.loading("Loading....")
    let result = null;
    try {
        const response = await apiConnector("POST", CREATE_BRAND_API, data, {
            authorization: `Bearer ${token}`,  
        })

        console.log("CREATE__BRAND_API RESPONSE....",response);

        if(!response?.data?.success){
            throw new Error("could not create Brand")
        }

        toast.success("Brand Created Successfully")
        result = response?.data?.data;
    } catch (error) {
        console.log("CREATE__BRAND_API ERROR......", error);
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result
}

export const updateBrand = async(data,token) => {
    const toastId = toast.loading("Loading....")
    let result = null;
    try {
        const response = await apiConnector("POST", UPDATE_BRAND_API, data, {
            authorization: `Bearer ${token}`,  
        })

        console.log("UPDATE_BRAND_API RESPONSE....",response);

        if(!response?.data?.success){
            throw new Error("could not update Brand")
        }

        toast.success("Brand updated Successfully")
        result = response?.data?.data;
    } catch (error) {
        console.log("UPDATE_BRAND_API ERROR......", error);
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result
}

export const deleteBrand = async(data,token) => {
    const toastId = toast.loading("Loading....")
    let result = null;
    try {
        const response = await apiConnector("DELETE", DELETE_BRAND_API, data, {
            authorization: `Bearer ${token}`,  
        })

        console.log("DELETE_BRAND_API RESPONSE....",response);

        if(!response?.data?.success){
            throw new Error("could not deleted Brand")
        }

        toast.success("Brand deleted Successfully")
        result = response?.data?.data;
    } catch (error) {
        console.log("DELETE_BRAND_API ERROR......", error);
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result
}