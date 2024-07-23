'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import '../app/globals.css';

const Navbar = () => {
  const pathname = usePathname(); // check https://nextjs.org/docs/app/api-reference/functions/use-pathname

  return (
    <nav
      className="bg-[--black] fixed w-full top-0 left-0 z-50 ml-0 flex mt-0"
      style={{}}
    >
      <div className="flex flex-col items-center justify-between px-4 py-0 navbarContainer">
        <button id="toggle-button" className="p-2">
        </button>
        <ul className="flex list-none m-0 p-0 w-full justify-around">
          <li className="m-4 navbar-link p-1">
            <Link
              href="/"
              className={`text-white no-underline p-2 transition-bg duration-300 whitespace-nowrap cursor-pointer ${
                pathname === '/' ? 'link-active' : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li className="m-4 navbar-link p-1">
            <Link
              href="/about"
              className={`text-white no-underline p-2 transition-bg duration-300 whitespace-nowrap cursor-pointer ${
                pathname === '/about' ? 'link-active' : ''
              }`}
            >
              About Us
            </Link>
          </li>
          <li className="m-4 navbar-link p-1">
            <Link
              href="/team"
              className={`text-white no-underline p-2 transition-bg duration-300 whitespace-nowrap cursor-pointer ${
                pathname === '/team' ? 'link-active' : ''
              }`}
            >
              Club Leaders
            </Link>
          </li>
          <li className="m-4 navbar-link p-1">
            <Link
              href="/newsAndEvents"
              className={`text-white no-underline p-2 transition-bg duration-300 whitespace-nowrap cursor-pointer ${
                pathname === '/newsAndEvents' ? 'link-active' : ''
              }`}
            >
              News and Events
            </Link>
          </li>
          <li className="m-4 navbar-link p-1">
            <Link
              href="/resources"
              className={`text-white no-underline p-2 transition-bg duration-300 whitespace-nowrap cursor-pointer ${
                pathname === '/resources' ? 'link-active' : ''
              }`}
            >
              Resources
            </Link>
          </li>
          <li className="m-4 navbar-link p-1">
            <Link
              href="/contact"
              className={`text-white no-underline p-2 transition-bg duration-300 whitespace-nowrap cursor-pointer ${
                pathname === '/contact' ? 'link-active' : ''
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
