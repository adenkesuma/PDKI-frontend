import { Metadata } from "next"
import Header from "@/components/header.tsx"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FacilitiesOrganization from "@/components/facilities-organization"

// metadata for dedication page
export const metadata: Metadata = {
  title: 'PDKI | Facilities',
  openGraph: {
    title: 'PDKI | Facilities',
    description: 'PDKI Facilities'
  }
}

const Facilities = () => {
  return (
    <div>
      <Navbar />
      <main>
        {/* header dari halaman catatan  */}
        <Header /> 

        <section>
          <h1 className="text-left text-base lg:text-lg xl:text-xl font-semibold mt-14 mb-8">Fasilitas Perhimpunan Kedokteran Keluarga Indonesia</h1>
        </section>

        <FacilitiesOrganization />
      </main>
      <Footer />
    </div>
  )
}

export default Facilities
