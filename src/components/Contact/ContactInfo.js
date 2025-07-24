import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/solid'

export default function ContactInfo() {
  return (
    <div className="space-y-6 text-gray-700">
      <div>
        <h2 className="text-xl font-bold mb-2">The Office</h2>
        <div className="flex items-start gap-2">
          <MapPinIcon className="h-6 w-6 text-red-600 mt-1" />
          <address className="not-italic leading-relaxed">
            446A, MERGE MECHANO COMPLEX,<br />
            KUMBALANGADU,<br />
            KANJIRAKODE P O,<br />
            WADAKKANCHERY MUNICIPALITY,<br />
            THRISSUR, KERALA, INDIA, 680590
          </address>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <PhoneIcon className="h-5 w-5 text-red-600" />
        <span>04884 234090, 7736388467</span>
      </div>

      <div className="flex items-center gap-2">
        <EnvelopeIcon className="h-5 w-5 text-red-600" />
        <a href="mailto:info@mergemechano.com" className="underline">
          info@mergemechano.com
        </a>
      </div>

      <div className="flex items-start gap-2">
        <ClockIcon className="h-5 w-5 text-red-600 mt-1" />
        <div>
          <p>Monday - Saturday: 9:00 AM – 5:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  )
}
