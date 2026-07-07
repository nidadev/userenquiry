let express=require('express');
let enquiryRouter=express.Router();
const {enquiryInsert}=require('../../controllers/web/enquiryController');
const {enquiryList}=require('../../controllers/web/enquiryController');

enquiryRouter.post('/insert',enquiryInsert); 
enquiryRouter.get('/list',enquiryList);


module.exports=enquiryRouter;