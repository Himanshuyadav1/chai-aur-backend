// below code will give error cause we are using type: module
// require('dotenv').config({ path: "./env" });

// import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
const port = process.env.PORT || 8000;

// dotenv.config({
//     path: "./env"
// });

connectDB()
.then( () => {
    // handling error for express app
    app.on("error", error => {
        console.log("Express app facing problem while connecting to DB: ", error);
        throw error;
    });

    app.listen(port, () => {
        console.log(`Server is running at http://localhot:${port}`);
    })
})
.catch(err => {
    console.log("Mongo DB connection failed !!!", err);
});



// 1st way to connect DB but we used seperate file for that
/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        // Listening Error 
        app.on("error", (error) => {
            console.log("Express app facing problem while connecting to DB: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error: ", error);
        throw error; 
    }
} )();
*/