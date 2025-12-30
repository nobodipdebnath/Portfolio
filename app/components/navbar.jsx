"use client"; // হুকের জন্য প্রয়োজন

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex hidden lg:block flex-shrink-0 items-center">
          <Link href="/" className=" text-[#16f2b3]  text-3xl font-bold">
            Nobodip Debnath
          </Link>
        </div>
        <div className="flex lg:hidden flex-shrink-0 items-center">
          <Link href="/" className=" text-[#16f2b3]  text-3xl font-bold">
            Nobodip
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl text-white" />
            ) : (
              <FaBars className="text-2xl text-white" />
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:block">
          <ul
            className="mt-4  flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
            id="navbar-default"
          >
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#contact">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">CONTACT</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed pl-6 top-0 right-0 h-screen backdrop-blur-lg w-64 transition-transform duration-300 z-50 md:hidden ${
          isOpen ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-3 mt-20">
          <li>
            <Link href="/#about" onClick={() => setIsOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link href="/#experience" onClick={() => setIsOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </Link>
          </li>
          <li>
            <Link href="/#skills" onClick={() => setIsOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link href="/#education" onClick={() => setIsOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
            </Link>
          </li>
          <li>
            <Link href="/#projects" onClick={() => setIsOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </Link>
          </li>
          <li>
            <Link href="/#contact" onClick={() => setIsOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">CONTACT</div>
            </Link>
          </li>
        </ul>
        <div className="absolute top-6 right-10">
          <FaXmark onClick={() => setIsOpen(false)} className="text-3xl"></FaXmark>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
