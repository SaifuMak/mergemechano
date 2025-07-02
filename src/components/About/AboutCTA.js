import Link from 'next/link'

export default function AboutCTA() {
  return (
    <section className="bg-gray-100 py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Let’s <span className="text-red-600">connect</span> and grow together
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base mb-6">
          Whether you’re a workshop owner, distributor, or enthusiast — Merge Mechano is ready to support your journey.
        </p>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}
