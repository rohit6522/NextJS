import { NextResponse } from "next/server"

export async function GET(){
  const students = [
    {id : 1, name:"Rohit",course:"ReactJS"},
    {id : 2, name:"Ajju",course:"PEA"},
    {id : 3, name:"OP",course:"NextJS"},
  ]
  return NextResponse.json(students)
}

export async function POST(request) {
  const data = await request.json();
  return Response.json({
    message: "Student Added",
    students : data
  })
}

// export async function PUT() {
  
// }

// export async function PATCH(){

// }

// export async function DELETE(){

// }