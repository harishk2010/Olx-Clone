import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Categories = (props) => {
    const handleSubmit=()=>{
        props.setSub(props.sub)
    }


  return (
    <div
    onClick={handleSubmit}
    className='flex w-full border-b-2 p-2 items-center justify-between'>
        <div className='flex gap-2 w-full'>
            <props.icon size={30}/>
            <p>{props.category}</p>
        </div>
        <IoIosArrowForward size={23} />
      
    </div>
  )
}

export default Categories
