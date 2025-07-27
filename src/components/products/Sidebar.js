import Link from 'next/link'
import { categories } from '@/app/data/categories'

// const categories = [
//   { name: 'Dent Puller', slug: 'dent-pullers' },
//   { name: 'Battery Chargers', slug: 'battery-chargers' },
//   { name: 'Mig Welding', slug: 'mig-welding' },
//   { name: 'Accessories', slug: 'accessories' },
// ]

export default function Sidebar({ selectedCategory, page }) {
  return (
    <aside className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((cat, index) => (
          <li key={index}>
            <Link
              href={`/${page}/${cat.slug}`}
              className={`block  ${selectedCategory === cat.name ? 'text-black' : 'text-gray-600'} hover:text-red-600 transition font-medium`}
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
