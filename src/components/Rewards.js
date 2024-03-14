import React from 'react'
import pic_1 from '../asets/pic-1.png'
import pic_2 from '../asets/pic-2.png'
import pic_3 from '../asets/pic-3.png'
import pic_4 from '../asets/pic-4.png'

const Rewards = () => {
  return (
    <div className='bg-bg  rounded-lg w-[85rem] ml-auto mr-7'>
      <p className='font-inter text-3xl ml-5'>Rewards</p>


      <div className='flex justify-evenly mt-4 rounded-lg'>
      <div className='h-[13rem] w-[13rem] bg-darkgreen rounded-lg mb-5 '>
      <img className='h-[8rem] mx-auto mt-5' src={pic_1} alt="" />
      <p className='font-inter flex justify-center mt-4'>Scratch Card</p>
      </div>
      
      <div className='h-[13rem] w-[13rem] bg-darkgreen rounded-lg mb-5 '>
      <img className='h-[8rem] mx-auto mt-5' src={pic_2} alt="" />
      <p className='font-inter flex justify-center mt-4'>Scratch Card</p>
      </div>

      <div className='h-[13rem] w-[13rem] bg-darkgreen rounded-lg mb-5 '>
      <img className='h-[8rem] mx-auto mt-5' src={pic_3} alt="" />
      <p className='font-inter flex justify-center mt-4'>Scratch Card</p>
      </div>

      <div className='h-[13rem] w-[13rem] bg-darkgreen rounded-lg mb-5 '>
      <img className='h-[8rem] mx-auto mt-5' src={pic_4} alt="" />
      <p className='font-inter flex justify-center mt-4'>Scratch Card</p>
      </div>
      </div>
      
    </div>
  )
}

export default Rewards
