"use client"

import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const MemberPdki = () => { 
  const t = useTranslations("Member")
  const pathname = usePathname()
  let path = null
  
  if (pathname !== null) {
    path = pathname.split("/")
  } else {
    path = ""
  }

  return (
    <section className="px-6 lg:px-0 my-12 container mx-auto">
      <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
        <h2 className="font-semibold text-2xl mb-4">{t("content.h")}</h2>
        <ul className='flex items-center justify-between gap-4'>
          <Link 
            className={`text-[#274698] py-2 px-4 border font-medium duration-75 border-gray-300`} 
            href="/member/copc">
              Copc
          </Link>
          <Link 
            className={`text-[#274698]  py-2 px-4 border font-medium duration-75 border-gray-300`}
            href="/member/fomc">
              Fomc
          </Link>
        </ul>
      </div>
    </section>
  )
}

export default MemberPdki