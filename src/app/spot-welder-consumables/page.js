import TitleBanner from '@/components/products/TitleBanner'
import ProductGrid from '@/components/products/ProductGrid'

export default function ProductsPage() {
  const products = [
  {
    name: "Carbon Rod",
    slug: "",
    images: ["/images/products/dent-consumables/carbonrod.jpg"]
  },
  {
    name: "Long Washer",
    slug: "",
    images: ["/images/products/dent-consumables/longwasher.jpg"]
  },
  {
    name: "Round Washer",
    slug: "",
    images: ["/images/products/dent-consumables/round-washer.jpg"]
  },
  {
    name: "Triangle Tip",
    slug: "",
    images: ["/images/products/dent-consumables/triangle-tip.jpg"]
  },
  {
    name: "Twisted Washer",
    slug: "",
    images: ["/images/products/dent-consumables/twisted-washer.jpg"]
  },
  {
    name: "Zigzag Wire",
    slug: "",
    images: ["/images/products/dent-consumables/zigzag-wire.jpg"]
  }
] 

  return (
    <main className="min-h-[80vh] transition-all duration-500 ease-in-out">
      <TitleBanner
        title="Spot Welder Consumables"
        description="Browse our range of consumables for spot welder machines."
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ProductGrid products={products} />
      </div>
    </main>
  )
}
