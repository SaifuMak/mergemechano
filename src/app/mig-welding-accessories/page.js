// app/dent-puller-accessories/page.js
import TitleBanner from '@/components/products/TitleBanner'
import ProductGrid from '@/components/products/ProductGrid'

export default function ProductsPage() {
  const products = [
  {
    name: "Welding Torch",
    slug: "",
    images: ["/images/products/mig-accessories/welding-torch.jpg"]
  },
  {
    name: "CO2 Regulator",
    slug: "",
    images: ["/images/products/mig-accessories/cog2-regulator.jpg"]
  },
 {
    name: "CO2 Flow Meter",
    slug: "",
    images: ["/images/products/mig-accessories/co2-flow-meter.jpg"]
  },
  {
    name: "SPOOL 5 kg",
    slug: "",
    images: ["/images/products/mig-accessories/spool.JPG"]
  },
 
]


  return (
    <main className="min-h-[80vh] transition-all duration-500 ease-in-out">
      <TitleBanner
        title="Mig Welding Accessories"
        description="Browse our range of accessories for MIG welding."
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ProductGrid products={products} />
      </div>
    </main>
  )
} 



