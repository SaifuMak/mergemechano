'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { categories } from '@/app/data/categories';

import TitleBanner from '@/components/products/TitleBanner'
import Sidebar from '@/components/products/Sidebar'
import ProductGrid from '@/components/products/ProductGrid'

export default function MachinesPage() {

    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    const { slug } = useParams();

    const category = categories.find(cat => cat.slug === slug);

    useEffect(() => {
        if (category) {
            setSelectedCategory(category.name);
        }
    }, [category]);

    if (!category) {
        return notFound();
    }

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await axios.get('https://mechano.makseotools.com/api/products/');
                const allProducts = res.data;

                //Filter products that matches category name
                const filteredProducts = allProducts.filter(product =>
                    product.categories.includes(category.name)
                );
                console.log(filteredProducts);

                setProducts(filteredProducts);
                // setProducts(res.data);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
            finally {
                setIsLoading(false)
            }
        }

        fetchProducts();
    }, [selectedCategory]);


    return (
        <main className=' min-h-[80vh] translate-all duration-500 ease-in-out'>
            <TitleBanner title='Our Machines' description='Lorem ipsum dolor sit amet consectetur.' />
            <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
                <Sidebar selectedCategory={selectedCategory} page='machines' />
                {isLoading ? (
                    <div className="md:col-span-3 flex justify-center items-center min-h-[300px] w-full">
                        <p className="text-gray-500 text-lg animate-pulse">Loading...</p>
                    </div>
                ) : products?.length > 0 ? (
                    <ProductGrid products={products} />
                ) : (
                    <div className="md:col-span-3 flex justify-center items-center min-h-[300px] w-full">
                        <p className="text-gray-600 text-lg">No Results</p>
                    </div>
                )}

            </div>
        </main>
    )
}
