import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'

export default function ContactHeader() {
  return (
    <section className="relative w-full lg:h-[450px] h-auto py-8 lg:py-0 text-white">

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
          <h1 className="text-4xl font-bold mb-2">Let&apos;s <span className="text-red-500">Talk</span> Now</h1>

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
              <a href="mailto:info@mergemechano.com" className="text-gray-300 text-sm ">
                info@mergemechano.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <PhoneIcon className="h-6 w-6 text-red-500" />
            <div>
              <p className="font-medium text-white">Support</p>
              <a href="tel:04884234090">04884 234090</a><br/>{' '}
              <a href="tel:+91 7736 388 467">+91 7736 388 467</a>{' '}<br/><br/>
              <p className="font-medium text-white">Service</p>{' '}
              <a href="tel:+91 8281 940 567">+91 8281 940 567</a>{' '}<br/>
              <a href="tel:+91 7907 301 632">+91 7907 301 632</a>{' '}<br/>
              <a href="tel:+91 9946 335 677">+91 9946 335 677</a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <MapPinIcon className="h-6 w-6 text-red-500" />
            <div>
              <p className="font-medium text-white">Find us</p>
              <a href="https://maps.app.goo.gl/3bX19cCs3jQhnyjQ8" className="text-gray-300 text-sm ">
              <p className="text-gray-300 text-sm">Thrissur, Kerala, India</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
