"use client"
import React from 'react'
import { useState } from 'react';
function page() {
    const [count, setCount] =useState(0);
    
    const inc = () => {
      setCount(count + 1);
    };
    
    const dec = () => {
      setCount(count - 1);
    }
  return (
    <div className='flex justify-center items-center '>
    <div className='flex gap-8'>
        <button className='bg-red-700 w-40 text-6xl rounded-sm' onClick={dec}>-</button>
  
       <p className='bg-white w-40 text-black flex justify-center  items-center text-6xl'>{count}</p>
  
       <button   className='bg-red-700 w-40 text-6xl rounded-sm'  onClick={inc}>+</button>
    </div>
    </div>

  )
}

export default page
