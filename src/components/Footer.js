import Image from 'next/image'
import Link from 'next/link'
import { EnvelopeIcon, MapPinIcon, BuildingStorefrontIcon } from '@heroicons/react/24/solid'

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300  px-4">
      
      {/* Bottom Bar */}
      <div className=" text-gray-400 text-sm text-center py-4 border-gray-700">
        &copy; 2025 Merge Mechano. All Rights Reserved | Developed with <span className="text-red-500">&hearts;</span> by <a href="https://maktalseo.com" className="underline hover:text-white">MakTal</a>
      </div>
    </footer>
  )
}
