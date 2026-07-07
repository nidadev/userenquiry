let express=require('express');
let enquiryRouter=express.Router();
const {enquiryInsert}=require('../../controllers/web/enquiryController');
const {enquiryList}=require('../../controllers/web/enquiryController');
const {enquiryDel}=require('../../controllers/web/enquiryController');

enquiryRouter.post('/insert',enquiryInsert); 
enquiryRouter.get('/list',enquiryList);
enquiryRouter.delete('/delete/:id',enquiryDel);


module.exports=enquiryRouter;