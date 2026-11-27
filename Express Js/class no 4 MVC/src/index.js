import express from 'express';
import authRoutes from './routes/authRoutes.js';
import connectDB from './db/db.js';
import dotenv from 'dotenv';
import usersRoutes from './routes/userRoutes.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.json());

// auth
app.use("/api/auth" , authRoutes)
// user
app.use("/api/users" , usersRoutes)
app.get("/api/health", (req, res) => {
    res.status(200).json({
        status : "true",
        message : "health is good"
    })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});