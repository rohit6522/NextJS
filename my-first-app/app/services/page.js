import Link from "next/link"

export const metadata = {
  title: 'Services | Next App',
};

export default function Services() {
  return (
    <>
      <h1>All Services </h1>

      <p>
        <Link href="/services/web-dev">App Development</Link>
      </p>

      <p>
        <Link href="/">Web Development</Link>
      </p>

      <p>
        <Link href="/">Android Development</Link>
      </p>

    </>
  )
}