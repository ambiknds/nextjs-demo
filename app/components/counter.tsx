"use client"
import React, {useState} from 'react'

export const Counter = () => {
    console.log("Counter component");
    const [counter, setCounter] = useState(0)
    
  return (
    <div className=''>
        <button onClick={()=>setCounter(counter + 1)}>Clicked {counter} times</button>
    </div>
  )
}
