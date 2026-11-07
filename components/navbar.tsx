import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="font-bold text-xl">My Portfolio</div>
      <div className="space-x-4">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/about" className="hover:text-gray-400">About</Link>
        <Link href="/education" className="hover:text-gray-400">Education</Link>
        <Link href="/hobbies" className="hover:text-gray-400">Hobbies</Link>
        <Link href="/contact" className="hover:text-gray-400">Contact</Link>
      </div>
    </nav>
  )
}