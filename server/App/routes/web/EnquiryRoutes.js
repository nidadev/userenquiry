let express=require('express');
let enquiryRouter=express.Router();
const {enquiryInsert}=require('../../controllers/web/enquiryController');

enquiryRouter.post('/insert',enquiryInsert); 


module.exports=enquiryRouter;