import ProductGallery from '@/components/product/ProductGallery'
import ProductDetails from '@/components/product/ProductDetails'
import ProductSpecification from '@/components/product/ProductSpecification'

export default function ProductPage({ params }) {
  const product = {
    name: 'XMD.001i ANALOG',
    name2: 'CLASSIC SERIES',
    description: 'Mini dent puller with efficient output and analog user interface.',
    topfeatures: [
      { value: 'Automatic controlled power and time.' },
      { value: 'Helps technicians to remove deep damages.' },
      { value: 'Single knob control panel.' },
      { value: '230V Single phase powered machine.' },
    ],
    
    catalogueUrl: '/files/dentpuller.pdf',
  }

  const specContent = {
    paragraph: 'The Dent Puller Pro 2000 is engineered with precision...',
    table:  [
  { feature: 'Number of Modes', value: '2 (Dent and Shrink)' },
  { feature: 'Triggering', value: 'Manual' },
  { feature: 'Input', value: '230V AC - 50Hz' },
  { feature: 'Output Designed', value: '3200A Imax' },
  { feature: 'Input Cable', value: '2.5 mm x 3 core x 6 mtr : 6 kVA' },
  { feature: 'Output kVA nominal', value: '6 kVA' },
  { feature: 'Output Cable +', value: '50 mm² x 2 mtr' },
  { feature: 'Output Cable -', value: '50 mm² x 2 mtr' },
  { feature: 'Dimensions', value: '700 x 420 x 310 (mm)' },
  { feature: 'Weight', value: '42.5 Kg (with all accessories and trolley)' },
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
