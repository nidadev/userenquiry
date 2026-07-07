import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { ToastContainer,toast } from 'react-toastify';

import axios from 'axios';
export function EnquiryList({data, getEnquiryList,Swal,setFormData}) {
    let editRow = (editid) => {
axios.get("http://localhost:8020/api/web/enquiry/single/"+editid).then((res)=>{
            console.log(res.data);
            //toast.success("Row edited successfully");
            setFormData(res.data.data);
            //getEnquiryList();
        });
    }
    let deleteRow = (delid) => {
        //e.preventDefault();
        Swal.fire({
  title: "Do you want to save the changes?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",

}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {Swal.fire("Saved!", "", "success");
axios.delete("http://localhost:8020/api/web/enquiry/delete/"+delid).then((res)=>{
            console.log(res.data);
            //toast.success("Row deleted successfully");
            
            getEnquiryList();
        });
    }
  else if (result.isDenied) Swal.fire("Changes are not saved", "", "info");
});
        
        //alert(delid);
        //alert("Row deleted successfully");
    }
    console.log(data);
  return( <div className='bg-gray-200 p-4'>
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
                  Edit
                </TableHeadCell>
                <TableHeadCell>
                  <span className="sr-only">Delete</span>
                </TableHeadCell>
              </TableHead>
              
              <TableBody className="divide-y">
                {
                data.length>=1  ?
                data.map((item,index)=>{  
                    return (
                      <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {index + 1}
                        </TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.phone}</TableCell>
                        <TableCell>{item.message}</TableCell>
                        <TableCell>
                          <a href="#" onClick={()=>editRow(item._id)} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                            Edit
                          </a>
                        </TableCell>
                        <TableCell>
                          <a href="#" onClick={()=>deleteRow(item._id)} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                            delete
                          </a>
                        </TableCell>
                      </TableRow>
                    )
              })
              :
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white" colSpan={7}>
                    No data found
                  </TableCell>
                </TableRow>
              }
              

              </TableBody>
            </Table>
          </div>

        </div>)
}

