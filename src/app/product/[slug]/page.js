import ProductGallery from '@/components/product/ProductGallery'
import ProductDetails from '@/components/product/ProductDetails'
import ProductSpecification from '@/components/product/ProductSpecification'

async function getProduct(slug) {
  const res = await fetch(`https://mechano.makseotools.com/api/products/${slug}/`, {
    next: { revalidate: 60 }, // enables caching
  })

  if (!res.ok) {
    throw new Error('Failed to fetch product data')
  }

  return res.json()
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.slug)

  const specContent = {
    paragraph: product.description,
    table: product.specs,
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductGallery images={product.images} />
        <ProductDetails product={product} />
      </div>

      <ProductSpecification content={specContent} />
    </main>
  )
}
