'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="bg-white text-black shadow-sm z-50  overflow-hidden  relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 gap-6">

          {/* Logo */}
          <div className="w-[160px] min-h-20 overflow-hidden  ">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={180}
                height={60}
                priority
              />
            </Link>
          </div>

          {/* Desktop Search Box */}
          {/* <div className="flex-1 max-w-md w-full relative hidden md:block">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute right-3 top-2.5" />
          </div> */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-base font-medium">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            {/* <Link href="/products" className="hover:text-blue-600">Products</Link> */}
            <Link href="/distributors" className="hover:text-blue-600">Distributors</Link>
            <Link href="/gallery" className="hover:text-blue-600">Gallery</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>

          {/* Mobile Icons */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(open => !open)}
              aria-label="Toggle Search"
            >
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Bars3Icon className="w-7 h-7 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Search Input - Smooth Toggle */}
        {/* <div
          className={`transition-all duration-300 ease-in-out overflow-hidden px-4 ${
            isSearchOpen ? 'max-h-24 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}
      </header>

      {/* Full-Screen Mobile Menu with Animation */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-6 h-full">
          {/* Top Row: Logo + Close Button */}
          <div className="flex justify-between items-center mb-8">
            <div className="w-[130px]">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={130}
                  height={35}
                  priority
                />
              </Link>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            >
              <XMarkIcon className="w-7 h-7 text-gray-700" />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col space-y-5 text-lg font-medium">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            {/* <Link href="/products" onClick={() => setIsMenuOpen(false)}>Products</Link> */}
            <Link href="/distributors" onClick={() => setIsMenuOpen(false)}>Distributors</Link>
            <Link href="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      </div>
    </>
  );
}
