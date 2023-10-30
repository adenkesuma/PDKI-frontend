import { FC } from "react"
import { navigation } from "../utils/links-text.ts"
import { useTranslations } from "next-intl"
import Link from "next/link"

const Navigation: FC = () => {
  const t = useTranslations("Navigation.items");

  return (
    <nav className="container mx-auto rounded-tl-xl rounded-tr-xl bg-[#274698] py-4 px-4 sm:px-8 lg:px-12">
      <ul className="flex items-center sm:justify-center gap-6 xl:gap-8 snap overflow-scroll sm:overflow-auto ">
        {navigation.map((nav) => (
          <li key={nav.id}>
            <Link href={nav.link} className="md:text-sm text-xs text-white hover:underline delay-100 font-medium">
              {t(nav.id.toString() as any)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
