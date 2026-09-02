'use client'

import { useEffect, useState } from "react"

export default function Clock(){
  const [time, setTime] = useState("");

  useEffect(()=>{
    const upadateTime = () =>{
      setTime(new Date().toLocaleTimeString());
    }

    upadateTime();
    const interval = setInterval(upadateTime,1000);

    return () => clearInterval(interval);

  },[]);


  return(   
    <div>
      <h1>{time}</h1>
    </div>
  )
}