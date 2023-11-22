import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//for handle cors issue
app.use(cors({ 
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

//for parsing data from FE
app.use(express.json({ limit: "16kb" }));

//for url encoding
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//for serving files from static folder
app.use(express.static("public"));

//for cookies
app.use(cookieParser());


// routes import
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/user", userRouter);

export default app;