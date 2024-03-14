import {User} from '../models/User.js';
import { respond } from '../utils/response.js';
import { Vendor } from '../models/Vendor.js';
import dotenv from "dotenv"
import { uploadImageToCloudinary } from '../utils/ImageUploader.js';
// import { Product } from '../models/Product.js';

dotenv.config();

export const getShopByCity =  async(req,res)=>{
    try{

        const {city,id} =  req.user;
        console.log(city,id);

        //Not required according to me
        // if(!city || !shopId){
        //     return respond(res,404,"All fields are required");
        // }
        
        const shop = await User.find({city:city,accountType:'Vendor'});

        return respond(res,"All the Shops fetched by city",200,true,shop);

    }catch(error){
        console.log("Error in fetching shop by city : ",error);
        return respond(res,"All the Shops are not fetched by city",500,false);
    }
}

export const updateVendor = async(req,res) => {
    try{

        const id = req.user.id;

        const {
            contactNumber,
            gstNumber = "",
            shopName
        } = req.body

        const gstInvoice = req.files.gstInvoice;

        if(!gstNumber || !gstInvoice ){
            return res.status(400).json({
                success:false,
                message:"All feilds are required"
            })
        }

        const gstInvoiceImage = await uploadImageToCloudinary(
            gstInvoice,
            process.env.FOLDER_NAME
          )
          console.log(gstInvoiceImage)

        const userDetails = await User.findById(id);
        const vendorId = userDetails.vendorDetails;
        const vendorDetails = await Vendor.findById(vendorId);

        vendorDetails.contactNumber = contactNumber;
        vendorDetails.gstNumber = gstNumber;
        vendorDetails.shopName = shopName;
        vendorDetails.gstInvoice = gstInvoiceImage.secure_url;

        await vendorDetails.save()

        const updatedVendor = await User.findById(id).populate("vendorDetails").exec();

        return res.status(200).json({
            success:true,
            message:"vendor profile updated successfully",
            data:updatedVendor,
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"error in updating the vendor"
        })
    }
}

export const deleteAccount = async(req,res) => {
    try {
        const id = req.user.id;

        const user = await User.findById({_id:id});

        if(!user) {
            return res.status(404).json({
                success:false,
                message:"User not found"
            });
        }

        await Vendor.findByIdAndDelete({_id:user.vendorDetails});

        await User.findByIdAndDelete({_id:id});

        return res.status(200).json({
            success:true,
            message:"User account Deleting successfully"
        });

    } catch(error) {
        console.log(error);
        res.status(500).josn({
            success:false,
            message:"user not found for deleting the account"
        })
    }
}

export const getAllVendorDetails = async(req,res) => {
    try {
        
        const vendorDetails = await User.find({accountType:"Vendor"}).populate("vendorDetails").exec();
        console.log("vendordetails: ",vendorDetails)

        return res.status(200).json({
            success:true,
            message:"User data fetched successfully",
            data:vendorDetails
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"error while geting all uasers",
            error:error.message
        })
    }
}

export const intrestedProducts = async(req,res) => {
    try{
        const id = req.user.id;

        const vendorDetails = await User.findOne({_id:id}).populate("products").exec();

        if(!vendorDetails) {
            return res.status(400).json({
                success:false,
                message:"could not find the user"
            });
        }

        return res.status(200).json({
            success:true,
            data:vendorDetails.products
        })
    } catch (error) {
        console.log(error);
        return respond(res,"Something went wrong while fecthing the interested products for single vendor",500,false)
    }
}

