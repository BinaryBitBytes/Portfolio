import React from "react";
import { ArrowRightIcon } from '@heroicons/react/solid'
import Name from "./name";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0" href='Navigation Bar'>
          <a href="#about" className="ml-3 text-xl flex">
            <Name />
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-red-300 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 text-white hover:text-blue-300">
            My Skills In The Industry
          </a>
          <a href="#testimonials" className="mr-5 text-blue-300 hover:text-red-300">
            Client Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-green-900 hover:text-purple-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-500 rounded text-base mt-4 md:mt-0"
        >
          Hire Me & Looking To Work
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
