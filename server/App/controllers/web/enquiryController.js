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

let enquiryList=async (req,res)=>{
    let enquiryList = await enquiryModel.find()
 res.send({
    status:1,
    data:enquiryList
 })
}
let enquiryDel=async (req,res)=>{
    let {id} = req.params
    let deleteEnquiry = await enquiryModel.deleteOne({_id:id})
     res.send({
        status:1
     })
}   
let enquirySingle=async (req,res)=>{
    let {id} = req.params
    let singleEnquiry = await enquiryModel.findOne({_id:id})
    res.send({
        status:1,
        data:singleEnquiry
    })
}
module.exports={enquiryInsert,enquiryList,enquiryDel,enquirySingle};