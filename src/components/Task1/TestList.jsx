import React from 'react'
import { FaBook } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";


function TestCard({ icon: Icon, tittle, iconBgColor, textColor }) {
    return (
        <div className='flex justify-between  bg-white items-center p-5 shadow rounded-2xl '>

            <div className='flex items-center gap-2 justify-between'>
                <Icon className={`${iconBgColor} ${textColor}   not-first-of-type: p-2 `} size={30} />
                <h1 className='text-2xl text-black font-semibold'>{tittle}</h1>
            </div>

            <div>
                <FaAngleRight size={30} />
            </div>
        </div>
    )
}



export default function TestList() {
    return (
        <div className='flex flex-col p-8 gap-3 bg-amber-50'>
            <h2 className='text-start text-2xl font-bold '>Available Test</h2>


            <TestCard icon={FaCalculator} tittle="Math Test" textColor="purple" iconBgColor="bg-purple-200" />
            <TestCard icon={FaCalculator} tittle="English Test" textColor="green" iconBgColor="bg-green-200" />
            <TestCard icon={FaFlask} tittle="Science Test" textColor="orange" iconBgColor="bg-orange-100" />

        </div>
    )
}

 
