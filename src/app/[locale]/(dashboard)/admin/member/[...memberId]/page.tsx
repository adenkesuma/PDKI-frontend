"use client"
import BackNavigate from "@/components/back-navigate"
import BarcodeGenerator from "@/components/barcode-generator"
import { MemberProps } from "@/utils/interface"
import Image from "next/image"
import { useEffect, useState } from "react"

const MemberDetil = ({
  params: { memberId }
}: {
  params: { memberId: string }
}) => {

  const [member, setMember] = useState<MemberProps>({
    nama: "",
    username: "",
    password: "",
    nama_sertifikat: "",
    subspesialisasi: "",
    asal_institusi: "",
    pas_foto: "",
    sertifikat: "",
    no_seri: "",
    no_serkom: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    no_idi: "",
    npa_pdki: null,
    created_at: "",
    updated_at: "",
    is_ex_leader: false,
    is_leader: false
  })

  useEffect(() => {
    const fetchMember = () => {
      fetch(`${process.env.BASE_URL}/api/route/admin/member/${memberId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      })
        .then((res) => res.json())
        .then((data) => {
          setMember(data)
        })
        .catch((err) => {
          console.log("Error fetching data", err);
        })
    }
    fetchMember()
  }, [])

  return (
    <div className="w-full my-10 flex flex-col ml-[240px]">
      <BackNavigate path="member" text="User Detail" />

      <div className="flex justify-evenly gap-8 bg-[#fff] py-12 px-8 rounded-2xl mr-8">
        <div>
          <Image
            className="w-[150px] h-[200px] object-cover rounded-xl"
            alt="profile user"
            src={process.env.BASE_URL + member?.pas_foto}
            width={150}
            height={200}
          />
          <h2 className="mt-6 text-center font-semibold text-[20px] text-[#1a1a1a]">{member?.nama_sertifikat}</h2>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[18px] text-[#333] font-medium">Nama: {member?.nama}</span>
          <span className="text-[18px] text-[#333] font-medium">Npa PDKI: {member?.npa_pdki}</span>
          <span className="text-[18px] text-[#333] font-medium">Nomor Idi: {member?.no_idi}</span>
          <span className="text-[18px] text-[#333] font-medium">Nomor Seri: {member?.no_seri}</span>
          <span className="text-[18px] text-[#333] font-medium">Nomor Serkom: {member?.no_serkom}</span>
          <span className="text-[18px] text-[#333] font-medium">Tanggal Lahir: {member?.tanggal_lahir}</span>
          <span className="text-[18px] text-[#333] font-medium">Tempat Lahir: {member?.tempat_lahir}</span>
          <div className="mt-6 w-[200px]">
            <span className="text-[18px] text-[#333] font-medium">Barcode User</span>
            <BarcodeGenerator code={member?.npa_pdki} />
          </div>
        </div>

        <div className="w-[35%] h-[500px] flex flex-col items-center gap-8">
          <div className="border border-gray-300 w-full h-full rounded-xl flex justify-center items-center">
            {member.sertifikat.slice(-4) === ".pdf" ?
              <embed
                width="100%"
                height="500px"
                type="application/pdf"
                src={process.env.BASE_URL + member?.sertifikat}
                className="w-full rounded-xl border-b border-gray-200"
              /> :
              <h2 className="text-center text-[#888] font-medium text-[18px]">Belum Memiliki Sertifikat</h2>
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default MemberDetil