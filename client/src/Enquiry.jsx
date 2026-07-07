import React, { useState, useEffect } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import { EnquiryList } from './enquiry/EnquiryList';

export default function Enquiry() {
  let [enquiryList, setEnquiryList] = useState([]);

  let [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  let saveEnquiry = (e) => {
    alert("Enquiry saved successfully");
    e.preventDefault();
    // let name = e.target.name.value;
    // let email = e.target.email.value;
    // let phone = e.target.phone.value;
    // let message = e.target.message.value;
    // let formData={
    //   name:e.target.name.value,
    //   email:e.target.email.value,
    //   phone:e.target.phone.value, 
    //   message:e.target.message.value
    // }
    axios.post("http://localhost:8020/api/web/enquiry/insert",formData).then((res)=>{
      console.log(res.data);
      toast.success("Enquiry saved successfully");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    });
  }

  let getEnquiryList = () => {
    axios.get("http://localhost:8020/api/web/enquiry/list").then((res) => {
      console.log(res.data);
      setEnquiryList(res.data.data);
    });
  }

  let getValue = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    let oldData = { ...formData };
    oldData[inputName] = inputValue;
    setFormData(oldData);
  }
  useEffect(() => {
    getEnquiryList();
  }, []);
  return (
    <div>
<ToastContainer />
      <h1 className='text-[40px] text-center py-6 font-bold'> User Enquiry</h1>
      <div className='grid grid-cols-[30%_auto] gap-10'>
        <div className='bg-gray-200 p-4'>
          <h2 className='text-[24px] font-bold py-4'>Enquiry form</h2>

          <form method="post" action="" className="flex max-w-md flex-col gap-4" onSubmit={saveEnquiry}>
            <div className="py-3">
              <Label htmlFor="name">Your Name</Label>
              <TextInput id="name" name="name" value={formData.name} onChange={getValue} type="text" placeholder="Enter your name" required />
            </div>
            <div className="py-3">
              <Label htmlFor="email">Your Email</Label>
              <TextInput id="email" name="email" value={formData.email} onChange={getValue} type="email" placeholder="Enter your email" required />
            </div>
            <div className="py-3">
              <Label htmlFor="phone">Your Phone</Label>
              <TextInput id="phone" name="phone" value={formData.phone} onChange={getValue} type="text" placeholder="Enter your phone number" required />
            </div>
            <div className="py-3">
              <Label htmlFor="message">Your Message</Label>
              <Textarea id="message" name="message" value={formData.message} onChange={getValue} placeholder="Leave a comment..." required rows={4} />
            </div>
            <div className="py-3">
              <Button className="w-[100%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                Save
              </Button>
            </div>

          </form>
        </div>

       <EnquiryList data={enquiryList} />

      </div>
    </div>
  )
}

