'use client'

import { useState, useMemo } from 'react'
import DistributorsHeader from '@/components/Distributors/DistributorsHeader'
import DistributorsFilter from '@/components/Distributors/DistributorsFilter'
import DistributorsList from '@/components/Distributors/DistributorsList'

const distributors = [
  {
    name: 'Ravi Gurjjar',
    phone: '9033842981',
    email: 'gurjarravi84@gmail.com',
    locations: ['GUJARAT', 'RAJASTHAN', 'PUNJAB', 'JAMMU AND KASHMIR'],
  },
  {
    name: 'Sayed',
    phone: '9110364300',
    email: 'sagarageequipments@gmail.com',
    locations: ['TELANGANA', 'ANDHRA PRADESH', 'ODISHA'],
  },
  {
    name: 'Arjun',
    phone: '8714449998',
    email: 'ecorysolutions@gmail.com',
    locations: ['KERALA', 'KARNATAKA'],
  },
  {
    name: 'Rithesh',
    phone: '9826189800',
    email: 'wingertools@rediffmail.com',
    locations: ['MADHYA PRADESH', 'CHHATTISGARH'],
  },
  {
    name: 'Khade',
    phone: '99970837161',
    email: 'khadedd829@gmail.com',
    locations: ['MAHARASHTRA'],
  },
  {
    name: 'Vino Jose',
    phone: '00971508856496',
    email: 'vinojose@rediffmail.com',
    locations: ['UAE'],
  },
]

export default function DistributorsPage() {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('All locations')

  // Build unique list of all locations and prepend "All locations"
  const locations = useMemo(() => {
    const set = new Set()
    distributors.forEach(d => d.locations.forEach(loc => set.add(loc)))
    return ['All locations', ...Array.from(set).sort()]
  }, [])

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase()
    return distributors.filter(d => {
      const nameMatch = d.name.toLowerCase().includes(s)
      const locMatch =
        location === 'All locations' || d.locations.includes(location)
      return nameMatch && locMatch
    })
  }, [search, location])

  return (
    <main>
      <DistributorsHeader />
      <div className="max-w-5xl mx-auto px-6 py-16">
        <DistributorsFilter
          search={search}
          setSearch={setSearch}
          location={location}
          setLocation={setLocation}
          locations={locations} // includes "All locations"
        />
        <DistributorsList distributors={filtered} />
      </div>
    </main>
  )
}
