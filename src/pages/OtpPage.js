import React from 'react'
import { Link } from 'react-router-dom'

const OtpPage = () => {
  return (
    <div className='h-[100vh] flex items-center justify-center'>
      <div className='bg-bg p-4 w-[50%]'>
        <div className='flex text-3xl font-bold m-3'>
            <p>Verify Email</p>
        </div>
        <div className=' font-inter text-xl m-3'>
            <p>A verification code has been sent to you. Enter the code below</p>
        </div>
        {/* opt box */}
        <div className='flex justify-around m-3'>
            <div className='h-auto bg-submit'><p className=' text-4xl p-3'>1</p></div>
            <div className='h-auto bg-submit'><p className=' text-4xl p-3'>2</p></div>
            <div className='h-auto bg-submit'><p className=' text-4xl p-3'>3</p></div>
            <div className='h-auto bg-submit'><p className=' text-4xl p-3'>4</p></div>
            <div className='h-auto bg-submit'><p className=' text-4xl p-3'>5</p></div>
            <div className='h-auto bg-submit'><p className=' text-4xl p-3'>6</p></div>
        </div>
        <Link to="#">
        <div className='flex justify-center bg-edit text-3xl p-2 font-inter m-3'>
            Verify
        </div>
        </Link>
      </div>
    </div>
  )
}

export default OtpPage
