import Image from 'next/image'

export default function AboutBanner() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="rounded-3xl overflow-hidden shadow-md">
        <Image
          src="/images/about/aboutbanner.jpg"
          alt="About Merge Mechano"
          width={1200}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}
