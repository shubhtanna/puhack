import React from 'react'

const TableUserProfile = () => {
  return (
    <div>
      <div className="relative overflow-x-auto bg-bg mt-7 w-[85rem] ml-auto mr-6 mb-5 font-inter rounded-lg ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3 rounded-s-lg font-extrabold">
                          Product name
                      </th>
                      <th scope="col" className="px-6 py-3 font-extrabold">
                          ID
                      </th>
                      <th scope="col" className="px-6 py-3 rounded-e-lg font-extrabold">
                          Price
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className=" dark:bg-gray-800">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                          Apple MacBook Pro 17"
                      </th>
                      <td className="px-6 py-4">
                          #4554120
                      </td>
                      <td className="px-6 py-4">
                          $2999
                      </td>
                      
                  </tr>
                  <tr className="bg-bg dark:bg-gray-800">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                          Microsoft Surface Pro
                      </th>
                      <td className="px-6 py-4">
                      #4554120
                      </td>
                      <td className="px-6 py-4">
                          $1999
                      </td>
                  </tr>
                  <tr className="bg-bg dark:bg-gray-800">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                          Magic Mouse 2
                      </th>
                      <td className="px-6 py-4">
                      #4554120
                      </td>
                      <td className="px-6 py-4">
                          $99
                      </td>
                  </tr>
              </tbody>
             
          </table>
      </div>

    </div>
  )
}

export default TableUserProfile
