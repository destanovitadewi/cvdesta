"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      <div className="bg-white text-gray-800 shadow-md fixed w-full z-40">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between h-14 items-center">
            <div className="flex items-center space-x-2 relative z-50">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                D
              </div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Desta Novita
              </span>
            </div>
            <div className="hidden md:flex space-x-6 text-sm font-medium">
              <Link href="/about" className="hover:text-indigo-500 transition-all duration-300">
                Tentang Saya
              </Link>
              <Link href="/skill" className="hover:text-indigo-500 transition-all duration-300">
                Skill Saya
              </Link>
              <Link href="/table" className="hover:text-indigo-500 transition-all duration-300">
                Data Mahasiswa
              </Link>
              <Link href="/contact" className="hover:text-indigo-500 transition-all duration-300">
                Kontak Saya
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="focus:outline-none">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-10 left-4 right-4 md:hidden bg-white p-3 space-y-2 rounded-lg shadow-lg transition-all duration-300 z-30 max-w-xs mx-auto ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 hidden"
        }`}
      >
        <Link href="/about" className="block hover:text-indigo-500 transition-all duration-300 text-sm">
          Tentang Saya
        </Link>
        <Link href="/skill" className="block hover:text-indigo-500 transition-all duration-300 text-sm">
          Skill Saya
        </Link>
        <Link href="/table" className="block hover:text-indigo-500 transition-all duration-300 text-sm">
          Data Mahasiswa
        </Link>
        <Link href="/contact" className="block hover:text-indigo-500 transition-all duration-300 text-sm">
          Kontak Saya
        </Link>
      </div>
    </nav>
  );
}
