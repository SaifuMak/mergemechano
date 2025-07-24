export default function ContactHeader() {
  return (
    <section className="relative w-full h-56 md:h-64 bg-gray-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('/images/contact-banner.jpg')` }}
      />
      <div className="absolute inset-0 bg-red-900 opacity-20" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl font-extrabold text-center drop-shadow">Contact Us</h1>
      </div>
    </section>
  )
}
