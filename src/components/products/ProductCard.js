import Link from 'next/link'
import Image from 'next/image'

export default function ProductCard({ product }) {
  const imageUrl = product.images?.[0] || '/images/products/default-image.jpg'

  return (
    <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
      <div className="w-full aspect-square bg-gray-100 mb-4 rounded-lg overflow-hidden relative">
  <Image
    src={imageUrl}
    alt={product.name}
    fill
    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
    className="object-contain"
  />
</div>


      <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
      <Link
        href={`/product/${product.slug}`}
        className="text-red-600 text-sm font-medium hover:underline"
      >
        View More
      </Link>
    </div>
  )
}
