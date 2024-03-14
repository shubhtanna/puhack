import React from 'react'
import pic1 from '../../asets/home-1.png'
import pic2 from '../../asets/home-2.png'
import { IoBagCheckOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Steps = () => {
  return (
    <div className='w-[98%] h-auto rounded-xl m-4 bg-bg p-2 flex justify-around'>
      <div className='w-[25%] p-3'>
        <div className='flex justify-center'>
            <img src={pic1} className='h-[4rem] w-[4rem]' alt="" />
        </div>
        <div className='text-center text-3xl font-extrabold p-3'>
            <p>LIST YOUR INVENTORY</p>
        </div>
        <div className='text-center text-lg '>
            <p>Join Recykal Marketplace and list the material you want to sell</p>
        </div>
      </div>

      <div className='w-[25%] p-3'>
      <div className='flex justify-center'>
            <img src={pic2} className='h-[4rem] w-[4rem]' alt="" />
        </div>
        <div className='text-center text-3xl font-extrabold p-3'>
            <p>LIST YOUR INVENTORY</p>
        </div>
        <div className='text-center text-lg '>
            <p>Join Recykal Marketplace and list the material you want to sell</p>
        </div>
      </div>

      <div className='w-[25%] p-3' >
        <div className='flex justify-center' >
            <Link to='#'><IoBagCheckOutline className='h-[4rem] w-[4rem]'/></Link>
        </div>
        <div className='text-center text-3xl font-extrabold p-3'>
            <p>LIST YOUR INVENTORY</p>
        </div>
        <div className='text-center text-lg '>
            <p>Join Recykal Marketplace and list the material you want to sell</p>
        </div>
      </div>
    </div>
  )
}

export default Steps
