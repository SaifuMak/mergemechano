import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <header className="bg-white text-black shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 gap-6">
        
        {/* Logo */}
        <div className="w-[150px]">
          <a href="/">
            <Image
              src="/images/logo.webp"
              alt="Logo"
              width={150}
              height={40}
              priority
            />
          </a>
        </div>

        {/* Search Box */}
        <div className="flex-1 max-w-md w-full relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute right-3 top-2.5" />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-6 text-base font-medium">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/products" className="hover:text-blue-600">Products</a>
          <a href="/distributors" className="hover:text-blue-600">Distributors</a>
          <a href="/gallery" className="hover:text-blue-600">Gallery</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  )
}
