'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const images = [
  '/images/machine-1.png',
  '/images/machine-2.png',
  '/images/machine-1.png',
  // Replace or add more image paths if needed
]

export default function HeroSection() {
  // const [currentIndex, setCurrentIndex] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  //   }, 2000)
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <section
      className="w-full h-2/3 pt-16 pb-10 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/home-bg3.jpg')", // path from public folder
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-16 gap-10">

        {/* Left Content */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Welcome to Mergemechano Private limited
          </h1>
          <p className="text-lg mb-6 text-gray-200 max-w-md font-normal">
            We offer an assortment of machinery that enhances and enriches you in automobile servicing.
          </p>
          <a href="/products">
            <button className="text-sm bg-red-600 text-white mb-20 font-medium px-10 py-3 rounded-full hover:bg-red-900 transition">
              Explore Products
            </button>
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2  relative h-[300px] md:h-[400px]">
          <Image
            src="/images/machine-1.png" // your uploaded machine image path
            alt="Machine"
            fill
            className="object-contain transition-opacity duration-1000"
            priority
          />
        </div>

      </div>
    </section>
  )
}
