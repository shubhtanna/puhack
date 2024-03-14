import React from 'react'
import pic from '../../asets/E-waste-data.png'

const ContactUs = () => {
  return (
    <div className='flex justify-between m-4 bg-bg rounded-xl'>
    {/* box-1 */}
        <div className=' w-[50%] flex justify-center '>
            <img src={pic} alt="" />
        </div>
    {/* box-2 */}
        <div className=' w-[50%] flex justify-center m-auto '>
        <form action="">
            <select className='option ml-4'>
                <option disabled selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
            <div>
              <input
                className='input'
                type="text"
                name="name"
                placeholder='Full Name'
                required
              />
          </div>
            <div>
              <input
                className='input'
                type="email"
                name="email"
                placeholder='Enter email id'
                required
              />
          </div>
          <div>
              <input
                className='input'
                type='number'
                name="number"
                placeholder='Phone Number'
                required
              />
          </div>
          <div className='p-2 flex justify-center ' >
          <button type="submit" className='bg-submit font-inter text-white text-base p-2'>Submit</button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default ContactUs
