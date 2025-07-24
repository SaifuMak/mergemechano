export default function DistributorsHeader() {
  return (
    <section className="relative w-full h-56 md:h-56 bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('/images/distributors-1.jpg')` }}
      />

      {/* Overlay Text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-3xl md:text-3xl font-extrabold text-center drop-shadow">
          Our Authorized Distributors
        </h1>
      </div>
    </section>
  )
}
