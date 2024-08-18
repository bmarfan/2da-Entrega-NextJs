'use client'
import React, { useState } from 'react'
import { AddCircle, MinusCirlce } from 'iconsax-react'

const Counter = () => {
    const [counter, setCounter] = useState(1)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }
    const handleDecrement = () => {
        if(counter >= 1){
            setCounter(counter - 1)
        } else{
            setCounter(counter)
        }
        
    }

  return (
    <div className='flex items-center mr-3'>

      <div onClick={handleDecrement} className='cursor-pointer'>
        <MinusCirlce size="25" color="rgba(var(--accent-rgb), .5)" variant="Bold"/>
        
      </div>
      <div className='p-2 bg-background rounded-lg w-20 text-center border border-black/10 mx-3'>{counter}</div>
      <div onClick={handleIncrement} className='cursor-pointer'>
        <AddCircle size="25" color="rgba(var(--accent-rgb), .5)" variant="Bold"/>
      </div>
      
    </div>
  )
}

export default Counter