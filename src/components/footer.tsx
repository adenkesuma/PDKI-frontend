import { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { socialMedia } from "@/utils/constant.tsx"
import { aboutFooter, contactUsFooter, termsConditionsFooter } from "../utils/links-text.ts"
import LOGOS from "../../public/assets/logos/footer-logos.svg"
import { useTranslations } from "next-intl"

const Footer: FC = () => {
  const t = useTranslations("Footer")

  return (
    <footer>
      <div className="container mx-auto px-4 md:px-6 py-8 lg:px-10 mb:mb-6 lg:mb-8 xl:mb-14 lg:py-10 rounded-xl bg-[#274698]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start items-center gap-4 md:gap-6 lg:gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl lg:text-2xl font-semibold mb-3 text-white text-center md:text-left">Perhimpunan Dokter <br /> Keluarga Indonesia</h4>
            <Image 
              className="w-[180px] md:w-[220px]"
              src={LOGOS}
              alt="footer logos white"
            />
            <p className="text-center font-medium mt-4 text-white text-[14px]">&copy; Copyright PDKI 2023, All rights reserved</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 xl:gap-16">
            <ul className="flex flex-col gap-4 items-center">
              <h4 className="text-[16px] lg:text-lg mb-3 font-semibold text-white">About</h4>
              {aboutFooter.map((item) => (
                <li key={item.id}>
                  <Link href={item.link} className="text-[14px] text-white font-medium">
                    {t(("about." + item.id) as any)}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-4 items-center">
              <h4 className="text-[16px] lg:text-lg mb-3 font-semibold text-white">Terms & Conditions</h4>
              {termsConditionsFooter.map((item) => (
                <li key={item.id}>
                  <Link href={item.link} className="text-[14px] text-white font-medium">
                    {t(("terms." + item.id) as any)}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex gap-4 flex-col items-center">
              <h4 className="text-[16px] lg:text-lg mb-3 font-semibold text-white">Contact Us</h4>
              {contactUsFooter.map((item) => (
                <li key={item.id} className="text-[14px] text-white font-medium">
                  {t(("contact-us." + item.id) as any)}
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex gap-4">
            {socialMedia.map((media, idx) => (
              <Link className="duration-100 hover:text-blue-100 hover:bg-blue-900 text-[#274698] bg-blue-100 p-2 h-full rounded-lg text-[24px]" key={idx} href={media.link}>
                {media.icon}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
