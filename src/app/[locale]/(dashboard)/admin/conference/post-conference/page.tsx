"use client"
import { useState } from "react"
import { TbUpload } from "react-icons/tb"
import { getSession, useSession } from "next-auth/react"
import { redirect, useRouter } from "next/navigation"
import Image from "next/image"
import BackNavigate from "@/components/back-navigate"

const PostConference = () => {
    const [preview, setPreview] = useState('')
    const [conferenceData, setConferenceData] = useState({
        title: "",
        description: "",
        start_date: "",
        end_date: "",
        region: "",
        location: "",
        organizer: "",
        website_url: "",
        registration_required: "false",
        speakers: "",
        topic: '',
        file: ""
    })
    const router = useRouter()

    // session 
    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/")
        }
    })

    const addMember = async (event: any) => {
        event.preventDefault();
        const session = await getSession()
        const formData = new FormData()
        formData.append("adminUsername", session?.user.username)
        formData.append("file", conferenceData.file)
        formData.append("title", conferenceData.title)
        formData.append("description", conferenceData.description)
        formData.append("start_date", conferenceData.start_date)
        formData.append("end_date", conferenceData.end_date)
        formData.append("location", conferenceData.location)
        formData.append("organizer", conferenceData.organizer)
        formData.append("website_url", conferenceData.website_url)
        formData.append("registration_required", conferenceData.registration_required)
        formData.append("region", conferenceData.region)
        formData.append("speakers", conferenceData.speakers)
        formData.append("topic", conferenceData.topic)
        try {
            await fetch(`${process.env.BASE_URL}/api/route/admin/conference`, {
                method: "POST",
                body: formData,
                credentials: "include"
            })
        } catch (err) {
            console.log(err);
        }
    }

    const loadImage = (event: any) => {
        const image = event.target.files[0]
        setPreview(URL.createObjectURL(image))
        setConferenceData(prevState => ({
            ...prevState,
            file: image
        }))
    }

    const deleteImage = () => {
        setPreview("")
        setConferenceData(prevState => ({
            ...prevState,
            file: ""
        }))
    }

    const handleChange = (event: any) => {
        const { name, value } = event.target
        setConferenceData(prevState => ({
            ...prevState,
            [name]: value
        }))

    }

    const redirectBack = () => {
        router.back()
    }

    if (status === "authenticated") {
        return (
            <div className="w-full my-10 flex flex-col ml-[240px]">
                {/* arrow back */}
                <BackNavigate path={"conference"} text={"Upload Konferensi Baru"} />

                <form
                    className="flex flex-col items-center gap-8 mx-auto w-[80%]"
                    onSubmit={addMember}
                >
                    <div className="w-full">
                        <label htmlFor="title" className="font-medium">Judul Konferensi</label>
                        <input
                            id="title"
                            name="title"
                            value={conferenceData.title}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Judul..."
                            className="w-full rounded-2xl py-3 px-4 mt-2 border border-[#d4d4d4]"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="description" className="font-medium">Deskripsi Konferensi</label>
                        <input
                            id="description"
                            name="description"
                            value={conferenceData.description}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Deskripsi..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="image" className="font-medium">Foto Terkait Konferensi</label>
                        <div className="relative flex justify-center w-full flex-col items-center gap-8 space-x-24 border border-[#d4d4d4] bg-[#fff] rounded-2xl p-8 mt-2">
                            {preview ? (
                                <figure className="image">
                                    <Image src={preview} alt="preview" width={200} height={200} />
                                </figure>) : (
                                <div className="flex flex-col justify-center items-center gap-4">
                                    <TbUpload className="text-[50px] text-[#888]" />
                                    <p className="text-center text-[14px] font-medium text-[#888]">Klik button untuk memasukan gambar</p>
                                </div>
                            )}
                            <input
                                name="file"
                                onChange={loadImage}
                                type="file"
                                accept=".jpg,.jpeg,.png"
                                id="image"
                                className="file:bg-[#274698] file:px-4 file:py-2 file:rounded-xl file:border-none file:text-[#fff] file:font-medium file:text-[#14px] file:mr-6 hover:file:bg-blue-600"
                            />
                            {preview == "" && conferenceData.file == "" ?
                                ("")
                                :
                                <button
                                    className="absolute top-4 -left-20 border-solid border-2 rounded-xl bg-white font-medium px-4 py-2 hover:bg-gray-300"
                                    onClick={deleteImage}
                                >
                                    Cancel
                                </button>
                            }
                        </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="start_date" className="font-medium">Tanggal Mulai Konferensi</label>
                        <input
                            id="start_date"
                            name="start_date"
                            value={conferenceData.start_date}
                            onChange={handleChange}
                            type="date"
                            placeholder="Masukan Tanggal Mulai Konferensi..."
                            className="mt-2 w-full rounded-2xl py-3 px-4 border border-[#d4d4d4]"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="end_date" className="font-medium">Tanggal Selesai Konferensi</label>
                        <input
                            id="end_date"
                            name="end_date"
                            value={conferenceData.end_date}
                            onChange={handleChange}
                            type="date"
                            placeholder="Masukan Tanggal Selesai Konferensi..."
                            className="w-full mt-2 rounded-2xl py-3 px-4 border border-[#d4d4d4]"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="region" className="font-medium">Region Konferensi</label>
                        <input
                            id="region"
                            type="text"
                            name="region"
                            value={conferenceData.region}
                            onChange={handleChange}
                            placeholder="Masukan Region Konferensi..."
                            className="mt-2 w-full rounded-2xl py-3 px-4 border border-[#d4d4d4]"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="location" className="font-medium">Lokasi Konferensi</label>
                        <input
                            id="location"
                            name="location"
                            value={conferenceData.location}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Lokasi Konferensi..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="organizer" className="font-medium">Penyelenggara Konferensi</label>
                        <input
                            id="organizer"
                            name="organizer"
                            value={conferenceData.organizer}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Penyelenggara Konferensi..."
                            className="w-full mt-2 rounded-2xl py-3 px-4 border border-[#d4d4d4]"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="website_url" className="font-medium">Link Website Konferensi</label>
                        <input
                            id="website_url"
                            name="website_url"
                            value={conferenceData.website_url}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan URL Website Konferensi..."
                            className="w-full mt-2 rounded-2xl py-3 px-4 border border-[#d4d4d4]"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="registration_required" className="font-medium">Registrasi Konferensi</label>
                        <div className="flex flex-col">
                            <div className="flex gap-8">
                                <input
                                    type="radio"
                                    name="registration_required"
                                    value="true"
                                    id="true"
                                    checked={conferenceData.registration_required === "true"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="true" className="text-[14px] font-medium text-gray-800">Perlu Registrasi</label>
                            </div>
                            <div className="flex gap-8">
                                <input
                                    type="radio"
                                    name="registration_required"
                                    value="false"
                                    id="false"
                                    checked={conferenceData.registration_required === "false"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="false" className="text-[14px] font-medium text-gray-800">Tidak Perlu Registrasi</label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="speakers" className="font-medium">Pembicara</label>
                        <input
                            id="speakers"
                            name="speakers"
                            value={conferenceData.speakers}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Pembicara Konferensi..."
                            className="mt-2 w-full rounded-2xl py-3 px-4 border border-[#d4d4d4]"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="topic" className="font-medium">Topik Konferensi</label>
                        <input
                            id="topic"
                            name="topic"
                            value={conferenceData.topic}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Pembicara Konferensi..."
                            className="w-full rounded-2xl py-3 px-4 mt-2 border border-[#d4d4d4]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-[#fff] hover:bg-blue-600 bg-rounded-3xl py-3 px-12 font-semibold bg-[#274698] rounded-2xl"
                        onClick={redirectBack}
                    >
                        Upload Konferensi
                    </button>
                </form >
            </div>
        )
    }
}

export default PostConference