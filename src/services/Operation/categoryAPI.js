import toast from "react-hot-toast";
import { categoryEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";

const {
    CREATE_CATEGORY_API,
    UPDATE_CATEGORY_API,
    DELETE_CATEGORY_API
} = categoryEndpoints

export const createCategory = async(data,token) => {
    const toastId = toast.loading("Loading....")
    let result = null;
    try {
        const response = await apiConnector("POST", CREATE_CATEGORY_API, data, {
            authorization: `Bearer ${token}`,
        })

        console.log("CREATE_CATEGORY_API RESPONSE....",response);

        if(!response?.data?.success){
            throw new Error("could not create category")
        }

        toast.success("Category created successfully");
        result = response?.data?.data
    } catch (error) {
        console.log("CREATE_CATEGORY_API ERROR",error);
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result
}

export const updateCategory = async(data,token) => {
    const toastId = toast.loading("Loading....");
    let result = null;
    try {
        const response = await apiConnector("POST", UPDATE_CATEGORY_API,data,{
            authorization: `Bearer ${token}`,  
        })

        console.log("UPDATE_CATEGORY_API RESPONSE....",response);

        if(!response?.data?.success){
            throw new Error("category not updated")
        }

        toast.success("category updated successfully");
        result = response?.data?.data
    } catch (error) {
        console.log("UPDATE_CATEGORY_API ERROR.....",error);
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result
}

export const deleteCategory = async(data,token) => {
    const toastId = toast.loading("Loading....");
    let result = null;
    try {
        const response = await apiConnector("DELETE", DELETE_CATEGORY_API,data,{
            authorization: `Bearer ${token}`,  
        })

        console.log("DELETE_CATEGORY_API RESPONSE....",response);

        if(!response?.data?.success){
            throw new Error("category not deletd")
        }

        toast.success("category deleted successfully");
        result = response?.data?.data
    } catch (error) {
        console.log("DELETE_CATEGORY_API ERROR.....",error);
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result
}