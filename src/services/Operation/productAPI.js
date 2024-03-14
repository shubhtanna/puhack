import toast from "react-hot-toast";
import { productEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";

const {
    CREATE_PRODUCT_API,
    GET_ONE_PRODUCT_API,
    UPDATE_PRODUCT_API,
    DELETE_PRODUCT_API,
    ADD_INTEREST,
    GET_ALL_PRODUCTS_API,
    GET_ALL_INTRESTED_PRODUCT_OF_THAT_USER_API,
    GET_ALL_INTRSTED_USER_ON_THAT_PRODUCT_API
} = productEndpoints

export const createProduct = async(data,token) => {
    let result = null;
    const toastId = toast.loading("Loading....");
    try{
        const response = await apiConnector("POST", CREATE_PRODUCT_API,data, {
            authorization: `Bearer ${token}`,
        })

        console.log("CREATE_PRODUCT_API RESPONSE....",response);
        if(!response?.data?.success){
            throw new Error("product not created")
        }

        toast.success("product add successfully")
        result = response?.data?.data
    } catch (error) {
        console.log("CREATE_PRODUCT_API ERROR....",error)
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result
}

export const getOneProduct = async(data,token) => {
    let result = null;
    const toastId = toast.loading("Loading....");
    try {
        const response = await apiConnector("GET", GET_ONE_PRODUCT_API,data,{
            authorization: `Bearer ${token}`,
        })

        console.log("GET_ONE_PRODUCT_API RESPONSE.....",response);
        if(!response?.data?.success){
            throw new Error("one product not fetched")
        }

        toast.success("product get successfully");
        result = response?.data?.data;
    } catch(error) {
        console.log("GET_ONE_PRODUCT_API ERROR....",error)
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result
}

export const editProduct = async(data,token) => {
    let result = null;
    const toastId = toast.loading("Loading...");
    try {
        const response = await apiConnector("POST",UPDATE_PRODUCT_API,data,{
            authorization: `Bearer ${token}`,
        })

        console.log("UPDATE_PRODUCT_API RESPONSE....",response);

        if(!response?.data?.success){
            throw new Error("product is not updated")
        }

        toast.success("Product updated successfully");
        result = response?.data?.data;
    } catch (error) {
        console.log("UPDATE_PRODUCT_API ERROR....",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result
}

export const deleteProduct = async(data,token) => {
    const toastId = toast.loading("Loading...");
    try {
        const response = await apiConnector("DELETE", DELETE_PRODUCT_API,data,{
            authorization: `Bearer ${token}`, 
        })

        console.log("DELETE_PRODUCT_API RESPONSE....",response)
        if(!response?.data?.success) {
            throw new Error("product is not deleted")
        }

        toast.success("Product deleted successfully")
        result = response?.data?.data
    } catch (error) {
        console.log("DELETE_PRODUCT_API ERROR.....",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result
}

export const addIntrest = async(data,token,navigate) => {
    let result = null;
    const toastId = toast.loading("Loading....")
    try{
        const response = await apiConnector("POST", ADD_INTEREST, data, {
            authorization: `Bearer ${token}`, 
        })

        console.log("ADD_INTEREST RESPONSE.....",response);

        if(!response?.data?.success) {
            throw new Error("Intrest not added")
        }

        toast.success("Add Intrested Successfully");
        result = response?.data?.data
    } catch (error) {
        console.log("ADD_INTEREST ERROR.....");
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result
}

export const getAllProducts = async(data,token) => {
    let result = []
    const toastId = toast.loading("Loading....")
    try {
        const response = await apiConnector("GET", GET_ALL_PRODUCTS_API, data, {
            authorization: `Bearer ${token}`, 
        })

        console.log("GET_ALL_PRODUCTS_API RESPONSE.....",response)

        if(!response?.data?.success){
            throw new Error("products are not fetched")
        }

        toast.success("All products are fetched");
        result = response?.data?.data;
    } catch(error) {
        console.log("GET_ALL_PRODUCTS_API ERROR.....",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result
}

export const getallinterestedproducts = async(data,token) => {
    const toastId = toast.loading("Loading...");
    const result = []
    try {
        const response = await apiConnector("GET", GET_ALL_INTRESTED_PRODUCT_OF_THAT_USER_API,data,{
            authorization: `Bearer ${token}`, 
        })

        console.log("GET_ALL_INTRESTED_PRODUCT_OF_THAT_USER_API RESPONSE....",response);

        if(!response?.data?.success) {
            throw new Error("could not get all intrested products");
        }

        toast.success("Intrested products are fetched")
        result = response?.data?.data;
    } catch (error) {
        console.log("GET_ALL_INTRESTED_PRODUCT_OF_THAT_USER_API ERROR....");
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result
}

export const getAllIntrestedUsers = async(data,token) => {
    const toastId = toast.loading("Loading....")
    let result = [];
    try {
        const response = await apiConnector("GET",
        GET_ALL_INTRSTED_USER_ON_THAT_PRODUCT_API,data,{
            authorization: `Bearer ${token}`, 
        })

        console.log("GET_ALL_INTRSTED_USER_ON_THAT_PRODUCT_API RESPONSE....",response);

        if(!response?.data?.success){
            throw new Error("Intrested users are not fetched")
        }

        toast.success("Intrested users are fetched");
        result = response?.data?.data
    } catch (error) {
        console.log("GET_ALL_INTRSTED_USER_ON_THAT_PRODUCT_API ERROR....",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result
}