import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'

export default function ContactHeader() {
  return (
    <section className="relative w-full h-[450px] text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2">Let's <span className="text-red-500">Talk</span> Now</h1>
          <p className="text-lg text-gray-200 max-w-lg">
            Contact us using your preferred method and let us start helping to deliver your plans.
          </p>
        </div>

        {/* Info Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          {/* Email */}
          <div className="flex items-start gap-3">
            <EnvelopeIcon className="h-6 w-6 text-red-500" />
            <div>
              <p className="font-medium text-white">Shoot us an email</p>
              <p className="text-gray-300 text-sm">info@mergemechano.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <PhoneIcon className="h-6 w-6 text-red-500" />
            <div>
              <p className="font-medium text-white">Phone Call</p>
              <p className="text-gray-300 text-sm">04884 234090, 7736388467</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <MapPinIcon className="h-6 w-6 text-red-500" />
            <div>
              <p className="font-medium text-white">Find us</p>
              <p className="text-gray-300 text-sm">Thrissur, Kerala, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
