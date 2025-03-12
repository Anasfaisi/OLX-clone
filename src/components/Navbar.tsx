
import olx from "../assets/olx_logo.svg"
import sell_button from "../assets/sell_button_cover.svg"
import { Search } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import { Heart } from 'lucide-react';
import { useContext, useState } from "react"
import {AppContext}from "../context/loginContext"
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/setup";
import Login from '../pages/Login'
import Sell from "../pages/Sell";

const Navbar = () => {
  const {data,setter}:any= useContext(AppContext)
  const [loginPop,setLoginPop]=useState(false)
  const navigate = useNavigate();
  const handleSignOut = async() => {
    await signOut(auth);
    console.log('handles sign out is working')
    setter(null); // Clear user data
    navigate("/"); // Redirect to home
  };
  return (
   <>
<div className="flex gap-5 p-3 bg-gray-100   ">

  <div >
  <img src={olx} className="w-12 h-11 mt-1 ml-2 cursor-pointer"/>
  </div>

  <div className="flex justify-around items-center border-2 rounded-sm gap-3 border-black bg-white">
    < Search  className="w-4 ml-2 mt-2 "/>
    <input type="text" placeholder="India" className="text-black"/>
    <ChevronDown color="black" size={36} strokeWidth={1.25}/>
  </div>

  <div className="flex-grow justify-between rounded-md flex border-2 bg-white border-black ">
    <input className="ml-3" type="text" placeholder='Search "Properties"' />
   <div className=" bg-slate-900 p-3"> < Search color="white" />
   </div>
  </div>
  <div className="flex items-center text-sm font-bold text-blue-950">
    <p>ENGLISH</p>
    <ChevronDown size={36} strokeWidth={1.25}/>
  </div>

  <div className="flex items-center  gap-3">
  <Heart className="mr-4"/>
  <p
      onClick={() => {
        if (!data) {
          console.log(data)
          setLoginPop(!loginPop); 
        } else {
          handleSignOut(); 
        }
      }}
      className="cursor-pointer underline hover:no-underline text-gray-900 text-base font-bold"
    >
      {data ? "Sign Out" : "Login"}
    </p>
  <div className="relative w-28 h-12">
  <img src={sell_button} alt="Sell Button" className="absolute inset-0 w-full h-full" />

  <div className="absolute inset-0 flex items-center justify-center font-bold text-lg text-black">
    + SELL <Sell/>
  </div>
</div>

  </div>

</div>
{loginPop && <Login setLoginPop ={setLoginPop}/>} 

   </>
  )
}

export default Navbar