import Image from 'next/image'
import Link from 'next/link'

export default function ProductsSection() {
  const products = [
    { name: 'XMD-001i Dent Puller', image: '/images/cat2.png', slug: 'xmd-001i-dent-puller' },
    { name: 'Smart Battery Charger', image: '/images/cat4.png', slug: 'smart-battery-charger' },
    { name: 'Polishing Kit Pro', image: '/images/cat1.png', slug: 'polishing-kit-pro' },
    { name: 'Spray Booth Mini', image: '/images/cat3.png', slug: 'spray-booth-mini' },
    { name: 'Oil Collector Tank', image: '/images/cat1.png', slug: 'oil-collector-tank' },
    { name: 'Portable Lift Jack', image: '/images/cat2.png', slug: 'portable-lift-jack' },
    { name: 'Air Blower Turbo', image: '/images/cat1.png', slug: 'air-blower-turbo' },
    { name: 'Hydraulic Bench', image: '/images/cat4.png', slug: 'hydraulic-bench' },
  ]

  return (
    <section className="bg-white py-16 px-4 bg-cover bg-center bg-no-repeat" >
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
        <p className="text-gray-600 mt-2 text-sm">Check out some of our top-selling equipment</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white border-color1 p-4 transition text-center flex flex-col items-center"
          >
            <div className="relative w-full h-auto mb-4 overflow-hidden rounded-md">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={0}
                className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <h3 className="text-base font-semibold text-gray-700 mb-3">{product.name}</h3>
            <Link
              href={`/product/${product.slug}`}
              className="mt-2 mb-4 inline-block text-black text-sm rounded-full"
            >
              READ MORE
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
