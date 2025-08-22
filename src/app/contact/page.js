import ContactHeader from '@/components/Contact/ContactHeader'
import ContactInfo from '@/components/Contact/ContactInfo'
import ContactForm from '@/components/Contact/ContactForm'
import MapSection from '@/components/Contact/MapSection'
import { Toaster } from 'sonner'

export default function ContactPage() {
  return (
    <main>
      <ContactHeader />
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </section>
      <MapSection />
       <Toaster richColors position="bottom-right" />
    </main>
  )
}
