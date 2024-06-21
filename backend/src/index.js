import connectDB from './db/index.js';
import express from 'express';
import dotenv from 'dotenv';
import app from './app.js';
import mongoose from 'mongoose';
dotenv.config({path: './env'});
connectDB()
.then(()=>{
    app.listen(process.env.PORT||3000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log("Error in connecting to DB:", err);
})
