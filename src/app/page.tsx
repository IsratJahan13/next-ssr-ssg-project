import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Welcome to the home page</h1>
      <p>
        Go to the <Link href="/about">About Us</Link> page
      </p>
    </div>
  )
}
