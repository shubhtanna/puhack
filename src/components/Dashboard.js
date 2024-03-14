import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FcOnlineSupport } from "react-icons/fc";
import { AiOutlineLogout } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
const Dashboard = () => {
  return (
    <div className=' flex mt-5'>
        <div className='bg-bg w-[5.5rem] h-[20rem] top-[9.375rem] left-[-0.063rem] rounded-xl '>
      <div className='h-[4rem] w-[4rem] top-[12rem] flex justify-center mt-3'><FaUser className='h-[2.5rem] w-[2.5rem] ' /></div>
      <div className='top-[117.438rem] left-[1.75rem] h-[4rem] w-[4rem] flex justify-center'><IoIosNotifications className='h-[2.5rem] w-[2.5rem]'  /></div>
      <div className='top-[23.938rem] left-[1.938rem] h-[4rem] w-[4rem] flex justify-center'><FaGear className='h-[2.5rem] w-[2.5rem]'/></div>
      <div className='top-[30.5rem] left-[1.938rem] h-[4rem] w-[4rem] flex justify-center'><FcOnlineSupport className='h-[2.5rem] w-[2.5rem]'/></div>
      <div className='top-[36.625rem] left-[1.938rem] h-[4rem] w-[4rem] flex justify-center'><AiOutlineLogout className='h-[2.5rem] w-[2.5rem]'/></div>
    </div>
    </div>
    
  )
}

export default Dashboard









