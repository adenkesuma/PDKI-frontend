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
                    <div key={item.id}>
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
                                <span className="text-[14px] text-gray-100 font-medium">{item.region}</span>
                                <span className="text-[14px] text-gray-100 font-medium">{item.tags}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RegionData