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
      <div key={data?.conference_id} className="flex rounded-2xl bg-[#274698] h-[380px] lg:h-[410px]">
        <div className="overflow-hidden">
          <div className="w-full h-[65%] sm:h-[70%] relative overflow-hidden rounded-tl-2xl rounded-tr-2xl">
            <Image
              width={400}
              height={400}
              className="hover:scale-110 duration-100 rounded-tl-2xl rounded-tr-2xl w-full h-full bg-cover object-cover"
              src={process.env.BASE_URL + data?.image}
              alt="conference image"
            />
            <div className="absolute top-5 right-5 p-2 rounded-[50%] bg-[#fff] shadow-sm shadow-gray-600">
              <Link href={`/conference/${data?.conference_id}`}>
                <TbArrowUpRight className="w-[24px] h-[24px] text-[#274698]" />
              </Link>
            </div>
          </div>
          <div className="py-3 px-6 text-white flex flex-col justify-between h-[35%] sm:h-[30%] overflow-hidden">
            <div>
              <h3 className="text-[16px] md:text-[18px] xl:text-[20px] font-semibold md:text-ellipsis md:overflow-hidden md:whitespace-nowrap lg:text-left lg:whitespace-normal">{data?.title}</h3>
            </div>
            <div className="flex justify-between items-center gap-8">
              <span className="w-[70%] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">{data?.location}</span>
              <span className="w-[30%] text-[14px]">{`${date} - ${month} - ${year}`}</span>
            </div>
          </div>
        </div>
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