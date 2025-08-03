'use client'

import { useState } from 'react'
import DistributorsHeader from '@/components/Distributors/DistributorsHeader'
import DistributorsFilter from '@/components/Distributors/DistributorsFilter'
import DistributorsList from '@/components/Distributors/DistributorsList'

const distributors = [
  { name: 'UNITED SALES AGENCIES', location: 'WEST BENGAL' },
  { name: 'UNITED SALES AGENCIES', location: 'JHARKHAND' },
  { name: 'MERAKI TRADERS', location: 'KERALA' },
  { name: 'MIRACLE ENTERPRISES', location: 'GUJARAT' },
  { name: 'SRI GOMATI and VAISHNAVI ENTERPRISES', location: 'TAMIL NADU' },
  { name: 'AUTO EQUIPMENT SOLUTIONS', location: 'RAJASTHAN' },
  { name: 'AUTOMOTIVE EQUIPMENT', location: 'GUJARAT' },
  { name: 'SA GARAGE EQUIPMENTS', location: 'HYDERABAD' },
  { name: 'SHRI KRISHNA ENTERPRISES', location: 'MAHARASHTRA' },
  { name: 'AAKASH AUTO INC', location: 'KARNATAKA' },
  { name: 'MAN ENTERPRISES', location: 'ANDRA PRADESH' },
  { name: 'J.S AUTO WORKS', location: 'TELANGANA' },
  { name: 'MAHAKAL ENGINEERING SERVICES', location: 'MADHYA PRADESH' },
  { name: 'WINGER TOOLS', location: 'CHHATTISGARH' },
  { name: 'ECORAY SOLUTIONS', location: 'KERALA' },
  { name: 'SAI ENTERPRISES', location: 'MAHARASHTRA' },
  { name: 'GLOBAL ENTERPRISES', location: 'KERALA' },
]

export default function DistributorsPage() {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')

  const locations = [...new Set(distributors.map(d => d.location))]

  const filtered = distributors.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) &&
    (location === '' || d.location === location)
  )

  return (
        <main>
          <div className="min-h-[70vh]"></div>
          
      {/* <DistributorsHeader />
      <div className="max-w-5xl mx-auto px-6 py-16">
      <DistributorsFilter
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        locations={locations}
      />
      <DistributorsList distributors={filtered} />
      </div> */}
    </main>
  )
}
