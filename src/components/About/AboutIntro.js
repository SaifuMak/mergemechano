export default function AboutIntro() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-2 mb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Redefining{' '}
          <span className="text-red-700">Auto Service Equipment</span>
        </h1>

        {/* Small paragraph */}
        <p className="text-sm text-gray-600 md:w-1/3">
          At Merge Mechano, we believe in simplifying garage workflows through reliable and modern tools. Discover how we’re making a difference.
        </p>
      </div>
    </div>
  )
}
