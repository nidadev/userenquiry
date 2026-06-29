import React from 'react'
import { Button, Checkbox, Label, TextInput,Textarea } from "flowbite-react";
export default function Enquiry() {
  return (
    <div>
        
        <h1 className='text-[40px] text-center py-6 font-bold'> User Enquiry</h1>

        <div className='grid grid-cols-[30%_auto]'>
               <div className='bg-gray-200 p-4'>
                <h2 className='text-[24px] font-bold py-4'>Enquiry form</h2>
                <form>
                  <div className="py-3">
                    <Label htmlFor="name">Your Name</Label>
                    <TextInput id="name" type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="py-3">
                    <Label htmlFor="email">Your Email</Label>
                    <TextInput id="email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="py-3">
                    <Label htmlFor="phone">Your Phone</Label>
                    <TextInput id="phone" type="text" placeholder="Enter your phone number" required />
                  </div>
                  <div className="py-3">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea id="message" placeholder="Leave a comment..." required rows={4} />
                  </div>
                </form>
                </div>             

        </div>
        </div>
  )
}
