import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI).then(()=> {
    console.log("DB is connected");
})
app.use(express.json());
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);