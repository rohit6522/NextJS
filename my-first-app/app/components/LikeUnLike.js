"use client"

import { useState } from "react"

export default function LikeUnLike() {
  const [count, setCount] = useState(0);


  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }


  return (
    <div>
      <button onClick={handleIncrement}>Like❤️</button>
      <button onClick={handleDecrement}>Wow👌</button>
    </div>
  )
}