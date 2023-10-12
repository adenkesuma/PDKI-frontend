"use client"
import BackNavigate from "@/components/back-navigate"
import { NewsProps } from "@/utils/interface"
import Image from "next/image"
import { useState, useEffect } from "react"

const NewsDetail = ({
    params: { newsId }
}: {
    params: { newsId: string }
}) => {
    const [news, setNews] = useState<NewsProps>({
        id: 0,
        title: "",
        content: "",
        description: "",
        published_date: "",
        image: "",
        video: "",
        tags: "",
        categories: "",
        published: false,
        region: "",
        website_url: ""
    })

    useEffect(() => {
        const fetchNews = async () => {
            await fetch(`${process.env.BASE_URL}/api/route/news/${newsId}`)
                .then((res) => res.json())
                .then((data) => {
                    setNews(data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        fetchNews()
    }, [])

    const dateFromNewsDetail = news?.published_date
    const newsDate = new Date(dateFromNewsDetail)
    const year = newsDate.getFullYear()
    const month = newsDate.getMonth()
    const date = newsDate.getDate()

    return (
        <div className="w-full my-10 flex flex-col ml-[240px]">
            <BackNavigate path="/news" text={""} />

            <div className="mr-8 px-4 py-4 rounded-2xl bg-[#fff]">
                <div className="px-8 xl:px-12 container mx-auto mt-8">
                    <div>
                        <h2 className="mb-2 text-[24px] lg:text-[30px] font-semibold text-[!1a1a1a]">{news?.title}</h2>
                        <p className="mt-2 text-[14px] md:text-[16px] xl:text-[18px] font-medium">{news?.description}</p>
                        <p className="text-[14px] md:text-[16px] font-medium mt-2">Published : {`${date} - ${month} - ${year}`}</p>

                        <figure className="mt-10">
                            <Image
                                width={400}
                                height={400}
                                className="w-full h-full rounded-2xl"
                                src={process.env.BASE_URL + news?.image}
                                alt="news image"
                            />
                        </figure>

                        <div className="px-4 lg:px-12 mt-8 mb-8">
                            <p className="text-[#1a1a1a] font-medium text-[14px] md:text-[16px]">
                                {news?.content}
                            </p>
                            <div className="flex items-center gap-6 mt-4">
                                <p className="border-b-2 border-[#555] w-[100px]">{" "}</p>
                                <p className="text-[#1a1a1a] font-medium text-[14px] md:text-[16px]"><i>{news?.tags}</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsDetail