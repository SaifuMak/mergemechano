import ProductGallery from '@/components/product/ProductGallery'
import ProductDetails from '@/components/product/ProductDetails'
import ProductSpecification from '@/components/product/ProductSpecification'

export default function ProductPage({ params }) {
  const product = {
    name: 'Dent Puller Pro 2000',
    description: 'Reliable dent remover for professional garages.',
    specs: [
      { label: 'Power', value: '220V' },
      { label: 'Material', value: 'Steel' },
      { label: 'Warranty', value: '2 Years' },
    ],
    catalogueUrl: '/files/dentpuller.pdf',
  }

  const specContent = {
    paragraph: 'The Dent Puller Pro 2000 is engineered with precision...',
    table: [
      { feature: 'Weight', value: '15kg' },
      { feature: 'Dimensions', value: '40x30x20cm' },
      { feature: 'Voltage', value: '220V AC' },
      { feature: 'Use Case', value: 'Car body repair' },
    ],
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductGallery />
        <ProductDetails product={product} />
      </div>

      <ProductSpecification content={specContent} />
    </main>
  )
}
