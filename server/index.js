let express=require('express');
let mongoose=require('mongoose');
let app=express();

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
