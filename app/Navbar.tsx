"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 flex justify-between items-center px-6 py-4 bg-gray-800 shadow-lg z-50">
      <h1 className="text-2xl font-bold">TB</h1>
      <ul className="hidden md:flex space-x-6">
        <li><a href="/home" className="hover:text-gray-400">Home</a></li>
        <li><a href="/about" className="hover:text-gray-400">About</a></li>
        <li><a href="/home#projects" className="hover:text-gray-400">Projects</a></li>
        <li><a href="/home#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
}
