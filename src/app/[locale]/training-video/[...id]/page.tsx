'use client'
import { fetchVideoDetail } from "@/lib/fetch/get-video-detail"
import VideoPlayer from "@/components/video-player"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TrendingVideo from "@/components/trending-video"
import Link from "next/link"
import { VscArrowLeft } from "react-icons/vsc"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"
import { VideoProps } from "@/utils/interface"

const TrainingVideoId = ({
    params: { id }
}: {
    params: { id: string }
}) => {

    const [videoDetail, setVideoDetail] = useState<VideoProps>({
        _id: 0,
        title: "",
        description: "",
        duration: "",
        thumbnail_ulr: "",
        harga: 0,
        is_private: 0,
        published_date: "",
        categories: "",
        tags: "",
        instructor: "",
        online: true,
        video_url: "",
        views: 0,
        private_token: ""
    })

    const [videoToken, setVideoToken] = useState('')
    useEffect(() => {
        const fetchVideo = async () => {
            const res = await fetch(`${process.env.BASE_URL}/api/route/video/${id}`)
            const data = await res.json()
            setVideoDetail(data)
            if (typeof window !== "undefined") {
                const token = localStorage.getItem('x-video-token')
                setVideoToken(token!)
            }
        }
        fetchVideo()
    }, [])
    if (videoDetail.is_private) {
        if (videoToken !== videoDetail.private_token) {
            redirect('/training-video')
        }
    }


    return (
        <div>
            <Navbar />
            <div className="px-8 container xl:px-12 mx-auto">
                <Link href="/training-video" className="flex gap-6 flex-row items-start">
                    <VscArrowLeft className="text-[24px] font-semibold" />
                    <p className="font-medium text-[16px]">Kembali</p>
                </Link>
            </div>
            <div className="px-8 container mx-auto mt-8 mb-8 xl:px-12 flex flex-col lg:flex-row justify-between items-start gap-12">
                <div className="w-full lg:w-[60%]">
                    <VideoPlayer
                        video_url={videoDetail.video_url ? videoDetail?.video_url : ""}
                        thumbnail_ulr={videoDetail?.thumbnail_ulr}
                        online={videoDetail?.online}
                    />
                    <h2 className="font-semibold text-xl lg:text-2xl mt-4 mb-6">{videoDetail?.title}</h2>
                    <div className="mt-6 flex justify-between items-center gap-8 mx-12 pb-6 border-b border-gray-300">
                        <p className="text-sm text-gray-600 font-semibold">{videoDetail?.instructor}</p>
                    </div>
                    <p className="mx-12 text-sm my-6">{videoDetail?.description}</p>
                </div>
                <div className="w-full lg:w-[40%]">
                    <TrendingVideo />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TrainingVideoId