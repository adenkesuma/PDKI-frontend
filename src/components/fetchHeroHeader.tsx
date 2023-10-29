"use client"

import { NewsProps } from "@/utils/interface"
import { useEffect, useState } from "react"
import Navigation from "./navigation"
import Image from "next/image"
import Link from "next/link"
import Arrow from "../../public/assets/svg/arrow-right.svg"

const FetchHeroHeader = ({ topNews }: { topNews: NewsProps[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === topNews.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000);

        return () => clearInterval(interval);
    }, [topNews]);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? topNews.length - 1 : prevIndex - 1
      );
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === topNews.length - 1 ? 0 : prevIndex + 1
      );
    };

    return (
        <>
            <header>
                <Navigation />

                <div className="relative h-52 lg:h-[80vh]">
                    {topNews.map((item: NewsProps, index) => (
                        <Link key={item.id} href={`/news/${item.id}`}>
                            <Image 
                                className={`w-full h-full bg-cover rounded-br-xl rounded-bl-xl object-cover absolute z-0 transition-opacity ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                                src={process.env.BASE_URL + item.image}
                                alt={item.title}
                                width={100}
                                height={100}
                            />
                        </Link>
                    ))}

                    <button
                      className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white px-2 py-[5px] md:px-4 md:py-[11px] rounded-full shadow-lg cursor-pointer"
                      onClick={handlePrev}
                    >
                      <Image
                        src={Arrow}
                        alt="arrow left"
                        className="w-2 sm:w-3 rotate-180"
                      />
                    </button>
                    <button
                      className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white px-2 py-[5px] md:px-4 md:py-[11px] rounded-full shadow-lg cursor-pointer"
                      onClick={handleNext}
                    >
                      <Image src={Arrow} alt="arrow right" className="w-2 sm:w-3" />
                    </button>
                </div>
                    
                <div className="flex justify-center mt-4">
                    {topNews.map((item: NewsProps, index) => (
                      <span
                        key={item.id}
                        className={`w-2 h-2 mx-1 rounded-full bg-gray-400 ${
                          index === currentIndex ? "bg-gray-700" : ""
                        }`}
                      />
                    ))}
                </div>
            </header>   
        </>
    )

}

export default FetchHeroHeader