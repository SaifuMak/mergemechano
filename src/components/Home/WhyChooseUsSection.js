import Image from 'next/image'
import { ShieldCheckIcon, WrenchIcon, SparklesIcon, UsersIcon } from '@heroicons/react/24/solid'

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Reliable Quality',
      description: 'Our machines are built to last with premium materials.',
    },
    {
      icon: WrenchIcon,
      title: 'Easy to Use',
      description: 'Designed for intuitive operation and minimal training.',
    },
    {
      icon: SparklesIcon,
      title: 'Innovative Designs',
      description: 'Advanced features with the latest tech.',
    },
    {
      icon: UsersIcon,
      title: 'Excellent Support',
      description: 'Get help anytime from our dedicated team.',
    },
  ]

  return (
    <section
      className="relative pt-30 pb-30 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/background.jpg')",
      }}
    >
      {/* Centered Title outside the capsule */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">Why Choose Merge Mechano?</h2>
      </div>

      {/* Capsule Box */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Text + Icons */}
        <div className="w-full md:w-1/2 space-y-6">
        <h3 className="text-2xl font-bold text-black">Our Commitment</h3>
          <p className="text-gray-600">
            We are committed to providing reliable, innovative, and easy-to-use tools for all your automobile servicing needs.
          </p>
          <p className="text-gray-600">
            We are committed to providing reliable, innovative, and easy-to-use tools for all your automobile servicing needs.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <feature.icon className="w-8 h-8 text-red-600" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">{feature.title}</h4>
                  <p className="text-xs text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/frontoffice.jpg"
            alt="Why Choose Us"
            width={500}
            height={400}
            className="rounded-xl w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
