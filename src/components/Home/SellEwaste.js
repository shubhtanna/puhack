import React from 'react'
import { Link } from 'react-router-dom'
import pic from '../../asets/e-waste-sell.png'



const SellEwaste = () => {
  return (
    <div className='flex m-4 bg-bg rounded-xl'>
    <div className='w-[50%] my-auto'>
         {/* box-1 */}
      <div className='p-5 m-5 text-center'>
        <p className='text-4xl fredericka-the text-submit'>"Turning the Tide on E-Waste: A Sustainable Solution for a Digital World"</p>
        <p className='text-2xl m-4 text-submit'>Turn Your Old Gadgets into Green Rewards!</p>
        <div className='flex justify-center'>
          <Link to='#' className='bg-submit font-inter text-white text-base p-2 m-3'>Explore More</Link>
        </div>
      </div>
    </div>
     

      {/* box-2 */}
      <div className='w-[50%] flex justify-center '>
        <img className='w-[35.125rem] h-[36.313rem] -mt-32' src={pic} alt="" />
      </div>
    </div>
  )
}

export default SellEwaste
