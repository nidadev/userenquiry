const enquiryModel=require('../../models/enquiry.model');

let enquiryInsert=(req, res)=>{

    let {name,email,phone,message} = req.body
    let enquiry= new enquiryModel({
        name:name,
        email:email,
        phone:phone,
        message:message
    })
    enquiry.save().then(()=>{
    res.send({
        status:1,
        message:"data inserted"
    })

        //console.log("data save")
    }).catch((err)=>{
         res.send({
        status:0,
        message:"error",
        error:err
    
    })
       // console.log(err)

    });

}
module.exports={enquiryInsert};