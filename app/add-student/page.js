"use client"

import { useState } from "react"

export default function AddStudent() {
  const [students, setStudents] = useState([])

  async function addStudent() {
    const response = await fetch("/api/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: 7,
        name: "DK",
        course: "M.Tech"
      })
    })

    const data = await response.json()

    setStudents(data.students)

  }

  return (
    <div>
      <button onClick={addStudent}>
        + Add Student
      </button>

      {students.map((student) => (
        <div key={student.id}>
          <p>{student.name}</p>
          <p>{student.course}</p>
        </div>
      ))}
    </div>
  )
}

