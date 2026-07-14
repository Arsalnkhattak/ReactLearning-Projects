import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { BsFileEarmarkCheckFill } from "react-icons/bs";




export default function StartTest() {
    return (
        <div className='bg-blue-300 p-10 rounded-2xl m-10 '>

            <div className='flex gap-4'>

                <BsFileEarmarkCheck size={30} className="text-green-600" />

                <div className='flex items-start flex-col'>
                    <h1 className='text-lg font-semibold mb-3'>Ready to take A test?</h1>
                    <p>Take a test and show your best.</p>
                </div>
            </div>

            <button className="px-4 py-2 bg-blue-700 text-white rounded-lg flex items-center justify-center gap-5 ml-7">
                Start Test
                <FaArrowRight size={18} />
            </button>

        </div>
    )
}
