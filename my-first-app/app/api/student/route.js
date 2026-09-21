import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { NextResponse } from "next/server"

const students = [
  { id: 1, name: "Rohit", course: "ReactJS" },
  { id: 2, name: "Ajju", course: "PEA" },
  { id: 3, name: "OP", course: "NextJS" },
]

export async function GET() {
  return Response.json(students)
}

export async function POST(request) {

  const data = await request.json();

  if(Array.isArray(data)){
    students.push(...data);
  }else{
    const newData={
      id:data.id,
      name:data.name,
      course:data.course,
    }
    students.push(newData)
  }

  return Response.json({
    message: "Student Added Succesfuly",
    students: data
  })

}



export async function PUT(request) {
  const data =  await request.json();
  const student = students.find(item=>item.id==data.id)

  if(!student){
    return Response.json({
      message:"Student not found"
    })
  }

  student.name=data.name;
  student.course=data.course
  return Response.json({
    message:"Succesfully",
    data:student
  })
}






// export async function PATCH(){

// }

export async function DELETE(request){
  const data = await request.json();

  const index = students.findIndex(
    item => item.id == data.id)

  
  if(index === -1){
    return Response.json(
      {message:"Student Not found"},
      {status:404}
    )
  }

  const deleteStudent = students.splice(index,1)

  return Response.json(
    {message:"Student delete successfully",
      student:deleteStudent[0],
    }
  )

}