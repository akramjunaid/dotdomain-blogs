import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI).then(()=> {
    console.log("DB is connected");
    
})
app.get('/', (req,res) => {
    console.log("Successful connection");
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    
})