import { useState } from 'react'
 
import './index.css'

function App({name,desc,btn}) {
  // const [count, setCount] = useState(0)

  return (
    <>
       
      <div className='w-48 bg-amber-100 p-2 text-center m-5 h-auto '>
        <h1 className='text-center text-2xl text-semibold'>{name}</h1>
        <p className='text-gray-700'>{desc}</p>
        <button className='px-3 py-1 bg-blue-300'>{btn}</button>

      </div>
       
    </>
  )
}

export default App
