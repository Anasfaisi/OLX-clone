import React from 'react'
import { ChevronDown } from "lucide-react";

const Menubar = () => {
  return (
    <div className='flex shadow-sm h-10 p-5 items-center'>
    <div className=' ml-28 mr-5 text-sm font-bold flex items-center'> <h1>All CATEGORIES</h1><ChevronDown color="black" size={36} strokeWidth={1.25} /></div> 
    <div className='gap-5 flex text-sm font-normal'>
    <h1 >Cars</h1>
    <h1 >MotorCycles</h1>
    <h1 >Mobile Phones</h1>
    <h1 >For Sale: Houses & Apartments</h1>
    <h1 >Scooters</h1>
    <h1 >Commercial & Other Vehicles</h1>
    <h1>For Rent: Houses & Apartments</h1>
    </div>
   
    </div>
  )
}

export default Menubar





