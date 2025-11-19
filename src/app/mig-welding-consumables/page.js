// app/dent-puller-accessories/page.js
import TitleBanner from '@/components/products/TitleBanner'
import ProductGrid from '@/components/products/ProductGrid'

export default function ProductsPage() {
  const products = [
  {
    name: "Nozzle Gel",
    slug: "",
    images: ["/images/products/mig-consumables/nozzle-gel.jpg"]
  },
  {
    name: "Contact Tip Holder",
    slug: "",
    images: ["/images/products/mig-consumables/contact-tip-holder.jpg"]
  },
  {
    name: "Swan Neck",
    slug: "",
    images: ["/images/products/mig-consumables/swan-neck.jpg"]
  },
  {
    name: "Gas Nozzle",
    slug: "",
     images: ["/images/products/mig-consumables/gas-nozzle.jpg"]
  },
  {
    name: "Contact Tip",
    slug: "",
    images: ["/images/products/mig-consumables/contact-tip.jpg"]
  },
]


  return (
    <main className="min-h-[80vh] transition-all duration-500 ease-in-out">
      <TitleBanner
        title="Mig Welding Consumables"
        description="Browse our range of consumables for MIG welding."
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ProductGrid products={products} />
      </div>
    </main>
  )
} 



