import Footer from '@/components/Footer'
import './globals.css'
import Header from '@/components/Header'

 export const metadata = {
  title: 'Merge Mechano Private Limited',
  description: 'We offer an assortment of machinery that enhances and enriches you in automobile servicing.',
} 




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
