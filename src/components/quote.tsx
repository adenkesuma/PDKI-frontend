import { FC } from "react"
import { alegreya } from "@/utils/font"
import { useTranslations } from "next-intl"

interface QuoteProps {}

const Quote: FC<QuoteProps> = () => {
  const t = useTranslations("Home.quote")

  return (
    <div className="bg-[#274698] relative rounded-2xl p-8">
      <p className={`${alegreya.className} text-white px-10 font-medium text-[16px] md:text-[20px] lg:text-[22px] text-center leading-9`}>
        <span className="font-bold text-[80px] absolute top-8 left-5">{'“'}</span>
          {t("content")}
        <span className="font-bold text-[80px] absolute bottom-12 right-5">{'„'}</span>
      </p>
    </div>
  )
}

export default Quote
