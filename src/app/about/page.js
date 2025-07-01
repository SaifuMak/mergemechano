import AboutIntro from '@/components/About/AboutIntro'
import AboutBanner from '@/components/About/AboutBanner'
import AboutHighlights from '@/components/About/AboutHighlights'


export default function AboutPage() {
  return (
    <main className="pt-10 pb-10 space-y-16">
      <AboutIntro />
      <AboutBanner />
      <AboutHighlights />
    </main>
  )
}
