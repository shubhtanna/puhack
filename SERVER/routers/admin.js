import express from "express"
import {auth,isAdmin, isVendor} from "../middlewares/auth.js"
import { createCategory, deleteCategory, updateCategory } from "../controllers/Category.js";
import { createBrand, deleteBrand, updateBrand } from "../controllers/Brand.js";
import { getAllVendorDetails } from "../controllers/Vendor.js";
import { getAllUserDetails } from "../controllers/Individual.js";

const router = express.Router();

router.post("/createcategory",auth,isAdmin,createCategory)
router.post("/updatecategory",auth,isAdmin,updateCategory)
router.delete("/deletecategory",auth,isAdmin,deleteCategory)

router.post("/createbrand",auth,isAdmin,createBrand)
router.post("/updatebrand",auth,isAdmin,updateBrand)
router.delete("/deletebrand",auth,isAdmin,deleteBrand)

router.get("/getallvendor",auth,isAdmin,getAllVendorDetails)
router.get("/getallindividual",auth,isAdmin,getAllUserDetails)


export default router