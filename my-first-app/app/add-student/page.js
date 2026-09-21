"use client"

import { useState } from "react"

export default function AddStudent() {
  const [student, setStudent] = useState(null)

  async function addStudent() {
    const response = await fetch("/api/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: 6,
        name: "Rk",
        course: "BTech"
      })
    })

    const data = await response.json()

    setStudent(data.student)
  }

  return (
    <div>
      <button onClick={addStudent}>
        + Add Student
      </button>

      {student && (
        <div>
          <p>ID: {student.id}</p>
          <p>Name: {student.name}</p>
          <p>Course: {student.course}</p>
        </div>
      )}
    </div>
  )
}