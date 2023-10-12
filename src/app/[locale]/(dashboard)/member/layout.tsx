import Image from "next/image"
import IMA from "@/../public/assets/logos/the-indonesia-medical-association.svg"
import WONCA from "@/../public/assets/logos/wonca.svg"
import PDKI from "@/../public/assets/logos/pdki.svg"

export const metadata = {
  title: 'PDKI | Member',
  description: 'perhimpunan dokter keluarga indonesia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="container mx-auto my-4 px-4">
      {/* navbar */}
      <nav className="flex justify-between items-center">
        <span className="font-bold text-2xl md:text-4xl">PDKI</span>
        <ul className="hidden sm:flex justify-center gap-0 md:gap-2 items-center">
          <li>
            <Image
              className="w-[50px] sm:w-[80px] md:w-full"
              src={IMA}
              alt="logo the indonesian medical association"
            />
          </li>
          <li>
            <Image
              className="w-[50px] sm:w-[80px] md:w-full"
              src={WONCA}
              alt="logo indonesian association of family physicians (IAFP)"
            />
          </li>
          <li>
            <Image
              className="w-[50px] sm:w-[80px] md:w-full"
              src={PDKI}
              alt="logo WONCA (world family doctors caring for people 'ASIA FACIFIC')"
            />
          </li>
        </ul>
      </nav>

      {children}

      <footer className="mt-10 text-center">
        <p className="font-medium text-[#666]">&copy; Copyright PDKI 2023, All rights reserved</p>
      </footer>
    </div>
  )
}