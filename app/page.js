"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Clock from "./Clock";


export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/dashboard");
  };

  // const currentTime = new Date().toLocaleTimeString();

  return (
    <>
      <div>
        <h1> Main Page</h1>

        <Link href="/home">Home</Link> <br />
        <Link href="/about" >About</Link> <br/>
        <Link href="/contact">Contact</Link>  <br/>

        <h1>Current Time</h1>
        <Clock/>

        <button onClick={handleRedirect}>
          Go to Dashboard
        </button>

      </div>
    </>
  );
}
