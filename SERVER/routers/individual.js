import express from "express";
import { auth, isIndividual } from "../middlewares/auth.js";
import { delteAccount, updateIndividual,getProductsPost } from "../controllers/Individual.js";
import { getShopByCity } from "../controllers/Vendor.js";
import { createProduct, deleteProduct, getOneProduct, updateProduct } from "../controllers/Product.js";

const router = express.Router();

router.post("/updateindividualdetails",auth,isIndividual,updateIndividual)
router.delete("/deleteindividualaccount",auth,isIndividual,delteAccount)
router.get("/getshopbycity",auth,isIndividual,getShopByCity)
router.post("/createproduct",auth,isIndividual,createProduct)
router.get("/getoneproduct",auth,isIndividual,getOneProduct)
router.delete("/deleteproduct",auth,isIndividual,deleteProduct)
router.post("/updateproduct",auth,isIndividual,updateProduct)
router.get("/getuserproducts",auth,isIndividual,getProductsPost)

export default router;