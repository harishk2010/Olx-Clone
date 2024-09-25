import React from 'react'
import logo from "../assets/Group.png";
const Card = ({products}) => {
    console.log(products)
  return (
    <div className='w-full flex justify-center mb-5'>
        <div className="border-2 p-2 w-[300px] flex flex-col">
        <img src={logo} alt="" />
        <div className="mt-2">
          <p>Title</p>
          <p>Price</p>
          <p>{products.name}</p>
        </div>
      </div>

    </div>
    
  )
}

export default Card
