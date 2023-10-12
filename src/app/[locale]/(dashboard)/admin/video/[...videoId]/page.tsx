"use client"
import VideoPlayer from "@/components/video-player"
import Link from "next/link"
import { useEffect, useState } from "react"
import { VideoProps } from "@/utils/interface"
import BackNavigate from "@/components/back-navigate"
import Image from "next/image"
import YouTube from "react-youtube"

const VideoDetail = ({
    params: { videoId }
}: {
    params: { videoId: string }
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

    useEffect(() => {
        const fetchVideo = () => {
            fetch(`${process.env.BASE_URL}/api/route/video/${videoId}`)
                .then((res) => res.json())
                .then((data) => {
                    setVideoDetail(data)

                })
                .catch((err) => {
                    console.log(err)
                })
        }

        fetchVideo()
    }, [])


    const dateFromVideoDetail = videoDetail?.published_date
    const videoDate = new Date(dateFromVideoDetail)
    const year = videoDate.getFullYear()
    const month = videoDate.getMonth()
    const date = videoDate.getDate()

    const handleOnReady = (event: { target: { pauseVideo: () => void } }) => {
        event.target.pauseVideo()
    }

    let regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    let match = videoDetail.video_url.match(regExp);
    let url = ""
    if (match && match[2].length == 11) {
        url = match[2]
    }

    const opts = {
        height: "500",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }


    return (
        <div className="w-full my-10 flex flex-col ml-[240px]">
            <BackNavigate path="/video" text={""} />

            <div className="mr-8 px-4 py-4 rounded-2xl bg-[#fff]">
                <div className="px-8 xl:px-12 container mx-auto mt-8">
                    <div>
                        <h2 className="mb-2 text-[24px] lg:text-[30px] font-semibold text-[!1a1a1a]">{videoDetail?.title}</h2>
                        <p className="mt-2 text-[14px] md:text-[16px] xl:text-[18px] font-medium">{videoDetail?.description}</p>
                        <p className="text-[14px] md:text-[16px] font-medium mt-2">Published : {`${date} - ${month} - ${year}`}</p>

                        {videoDetail?.online == true ?
                            <YouTube
                                videoId={url}
                                opts={opts}
                                onReady={handleOnReady}
                            /> :
                            <video width="100%" height="100%" muted controls>
                                <source src={process.env.BASE_URL + videoDetail.video_url} type="video/mp4" />
                                <source src={process.env.BASE_URL + videoDetail.video_url} type="video/ogg" />
                            </video>
                        }

                        <div className="px-4 lg:px-12 mt-8 mb-8">
                            <p className="text-[#1a1a1a] font-medium text-[14px] md:text-[16px]">
                                {videoDetail?.instructor}
                            </p>
                            <div className="flex items-center gap-6 mt-4">
                                <p className="border-b-2 border-[#555] w-[100px]">{" "}</p>
                                <p className="text-[#1a1a1a] font-medium text-[14px] md:text-[16px]"><i>{videoDetail?.tags}</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoDetail