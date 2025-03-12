
import React, { useState } from "react"
import { useProduct } from "../firebase/productContext"
import { useNavigate } from "react-router-dom"



const Sell = () => {
    const navigate = useNavigate()
    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const [description,setDescription]=useState('')
    const [place,setPlace]=useState('')
    const [date,setDate]=useState('')
    const [image,setImage]=useState<File | null>(null)
    const {uploadImage,addProduct} =useProduct()

   
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
          setImage(e.target.files[0]);
        } else {
          setImage(null);
        }
      };


      const handleSubmit= async (e:React.FormEvent)=>{
          e.preventDefault()
          if(!name||!price||!description||!date||!image){
            alert("please fill all the field")
            return
          }
          
          try {
            const imageUrl=await uploadImage(image)
            if (!imageUrl) return

            await addProduct({name,price,description,place,date,imageUrl})

            setName(" ")
            setDate(" ")
            setPlace(" ")
            setDescription( " ")
            setPrice(" ")
            setImage(null)
            navigate("/")
          } catch (error) {
            console.log("eroor");
            
          }
         
      }




    return (
        <div className="login bg-white shadow shadow-black w-[1000px] h-[1000px] text-white p-5 absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-4">
        <h1 className="text-black font-bold">Sell</h1>
        <form onSubmit={handleSubmit} className="w-full flex mt-0 flex-col gap-4">
            <input value={name} onChange={(e)=> setName(e.target.value)} className="w-80 text-black p-3 rounded outline placeholder-black outline-black mx-auto" type="text" placeholder="product name" />
            <input value={price} onChange={(e)=>setPrice(e.target.value)} className="w-80 text-black p-3 rounded outline placeholder-black outline-black mx-auto" type="text" placeholder="Price" />
            <input value={description} onChange={(e)=>setDescription(e.target.value)} className="w-80 text-black p-3 rounded outline placeholder-black outline-black mx-auto" type="text" placeholder="Description" />
            <input value={place} onChange={(e)=>setPlace(e.target.value)} className="w-80 text-black p-3 rounded outline placeholder-black outline-black mx-auto" type="text" placeholder="place" />
            <input value={date} onChange={(e)=>setDate(e.target.value)} className="w-80 text-black p-3 rounded outline placeholder-black outline-black mx-auto" type="text" placeholder="Date" />
            <input onChange={handleImageChange} className="w-80 text-black p-3 rounded outline placeholder-black outline-black mx-auto" type="file"  />
            <button  type="submit" className="bg-[#002f34] w-80 p-3 rounded text-white font-bold cursor-pointer hover:bg-[#172324] mx-auto">Upload Now</button>
        </form>
         <img className="w-[200px] h-[200px]" src={image?URL.createObjectURL(image):' '} alt="" />
        <div className="form-switch mt-[40px] text-black"></div>
    </div>
    
    )
}

export default Sell
