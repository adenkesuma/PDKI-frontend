import Image from "next/image"
import Link from "next/link"
import { TbArrowUpRight } from "react-icons/tb"
import { fetchConference } from "@/lib/fetch/get-conference"
import { useTranslations } from "next-intl"

const UpcomingConferenceBox = ({
  data,
  conferenceDate,
}: {
  data: any;
  conferenceDate: Date;
}) => {
  // start date data
  const start_date = new Date(conferenceDate)
  const year = start_date.getFullYear()
  const month = start_date.getMonth()
  const date = start_date.getDate()

  const t = useTranslations("Home.upcoming-conference")

  return (
    <div className="w-full">
      <h2 className="font-semibold text-[18px] lg:text-[20px] mb-4">
        {t("title")}
      </h2>
      <div key={data?.conference_id} className="flex flex-col rounded-2xl border border-gray-200 p-3 h-[380px] lg:h-[410px]">
          <div className="w-full h-full overflow-hidden rounded-lg">
            <Image
              width={400}
              height={400}
              className="hover:scale-110 duration-100 rounded-lg w-full h-full bg-cover object-cover"
              src={process.env.BASE_URL + data?.image}
              alt="conference image"
            />
          </div>

          <div className="py-4 flex flex-col justify-between h-[35%] sm:h-[30%] overflow-hidden">
            <h3 className="text-sm md:text-xl text-gray-800 font-semibold line-clamp-2 lg:text-left">{data?.title}</h3>
            <div className="flex justify-between items-center gap-8">
              <span className="w-[70%] text-gray-600 text-xs md:text-sm overflow-hidden text-ellipsis whitespace-nowrap">{data?.location}</span>
              <span className="w-[30%] text-gray-600 text-xs md:text-sm">{`${date} - ${month} - ${year}`}</span>
            </div>
          </div>
          <Link 
            href={`/conference/${data?.conference_id}`} 
            className="bg-[#274698] rounded-lg text-xs md:text-sm font-medium text-white py-2 text-center"
          >
            Detail
          </Link> 
      </div>
    </div>
  )
}

const UpcomingConference = async () => {
  const upcomingConference = await fetchConference()
  const upcomingDataConference = await upcomingConference
  const data = await upcomingDataConference[upcomingDataConference.length - 1]
  const conferenceDate = await data?.start_date

  return (
    <>
      <UpcomingConferenceBox data={data} conferenceDate={conferenceDate} />
    </>
  )
}

export default UpcomingConference