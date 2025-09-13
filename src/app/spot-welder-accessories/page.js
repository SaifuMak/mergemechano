// app/dent-puller-accessories/page.js
import TitleBanner from '@/components/products/TitleBanner'
import ProductGrid from '@/components/products/ProductGrid'

export default function ProductsPage() {
  // Dummy data (8 products)
  const products = [
  {
    name: "Carbon Rod Holder",
    slug: "",
    images: ["/images/products/dent-accessories/carbonrod-holder.jpg"]
  },
  {
    name: "Claw Jaw Hammer",
    slug: "",
    images: ["/images/products/dent-accessories/clawjaw-hammer.jpg"]
  },
  {
    name: "J Hook",
    slug: "",
    images: ["/images/products/dent-accessories/j-hook.jpg"]
  },
  {
    name: "L Rod",
    slug: "",
    images: ["/images/products/dent-accessories/l-rod.jpg"]
  },
  {
    name: "Pencil Tip",
    slug: "",
    images: ["/images/products/dent-accessories/penciltip.jpg"]
  },
  {
    name: "Round & Long Washer Holder",
    slug: "",
    images: ["/images/products/dent-accessories/round-washer-holder.jpg"]
  },
  {
    name: "Suction Pad",
    slug: "",
    images: ["/images/products/dent-accessories/suctionpad.jpg"]
  },
  {
    name: "Long & Twisted Washer Holder",
    slug: "",
    images: ["/images/products/dent-accessories/twisted-Long-washer-with-holder.jpg"]
  }
]


  return (
    <main className="min-h-[80vh] transition-all duration-500 ease-in-out">
      <TitleBanner
        title="Spot Welder Accessories"
        description="Browse our range of accessories for Spot Welder."
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ProductGrid products={products} />
      </div>
    </main>
  )
}
