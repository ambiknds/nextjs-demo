"use client"
import React, {useState} from 'react'
import { useAuth, useUser } from '@clerk/nextjs';

export const Counter = () => {

  // const {isLoaded, userId, sessionId, getToken} = useAuth()
  // if(!isLoaded || !userId){
  //   return null
  // }

  const{isLoaded, isSignedIn, user} = useUser()
  if(!isLoaded || !isSignedIn){
    return null
  }

    console.log("Counter component");
    const [counter, setCounter] = useState(0)
    
  return (
    <div className=''>
        <button onClick={()=>setCounter(counter + 1)}>Clicked {counter} times</button>
    </div>
  )
}
