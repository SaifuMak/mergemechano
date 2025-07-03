import ProductCard from './ProductCard'

export default function ProductGrid() {
  const products = [
    { name: 'Dent Puller Pro 2000', slug: 'dent-puller-pro-2000' },
    { name: 'Heavy Battery Charger', slug: 'heavy-battery-charger' },
    { name: 'Oil Waste Collector XL', slug: 'oil-waste-collector-xl' },
    { name: 'Smart Garage Kit', slug: 'smart-garage-kit' },
    // Add more as needed
  ]

  return (
    <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </section>
  )
}
