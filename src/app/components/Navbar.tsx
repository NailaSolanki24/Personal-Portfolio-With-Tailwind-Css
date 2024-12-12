// File: components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="container pt-7 pl-4 pr-8">
    <div className="flex justify-between items-center"> {/* Change items-end to items-center */}
      <div className="text-teal-500 text-2xl font-bold font-mono pl-0">
        My Portfolio
      </div>
      <ul className="gap-6 lg:gap-8 hidden md:flex">
          <li className="menuLink">
            <Link href="/" className="text-white text-lg md:text-2xl cursor-pointer hover:text-teal-500 transition-colors duration-300">
              Home
            </Link>
          </li>
          <li className="menuLink">
            <Link href="/about" className="text-white text-lg md:text-2xl cursor-pointer hover:text-teal-500 transition-colors duration-300">
              About
            </Link>
          </li>
          <li className="menuLink">
            <Link href="/projects" className="text-white text-lg md:text-2xl cursor-pointer hover:text-teal-500 transition-colors duration-300">
              Projects
            </Link>
          </li>
          <li className="menuLink">
            <Link href="/contact" className="text-white text-lg md:text-2xl cursor-pointer hover:text-teal-500 transition-colors duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;