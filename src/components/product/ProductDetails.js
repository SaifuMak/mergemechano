import Link from 'next/link'
import { PowerIcon, BoltIcon } from '@heroicons/react/24/solid';
import Image from 'next/image'


export default function ProductDetails({ product }) {
  return (
    <div>
      <h1 className="font-bold text-gray-900 mb-4 leading-snug">
       <span className="text-4xl text-red-700 block">{product.name}</span>
       <span className="block text-2xl">{product.name2}</span> 
      </h1>


      <button className="border border-gray-400 rounded-full bg-white text-gray-500 text-sm px-3 py-1">
  DENT PULLER
</button>

<div className="flex items-center bg-white text-black  py-2 space-x-6 text-sm w-auto mt-3 ">
      <div className="flex items-center space-x-2">
        <PowerIcon className="h-5 w-5 text-gray-700" />
        <span>230V</span>
      </div>
      <div className="flex items-center space-x-2">
        <BoltIcon className="h-5 w-5 text-gray-700" />
        <span>3200A</span>
      </div>
    </div>

      <p className="text-gray-600 mt-3 mb-4">{product.description}</p>


<Image
  src="/images/products/certifications.jpg"
  alt="About Merge Mechano"
  width={300}
  height={300}
  className="w-[300px] h-auto object-contain border-gray-300 rounded-4xl mb-10"
/>


      {/* Buttons */}
      <div className="flex gap-4">
        <Link
          href={product.catalogueUrl || '#'}
          target="_blank"
          className="bg-gray-800 text-white text-sm px-4 py-2 rounded-full font-medium hover:bg-gray-900 transition"
        >
          Catalog PDF
        </Link>
        <Link
          href="/distributors"
          className="bg-red-700 text-white text-sm px-4 py-2 rounded-full font-medium hover:bg-red-700 transition"
        >
          Find a Dealer
        </Link>
      </div>
    </div>
  )
}
