import  express  from "express";
import connectToDB from "./config/db.js";
import dotenv from "dotenv"
import authRoutes from "./routes/user.route.js";
dotenv.config();
import cors from "cors"


const app = express()
const PORT =  process.env.PORT

app.use(cors());


app.use(express.json())
app.use('/api/auth',authRoutes);

connectToDB()

app.get('/',(req,res)=>{
    res.end("hello")
})

app.listen( PORT , ()=> {
    console.log(`http://localhost:${PORT} is running`)
})