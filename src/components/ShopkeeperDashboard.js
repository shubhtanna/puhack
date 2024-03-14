import React from 'react'
import pic1 from '../asets/macbook.jpg'

const ShopkeeperDashboard = () => {
  return (
    <div className='flex mt-12'>
      {/* box-1 */}
      <div className='w-[50rem] p-2 bg-bg flex justify-evenly rounded-xl ml-16'>
        <div className=' w-[8.229rem]  '>
        <img className='rounded-full' src={pic1} alt="" />
        </div>
        <div className='font-inter space-y-4'>
            <div className='text-[1.2rem] font-bold'>
                <h4>Gokou Corporation</h4>
            </div>
            <div className='space-y-3'>
            <p >9732814326</p>
            <p>9732814326</p>
            </div>
           
        </div>
        <div className='font-inter '>
        <div>
        <h4 className='font-bold'>#GST2458516846</h4>
        </div>
            <div className='flex mt-10 justify-center bg-edit'>
                <button>Edit</button>
            </div>
        </div>
      </div>
      {/* box-2 */}
      <div className='w-[25rem] bg-bg rounded-xl ml-16 pl-5 p-2 font-inter'>
        <div className='text-[1.2rem] font-bold'>
            <h2>Rating</h2>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default ShopkeeperDashboard
