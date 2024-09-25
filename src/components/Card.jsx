import React, { useState } from 'react'
import logo from "../assets/Group.png";
const Card = ({product}) => {
    const [image,setImage]=useState("")
    console.log(product)
  return (
    
    <div className='w-full flex justify-center p-5'>
        <div className="border-2 p-2 w-[300px]  flex flex-col">
        <img src={product.imageUrls[0]} alt="" className="w-72 h-52"  />
        <div className="mt-2">
          
          <p className='font-semibold text-2xl'>{product.title}</p>
          {/* <p>{product.description}</p> */}
          <p>${product.price}</p>
        </div>
      </div>

    </div>
    
  )
}

export default Card
