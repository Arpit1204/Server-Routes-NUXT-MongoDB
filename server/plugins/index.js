import mongoose from "mongoose";


export default defineEventHandler(async(event)=>{
    
        mongoose
        .connect("mongodb://localhost:27017/usertest", {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          family: 4,
        }).then(()=> console.log("Connected to DB"))
        .catch((e)=>{
        console.log(e);
    })
    })