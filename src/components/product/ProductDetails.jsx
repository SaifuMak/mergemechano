import Link from 'next/link'
import { PowerIcon, BoltIcon } from '@heroicons/react/24/solid';
import Image from 'next/image'


export default function ProductDetails({ product }) {
  return (
    <div>
      <h1 className="font-bold text-gray-900 mb-4 leading-snug">
        <span className="text-4xl text-red-700 block">{product.name}</span>
        <span className="block text-2xl">{product.series}</span>
      </h1>

      {product.categories?.map((category, index) => (
        <button
          key={index}
          className="border border-gray-400 rounded-full bg-white text-gray-500 text-sm px-3 py-1 mr-2 mb-2"
        >
          {category}
        </button>
      ))}


      <div className="flex items-center bg-white text-black  py-2 space-x-6 text-sm w-auto mt-3 ">
        <div className="flex items-center space-x-2">
          <PowerIcon className="h-5 w-5 text-gray-700" />
          <span>{product.voltage}</span>
        </div>
        <div className="flex items-center space-x-2">
          <BoltIcon className="h-5 w-5 text-gray-700" />
          <span>{product.power}</span>
        </div>
      </div>

      <div
        className="text-gray-600 mt-3 mb-4
             [&_li]:before:content-['-'] 
             [&_li]:before:mr-2 
             [&_li]:before:text-gray-500 
             [&_ul]:mt-3"
        dangerouslySetInnerHTML={{ __html: product.description }}
      />

      <Image
        src="/images/products/certifications.jpg"
        alt="About Merge Mechano"
        width={300}
        height={300}
        className="w-[420px] overflow-hidden h-32  object-contain border-gray-300 rounded-4xl mb-10"
      />


      {/* <div className="w-[400px] h-[200px] relative border overflow-hidden rounded-4xl">
        <Image
          src="/images/products/certifications.jpg"
          alt="About Merge Mechano"
          fill
          className="object-cover"
        />
      </div>
 */}




      {/* Buttons */}
      <div className="flex gap-4">
        {product.catalog_link && product.catalog_link.trim() !== '' && (
        <Link
          href={product.catalog_link}
          target="_blank"
          className="bg-gray-800 text-white text-sm px-4 py-2 rounded-full font-medium hover:bg-gray-900 transition"
        >
          Brochure PDF
        </Link>
        )}

        {product.manual_link && product.manual_link.trim() !== '' && (
           <Link
          href={product.manual_link}
          className="bg-red-700 text-white text-sm px-4 py-2 rounded-full font-medium hover:bg-red-700 transition"
        >
          Operating Manual
        </Link> 
        )}
      </div>
    </div>
  )
}
