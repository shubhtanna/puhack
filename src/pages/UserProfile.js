import React from 'react'
 import Dashboard from '../components/Dashboard'
import Rewards from '../components/Rewards'
import TableUserProfile from '../components/TableUserProfile'
import mac from '../asets/macbook.jpg'
const UserProfile = () => {
  return (
    <div>
      <div className='flex'>
        <div className=' mt-auto'><Dashboard/></div>
        <div className='h-full w-full flex ml-[3rem] mt-6'>
        {/* box-1 */}
            <div className='w-[40rem] p-5  rounded-lg bg-bg flex'>
              <div className='w-[12.563rem] h-[12.563rem] flex my-auto '>
                <img className='rounded-full ml-8' src={mac} alt="" />
              </div>
              <div className='w-[12.563rem]  ml-24 my-auto font-inter space-y-3'>
              <p className="font-semibold text-[2rem]">patel jash</p>
              <p className='text-[1.5rem]'>hdbdad54</p>
              <p className='text-[1.5rem]'>jash@gmail.com</p>
              <div className='flex w-[7rem] h-[3rem] justify-center bg-edit rounded-md border-2 font-inter text-[1.5rem] ml-auto mt-4 '>
                <button>Edit</button>
              </div>
              </div>
            </div>
            {/* box-2 */}
            <div className='w-[40rem] p-5  rounded-lg bg-bg flex justify-around  ml-[3rem]'>
              <div className='w-[12.563rem] '>
              
              <p className='font-inter text-[1.9rem] flex justify-center  '>
              Reward Points
              </p>
              <p className='text-[5rem] font-inter flex justify-center '>105</p>
              
              </div>
              <div className='w-[12.563rem] '>
              <div>
                <p className='font-inter text-[1.9rem] '>Achievements</p>
              </div>
              </div>
            </div>
        </div>
    </div>
    <div>
          <Rewards/>
    </div>
    <div><TableUserProfile/></div>
    </div>
  )
}

export default UserProfile
