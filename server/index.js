let express=require('express');
require('dotenv').config();
let mongoose=require('mongoose');
let app=express();

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("DB connected");
}).catch((err)=>{
    console.log("DB connection failed");
});
