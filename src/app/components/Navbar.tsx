import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-secondary text-primary p-4 bg-gradient-to-br from-emerald-400 to-emerald-700 text-center text-white" >
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link href="/profile" className="hover:text-white transition-colors">
            Profile
          </Link>
        </li>
        <li>
          <Link
            href="/communities"
            className="hover:text-white transition-colors"
          >
            Communities
          </Link>
        </li>
        <li>
          <Link
            href="/task-history"
            className="hover:text-white transition-colors"
          >
            Task History
          </Link>
        </li>
      </ul>
    </nav>
  );
}