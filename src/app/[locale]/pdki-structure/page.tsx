import Image from "next/image"

import Navbar from "@/components/navbar"
import Header from "@/components/header"
import Footer from "@/components/footer"

const PDKIStructure = () => {
  return (
      <div>
      <Navbar />
      <main>
        <Header />
        
        <div className="lg:mt-12 mt-8">
          {/* <Image 
            src="/"
            alt="pdki struktur"
            width={1000}
            height={1000}
          /> */}

          <h2 className="text-2xl font-bold text-gray-800 h-40 text-center">
            Struktur Organisasi Belum Tersedia
          </h2>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PDKIStructure