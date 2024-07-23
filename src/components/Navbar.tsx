'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import '../app/globals.css';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className="bg-black fixed w-full top-0 left-0 z-50"
      style={{}}
    >
      <div className="flex flex-col items-center justify-between p-4 mx-auto mr-8">
        <button id="toggle-button" className="p-2">
        </button>
        <ul className="flex list-none m-0 p-0 w-full justify-around">
          <li className="m-4">
            <Link
              href="/"
              className={`text-white no-underline p-2 transition-bg duration-300 whitespace-nowrap cursor-pointer ${
                pathname === '/' ? 'bg-opacity-10' : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li className="m-4">
            <Link
              href="/about"
              className={`text-white no-underline p-2 transition-bg duration-300 whitespace-nowrap cursor-pointer ${
                pathname === '/about' ? 'bg-opacity-10' : ''
              }`}
            >
              About Us
            </Link>
          </li>
          <li className="m-4">
            <Link
              href="/team"
              className={`text-white no-underline p-2 transition-bg duration-300 whitespace-nowrap cursor-pointer ${
                pathname === '/team' ? 'bg-opacity-10' : ''
              }`}
            >
              Club Leaders
            </Link>
          </li>
          <li className="m-4">
            <Link
              href="/newsAndEvents"
              className={`text-white no-underline p-2 transition-bg duration-300 whitespace-nowrap cursor-pointer ${
                pathname === '/newsAndEvents' ? 'bg-opacity-10' : ''
              }`}
            >
              News and Events
            </Link>
          </li>
          <li className="m-4">
            <Link
              href="/resources"
              className={`text-white no-underline p-2 transition-bg duration-300 whitespace-nowrap cursor-pointer ${
                pathname === '/resources' ? 'bg-opacity-10' : ''
              }`}
            >
              Resources
            </Link>
          </li>
          <li className="m-4">
            <Link
              href="/contact"
              className={`text-white no-underline p-2 transition-bg duration-300 whitespace-nowrap cursor-pointer ${
                pathname === '/contact' ? 'bg-opacity-10' : ''
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
