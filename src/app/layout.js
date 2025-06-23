import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'Merge Mechano',
  description: 'A Next.js + Tailwind CSS site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="">{children}</main>
      </body>
    </html>
  )
}
