"use client"
import { useState, useEffect, useCallback, ChangeEvent, FormEvent } from "react"
import { TbUpload } from "react-icons/tb"
import { getSession, useSession } from "next-auth/react"
import { redirect, useRouter } from "next/navigation"
import Image from "next/image"
import BackNavigate from "@/components/back-navigate"
import { fetchData, options } from "@/lib/fetch/dashboard-fetch"

const EditMember = ({
    params: { memberId }
}: {
    params: { memberId: string }
}) => {
    const [search, setSearch] = useState<string>('')
    const [preview, setPreview] = useState('')
    const [memberData, setMemberData] = useState({
        nama: "",
        username: "",
        password: "",
        nama_sertifikat: "",
        subspesialisasi: "",
        asal_institusi: "",
        no_seri: "",
        no_serkom: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        no_idi: "",
        npa_pdki: "",
        imageFile: "",
        pdfFile: "",
        sertifikat: "",
        pas_foto: "",
    })

    useEffect(() => {
        const fetchDataMember = async () => {
            const getMemberData = await fetchData(
                `${process.env.BASE_URL}/api/route/admin/member/${memberId}`,
                options,
            )
            setMemberData({
                nama: getMemberData.nama,
                username: getMemberData.username,
                password: "",
                nama_sertifikat: getMemberData.nama_sertifikat,
                subspesialisasi: getMemberData.subspesialisasi,
                asal_institusi: getMemberData.asal_institusi,
                no_seri: getMemberData.no_seri,
                no_serkom: getMemberData.no_serkom,
                tempat_lahir: getMemberData.tempat_lahir,
                tanggal_lahir: getMemberData.tanggal_lahir,
                no_idi: getMemberData.no_idi,
                npa_pdki: getMemberData.npa_pdki,
                imageFile: "",
                pdfFile: "",
                sertifikat: getMemberData.sertifikat,
                pas_foto: getMemberData.pas_foto
            })

        }

        fetchDataMember()
    }, [])

    // session 
    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/")
        },

    })
    const router = useRouter()

    const updatedMember = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const session = await getSession()
        const formData = new FormData()
        if (memberData.imageFile !== "") {
            formData.append("imageFile", memberData.imageFile)
        }
        if (memberData.pdfFile !== "") {
            formData.append("pdfFile", memberData.pdfFile)
        }
        formData.append("adminUsername", session?.user.username)
        formData.append("nama", memberData.nama)
        formData.append("nama_sertifikat", memberData.nama_sertifikat)
        formData.append("username", memberData.username)
        formData.append("password", memberData.password)
        formData.append("asal_institusi", memberData.asal_institusi)
        formData.append("subspesialisasi", memberData.subspesialisasi)
        formData.append("tanggal_lahir", memberData.tanggal_lahir)
        formData.append("tempat_lahir", memberData.tempat_lahir)
        formData.append("no_seri", memberData.no_seri)
        formData.append("no_idi", memberData.no_idi)
        formData.append("no_serkom", memberData.no_serkom)
        formData.append("npa_pdki", memberData.npa_pdki)
        formData.append("sertifikat", memberData.sertifikat)
        formData.append("pas_foto", memberData.pas_foto)

        // post data
        try {
            await fetch(`${process.env.BASE_URL}/api/route/admin/member/${memberId}`, {
                method: "PUT",
                body: formData,
                credentials: "include"
            })

            if (formData !== null) {
                router.push("/admin/member")
            }
        } catch (err) {
            console.log(err);
        }
    }

    const loadImage = (event: any) => {
        const image = event.target.files[0]
        setPreview(URL?.createObjectURL(image))
        setMemberData(prevState => ({
            ...prevState,
            imageFile: image
        }))
    }

    const loadPdf = (event: any) => {
        const pdf = event.target.files[0]
        setMemberData(prevState => ({
            ...prevState,
            pdfFile: pdf
        }))
    }

    const deleteImage = () => {
        setPreview("")
        setMemberData(prevState => ({
            ...prevState,
            imageFile: ""
        }))
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setMemberData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const onSetSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }, [])

    if (status === "authenticated") {
        return (
            <div className="w-full my-10 flex flex-col ml-[240px]">
                {/* arrow back  */}
                <BackNavigate path={"member"} text={"Ubah Data Member"} />

                {/* form */}
                <form
                    className="flex flex-col items-center gap-8 mx-auto w-[80%]"
                    onSubmit={updatedMember}
                >
                    <div className="w-full">
                        <label htmlFor="nama" className="font-medium">Nama Lengkap</label>
                        <input
                            id="nama"
                            name="nama"
                            value={memberData.nama}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Nama Member..."
                            className="mt-2 w-full rounded-2xl py-3 px-4  border border-[#d4d4d4] outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="username" className="font-medium">Username</label>
                        <input
                            id="username"
                            name="username"
                            value={memberData.username}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Username..."
                            className="mt-2 w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="password" className="font-medium">Password</label>
                        <input
                            id="password"
                            name="password"
                            value={memberData.password}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Password..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2 outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="nama_sertifikat" className="font-medium">Nama Sertifikat</label>
                        <input
                            id="nama_sertifikat"
                            name="nama_sertifikat"
                            value={memberData.nama_sertifikat}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Nama Sertifikat Member..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2 outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="subspesialisasi" className="font-medium">Subspesialisasi</label>
                        <div className="flex flex-col gap-2 w-full mt-2">
                            <div className="flex gap-8">
                                <input
                                    type="radio"
                                    name="subspesialisasi"
                                    value="Community Oriented Primary Care (COPC)"
                                    id="copc"
                                    checked={memberData.subspesialisasi === "Community Oriented Primary Care (COPC)"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="copc" className="font-medium">COPC</label>
                            </div>
                            <div className="flex gap-8">
                                <input
                                    type="radio"
                                    name="subspesialisasi"
                                    value="Family Oriented Medical Care (FOMC)"
                                    id="fomc"
                                    checked={memberData.subspesialisasi === "Family Oriented Medical Care (FOMC)"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="fomc" className="font-medium">FOMC</label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="asal_institusi" className="font-medium">Asal Institusi</label>
                        <input
                            id="asal_institusi"
                            name="asal_institusi"
                            value={memberData.asal_institusi}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Asal Institusi..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2 outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="image" className="font-medium">Pas Foto</label>
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
                            {preview == "" && memberData.imageFile == "" ?
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
                        <label htmlFor="image" className="font-medium">Sertifikat</label>
                        <div className="relative flex justify-center w-full flex-col items-center gap-8 space-x-24 border border-[#d4d4d4] bg-[#fff] rounded-2xl p-8 mt-2">
                            <input
                                name="file"
                                onChange={loadPdf}
                                type="file"
                                accept=".pdf"
                                id="pdf"
                                className="file:bg-[#274698] file:px-4 file:py-2 file:rounded-xl file:border-none file:text-[#fff] file:font-medium file:text-[#14px] file:mr-6 hover:file:bg-blue-600"
                            />
                            {memberData.pdfFile == "" ?
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
                        <label htmlFor="no_seri" className="font-medium">Nomor Seri</label>
                        <input
                            id="no_seri"
                            name="no_seri"
                            value={memberData.no_seri}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Nomor Seri..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2 outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="no_serkom" className="font-medium">Nomor Serkom</label>
                        <input
                            id="no_serkom"
                            name="no_serkom"
                            value={memberData.no_serkom}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Nomor Serkom..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2 outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="tempat_lahir" className="font-medium">Kota Kelahiran</label>
                        <input
                            id="tempat_lahir"
                            name="tempat_lahir"
                            value={memberData.tempat_lahir}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Tempat Lahir..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2 outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="tanggal_lahir" className="font-medium">Tanggal Lahir</label>
                        <input
                            name="tanggal_lahir"
                            value={memberData.tanggal_lahir}
                            onChange={handleChange}
                            type="date"
                            placeholder="Masukan Tanggal Lahir..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2 outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="no_idi" className="font-medium">Nomor IDI</label>
                        <input
                            id="no_idi"
                            name="no_idi"
                            value={memberData.no_idi}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Nomor IDI..."
                            className="w-full rounded-2xl py-3 px-4 mt-2 border border-[#d4d4d4] outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="npa_pdki" className="font-medium">NPA PDKI</label>
                        <input
                            id="npa_pdki"
                            name="npa_pdki"
                            value={memberData.npa_pdki}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan NPA PDKI..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2 outline-none" />
                    </div>
                    <button
                        type="submit"
                        className="text-[#fff] hover:bg-blue-600 bg-rounded-2xl py-3 px-12 font-semibold bg-[#274698] rounded-2xl"
                    >
                        Update Member
                    </button>
                </form >
            </div>
        )
    }

}

export default EditMember