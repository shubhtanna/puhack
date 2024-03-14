import React from 'react'
import pic from '../asets/macbook.jpg'

const ShopkeeperReview = () => {
  return (
    <div className='relative overflow-x-auto bg-bg w-[80rem] ml-auto mr-28 mt-8 mb-3 font-inter rounded-lg p-8'>
      <div className='font-inter text-[2rem] font-bold'>
        <h2>Review</h2>
      </div>
      <div className='flex justify-evenly p-5'>
          {/* box-1 */}
      <div className='w-[33.25rem] bg-darkgreen p-5'>
        <div>
            <div className='flex'>
                <img className='w-[4rem] rounded-full' src={pic} alt="" />
                <p className='ml-12 text-lg font-semibold'>jash</p>
            </div>
            <div className='font-inter ml-6 p-3'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum culpa qui blanditiis, tempora iste at deleniti debitis minima. Officiis, velit!</p>
            </div>
        </div>
      </div>
      {/* box-2 */}
      <div className='w-[33.25rem] bg-darkgreen p-5'>
      <div>
            <div className='flex'>
                <img className='w-[4rem] rounded-full' src={pic} alt="" />
                <p className='ml-12 text-lg font-semibold'>jash</p>
            </div>
            <div className='font-inter ml-6 p-3'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum culpa qui blanditiis, tempora iste at deleniti debitis minima. Officiis, velit!</p>
            </div>
        </div>
      </div>
      </div>
    
    </div>
  )
}

export default ShopkeeperReview
