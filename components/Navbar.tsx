"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-md shadow-black/75 p-4 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-semibold text-lg hover:text-yellow-600">
          THE GRAND COBBLER
        </Link>

        <ul className="space-x-4 hidden md:flex">
          <li className="hover:text-yellow-600">
            <Link href="/about-us">About Us</Link>
          </li>
          <li className="hover:text-yellow-600">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-yellow-600">
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>

        <button
          className="md:hidden flex items-center justify-center w-10 h-10 bg-yellow-600 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>

        {isOpen && (
          <ul
            className={`space-y-4  md:text-lg flex flex-col md:hidden absolute top-20 right-0 bg-white shadow-lg shadow-black/75 p-4 rounded-l-lg`}
          >
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
