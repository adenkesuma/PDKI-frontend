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
    <div className='bg-gray-100'>
      <NextAuthProvider>
        <Navbar />
        <main className="container px-4 sm:px-0 mx-auto">
          {/* header */}
          <Header heading="PDKI" subheading={t("description")} />

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