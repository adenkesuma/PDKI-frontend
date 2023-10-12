import { fetchConference } from "@/lib/fetch/get-conference"
import { ConferenceProps, NewsProps } from "@/utils/interface"
import Image from "next/image"
import Link from "next/link"

const ConferenceSideBar = async () => {
    const getUpcomingConference = await fetchConference()

    // mengurutkan data berdasarkan views
    const sortedConference = await getUpcomingConference.sort((a: { views: number }, b: { views: number }) => b.views - a.views)

    // mengambil 5 data teratas dengan views terbanyak
    const topConference: [] = await sortedConference.slice(0, 5)

    return (
        <div className="w-full overflow-hidden">
            <h2 className="font-semibold text-[18px] lg:text-[20px] mb-4">Konferensi yang akan datang</h2>
            <div className="h-[380px] lg:h-[410px] bg-[#274698] rounded-2xl p-4 text-white flex flex-col gap-6">
                {topConference.map((item: ConferenceProps) => (
                    <div key={item.conference_id} className="flex items-center gap-4 hover:bg-[#19388b] rounded-xl duration-75">
                        <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[55px]">
                            <Image
                                width={300}
                                height={200}
                                className="w-full h-full object-cover bg-center rounded-xl border-2 border-white"
                                src={process.env.BASE_URL + item.image}
                                alt="Image"
                            />
                        </div>
                        <Link href={`/conference/${item.conference_id}`} className="w-full overflow-hidden">
                            <h3 className="font-medium text-[16px] text-[#fff] text-ellipsis whitespace-nowrap overflow-hidden">{item.title}</h3>
                            <p className="font-medium text-[14px] text-[#cacaca] text-ellipsis whitespace-nowrap overflow-hidden">{item.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ConferenceSideBar
