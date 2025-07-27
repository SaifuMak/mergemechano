import Link from 'next/link'
import Image from 'next/image'

export default function ProductCard({ product }) {
  const imageUrl = product.images?.[0] || '/images/products/default-image.jpg'

  return (

    <Link href={`/product/${product.slug}`}>
      <div className="bg-white border group border-gray-200 p-4 rounded-lg hover:shadow-lg shadow-sm  transition-all duration-700 ease-in-out">
        <div className="w-full aspect-square bg-gray-100 mb-4 rounded-lg overflow-hidden relative">
          <Image  
            src={imageUrl}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain group-hover:scale-105 transition-all duration-700 ease-in-out "
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
      </div>
    </Link>

  )
}
