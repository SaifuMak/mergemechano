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
        }

        fetchProducts();
    }, [selectedCategory]);


    return (
        <main>
            <TitleBanner title='Our Machines' description='Lorem ipsum dolor sit amet consectetur.' />
            <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
                <Sidebar selectedCategory={selectedCategory} page='machines' />
                <ProductGrid products={products} />
            </div>
        </main>
    )
}
