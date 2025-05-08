"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Goals", href: "#goals" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 relative">
      {/* Logo / Name */}
      <div className="text-2xl font-bold text-yellow-400">
        MARIO FERRON
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-6 text-white">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="hover:text-violet-400 transition">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Button */}
      <button
        className={`lg:hidden text-white text-3xl focus:outline-none transition-transform duration-300 ${
          isMenuOpen ? "rotate-90 text-pink-400" : ""
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-16 right-6 bg-[#1a1443] rounded-lg shadow-lg z-50 w-48 transform transition-all duration-500 ease-out ${
          isMenuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="block text-white hover:text-violet-400 transition"
                onClick={() => setIsMenuOpen(false)} // close on click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
