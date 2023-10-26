import { Metadata } from "next"
import RegionData from "@/components/region-data"
import Header from "@/components/header"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import RegionResults from "@/components/region-results"
import { useTranslations } from "next-intl"

// metadata for region page
export const metadata: Metadata = {
  title: 'PDKI | Regions',
  openGraph: {
    title: 'PDKI | Regions',
    description: 'Region information',
  }
}

const PDKIRegions = () => { 
  const t = useTranslations("Branch") 

  return (
    <div>
      <Navbar />
      <main>
        {/* header dari halaman wilayah pdki */}
        <Header heading="PDKI" subheading={t("description")} />
 
        {/* region data */}
        <RegionResults />
      </main>
      <Footer />
    </div>
  )
}

export default PDKIRegions
