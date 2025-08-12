'use client'

import Image from 'next/image'

const galleryImages = [
  '/images/gallery/building-3.jpg',
  '/images/gallery/inaguaration.jpg',
  '/images/gallery/garden.jpg',
  '/images/gallery/machines.jpg',
  '/images/gallery/minister-visit.jpg',
  '/images/gallery/staffs.jpg',
  '/images/gallery/worker-solder.jpg',
  '/images/gallery/workers.jpg',
  '/images/gallery/building-5.jpg',
  '/images/gallery/building.jpg',
  '/images/gallery/building-2.jpg',
  '/images/gallery/building-4.jpg',
  '/images/gallery/building-6.jpg',
]

export default function Gallery() {
  return (
    <div className="w-full bg-gray-100">
      {/* Hero / Title Section */}
      <section className="relative w-full h-56 md:h-56 bg-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/distributors-1.jpg')" }}
          aria-hidden="true"
        />
        {/* Soft gradient for better text contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"
          aria-hidden="true"
        />
        {/* Overlay Text */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-3xl md:text-3xl font-extrabold text-center drop-shadow">
            Gallery
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="w-11/12 xl:w-10/12 mx-auto pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 xl:gap-10 mt-10">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="col-span-1 sm:col-span-1 lg:col-span-2 overflow-hidden rounded-xl shadow-md"
            >
              <div className="relative w-full h-56 md:h-64 xl:h-96 group">
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-[1000ms] group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
