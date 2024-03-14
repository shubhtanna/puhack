import express from "express"
import { deleteAccount, updateVendor } from "../controllers/Vendor.js";
import { auth, isVendor,isIndividual } from "../middlewares/auth.js";
import  {intrestedProducts} from "../controllers/Vendor.js"
import { getAllProducts } from "../controllers/Product.js";
import { addIntrest, getAllIntrestedUsers } from "../controllers/intrestedProduct.js";

const router = express.Router();

router.post("/updatevendordetails",auth,isVendor,updateVendor)
router.get("/getallinterestedproducts",auth,isVendor,intrestedProducts)
router.delete("/deleteaccount",auth,isVendor,deleteAccount)
router.get("/getallproductsbycity",auth,isVendor,getAllProducts)
router.post("/addinterest",auth,isVendor,addIntrest)
router.get("/getallinterestedusers",auth,isVendor,getAllIntrestedUsers)

export default router;