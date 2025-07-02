import Image from 'next/image'
import {
  WrenchScrewdriverIcon,
  GlobeAsiaAustraliaIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

export default function AboutStory() {
  const icons = [
    {
      icon: WrenchScrewdriverIcon,
      label: 'Innovative Tools & Machines',
    },
    {
      icon: GlobeAsiaAustraliaIcon,
      label: 'Nationwide Market Presence',
    },
    {
      icon: UsersIcon,
      label: 'Customer-Centric Philosophy',
    },
  ]

  return (
    <section className="w-full mx-auto px-4 py-20 text-center bg-gray-100">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Story</h2>

      {/* Image */}
      <div className="mb-8">
        <Image
          src="/images/about/about-story.jpg" // Replace with your actual image
          alt="Our Story"
          width={800}
          height={400}
          className="mx-auto rounded-xl shadow"
        />
      </div>

      {/* Paragraphs */}
      <div className="w-1/2 mx-auto space-y-4 text-gray-600 text-base mb-10">
        <p>
          Founded with a passion for simplifying automobile servicing, Merge Mechano brings together innovation and reliability to workshops across India. What started as a vision to improve everyday garage operations has grown into a trusted brand across the industry.</p>
        <p>
          Our journey is built on customer trust, technical expertise, and the drive to deliver user-friendly tools that truly make a difference. We believe that even the most complex repair task can be made easier with the right equipment in the right hands.</p>
      </div>

      {/* Icon list */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 mt-10">
        {icons.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={index} className="flex flex-col items-center">
              <Icon className="w-10 h-10 text-red-600 mb-2" />
              <span className="text-sm text-gray-700">{item.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
