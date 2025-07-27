import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline'
import { categories } from '@/app/data/categories';

const CategoryModal = ({ activeCategory, showCategoryOverviewModal, setShowCategoryOverviewModal }) => {

    const category = categories.find(cat => cat?.name.toLowerCase().trim() === activeCategory?.toLowerCase().trim());
    const categorySlug = category ? category.slug : '#';

    const subCategories = [
        {
            title: 'Machines',
            slug: 'machines',
            image: '/images/cat1.png',
        },
        {
            title: 'Accessories',
            slug: 'accessories',
            image: '/images/cat2.png',
        },
        {
            title: 'Consumables',
            slug: 'consumables',
            image: '/images/cat3.png',
        },

    ];

    return (
        <>
            {showCategoryOverviewModal && (
                <div onClick={() => setShowCategoryOverviewModal(false)} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div onClick={(e) => e.stopPropagation()} className="bg-white  transition-all duration-300 ease-out p-10 md:p-16 rounded-xl w-10/12 md:w-full md:max-w-4xl xl:max-w-6xl relative overflow-y-auto max-h-[90vh]  min-h-[60vh]">
                        {/* Close button */}
                        <button
                            onClick={() => setShowCategoryOverviewModal(false)}
                            className="absolute top-3 cursor-pointer  right-4 text-gray-500 hover:text-black text-2xl font-bold"
                        >
                            <XMarkIcon className="w-6 h-6 " />
                        </button>

                        <h2 className="text-2xl font-semibold mb-2 text-center">{activeCategory}</h2>

                        <p className="text-center text-gray-600 text-sm mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod.
                        </p>

                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                            {subCategories.map((subCategory, index) => (
                                <Link
                                    key={index}
                                    // href={`/categories/${cat.slug}`}
                                    href={`/${subCategory.slug}/${categorySlug}`}

                                    className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-xl transition-all duration-500 ease-in-out text-center block"
                                >
                                    <div className="relative w-full h-auto mb-6 n rounded-lg">
                                        <Image
                                            src={subCategory.image}
                                            alt={subCategory.title}
                                            width={200}
                                            height={200}
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
