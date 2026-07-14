import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

import { FaRegBell } from "react-icons/fa";





export default function Navbar() {
  return (
    <div className='h-20 p-5  text-black text-center'>
      <nav className='flex justify-between items-center '>

        <div className='flex justify-center items-center'>

          <FaRegUserCircle size={40} />
          <div className='ml-3 flex flex-col items-start'>
            <h1 className='text-lg font-semibold '>Hello , <span className='text-blue-500'>Students</span></h1>
            <p className='text-gray-300'>Let' acheive your best!</p>
          </div>

        </div>

        <div>
          <FaRegBell size={30} />
        </div>

      </nav>

    </div>
  )
}
