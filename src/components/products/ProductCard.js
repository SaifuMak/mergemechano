import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
      <div className="w-full h-40 bg-gray-100 mb-4 rounded-lg"></div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
      <Link
        href={`/products/${product.slug}`}
        className="text-red-600 text-sm font-medium hover:underline"
      >
        View More
      </Link>
    </div>
  )
}
