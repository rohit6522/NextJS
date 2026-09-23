"use client"
import { useState } from "react"


export default function EditStudent(){

  const [students,editStudents] = useState([]);

  async function editStudent() {
    const response = await fetch("/api/student",{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        id:2,
        name:"Ak",
        course:"M.Tech"
      })
    })
    const data = await response.json()

    editStudent(data.students)
  }
  return(
    <div>
      <button onClick={editStudent}>
        Edit Student
      </button>
      {students.map((student)=>{
        <div key={student.id}>
          <p>{student.id}</p>
          <p>{student.name}</p>
        </div>
      })}
    </div>
  )
}