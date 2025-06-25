import HeroSection from '@/components/Home/HeroSection'
import FeatureCapsules from '@/components/Home/FeatureCapsules'
import AboutSection from '@/components/Home/AboutSection'
import CategoriesSection from '@/components/Home/CategoriesSection'
import ProductsSection from '@/components/Home/ProductsSection'
import WhyChooseUsSection from '@/components/Home/WhyChooseUsSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
       <FeatureCapsules />
       <AboutSection />
       <CategoriesSection />
       <WhyChooseUsSection />
       <ProductsSection />
       
    </div>
  )
}
