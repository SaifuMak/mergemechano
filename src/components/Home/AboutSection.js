import Image from 'next/image'
import {
  PlayCircleIcon,
  HandThumbUpIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline'


export default function AboutSection() {
  return (
    <section className="bg-white py-8 px-4 pt-20">
      <div className="max-w-7xl p-12 rounded-2xl bg-gray-100 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div className="space-y-6">
          <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
            About us 🔧
          </span>

          <h2 className="text-3xl font-bold text-gray-900">
           WHERE WE FORESEE YOUR NEEDS <br className="hidden md:block" />
          </h2>

          <p className="text-gray-600 text-base  leading-5.5">
            Merge Mechano develops and yields products that overcome consumer problems and streamline the process of automobile servicing.
            We not only manufacture products but help employers install, use, and service the products. Our products are obtainable across the Indian markets.
            We hope our products and upcoming machinery will provide you with the best services with all your great full support.
          </p>

          {/* Feature Cards */}
          <div className="flex gap-4 flex-col sm:flex-row">
                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-left text-left w-full sm:w-1/2">
                <HandThumbUpIcon className="w-10 h-10 text-orange-500 mb-3" />
                <h4 className="text-base font-semibold mb-1">Growth</h4>
                <p className="text-sm text-gray-500">
                    Our mission is to drive growth & improve progress.
                </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-left text-left w-full sm:w-1/2">
                <BanknotesIcon className="w-10 h-10 text-green-500 mb-3" />
                <h4 className="text-base font-semibold mb-1">Revenue</h4>
                <p className="text-sm text-gray-500">
                    Our mission is to help improve efficiency & ROI.
                </p>
                </div>

          </div>

          <button className="mt-4 bg-black text-white text-sm px-6 py-2 rounded-full hover:bg-gray-800 transition">
            Learn More →
          </button>
        </div>

        {/* Right Image with Play Icon */}
        <section className="relative h-[550px] bg-gray-50 overflow-visible z-0">
  {/* Image breaks out of top and bottom */}
  <div className="absolute top-[-100px] bottom-[-100px] left-0 right-0 z-0">
    <Image
      src="/images/about.jpg"
      alt="About"
      className="object-cover w-full h-full rounded-2xl"
      fill
    />
  </div>

</section>

      </div>
    </section>
  )
}
