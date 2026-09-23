

export default async function Hello() {
  const response = await fetch("http://localhost:3000/api/student")
  const data = await response.json()

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.id}
           {item.name}
           {item.course}
        </li>
      ))}
    </ul>
  )
}