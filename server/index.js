import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import postsroute from './routes/posts.js'
import userRoutes from './routes/users.js'
dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/posts',postsroute);
app.use('/users',userRoutes)

const port=process.env.port||5000;
mongoose.connect(process.env.CONNECTION_URL).then(()=>app.listen(port,()=>console.log(`workingg ${port}`))).catch((error)=>console.log(error.message))


