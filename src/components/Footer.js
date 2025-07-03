import Image from 'next/image'
import Link from 'next/link'
import { EnvelopeIcon, MapPinIcon, BuildingStorefrontIcon } from '@heroicons/react/24/solid'

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 pt-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-10">

        {/* 1. Logo + Description */}
        <div>
          <div className="mb-4">
            <Image src="/images/logo-light.png" alt="Mergemechano" width={150} height={40} />
          </div>
          <p className="text-sm text-gray-400">
            Merge Mechano delivers innovative and reliable automobile servicing tools across India.
          </p>
        </div>

        {/* 2. Categories */}
        <div>
          <h4 className="text-1xl font-medium mb-4 text-white">Categories</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/categories/dent-puller" className="hover:underline">Dent Puller</Link></li>
            <li><Link href="/categories/battery-charger" className="hover:underline">Battery Charger</Link></li>
            <li><Link href="/categories/accessories" className="hover:underline">Accessories</Link></li>
            <li><Link href="/categories/waste-oil-collector" className="hover:underline">Waste Oil Collector</Link></li>
          </ul>
        </div>

        {/* 3. Information */}
        <div>
          <h4 className="text-1xl font-medium mb-4 text-white">Information</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link href="/distributors" className="hover:underline">Distributors</Link></li>
          </ul>
        </div>

        {/* 4. Contact */}
        {/* 4. Contact */}
            <div>
            <h4 className="text-1xl font-medium mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                <BuildingStorefrontIcon className="w-5 h-5 text-red-500 mt-0.5" />
                <span>Merge Mechano</span>
                </li>
                <li className="flex items-start gap-2">
                <EnvelopeIcon className="w-5 h-5 text-red-500 mt-0.5" />
                <a href="mailto:info@mergemechano.com" className="hover:underline">info@mergemechano.com</a>
                </li>
                <li className="flex items-start gap-2">
                <MapPinIcon className="w-5 h-5 text-red-500 mt-0.5" />
                <span>Thrissur, Kerala, India</span>
                </li>
            </ul>
            </div>
      </div>

      {/* Bottom Bar */}
      <div className=" text-gray-400 text-sm text-center py-4 border-t border-gray-700">
        &copy; 2025 Merge Mechano. All Rights Reserved | Developed with <span className="text-red-500">&hearts;</span> by <a href="https://maktalseo.com" className="underline hover:text-white">MakTal</a>
      </div>
    </footer>
  )
}
