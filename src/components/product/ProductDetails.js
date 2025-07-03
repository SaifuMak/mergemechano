import Link from 'next/link'

export default function ProductDetails({ product }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>

      {/* Mini Specs */}
      <ul className="mb-6 text-sm text-gray-700 space-y-1">
        {product.specs.map((spec, i) => (
          <li key={i}>
            <strong>{spec.label}:</strong> {spec.value}
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex gap-4">
        <a
          href={product.catalogueUrl}
          target="_blank"
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-medium hover:bg-gray-300 transition"
        >
          Download Catalogue
        </a>
        <Link
          href="/distributors"
          className="bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition"
        >
          Find a Dealer
        </Link>
      </div>
    </div>
  )
}
