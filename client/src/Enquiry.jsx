import React from 'react'
import { Button, Checkbox, Label, TextInput,Textarea } from "flowbite-react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
export default function Enquiry() {
  let saveEnquiry = (e) => {
    alert("Enquiry saved successfully");
    e.preventDefault();
    // let name = e.target.name.value;
    // let email = e.target.email.value;
    // let phone = e.target.phone.value;
    // let message = e.target.message.value;
  }
  return (
    <div>
        
        <h1 className='text-[40px] text-center py-6 font-bold'> User Enquiry</h1>

        <div className='grid grid-cols-[30%_auto] gap-20'>
               <div className='bg-gray-200 p-4'>
                <h2 className='text-[24px] font-bold py-4'>Enquiry form</h2>
                <form method="post" action="" className="flex max-w-md flex-col gap-4" onSubmit={saveEnquiry}>
                  <div className="py-3">
                    <Label htmlFor="name">Your Name</Label>
                    <TextInput id="name" name="name" type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="py-3">
                    <Label htmlFor="email">Your Email</Label>
                    <TextInput id="email" name="email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="py-3">
                    <Label htmlFor="phone">Your Phone</Label>
                    <TextInput id="phone" name="phone" type="text" placeholder="Enter your phone number" required />
                  </div>
                  <div className="py-3">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea id="message" name="message" placeholder="Leave a comment..." required rows={4} />
                  </div>
                  <div className="py-3">
                    <Button className="w-[100%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                      Save
                    </Button>
                  </div>
                  
                </form>
                </div> 

                <div>
                                  <h2 className='text-[24px] font-bold py-4'>Enquiry List</h2>
                                  <div className="overflow-x-auto">
      <Table striped>
        <TableHead>
          <TableHeadCell>S.No</TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Email</TableHeadCell>
          <TableHeadCell>Phone</TableHeadCell>
          <TableHeadCell>Message</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Delete</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              1
            </TableCell>
            <TableCell>abc</TableCell>
            <TableCell>abc@example.com</TableCell>
            <TableCell>$123</TableCell>
            <TableCell>hello</TableCell>
            <TableCell>
              <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </a>
            </TableCell>
             <TableCell>
              <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                delete
              </a>
            </TableCell>
          </TableRow>
        
        </TableBody>
      </Table>
    </div>

                  </div>            

        </div>
        </div>
  )
}
