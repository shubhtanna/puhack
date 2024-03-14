import express from "express"
import { login, sendOtp, signUp } from "../controllers/auth.js"
import { auth } from "../middlewares/auth.js"
import { contactUs } from "../controllers/ContactUs.js"

const router = express.Router()

router.post("/signup",signUp)
router.post("/sendotp",sendOtp)
router.post("/login",login)
router.post("/contactus",auth,contactUs)


export default router;