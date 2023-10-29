import Footer from '@/components/footer'
import { NextAuthProvider } from '../provider'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import MemberPdki from '@/components/member-pdki'
import { useTranslations } from 'next-intl'

export const metadata = {
  title: 'PDKI | Member',
  description: 'Member Perhimpunan dokter keluarga indonesia',
}

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const t = useTranslations("Member")

  return (
    <div>
      <NextAuthProvider>
        <Navbar />
        <main>
          {/* header */}
          <Header />

          {/* children */}
          <div>
            <MemberPdki />
            {children}
          </div>
        </main>
        <Footer />
      </NextAuthProvider>
    </div>
  )
}
