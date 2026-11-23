import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import User from "./model/user.js";





const app = express();
app.use(express.json());
dotenv.config();


const dbdatabase = async () => {
    try {
        await mongoose.connect(process.env.MOGOOSE_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
}
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is running"
    })
})
app.get("/health", (req, res) => {
    res.status(200).json({
        message: "health is running"
    });
});
app.post("/user", async (req, res) => {
    try {
        const userdata = req.body;
        // const userdata = {
        //     name: "asad khan",
        //     email: "asad@gmail.com",
        //     password: "123456"
        // }
        const newuser = new User(userdata);
        if (newuser){
            await newuser.save();

        }
        res.status(201).json({
            message: "User created successfully",
            user: User
        });
    } catch (error) {
        res.status(404).json({
            message: "Error creating user",
            error: error.message
        });
    }
})
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    dbdatabase();
});


