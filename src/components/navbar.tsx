"use client"
import { FC, useState } from "react"
import Image from "next/image"
import IMA from "../../public/assets/logos/the-indonesia-medical-association.svg"
import WONCA from "../../public/assets/logos/wonca.svg"
import PDKI from "../../public/assets/logos/pdki.svg"
import Login from "./login.tsx"
import Link from "next/link"
import { useTranslations } from "next-intl"
import LocaleSwitcher from "./locale-switcher.tsx"
import { useSession } from "next-auth/react"

const Navbar: FC = () => {
  const t = useTranslations("LocaleSwitcher")

  const [show, setShow] = useState<Boolean>(false)
  const handleShowLogin = () => setShow(true)

  const { data: session, status } = useSession()

  return (
    <>
      <nav className="py-4 px-4 sm:px-0 container mx-auto xl:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl md:text-4xl text-gray-800">PDKI</Link>
          <ul className="hidden sm:flex justify-center gap-0 md:gap-2 items-center">
            <li>
              <Image
                className="w-[60px] md:w-[70px]"
                src={IMA}
                alt="logo the indonesian medical association"
              />
            </li>
            <li>
              <Image
                className="w-[60px] md:w-[70px]"
                src={WONCA}
                alt="logo indonesian association of family physicians (IAFP)"
              />
            </li>
            <li>
              <Image
                className="w-[60px] md:w-[60px]"
                src={PDKI}
                alt="logo WONCA (world family doctors caring for people 'ASIA FACIFIC')"
              />
            </li>
          </ul>
          {status === "authenticated" ?
            session.user.admin_id ?
              <div className="flex justify-center gap-4 items-center">
                <LocaleSwitcher />
                <Link href={'/admin/dashboard'} className="bg-[#274698] px-6 py-[8px] duration-75 text-white md:py-[10px] md:px-8 rounded-3xl font-medium text-[12px] md:text-[14px]">
                  Dashboard
                </Link>
              </div>
              :
              <div className="flex justify-center gap-4 items-center">
                <LocaleSwitcher />
                <Link href={'/member/dashboard'} className="bg-[#274698] px-6 py-[8px] duration-75 text-white md:py-[12px] md:px-8 rounded-3xl font-medium text-[12px] md:text-[14px]">
                  Dashboard
                </Link>
              </div>
            :
            <div className="flex justify-center gap-4 items-center">
              {/* <LocaleSwitcher /> */}
              <button onClick={handleShowLogin} className="bg-[#274698] px-6 py-2 xl:text-base duration-75 text-white md:px-8 rounded-xl font-medium text-sm">
                Login
              </button>
            </div>
          }

        </div>
      </nav>
      {show === true && <Login handleShowLogin={handleShowLogin} setShow={setShow} />}
    </>
  )
}

export default Navbar
