// "use client"
// import { useRouter } from 'next/router'
// import React from 'react'

// function page() {

//   const router = useRouter();
//   const handleRedirect = ()=>{
//     router.push('./')
//   }
//   return (
//     <div>

//       <h1>This is my dashboard</h1>

//       <a href="./">Click Here:-</a>
//       <button>Go to Home Page</button>
//     </div>
//   )
// }

// export default page

"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

function Page() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>This is my dashboard</h1>

      <Link href="/">Click Here</Link>

      <button onClick={handleRedirect}>
        Go to Home Page
      </button>
    </div>
  );
}

export default Page;