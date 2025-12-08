import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

export default function DistributorsList({ distributors }) {
  if (distributors.length === 0) {
    return (
      <p className="text-center text-gray-500 min-h-[300px] mt-10">No distributors found.</p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[300px] lg:grid-cols-3 gap-6">
      {distributors.map((d, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {d.name}
          </h3>

          <div className="flex items-center text-sm text-gray-600 gap-2">
            <MapPinIcon className="h-4 w-4  shrink-0 text-red-600" />
            {d.locations.join(', ')}
          </div>

          <div className="flex items-center text-sm text-gray-500 mt-2">
            <PhoneIcon className="h-4 w-4 mr-2 shrink-0 text-red-600" />
            <a href={`tel:${d.phone}`} className="hover:underline">
              {d.phone}
            </a>
          </div>

          <div className="flex items-center text-sm text-gray-500 mt-2">
            <EnvelopeIcon className="h-4 w-4 mr-2 shrink-0 text-red-600" />
            <a href={`mailto:${d.email}`} className="hover:underline">
              {d.email}
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
