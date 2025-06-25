import Link from 'next/link'
export default function DistributorSection() {
  return (
<section className="bg-red-600 text-white py-16 px-4 text-center">

  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">Looking for Distributors?</h2>
    <p className="mb-6 text-white/90 text-sm md:text-base">
      Partner with Merge Mechano and be part of a growing network across India.
    </p>
    <Link
      href="/distributors"
      className="inline-block bg-white text-red-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
    >
      Our Distributors
    </Link>
  </div>
</section>
  ) }