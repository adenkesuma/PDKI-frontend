'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { VscArrowLeft } from "react-icons/vsc"
import { ConferenceProps } from "@/utils/interface"
import UpcomingConference from "@/components/upcoming-conference"
import ConferenceSideBar from "@/components/conference-sidebar"
import { useTranslations } from "next-intl"

const ConferenceId = ({
    params: { id }
}: {
    params: { id: string }
}) => {

    const [conference, setConference] = useState<ConferenceProps>({
        conference_id: "",
        title: "",
        description: "",
        image: "",
        start_date: "",
        end_date: "",
        location: "",
        organizer: "",
        website_url: "",
        registration_required: false,
        speakers: "",
        is_free: false,
        topic: "",
        created_at: "",
        updated_at: "",
    })

    useEffect(() => {
        const fetchConference = () => {
            fetch(`${process.env.BASE_URL}/api/route/conference/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setConference(data)

                })
                .catch((err) => {
                    console.log("Error fetching data", err);
                })

        }
        fetchConference()
    }, [])

    const t = useTranslations("Conference-detail")

    return (
        <div>
            <Navbar />
            <div className="px-8 container mx-auto mt-8 xl:px-12">
                <Link href="/conference" className="flex gap-6 flex-row items-start">
                    <VscArrowLeft className="text-[24px] font-semibold mb-6" />
                    <p className="font-medium text-[16px]">{t("text-back")}</p>
                </Link>
                <div className="px-8 xl:px-12 container mx-auto flex flex-col lg:flex-row justify-between gap-12 mb-8">
                    <div>

                        <figure className="mt-10">
                            <Image
                                width={400}
                                height={400}
                                className="w-full h-full rounded-2xl"
                                src={process.env.BASE_URL + conference?.image}
                                alt={conference?.title}
                            />
                        </figure>
                        <h2 className="md:text-[30px] lg:text-[35px] xl:text-[40px] font-semibold text-[#1a1a1a] mt-8">{conference?.title}</h2>
                        <p className="mt-2 text-[14px] md:text-[16px] xl:text-[18px] font-medium">Topic : {conference?.topic}</p>

                        <div className="px-4 lg:px-12 mt-8 mb-8">
                            <p className="text-[#1a1a1a] font-medium text-[14px] md:text-[16px]">
                                {conference?.description}
                            </p>
                            <div className="flex items-center gap-6 mt-4">
                                <p className="border-b-2 border-[#555] w-[100px]">{" "}</p>
                                <p className="text-[#1a1a1a] font-medium text-[14px] md:text-[16px]"><i>{conference?.speakers}</i></p>
                            </div>
                            <div className="mt-8 flex flex-col gap-2">
                                <p className="text-[14px] md:text-[16px] font-medium text-[#1a1a1a]">Penyelenggara: {conference?.organizer}</p>
                                <p className="text-[14px] md:text-[16px] font-medium text-[#1a1a1a]">Location: {conference?.location}</p>
                                <p className="text-[14px] md:text-[16px] font-medium text-[#1a1a1a]">{t("link-url-left")}
                                    <Link className="text-[#274698] hover:font-bold" href={conference?.website_url}>
                                        {" "}{t("link-url-last")}
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[40%]">
                        <ConferenceSideBar />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ConferenceId