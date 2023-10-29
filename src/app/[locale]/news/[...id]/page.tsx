'use client'
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"
import { VscArrowLeft } from "react-icons/vsc"
import Link from "next/link"
import { NewsProps } from "@/utils/interface"
import TrendingNews from "@/components/trending-news"
import { useTranslations } from "next-intl"

const NewsId = ({
    params: { id }
}: {
    params: { id: number }
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
            await fetch(`${process.env.BASE_URL}/api/route/news/${id}`)
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

    const t = useTranslations("News-detail")

    return (
        <div>
            <Navbar />
            <div className="px-8 xl:px-12 container mx-auto mt-8">
                <Link href="/news" className="flex gap-6 flex-row items-start">
                    <VscArrowLeft className="text-[24px] font-semibold mb-6" />
                    <p className="font-medium text-[16px]">{t("text-back")}</p>
                </Link>
            </div>
            <div className="px-8 xl:px-12 container mx-auto flex flex-col lg:flex-row justify-between gap-12 mb-8">
                <div className="w-full lg:w-[60%]">
                    <figure>
                        <Image
                            width={400}
                            height={400}
                            className="w-full h-full rounded-2xl"
                            src={process.env.BASE_URL + news?.image}
                            alt={news?.title}
                        />
                    </figure>
                    <h2 className="md:text-[30px] lg:text-[35px] mt-8 xl:text-[40px] font-semibold text-[!1a1a1a]">{news?.title}</h2>
                    <p className="mt-2 text-[14px] md:text-[16px] xl:text-[18px] font-medium">{news?.description}</p>
                    <p className="text-[14px] md:text-[16px] font-medium mt-2">Published : {`${new Date(news.published_date).getDate()} - ${new Date(news.published_date).getMonth()} - ${new Date(news.published_date).getFullYear()}`}</p>
                    <div className="px-4 lg:px-12 mt-8 mb-8">
                        <p className="text-[#1a1a1a] font-medium text-[14px] md:text-[16px]">
                            {news?.content}
                        </p>
                        <div className="flex items-center gap-6 mt-4">
                            <p className="border-b-2 border-[#555] w-[100px]">{" "}</p>
                            <p className="text-[#1a1a1a] font-medium text-[14px] md:text-[16px]"><i>{news?.tags}</i></p>
                        </div>
                        <div className="mt-8 flex flex-col gap-2">
                            <p className="text-[14px] md:text-[16px] font-medium text-[#1a1a1a]">{t("link-url-left")}
                                <Link className="text-[#274698] hover:font-bold" target="_blank" href={news?.website_url}>
                                    {" "}{t("link-url-last")}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[40%]">
                    <TrendingNews />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NewsId