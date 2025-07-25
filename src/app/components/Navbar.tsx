import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green items-center flex justify-center pt-0 text-custom-white text-xl font-semibold">
      <ul className="flex space-x-8 px-4">
        <li>
          <Link href="/" className="hover:text-green transition-colors px-2">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-green transition-colors px-2"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className="hover:text-green transition-colors px-2"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            href="/communities"
            className="hover:text-green transition-colors px-2"
          >
            Communities
          </Link>
        </li>
        <li>
          <Link
            href="/task-history"
            className="hover:text-green transition-colors px-2 whitespace-nowrap"
          >
            Task History
          </Link>
        </li>
      </ul>
    </nav>
  );
}
