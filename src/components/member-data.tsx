"use client"
import { useState } from "react"
import Image from "next/image"
import { MemberProps } from "@/utils/interface"
import { TbDots, TbPlus } from "react-icons/tb"
import PopupDetail from "./popup-detail"
import { useRouter } from "next/navigation"


const MemberData = ({ member }: any) => {
    const [selectedMemberClick, setSelectedMemberClick] = useState<string | null>(null)
    const [showDetail, setShowDetail] = useState<boolean>(false)
    const router = useRouter()

    const handleShowDetail = (id: string) => {
        setShowDetail(!showDetail)
        setSelectedMemberClick((prevId) => (prevId === id ? null : id))
    }

    return (
        <div>
            <div className="flex justify-end gap-4">
                <button
                    onClick={() => router.push('/admin/member/post-member')}
                    className="flex items-center gap-2 bg-transparent border-2 border-[#274698] rounded-2xl px-4 py-2 text-[#274698] font-medium text-[16px] hover:bg-[#274698] hover:text-[#fff] duration-75"
                >
                    <TbPlus className="text-lg" />
                    Tambah Member
                </button>
            </div>

            <ul className="mt-6 flex justify-between px-6 items-center mb-6 font-semibold text-gray-800">
                <li className="w-[4%]">No</li>
                <li className="w-[8%] pl-3">Foto</li>
                <li className="w-[53%]">Nama</li>
                <li className="w-[10%]">No Idi</li>
                <li className="w-[13%]">Npa PDKI</li>
                <li className="w-[10%]">No Seri</li>
                <li className="w-[2%]"></li>
            </ul>

            <div className="w-full">
                {member?.map((item: MemberProps, idx: number) => (
                    <ul key={item?.npa_pdki} className="p-6 mb-6 flex justify-between items-center font-medium text-gray-800 bg-[#fff] rounded-2xl shadow-md shadow-gray-200">
                        <li className="w-[4%]">{idx + 1}</li>
                        {/* image */}
                        <li className="w-[8%] flex justify-start">
                            <Image
                                src={process.env.BASE_URL + item?.pas_foto}
                                alt="foto member"
                                width={100}
                                height={100}
                                className="h-[50px] object-cover bg-cover w-[50px] rounded-xl"
                            />
                        </li>
                        {/* another data */}
                        <li className="w-[53%]">{item?.nama}</li>
                        <li className="w-[10%]">{item?.no_idi}</li>
                        <li className="w-[13%]">{item?.npa_pdki}</li>
                        <li className="w-[10%]">{item?.no_seri}</li>
                        <li className="w-[2%] relative">
                            <button className="cursor-pointer" onClick={() => handleShowDetail(item?.npa_pdki)}>
                                <TbDots />
                                {selectedMemberClick === item?.npa_pdki && <PopupDetail npa_pdki={item?.npa_pdki} />}
                            </button>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default MemberData