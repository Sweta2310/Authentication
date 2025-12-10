import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import Routes from "./routes/route.js";

dotenv.config({ path: "./src/.env" });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", Routes);

// MongoDB + Backend Start
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log("Server running on port", process.env.PORT)
    );
  })
  .catch((err) => console.log(err));
