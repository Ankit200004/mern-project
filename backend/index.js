// import  express  from "express";
// import connectToDB from "./config/db.js";
// import dotenv from "dotenv"
// import authRoutes from "./routes/user.route.js";
// dotenv.config();
// import cors from "cors"


// const app = express()
// const PORT =  process.env.PORT

// app.use(cors());


// app.use(express.json())
// app.use('/api/auth',authRoutes);

// connectToDB()

// app.get('/',(req,res)=>{
//     res.end("hello")
// })

// app.listen( PORT , ()=> {
//     console.log(`http://localhost:${PORT} is running`)
// })

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToDB from "./config/db.js";
import authRoutes from "./routes/user.route.js";

dotenv.config();
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Auth API");
});

const PORT = process.env.PORT || 3000;

connectToDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
