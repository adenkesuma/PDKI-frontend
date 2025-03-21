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
  }, [search])

  const onSetSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }, [])

  const t = useTranslations("News")

  return (
    <>
      <section className="px-6 lg:px-0 my-12 container mx-auto">
        <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
          <h2 className="font-semibold text-2xl mb-4">{t("content.h")}</h2>
          <Search search={search} onSetSearch={onSetSearch} holder={t("content.search-placeholder")} />
        </div>

        {/* news */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {newsData.map((item: NewsProps) => (
            <div 
              key={item.id}
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
                  <span className="text-sm text-gray-600 font-medium whitespace-nowrap text-normal overflow-hidden w-1/2">{item.region}</span>
                  <span className="text-sm text-gray-600 font-medium whitespace-nowrap text-normal overflow-hidden w-1/2 text-end">{item.tags}</span>
                </div>
              </div>
            
              <Link href={`/news/${item.id}`} className="p-2 text-sm font-medium w-full bg-[#274698] text-center rounded-lg text-white">
                Detail
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default NewsResults