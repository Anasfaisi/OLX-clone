
import olx from "../assets/olx.png"
import lens from "../assets/lens.png"
import arrow from "../assets/arrow.png"
import search from "../assets/search.png"
import Login from './Login'
import { useState } from "react"
const Navbar = () => {
  const [loginPop,setLoginPop]=useState(false)

  return (
   <>
    <div className='flex p-4' >

<img src={olx} className="w-10 h-9"  />

<div className="flex border-2 border-spacing-1 w- p-2 border-black ml-5">
  <img src={lens} className='w-6 h-5 mt-1' />
  <input placeholder="Location" className='ml-3' />
  <img src={arrow} className="w-8 h-7" />
</div>

<div className='flex h-12 ml-4 border-2 border-black'>
  <input placeholder='Find Cars, Mobile phones and more' className='ml-3 w-96' />
  <img src={search} alt="" />
</div>

<div className='flex h-12 p-3 ml-10 cursor-pointer'>
  <h1 className='font-semibold'>ENGLISH</h1>
  <img src={arrow} alt="" className='w-8 h-7'/>
</div>

<div onClick={()=>setLoginPop(!loginPop)} className='flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline'>
  <h1 className='font-bold text-lg'>Login</h1>
</div>

<div className=' w-28 flex h-12 p-2 ml-6 cursor-pointer rounded-full border border-yellow-500'>
  <h1 className='font-bold text-lg ml-3'>+ SELL</h1>
</div>


</div>

{loginPop && <Login setLoginPop ={setLoginPop}/>}
   </>
  )
}

export default Navbar