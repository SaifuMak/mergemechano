import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { categories } from '@/app/data/categories';

const subCategoryImages = {
  'dent-puller': {
    machines: '/images/feature-1.png',
    accessories: '/images/categories/dent-puller/accessories.png',
    consumables: '/images/categories/dent-puller/consumables.png', 
  },
  'spot-welder': {
    machines: '/images/feature-2.png',
    accessories: '/images/categories/spot-welder/accessories.png',
    consumables: '/images/categories/spot-welder/consumables.png', 
  },
  'mig-welding': {
    machines: '/images/feature-3.png',
    accessories: '/images/categories/mig-welding/accessories.png',
    consumables: '/images/categories/mig-welding/consumables.png', 
  },
    'battery-charger': {
    machines: '/images/feature-4.png',
    accessories: '/images/categories/battery-charger/accessories.png',
    consumables: '/images/categories/battery-charger/consumables.png', 
  },
};

// Optional fallbacks if a specific image is missing
const defaultImages = {
  machines: '/images/feature-1.png',
  accessories: '/images/defaults/accessories.png',
  consumables: '/images/defaults/consumables.png',
};

const CategoryModal = ({ activeCategory, showCategoryOverviewModal, setShowCategoryOverviewModal }) => {
  const category = categories.find(
    (cat) => cat?.name.toLowerCase().trim() === activeCategory?.toLowerCase().trim()
  );
  const categorySlug = category ? category.slug : '#';

  { /* const subCategories = ['Machines', 'Accessories', 'Consumables'].map((title) => { */ }
    const subCategories = ['Machines'].map((title) => {
    const key = title.toLowerCase(); // 'machines' | 'accessories' | 'consumables'
    const img =
      (categorySlug && subCategoryImages[categorySlug]?.[key]) ||
      defaultImages[key];

    return {
      title,
      slug: key, // routes like /machines/<category>, /accessories/<category>, /consumables/<category>
      image: img,
    };
  });

  return (
    <>
      {showCategoryOverviewModal && (
        <div
          onClick={() => setShowCategoryOverviewModal(false)}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white transition-all duration-300 ease-out p-10 md:p-16 rounded-xl w-10/12 md:w-full md:max-w-4xl xl:max-w-6xl relative overflow-y-auto max-h-[90vh] min-h-[60vh]"
          >
            {/* Close button */}
            <button
              onClick={() => setShowCategoryOverviewModal(false)}
              className="absolute top-3 cursor-pointer right-4 text-gray-500 hover:text-black text-2xl font-bold"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-semibold mb-2 text-center">{activeCategory}</h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {subCategories.map((subCategory, index) => (
                <Link
                  key={index}
                  href={`/${subCategory.slug}/${categorySlug}`}
                  className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-xl transition-all duration-500 ease-in-out text-center block"
                >
                  <div className="relative w-full h-auto mb-6">
                    <Image
                      src={subCategory.image}
                      alt={`${activeCategory} - ${subCategory.title}`}
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-lg transition-all duration-700 ease-in-out hover:scale-105"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-gray-700">{subCategory.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryModal;
