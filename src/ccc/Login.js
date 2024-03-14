import React from 'react'
import loginImg from './loginimg.png'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div>
      
        <div className='bg-[#57efa0] h-[100vh] flex justify-center flex-col items-center'>

          <p className='text-[#004225] text-[40px] text-center'>Login</p>

          <div className='flex mt-5 justify-center gap-[100px]  w-[1000px] mx-auto'>

            {/* left part */}
            <img src={loginImg} className='w-[350px] alt="LoginImg'/>
            
            {/* right part */}
            <form className='flex flex-col gap-y-3 mt-5 w-[400px]'>
              
              {/* email */}
              <div className='flex flex-col'>
                <label htmlFor='email' className='mb-2'>Email Address</label>
                <input type="text" id='email' placeholder='Email-address' className='rounded-md p-2'/>
              </div>
               
               {/* password */}
              <div className='flex flex-col'>
                <label htmlFor='password' className='mb-2'>Password</label>
                <input type="password" id='password' placeholder='Password' className='rounded-md p-2'/>
                <p className='text-end mt-2'>Reset Password</p>
              </div>
            
              <button className='bg-[#004225] text-white rounded-md p-2'>Login</button>

              <p className='text-center'>Don't have an account ? <Link to="/" >Sign up</Link></p>
            

            </form>

          </div>

        </div>

    </div >
  )
}

export default Login
