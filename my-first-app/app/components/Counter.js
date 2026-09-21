"use client"

import { useState } from "react"

export default function Counter(){
    const[count , setCount] = useState(0);

    const handleIncrement =()=>{
     
      setCount(count+1)
      console.log(count)
    }

    const handleDecrement = ()=>{
      setCount(count-1)
      console.log(count)
    }
  return(
    <div className="min-h-screen">
      
       <h3>Counter:- {count}</h3>
       <button onClick={handleIncrement} className="h-1/2">+</button>
       <button onClick={handleDecrement} className="h-1/2">-</button>
    </div>
  )
}