'use client'

import { useState, useEffect } from 'react'

import HeroSection from '@/components/Home/HeroSection'
import FeatureCapsules from '@/components/Home/FeatureCapsules'
import AboutSection from '@/components/Home/AboutSection'
import CategoriesSection from '@/components/Home/CategoriesSection'
import ProductsSection from '@/components/Home/ProductsSection'
import WhyChooseUsSection from '@/components/Home/WhyChooseUsSection'
import DistributorSection from '@/components/Home/DistributorSection'


import ProductCategories from '@/components/Home/ProductCategories'
import CategoryModal from '@/components/Home/CategoryModal'
import Banner from '@/components/Home/Banner'

export default function Home() {

  const [showCategoryOverviewModal, setShowCategoryOverviewModal] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)

  useEffect(() => {
    if (showCategoryOverviewModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [showCategoryOverviewModal])

  return (
    <div className=''>
      {/* <HeroSection /> */}
      <Banner/>
      {/* <FeatureCapsules /> */}
      <ProductCategories setActiveCategory={setActiveCategory} setShowCategoryOverviewModal={setShowCategoryOverviewModal} />
      {/* <AboutSection />
      <CategoriesSection />
      <WhyChooseUsSection />
      <ProductsSection />
      <DistributorSection /> */}
      <CategoryModal activeCategory={activeCategory} showCategoryOverviewModal={showCategoryOverviewModal} setShowCategoryOverviewModal={setShowCategoryOverviewModal} />

    </div>
  )
}
