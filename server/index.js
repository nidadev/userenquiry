let express=require('express');
require('dotenv').config();
let enquiryRouter=require('./App/routes/web/EnquiryRoutes');

let mongoose=require('mongoose');
let app=express();

app.use(express.json());

//Routes
app.use('/api/web/enquiry',enquiryRouter);

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("DB connected");
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });       
}).catch((err)=>{
    console.log(err);
});
