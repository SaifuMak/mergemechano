import Image from 'next/image'
import Link from 'next/link'

export default function ContactInfo() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 flex flex-col items-start text-left space-y-6">

      {/* Heading */}
      {/* <h2 className="text-3xl font-bold text-gray-900">Find a Distributor</h2> */}

      <h2 className="text-3xl font-bold text-gray-900">Contact us</h2>


      {/* Description */}
      {/* <p className="text-gray-600 max-w-xl">
        Reach out to our distributors for any inquiries, assistance, or information regarding our products and services. We are here to support you.
      </p> */}

      <p className="text-gray-600 max-w-xl">
        For any questions, support, or detailed information about our offerings, feel free to contact our team.
      </p>

      {/* Button */}
      {/* <Link
        href="/distributors"
        className="inline-block bg-red-700 text-white px-6 py-2 rounded-full font-medium hover:bg-red-800 transition"
      >
        Distributors
      </Link> */}

      {/* Image */}
      <div className="w-full max-w-md">
        <Image
          src="/images/gallery/building-3.jpg"
          alt="Merge Mechano Office"
          width={600}
          height={400}
          className="w-full h-auto rounded-xl object-cover shadow-md"
        />
      </div>
    </section>
  )
}
