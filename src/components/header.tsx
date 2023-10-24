"use client"
import { useEffect, useState } from "react"
import Navigation from "./navigation"
import Image from "next/image"
import Banner from "@/../public/assets/images/image-banner.jpg"
import GetConnection from "./get-connection"
import { HeaderProps } from "@/utils/interface"
import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"

const Header = ({ heading, subheading } : HeaderProps) => {
    const t = useTranslations("Header");
    const [show, setShow] = useState<boolean>(false)

    // useEffect(() => {
    //     const isPopupClosed = localStorage.getItem('isPopupClosed')

    //     if (!isPopupClosed) {
    //         setShow(true)
    //         localStorage.setItem('isPopupClosed', 'true')
    //     }
    //     // setShow(true)
    // }, [])

    const handleConnection = () => {
        setShow(!show)
    } 

    useEffect(() => {
        const isPopupClosed = localStorage.getItem('isPopupClosed');

        if (!isPopupClosed) {
            setShow(true);
            localStorage.setItem('isPopupClosed', 'true');
        }

        // Cleanup function to reset show state when navigating away
        const handleRouteChange = () => {
            setShow(false);
        };

        // Add event listener to handle route changes
        window.addEventListener('beforeunload', handleRouteChange);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('beforeunload', handleRouteChange);
        };
    }, []);

    return (
        <>
            <header className="xl:px-8">
                <Navigation />
                <figure className="relative">
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
                </figure> 
            </header> 
            {show && <GetConnection setShow={setShow} handleConnection={handleConnection}/>}
        </>
    )
}

export default Header