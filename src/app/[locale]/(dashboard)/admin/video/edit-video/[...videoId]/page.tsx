"use client"
import { useEffect, useState } from "react"
import { getSession, useSession } from "next-auth/react"
import { redirect, useRouter } from "next/navigation"
import BackNavigate from "@/components/back-navigate"
import { options, fetchData } from "@/lib/fetch/dashboard-fetch"

const EditVideo = ({
    params: { videoId }
}:
    {
        params: { videoId: string }
    }) => {

    const [preview, setPreview] = useState('')
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
        file: ""
    })

    useEffect(() => {
        const fetchVideoData = async () => {
            const getVideoData = await fetchData(`${process.env.BASE_URL}/api/route/video/${videoId}`, options)
            setVideoData({
                title: getVideoData.title,
                duration: getVideoData.duration,
                description: getVideoData.description,
                published_date: getVideoData.published_date,
                video_url: getVideoData.video_url,
                tags: getVideoData.tags,
                categories: getVideoData.categories,
                online: "true",
                instructor: getVideoData.instructor,
                file: "",
                thumbnail_ulr: getVideoData.thumbnail_ulr,
                harga: getVideoData.harga,
                is_private: "false"
            })
        }

        fetchVideoData()
    }, [])


    const router = useRouter()

    // session 
    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/")
        }
    })

    const updateVideo = async (event: any) => {
        event.preventDefault();
        const session = await getSession()
        const formData = new FormData()
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
        try {
            await fetch(`${process.env.BASE_URL}/api/route/admin/video/${videoId}`, {
                method: "PUT",
                body: formData,
                credentials: "include"
            })
        } catch (err) {
            console.log(err);
        }
    }

    const loadVideo = (event: any) => {
        const video = event.target.files[0]
        setVideoData(prevState => ({
            ...prevState,
            file: video
        }))
    }

    const handleChange = (event: any) => {
        const { name, value } = event.target
        setVideoData(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(videoData.online);
    }

    const redirectBack = () => {
        router.back()
    }

    if (status === "authenticated") {
        return (
            <div className="w-full my-10 flex flex-col ml-[240px]">
                {/* arrow back */}
                <BackNavigate path={"video"} text={"Upload Video Baru"} />

                <form
                    className="flex flex-col items-center gap-8 mx-auto w-[80%]"
                    onSubmit={updateVideo}
                >
                    <div className="w-full">
                        <label htmlFor="title" className="font-medium">Judul Video</label>
                        <input
                            id="title"
                            name="title"
                            value={videoData.title}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Judul Video..."
                            className="w-full rounded-2xl py-3 px-4 mt-2 border border-[#d4d4d4]"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="description" className="font-medium">Deskripsi Video</label>
                        <input
                            id="description"
                            name="description"
                            value={videoData.description}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Deskripsi Video..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="published_date" className="font-medium">Tanggal Publikasi Video</label>
                        <input
                            id="published_date"
                            name="published_date"
                            value={videoData.published_date}
                            onChange={handleChange}
                            type="date"
                            placeholder="Masukan Publikasi Video..."
                            className="mt-2 w-full rounded-2xl py-3 px-4 border border-[#d4d4d4]"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="tags" className="font-medium">Tags Video</label>
                        <input
                            id="tags"
                            type="text"
                            name="tags"
                            value={videoData.tags}
                            onChange={handleChange}
                            placeholder="Masukan tags Video..."
                            className="mt-2 w-full rounded-2xl py-3 px-4 border border-[#d4d4d4]"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="categories" className="font-medium">Kategori Video</label>
                        <input
                            id="categories"
                            name="categories"
                            value={videoData.categories}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Kategori Video..."
                            className="w-full mt-2 rounded-2xl py-3 px-4 border border-[#d4d4d4]"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="thumbnail_ulr" className="font-medium">Link Thumbnail Video</label>
                        <input
                            id="thumbnail_ulr"
                            name="thumbnail_ulr"
                            value={videoData.thumbnail_ulr}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan URL Thumbnail Video..."
                            className="w-full mt-2 rounded-2xl py-3 px-4 border border-[#d4d4d4]"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="is_private" className="font-medium">Privasi Video</label>
                        <div className="flex flex-col">
                            <div className="flex gap-8">
                                <input
                                    type="radio"
                                    name="is_private"
                                    value="true"
                                    id="true"
                                    checked={videoData.is_private === "true"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="true" className="text-[14px] font-medium text-gray-800">Private Video</label>
                            </div>
                            <div className="flex gap-8">
                                <input
                                    type="radio"
                                    name="is_private"
                                    value="false"
                                    id="false"
                                    checked={videoData.is_private === "false"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="false" className="text-[14px] font-medium text-gray-800">Public Video</label>
                            </div>
                        </div>
                    </div>
                    {
                        videoData.is_private === "true" ?
                            <div className="w-full">
                                <label htmlFor="harga" className="font-medium">Harga Video</label>
                                <input
                                    id="harga"
                                    name="harga"
                                    value={videoData.harga}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Masukan Harga Video..."
                                    className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2"
                                />
                            </div>
                            :
                            ""
                    }
                    <div className="w-full">
                        <label htmlFor="instructor" className="font-medium">Pembicara</label>
                        <input
                            id="instructor"
                            name="instructor"
                            value={videoData.instructor}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Pembicara..."
                            className="mt-2 w-full rounded-2xl py-3 px-4 border border-[#d4d4d4]"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="online" className="font-medium">Jenis Video</label>
                        <div className="flex flex-col">
                            <div className="flex gap-8">
                                <input
                                    type="radio"
                                    name="online"
                                    value="true"
                                    id="youtube"
                                    checked={videoData.online === "true"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="youtube" className="text-[14px] font-medium text-gray-800">Youtube</label>
                            </div>
                            <div className="flex gap-8">
                                <input
                                    type="radio"
                                    name="online"
                                    value="false"
                                    id="local"
                                    checked={videoData.online === "false"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="local" className="text-[14px] font-medium text-gray-800">Video Lokal</label>
                            </div>
                        </div>
                    </div>
                    {
                        videoData.online === "true" ?
                            <div className="w-full">
                                <label htmlFor="video_url" className="font-medium">Link URL Youtube</label>
                                <input
                                    id="video_url"
                                    name="video_url"
                                    value={videoData.video_url}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Masukan URL Youtube..."
                                    className="mt-2 w-full rounded-2xl py-3 px-4 border border-[#d4d4d4]"
                                />
                            </div>
                            :
                            <div className="w-full">
                                <label htmlFor="image" className="font-medium">Masukkan Video</label>
                                <div className="relative flex justify-center w-full flex-col items-center gap-8 space-x-24 border border-[#d4d4d4] bg-[#fff] rounded-2xl p-8 mt-2">
                                    <input
                                        name="file"
                                        onChange={loadVideo}
                                        type="file"
                                        accept=".mp4,.avi,.mkv,.mov,.m4a"
                                        id="image"
                                        className="file:bg-[#274698] file:px-4 file:py-2 file:rounded-xl file:border-none file:text-[#fff] file:font-medium file:text-[#14px] file:mr-6 hover:file:bg-blue-600"
                                    />
                                </div>
                            </div>
                    }
                    <button
                        type="submit"
                        className="text-[#fff] hover:bg-blue-600 bg-rounded-3xl py-3 px-12 font-semibold bg-[#274698] rounded-2xl"
                        onClick={redirectBack}
                    >
                        Update Video
                    </button>
                </form >
            </div>
        )
    }
}

export default EditVideo