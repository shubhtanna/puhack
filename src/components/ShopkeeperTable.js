import React from 'react'

const ShopkeeperTable = () => {
  return (
    <div>
      {/* <div>
        <h3>History</h3>
      </div> */}
      <div className='-mt-20'>
      <div className="relative overflow-x-auto bg-bg w-[80rem] ml-auto mr-28 font-inter rounded-lg ">
      <div className='font-inter text-3xl pl-5 pt-4 font-bold'>
        <h2>History</h2>
      </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3 rounded-s-lg font-extrabold">
                          Name
                      </th>
                      <th scope="col" className="px-6 py-3 font-extrabold">
                          Order no
                      </th>
                      <th scope="col" className="px-6 py-3 rounded-e-lg font-extrabold">
                          Product
                      </th>
                      <th scope="col" className="px-6 py-3 rounded-e-lg font-extrabold">
                          Serial No
                      </th>
                      <th scope="col" className="px-6 py-3 rounded-e-lg font-extrabold">
                          Payment
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className=" dark:bg-gray-800">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                          jash
                      </th>
                      <td className="px-6 py-4">
                          #4554120
                      </td>
                      <td className="px-6 py-4">
                         macbook
                      </td>
                      <td className="px-6 py-4">
                         15541665465
                      </td>
                      <td className="px-6 py-4">
                         90000
                      </td> 
                  </tr>
                  <tr className=" dark:bg-gray-800">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                          jash
                      </th>
                      <td className="px-6 py-4">
                          #4554120
                      </td>
                      <td className="px-6 py-4">
                         macbook
                      </td>
                      <td className="px-6 py-4">
                         15541665465
                      </td>
                      <td className="px-6 py-4">
                         90000
                      </td> 
                  </tr>
                  <tr className=" dark:bg-gray-800">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                          jash
                      </th>
                      <td className="px-6 py-4">
                          #4554120
                      </td>
                      <td className="px-6 py-4">
                         macbook
                      </td>
                      <td className="px-6 py-4">
                         15541665465
                      </td>
                      <td className="px-6 py-4">
                         90000
                      </td> 
                  </tr>
                  
              </tbody>
             
          </table>
      </div>

      </div>
    </div>
  )
}

export default ShopkeeperTable
