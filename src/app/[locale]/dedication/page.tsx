import { Metadata } from "next"
import Header from "@/components/header.tsx"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useTranslations } from "next-intl"

// metadata for dedication page
export const metadata: Metadata = {
  title: 'PDKI | Dedication',
  openGraph: {
    title: 'PDKI | Dedication',
    description: 'PDKI dedication'
  }
}

const Dedication = () => {
  const t = useTranslations("Dedication")
  return (
    <div className="bg-gray-100">
      <Navbar />
      <main className="container px-4 sm:px-0 mx-auto">
        {/* header dari halaman catatan  */}
        <Header heading="PDKI" subheading={t("description")} /> 

        <section>
          <h1 className="text-center text-lg font-semibold my-20">still process</h1>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Dedication