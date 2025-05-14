import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToDB from "./config/db.js";
import authRoutes from "./routes/user.route.js";
import productRoutes from "./routes/products.route.js";
import FeatureRoutes from './routes/feature.route.js'

dotenv.config();
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/feature",FeatureRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Auth API");
});

const PORT = process.env.PORT || 3000;

connectToDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
