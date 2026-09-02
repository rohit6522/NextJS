import React from 'react'
export const dynamic = "force-dynamic"

async function Posts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')



  const data = await response.json()
  console.log(data)

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Posts
