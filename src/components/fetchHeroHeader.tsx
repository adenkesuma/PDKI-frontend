"use client"

import { NewsProps } from "@/utils/interface"
import { useEffect, useState } from "react"
import Navigation from "./navigation"
import Image from "next/image"
import Banner from "@/../public/assets/images/banner.png";
import Link from "next/link"
// import Link from "next/link"
// import Arrow from "../../public/assets/svg/arrow-right.svg"

const FetchHeroHeader = ({ topNews }: { topNews: NewsProps[] }) => {
    // const [currentIndex, setCurrentIndex] = useState(0)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setCurrentIndex((prevIndex) =>
    //         prevIndex === topNews.length - 1 ? 0 : prevIndex + 1
    //       );
    //     }, 3000);

    //     return () => clearInterval(interval);
    // }, [topNews]);

    // const handlePrev = () => {
    //   setCurrentIndex((prevIndex) =>
    //     prevIndex === 0 ? topNews.length - 1 : prevIndex - 1
    //   );
    // };

    // const handleNext = () => {
    //   setCurrentIndex((prevIndex) =>
    //     prevIndex === topNews.length - 1 ? 0 : prevIndex + 1
    //   );
    // };

    return (
        <>
            <header>
                <Navigation />

                <div className="relative h-screen lg:h-[80vh]">
                  <Image 
                      className={`w-full h-full bg-cover bg-center object-cover absolute z-0 transition-opacity`}
                      src={Banner}
                      alt={'image banner'}
                      quality={100}
                      width={1000}
                      height={1000}
                  />
                  <div className="bg-white absolute top-1/3 left-1/2 -translate-x-1/2 p-6 flex flex-col items-center gap-3">
                    <h1 className="text-xl lg:text-3xl text-center font-bold text-[#274698]">
                      Dear friends, colleagues, and all Family medicine enthusiasts, The Family Medicine Forum 2025 is coming.
                    </h1>
                    <Link href={'/'} className="py-2 px-10 bg-[#274698] text-white font-semibold">
                      Registration
                    </Link>
                  </div>
                </div>
            </header>   
        </>
    )

}

export default FetchHeroHeader