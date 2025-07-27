'use client'

import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({products}) {
  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   async function fetchProducts() {
  //     try {
  //       const res = await fetch('https://mechano.makseotools.com/api/products/')
  //       const data = await res.json()
  //       setProducts(data)
  //     } catch (error) {
  //       console.error('Failed to fetch products:', error)
  //     }
  //   }

  //   fetchProducts()
  // }, [])

  return (
    <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </section>
  )
}
