import express from "express";
import { cloudinaryConnect } from "./config/cloudinary.js";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import userRouter from "./routers/user.js"
import adminRouter from "./routers/admin.js"
import vendorRouter from "./routers/vendor.js"
import individualRouter from "./routers/individual.js"

const app = express();

import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

connectDB();
dotenv.config();

const PORT = process.env.PORT || 4000


app.use(express.json());

app.use(cookieParser());
app.use(
    fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp"
})
)

// app.use(
//     cors({
//         origin:"http://localhost:3000",
//         credentials:true,
//     })
// )

cloudinaryConnect();

app.use("/api/v1/auth",userRouter);
app.use("/api/v1/admin",adminRouter)
app.use("/api/v1/vendor",vendorRouter)
app.use("/api/v1/individual",individualRouter)

app.get("/", (req,res) => {
    return respond(res,"Your server is up and running",20,true)
});

app.listen(PORT, () => {
    console.log(`your server started at ${PORT}`);
})