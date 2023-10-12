"use client"
import BackNavigate from "@/components/back-navigate"
import { ConferenceProps } from "@/utils/interface"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const ConferenceDetail = ({
    params: { conferenceId }
}: {
    params: { conferenceId: string }
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
            fetch(`${process.env.BASE_URL}/api/route/conference/${conferenceId}`)
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

    return (
        <div className="w-full my-10 flex flex-col ml-[240px]">
            <BackNavigate path="/conference" text={""} />

            <div className="mr-8 px-4 py-4 rounded-2xl bg-[#fff]">
                <div className="p-8 container mx-auto">
                    <div>
                        <h2 className="text-[24px] xl:text-[30px] font-semibold text-[#1a1a1a]">{conference?.title}</h2>
                        <p className="mt-2 text-[14px] md:text-[16px] xl:text-[18px] font-medium">Topic : {conference?.topic}</p>

                        <figure className="mt-10">
                            <Image
                                width={400}
                                height={400}
                                className="w-full h-full rounded-2xl"
                                src={process.env.BASE_URL + conference?.image}
                                alt={conference?.title}
                            />
                        </figure>

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
                                <p className="text-[14px] md:text-[16px] font-medium text-[#1a1a1a]">Link url click :
                                    <Link className="text-[#274698] hover:font-bold" href={conference ? conference?.website_url : ""}>
                                        {" "}disini
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConferenceDetail