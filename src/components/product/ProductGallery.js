'use client'

import Image from 'next/image'
import { useState } from 'react'

const images = [
  '/images/products/product1.jpg',
  '/images/cat2.png',
  '/images/cat3.png',
  '/images/cat4.png',
]

export default function ProductGallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(images[0] || '/images/products/default-image.jpg')


  return (
    <div>
      {/* Main Image */}
      <div className="w-full  overflow-hidden rounded-xl border border-gray-300 mb-4 group">
        <Image
          src={selectedImage}
          alt="Product"
          width={600}
          height={600}
          className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex gap-3">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            width={100}
            height={100}
            onClick={() => setSelectedImage(img)}
            className={`cursor-pointer rounded-lg border p-1 ${
              selectedImage === img ? 'border-red-600' : 'border-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
