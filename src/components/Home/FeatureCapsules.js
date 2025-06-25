import Image from 'next/image'

export default function FeatureCapsules() {
  const features = [
    {
      title: 'Powerful Tools',
      description: 'High-performance machines designed for heavy-duty work.',
      buttonText: 'Learn More',
      image: '/images/feature-1.png',
    },
    {
      title: 'Smart Technology',
      description: 'Integrating innovation with durable engineering.',
      buttonText: 'Explore',
      image: '/images/feature-2.png',
    },
    {
      title: 'Reliable Support',
      description: 'Our team is here to help with setup and service.',
      buttonText: 'Get Support',
      image: '/images/feature-3.png',
    },
  ]

  return (
    <section className="-mt-16 pb-10 px-4 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl flex items-center justify-between p-6 h-full hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            {/* Left Side: Text */}
            <div className="flex-1 pr-4">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
              <button className="mt-3 text-black py-2 rounded-full text-sm">
                {feature.buttonText}
              </button>
            </div>

            {/* Right Side: Image */}
            <div className="w-20 h-20 flex-shrink-0">
              <Image
                src={feature.image}
                alt={feature.title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
