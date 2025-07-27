'use client'

import { useState } from 'react'

import HeroSection from '@/components/Home/HeroSection'
import FeatureCapsules from '@/components/Home/FeatureCapsules'
import AboutSection from '@/components/Home/AboutSection'
import CategoriesSection from '@/components/Home/CategoriesSection'
import ProductsSection from '@/components/Home/ProductsSection'
import WhyChooseUsSection from '@/components/Home/WhyChooseUsSection'
import DistributorSection from '@/components/Home/DistributorSection'

import ProductCategories from '@/components/Home/ProductCategories'
import CategoryModal from '@/components/Home/CategoryModal'

export default function Home() {

  const [showCategoryOverviewModal, setShowCategoryOverviewModal] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <div>
      <HeroSection />
      {/* <FeatureCapsules /> */}
      <ProductCategories setActiveCategory={setActiveCategory} setShowCategoryOverviewModal={setShowCategoryOverviewModal} />
      <AboutSection />
      <CategoriesSection />
      <WhyChooseUsSection />
      <ProductsSection />
      <DistributorSection />
      <CategoryModal activeCategory={activeCategory} showCategoryOverviewModal={showCategoryOverviewModal} setShowCategoryOverviewModal={setShowCategoryOverviewModal}  />

    </div>
  )
}
