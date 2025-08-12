'use client'
import ProductGallery from '@/components/product/ProductGallery'
import ProductDetails from '@/components/product/ProductDetails'
import ProductSpecification from '@/components/product/ProductSpecification'
import { useParams } from 'next/navigation'
import axios from 'axios'
import { useState, useEffect } from 'react'





export default function ProductPage() {
  const { slug } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://mechano.makseotools.com/api/products/${slug}/`)
        setProduct(res.data)
      } catch (err) {
        console.error('Error fetching product:', err)
      } finally {
        setLoading(false)
      }
    }

    if (slug) fetchProduct()
  }, [slug])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="ml-2 ">Loading...</span>
      </div>
    )
  }

  const specContent = {
    paragraph: product.description || '',
    table: product.specs?.map(spec => ({
      feature: spec.name,
      value: spec.value,
    })) || [],
  }

  return (
    <>
      {!loading && (<main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProductGallery images={product.images} />
          <ProductDetails product={product} />
        </div>

        <ProductSpecification content={specContent} />
      </main>)}
    </>
  )
}
