import { EnvelopeIcon, PhoneIcon, MapPinIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'

export default function ContactHeader() {
  return (
    <section className="relative w-full lg:h-[450px] h-auto py-[80px] lg:py-0 text-white">
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
          <h1 className="text-4xl font-bold mb-2">
            Let&apos;s <span className="text-red-500">Talk</span> Now
          </h1>
          <p className="text-lg text-gray-200 max-w-lg">
            Contact us using your preferred method and let us start helping to deliver your plans.
          </p>
        </div>

        {/* Info Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {/* Email Box */}
          <div className="bg-white/10 rounded-lg p-5 flex items-start gap-3">
            <EnvelopeIcon className="h-5 w-5 text-red-500 mt-1" />
            <div>
              <p className="font-medium text-white pb-[12px]">Email</p>
              <a href="mailto:info@mergemechano.com" className="text-gray-300 text-sm">
                info@mergemechano.com
              </a>
            </div>
          </div>

          {/* Support Box */}
          <div className="bg-white/10 rounded-lg p-5 flex items-start gap-3">
            <PhoneIcon className="h-5 w-5 text-red-500 mt-1" />
            <div>
              <p className="font-medium text-white pb-[12px]">Support</p>
              <a href="tel:04884234090" className="text-gray-300 block">04884 234090</a>
              <a href="tel:+917736388467" className="text-gray-300 block">+91 7736 388 467</a>
            </div>
          </div>

          {/* Service Box */}
          <div className="bg-white/10 rounded-lg p-5 flex items-start gap-3">
            <WrenchScrewdriverIcon className="h-5 w-5 text-red-500 mt-1" />
            <div>
              <p className="font-medium text-white pb-[12px]">Service</p>
              <a href="tel:+918281940567" className="text-gray-300 block">+91 8281 940 567</a>
              <a href="tel:+917907301632" className="text-gray-300 block">+91 7907 301 632</a>
              <a href="tel:+919946335677" className="text-gray-300 block">+91 9946 335 677</a>
            </div>
          </div>

          {/* Location Box */}
          <div className="bg-white/10 rounded-lg p-5 flex items-start gap-3">
            <MapPinIcon className="h-5 w-5 text-red-500 mt-1" />
            <div>
              <p className="font-medium text-white pb-[12px]">Find us</p>
              <a
                href="https://maps.app.goo.gl/3bX19cCs3jQhnyjQ8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-sm"
              >
                Thrissur, Kerala, India
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
