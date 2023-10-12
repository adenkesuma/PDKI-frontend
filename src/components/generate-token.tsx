"use client"
import { useEffect, useState } from "react"
import { options, fetchData } from '../lib/fetch/dashboard-fetch'
import { VideoProps } from "@/utils/interface"
import { getSession } from "next-auth/react"
import { get } from "http"

const GenerateToken = ({
    _id
}: VideoProps) => {

    const [preview, setPreview] = useState('')
    const [buttonText, setButtonText] = useState('Generate Token')
    const [buttonColor, setButtonColor] = useState('bg-[#fff] text-blue-600')
    const [videoData, setVideoData] = useState({
        title: "",
        description: "",
        duration: "",
        thumbnail_ulr: "",
        harga: "",
        is_private: "",
        published_date: "",
        categories: "",
        tags: "",
        instructor: "",
        online: "",
        video_url: "",
        file: "",
        private_token: ""
    })

    useEffect(() => {
        const fetchVideoData = async () => {
            const getVideoData = await fetchData(`${process.env.BASE_URL}/api/route/video/${_id}`, options)
            setVideoData({
                title: getVideoData.title,
                duration: getVideoData.duration,
                description: getVideoData.description,
                published_date: getVideoData.published_date,
                video_url: getVideoData.video_url,
                tags: getVideoData.tags,
                categories: getVideoData.categories,
                online: getVideoData.online,
                instructor: getVideoData.instructor,
                file: "",
                thumbnail_ulr: getVideoData.thumbnail_ulr,
                harga: getVideoData.harga,
                is_private: getVideoData.is_private,
                private_token: ""
            })
        }

        fetchVideoData()
    }, [])


    const generateToken = async () => {
        const rand = () => {
            return Math.random().toString(36).substring(2);
        };

        const token = () => {
            return rand() + rand();
        };

        const video_token = token()

        navigator.clipboard.writeText(video_token)
        setButtonText('Copied To Clipboard')
        setButtonColor('bg-green-600 text-white hover:bg-green-600')
        setTimeout(() => {
            setButtonText('Generate Token')
            setButtonColor('bg-[#fff] text-blue-600')
        }, 3000)

        const formData = new FormData()
        const session = await getSession()
        formData.append("adminUsername", session?.user.username)
        formData.append("file", videoData.file)
        formData.append("title", videoData.title)
        formData.append("description", videoData.description)
        formData.append("published_date", videoData.published_date)
        formData.append("harga", videoData.harga)
        formData.append("categories", videoData.categories)
        formData.append("thumbnail_ulr", videoData.thumbnail_ulr)
        formData.append("is_private", videoData.is_private)
        formData.append("tags", videoData.tags)
        formData.append("instructor", videoData.instructor)
        formData.append("online", videoData.online)
        formData.append("video_url", videoData.video_url)
        formData.append("private_token", video_token)

        try {
            await fetch(`${process.env.BASE_URL}/api/route/admin/video/${_id}`, {
                method: "PUT",
                body: formData,
                credentials: "include"
            })
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <button
            type="submit"
            className={`border border-solid-black border-1 ${buttonColor} rounded-lg p-2 hover:bg-blue-600 hover:text-[#fff] font-semibold`}
            onClick={generateToken}
        >
            {buttonText}
        </button>
    )
}

export default GenerateToken