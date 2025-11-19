import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { categories } from '@/app/data/categories';

const subCategoryImages = {
  'dent-puller': {
    machines: '/images/feature-1.png',
    accessories: '/images/products/dent-accessories/clawjaw-hammer-icon.png',
    consumables: '/images/products/dent-consumables/round-washer-icon.png', 
  },
  'spot-welder': {
    machines: '/images/feature-2.png',
    accessories: '/images/products/dent-accessories/suctionpad.png',
    consumables: '/images/products/dent-consumables/triangle-tip.png', 
  },
  'mig-welding': {
    machines: '/images/feature-3.png',
    accessories: '/images/products/mig-accessories/welding-torch.jpg',
    consumables: '/images/products/mig-consumables/nozzle-gel.jpg', 
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
  const normalizedActive = activeCategory?.toLowerCase().trim();
  const category = categories.find(
    (cat) => cat?.name.toLowerCase().trim() === normalizedActive
  );
  const categorySlug = category ? category.slug : '#';

  // show extra tabs only for dent-puller
  const wantsExtras = categorySlug === 'dent-puller' || categorySlug === 'spot-welder' || categorySlug === 'mig-welding';

  const titles = wantsExtras
    ? ['Machines', 'Accessories', 'Consumables']
    : ['Machines'];

  const subCategories = titles.map((title) => {
    const key = title.toLowerCase(); // 'machines' | 'accessories' | 'consumables'
    const img =
      (categorySlug && subCategoryImages[categorySlug]?.[key]) ||
      defaultImages[key];

    return {
      title,
      slug: key, // routes like /machines/<category>, etc.
      image: img,
    };
  });


  function getSubcategoryHref(subSlug, categorySlug) {
    if (categorySlug === 'dent-puller') {
      if (subSlug === 'accessories') return '/dent-puller-accessories';
      if (subSlug === 'consumables') return '/dent-puller-consumables';
    }
    if (categorySlug === 'spot-welder') {
      if (subSlug === 'accessories') return '/spot-welder-accessories';
      if (subSlug === 'consumables') return '/spot-welder-consumables';
    }
     if (categorySlug === 'mig-welding') {
      if (subSlug === 'accessories') return '/mig-welding-accessories';
      if (subSlug === 'consumables') return '/mig-welding-consumables';
    }
    return `/${subSlug}/${categorySlug}`;
  }

  

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
  href={getSubcategoryHref(subCategory.slug, categorySlug)}
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
