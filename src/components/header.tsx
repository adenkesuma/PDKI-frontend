// "use client"

// import { NewsProps } from "@/utils/interface"
import { fetchNews } from "@/lib/fetch/get-news"
import FetchHeroHeader from "./fetchHeroHeader"
// import { useEffect, useState } from "react"
// import Navigation from "./navigation"
// import Image from "next/image"
// import Banner from "@/../public/assets/images/image-banner.jpg"
// import GetConnection from "./get-connection"
// import { HeaderProps } from "@/utils/interface"
// import { useTranslations } from "next-intl"
// import { usePathname } from "next/navigation"
// import Link from "next/link"

// const Header = ({ heading, subheading } : HeaderProps) => {
    // const t = useTranslations("Header");
    // const [show, setShow] = useState<boolean>(false)

    // const handleConnection = () => {
    //     setShow(!show)
    // } 

    // useEffect(() => {
    //     const isPopupClosed = localStorage.getItem('isPopupClosed');

    //     if (!isPopupClosed) {
    //         setShow(true);
    //         localStorage.setItem('isPopupClosed', 'true');
    //     }

    //     // Cleanup function to reset show state when navigating away
    //     const handleRouteChange = () => {
    //         setShow(false);
    //     };

    //     // Add event listener to handle route changes
    //     window.addEventListener('beforeunload', handleRouteChange);

    //     // Remove the event listener when the component unmounts
    //     return () => {
    //         window.removeEventListener('beforeunload', handleRouteChange);
    //     };

    // }, []);

// const FetchNewsHeader = ({ topNews }: { topNews: NewsProps[] }) => {
//     const [currentIndex, setCurrentIndex] = useState(0)

//     return (
//         <>
//             <header className="mt-4 sm:mt-6">
//                 <Navigation />

//                 <div className="relative h-52 lg:h-[80vh]">
//                   {/* {data.map((item, index) => (
//                     <Link href={`/courses/${item.id}`} key={item.id}>
//                       <Image
//                         src={`${process.env.NEXT_PUBLIC_P2KB_API}/img/training_cover/${item?.id}.webp`}
//                         alt="thumnail pelatihan image"
//                         className={`rounded-xl h-full w-full bg-cover object-cover absolute z-0 transition-opacity duration-300 ${
//                           index === currentIndex ? "opacity-100" : "opacity-0"
//                         }`}
//                         width={2000}
//                         height={100}
//                       />
//                     </Link>
//                   ))} */}

//                     {topNews.map((item: NewsProps, index) => (
//                         <Link key={item.id} href={`/news/${item.id}`}>
//                             <Image 
//                                 className={`w-full h-[80%] bg-cover object-cover absolute z-0 transition-opacity ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
//                                 src={process.env.BASE_URL + item.image}
//                                 alt={item.title}
//                                 width={100}
//                                 height={100}
//                             />
//                         </Link>
//                     ))}

//                     <button
//                       className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white px-2 py-[5px] md:px-4 md:py-[11px] rounded-full shadow-lg cursor-pointer"
//                       onClick={handlePrev}
//                     >
//                       <Image
//                         src={Arrow}
//                         alt="arrow left"
//                         className="w-2 sm:w-3 rotate-180"
//                       />
//                     </button>
//                     <button
//                       className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white px-2 py-[5px] md:px-4 md:py-[11px] rounded-full shadow-lg cursor-pointer"
//                       onClick={handleNext}
//                     >
//                       <Image src={Arrow} alt="arrow right" className="w-2 sm:w-3" />
//                     </button>
//                 </div>
                    
//                 <div className="flex justify-center mt-4">
//                   {data.map((item, index) => (
//                     <span
//                       key={item.id}
//                       className={`w-2 h-2 mx-1 rounded-full bg-gray-400 ${
//                         index === currentIndex ? "bg-gray-700" : ""
//                       }`}
//                     />
//                   ))}
//                 </div>
//             </header>            

            {/* <header> */}
                {/* <Navigation /> */}

                {/* {topNews.map((item: NewsProps) => (
                    <Link key={item.id} href={`/news/${item.id}`}>
                        <Image 
                            className="w-full h-[80%]"
                            src={process.env.BASE_URL + item.image}
                            alt={item.title}
                            width={100}
                            height={100}
                        />
                        
                    </Link>
                ))} */}
                


                {/* <figure className="relative">
                    <Image 
                        className="w-full h-[600px] object-cover bg-cover rounded-br-xl rounded-bl-xl"
                        src={Banner}
                        alt="banner image"
                        priority={true}
                    />

                    <div className="flex flex-col items-center gap-8 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h1 className="-m-4 md:-m-8 text-stroke text-[50px] lg:text-[80px] text-center font-bold text-white">{heading}</h1>
                        <p className="text-center text-stroke text-[22px] sm:text-[30px] lg:text-[40px] font-semibold text-white">
                            {subheading}
                        </p>
                        <button 
                        className="px-6 duration-75 py-[8px] bg-white hover:bg-transparent hover:border-2 hover:border-white hover:text-white text-center md:py-[12px] md:px-8 rounded-3xl text-[#274698] font-medium text-[16px] md:text-[18px]"
                        onClick={handleConnection}
                        >
                           {t("button")}
                        </button>
                    </div>
                </figure>  */}
            {/* </header>  */}
            {/* {show && <GetConnection setShow={setShow} handleConnection={handleConnection}/>} */}
//         </>
//     )
// }


const Header = async () => {
    const getTrendingNews = await fetchNews()

    const sortedNews = await getTrendingNews.sort((a: { views: number }, b: { views: number }) => b.views - a.views)
        
    const topNews: [] = await sortedNews.slice(0, 3)
    
    return (
        <>
          <FetchHeroHeader topNews={topNews}/>
        </>
    )
}

export default Header
