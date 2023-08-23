import express from 'express';
import mongoose from  'mongoose';
//V6RH4IgXdgiFw2GX
import cors from 'cors';
import dotenv from 'dotenv';
import bookRoute from './routes/bookRoute.js'
dotenv.config();

const app =express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors());
const PORT=process.env.PORT;
const CONNECTION_URL=process.env.CONNECTION_URL;
app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.use('/books',bookRoute)


mongoose.connect(CONNECTION_URL,{useUnifiedTopology:true},{useNewUrlParser:true}).then(()=>app.listen(PORT,()=>console.log("Server connected..."))).catch((error)=>console.log(error))

