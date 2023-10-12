"use client"
import { useEffect, useState, ChangeEvent, useCallback } from "react"
import { NewsProps } from "@/utils/interface"
import { TbArrowUpRight } from "react-icons/tb"
import Search from "./search"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

const NewsResults = () => {
  const [search, setSearch] = useState<string>('')
  const [newsData, setNewsData] = useState<NewsProps[]>([])

  useEffect(() => {
    fetch(`${process.env.BASE_URL}/api/route/news?title=${search}`, {
      cache: 'no-store',
      mode: 'cors'
    })
      .then((res) => res.json())
      .then((data) => setNewsData(data))
      .catch((err) => {
        console.log(err)
      })
    console.log(search);
  }, [search])

  const onSetSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }, [])

  const t = useTranslations("News")

  return (
    <>
      <section className="my-12 px-4 lg:px-6 xl:px-12">
        <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
          <h2 className="font-semibold text-[30px] mb-4">{t("content.h")}</h2>
          <Search search={search} onSetSearch={onSetSearch} holder={t("content.search-placeholder")} />
        </div>

        {/* news */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {newsData.map((item: NewsProps) => (
            <div key={item.id} className="shadow-md shadow-gray-300 rounded-2xl">
              <figure className="h-[160px] relative block overflow-hidden rounded-tl-2xl rounded-tr-2xl">
                <Image
                  width={300}
                  height={300}
                  className="duration-100 object-cover bg-cover h-full hover:scale-110 w-full rounded-tr-2xl rounded-tl-2xl"
                  src={process.env.BASE_URL + item?.image}
                  alt="news 1"
                />
                <div className="absolute top-5 right-5 p-2 rounded-[50%] bg-[#fff] shadow-md shadow-gray-400">
                  <Link href={`/news/${item.id}`}>
                    <TbArrowUpRight className="w-[24px] h-[24px] text-[#274698]" />
                  </Link>
                </div>
              </figure>
              <div className="flex flex-col justify-between p-6 bg-[#274698] rounded-bl-2xl overflow-hidden rounded-br-2xl h-[140px]">
                <div>
                  <h4 className="text-white font-semibold text-[16px] text-ellipsis overflow-hidden whitespace-nowrap">{item.title}</h4>
                  <p className="text-gray-300 text-[14px] font-medium text-ellipsis overflow-hidden whitespace-nowrap">{item.description}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-[14px] text-gray-100 font-medium">{`${new Date(item.published_date).getDate()} - ${new Date(item.published_date).getMonth()} - ${new Date(item.published_date).getFullYear()}`}</span>
                  <span className="text-[14px] text-gray-100 font-medium">{item.tags}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default NewsResults