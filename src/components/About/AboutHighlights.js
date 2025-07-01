import {
  LightBulbIcon,
  ChatBubbleBottomCenterTextIcon,
  MapIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

export default function AboutHighlights() {
  const items = [
  {
    title: 'Innovation',
    description: 'We create modern solutions that make garage servicing faster and more reliable.',
    icon: LightBulbIcon,
  },
  {
    title: 'Customer Support',
    description: 'Dedicated guidance for installation, usage, and maintenance of every product.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: 'Nationwide Reach',
    description: 'Our products are available across India with a strong distributor network.',
    icon: MapIcon,
  },
  {
    title: 'Trusted Quality',
    description: 'All products undergo rigorous testing and quality control.',
    icon: ShieldCheckIcon,
  },
]


  return (
    <section className="max-w-7xl mx-auto px-4 py-7">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Heading */}
        <h2 className="text-3xl font-bold text-gray-800 leading-snug">
          We build solutions that simplify<br />your automobile servicing workflow.
        </h2>

        {/* Right: Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((item, index) => {
            const Icon = item.icon
            return (
                <div
                key={index}
                className="border border-[#666] rounded-xl p-6 transition space-y-3"
                >
                <Icon className="w-8 h-8 text-red-600" />
                <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
                </div>
            )
            })}

        </div>
      </div>
    </section>
  )
}
