import express from "express";
import { dbConnection } from "./Database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";


const app=express();

dotenv.config({path: "./config/config.env"})

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    method:["POST"],
    credentials:true,
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/message", messageRouter);

app.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"WELCOME TO MY APP"
    })
})

dbConnection();

export default app;