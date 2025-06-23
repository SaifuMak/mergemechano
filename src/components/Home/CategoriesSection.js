import Image from 'next/image'
import Link from 'next/link'

export default function CategoriesSection() {
  const categories = [
    {
      title: 'Dent Puller',
      image: '/images/cat1.png',
      slug: 'dent-puller',
    },
    {
      title: 'Battery Charger',
      image: '/images/cat2.png',
      slug: 'battery-charger',
    },
    {
      title: 'Accessories',
      image: '/images/cat3.png',
      slug: 'accessories',
    },
    {
      title: 'Waste Oil Collector',
      image: '/images/cat4.png',
      slug: 'waste-oil-collector',
    },
  ]

  return (
    <section className="bg-white py-16 px-4 pt-25 pb-20">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Popular Categories</h2>
        <p className="text-gray-500 mt-2 text-sm">
          Explore our wide range of automobile servicing tools
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <Link
            key={index}
            href={`/categories/${cat.slug}`}
            className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-md transition text-center block"
          >
            <div className="relative w-full h-auto mb-6 rounded-lg">
              <Image
                src={cat.image}
                alt={cat.title}
                width={200}
                height={0}
                className="w-full h-auto rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <h3 className="text-base font-semibold text-gray-700">{cat.title}</h3>
          </Link>
        ))}
      </div>
      <div className="mt-10 text-center">
  <Link
    href="/categories"
    className="inline-block bg-black text-white px-6 py-3 text-sm font-medium rounded-full hover:bg-gray-800 transition"
  >
    View All
  </Link>
</div>

    </section>
  )
}
