import HeroSection from '@/components/Home/HeroSection'
import FeatureCapsules from '@/components/Home/FeatureCapsules'
import AboutSection from '@/components/Home/AboutSection'
import CategoriesSection from '@/components/Home/CategoriesSection'
import ProductsSection from '@/components/Home/ProductsSection'
import WhyChooseUsSection from '@/components/Home/WhyChooseUsSection'
import DistributorSection from '@/components/Home/DistributorSection'
import ProductCategories from '@/components/Home/ProductCategories'

export default function Home() {
  return (
    <div>
      <HeroSection />
       {/* <FeatureCapsules /> */}
       <ProductCategories/>
       <AboutSection />
       <CategoriesSection />
       <WhyChooseUsSection />
       <ProductsSection />
        <DistributorSection />
      
    </div>
  )
}
