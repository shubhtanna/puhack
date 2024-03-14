import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { Link } from 'react-router-dom';
import pic from '../asets/e-waste.png'

const Footer = () => {
  return (
    <div className=' p-5 rounded-xl bg-bg m-4'>
    {/* col-1 */}
      <div className='flex justify-center'>
        <img className='p-3' src={pic} alt="" />
      </div>
      {/* col-2 */}
      <div className='flex text-center m-auto max-w-[50rem] font-inter text-base '>
        <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique iure recusandae id officia quo. Adipisci autem ab debitis? Suscipit officia tenetur dolorem. Autem cum consequatur rem dignissimos expedita consectetur perferendis laudantium, eveniet natus quos!</p>
      </div>
      {/* col-3 */}
      <div className='flex justify-center font-inter text-2xl'>
        <p className='p-3'>Contact US</p>
      </div>
      {/* col-4 */}
      <div className='flex justify-between max-w-[20rem] m-auto p-3'>
        <div ><Link to='#'><IoMdMail className='h-[2rem] w-[2rem]'/></Link></div>
        <div><Link to='#'><FaSquareInstagram className='h-[2rem] w-[2rem]'/></Link></div>
        <div><Link to='#'><FaLocationDot className='h-[2rem] w-[2rem]'/></Link></div>
        <div><Link to='#'><IoCall className='h-[2rem] w-[2rem]'/></Link></div>
      </div>
      {/* col-5 */}
      <div className=' flex justify-center p-3 font-inter text-base'>
        <p><Link to='#'>@Copyright 2023, All right are reserved</Link></p>
      </div>
    </div>
  )
}

export default Footer
