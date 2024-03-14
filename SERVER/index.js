import express from "express";

const app = express();

import dotenv from "dotenv";
import { connectDB } from "./config/db";

connectDB();
dotenv.config();

const PORT = process.env.PORT || 4000


app.use(express.json());



app.get("/", (req,res) => {
    return respond(res,"Your server is up and running",20,true)
});

app.listen(PORT, () => {
    console.log(`your server started at ${PORT}`);
})