import Link from "next/link"
import Image from "next/image"
import { TbChevronRight, TbArrowUpRight } from "react-icons/tb"
import { ConferenceProps } from "@/utils/interface"
import { fetchConference } from "@/lib/fetch/get-conference";
import { Item } from "@/utils/interface";
import { useTranslations } from "next-intl";

const LatestConferenceBox = ({
  fourLatestConference,
}: {
  fourLatestConference: any;
}) => {

  const t = useTranslations("Home.latest-conference") 

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-base lg:text-2xl font-semibold text-gray-800">
          {t("title")}
        </h2>
        <Link href="/news" className="flex justify-between items-center gap-1 sm:gap-2 text-[#274698] font-medium text-xs md:text-sm">
          {t("view-all")}
          <TbChevronRight
            className="w-6 h-6 font-semibold text-[#274684]"
          />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {fourLatestConference.map((item: ConferenceProps) => (
          <div 
            key={item.conference_id}
            className="p-3 rounded-xl border boder-gray-200 flex flex-col gap-4"
          >
            <figure className="h-[160px] block overflow-hidden">
              <Image
                width={300}
                height={300}
                className="duration-100 object-cover bg-cover h-full hover:scale-110 w-full rounded-lg"
                src={process.env.BASE_URL + item?.image}
                alt="news 1"
              />
            </figure>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="text-gray-800 font-semibold text-[16px] text-ellipsis overflow-hidden whitespace-nowrap">{item.title}</h4>
                <p className="text-gray-600 text-[14px] font-medium line-clamp-2 mt-1 text-sm">{item.description}</p>
              </div>
              <div className="mt-4 flex justify-between items-center gap-8">
                <span className="text-sm text-gray-600 font-medium whitespace-nowrap text-normal overflow-hidden w-1/2">{item.location}</span>
                <span className="text-sm text-gray-600 font-medium whitespace-nowrap text-normal overflow-hidden w-1/2 text-end">{item.organizer}</span>
              </div>
            </div>

            <Link href={`/conference/${item.conference_id}`} className="p-2 text-sm font-medium w-full bg-[#274698] text-center rounded-lg text-white">
              Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

const LatestConference = async () => {
  const getLatestConference = await fetchConference()
  const sortedData = await getLatestConference.sort(
    (a: Item, b: Item) => b.id - a.id
  )
  const fourLatestConference = await sortedData.slice(0, 4)

  return (
    <>
      <LatestConferenceBox fourLatestConference={fourLatestConference} />
    </>
  )
}

export default LatestConference