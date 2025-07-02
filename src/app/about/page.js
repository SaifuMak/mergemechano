import AboutIntro from '@/components/About/AboutIntro'
import AboutBanner from '@/components/About/AboutBanner'
import AboutHighlights from '@/components/About/AboutHighlights'
import AboutStory from '@/components/About/AboutStory'
import AboutCTA from '@/components/About/AboutCTA'
export default function AboutPage() {
  return (
    <main className=" space-y-16">
      <AboutStory />
      <AboutIntro />
      <AboutBanner />
      <AboutHighlights />
      <AboutCTA />
    </main>
  )
}
