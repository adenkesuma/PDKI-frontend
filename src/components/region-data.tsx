"use client"
import Image from "next/image"
import Link from "next/link"
import { TbChevronRight, TbArrowUpRight } from "react-icons/tb"
import { FC, useState, useEffect } from "react"
import { NewsProps } from "@/utils/interface"
import { RegionProps } from "@/utils/interface"

const RegionData: FC<RegionProps> = ({ selectedRegion }) => {
    const [newsList, setNewsList] = useState<NewsProps[]>([])

    useEffect(() => {
        fetch(`${process.env.BASE_URL}/api/route/news?region=${selectedRegion}`, {
            cache: 'no-store',
            mode: 'cors'
        })
            .then((res) => res.json())
            .then((data) => setNewsList(data))
            .catch((err) => {
                console.log(err)
            })
    }, [selectedRegion])

    return (
        <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {newsList.map((item: NewsProps) => (
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
        </div>
    )
}

export default RegionData