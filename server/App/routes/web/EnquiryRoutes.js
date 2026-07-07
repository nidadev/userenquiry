let express=require('express');
let enquiryRouter=express.Router();
const {enquiryInsert}=require('../../controllers/web/enquiryController');
const {enquiryList}=require('../../controllers/web/enquiryController');
const {enquiryDel}=require('../../controllers/web/enquiryController');
const {enquirySingle}=require('../../controllers/web/enquiryController');
const {enquiryUpd}=require('../../controllers/web/enquiryController');

enquiryRouter.post('/insert',enquiryInsert); 
enquiryRouter.get('/list',enquiryList);
enquiryRouter.delete('/delete/:id',enquiryDel);
enquiryRouter.get('/single/:id',enquirySingle);
enquiryRouter.put('/update/:id',enquiryUpd);


module.exports=enquiryRouter;