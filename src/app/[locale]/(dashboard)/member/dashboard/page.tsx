"use client"
import { useState, useEffect } from "react"
import { useSession, getSession, signOut } from "next-auth/react"
import Image from "next/image"
import { MemberProps } from "@/utils/interface"
import BarcodeGenerator from "@/components/barcode-generator"
import { redirect } from "next/navigation"
import { TbLogout } from "react-icons/tb"
// import useDownloader from "react-use-downloader"

const MemberDashboard = () => {

  // user 
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/')
    },
  })

  const user = session?.user

  // const { download } = useDownloader()

  // dummy sertificate
  // const fileUrl = "/file.pdf"

  if (user?.npa_pdki !== undefined) {
    return (
      <>
        <div key={user?.npa_pdki} className="flex gap-8 mt-8 items-start">
          <aside className="flex flex-col justify-center items-center space-y-4">
            <h2 className="text-center mb-3 font-semibold">Foto Profile</h2>
            <div className="w-[350px] h-[450px]">
              <Image
                src={process.env.BASE_URL + user?.pas_foto}
                alt={user?.nama}
                width={200}
                className="w-full h-full object-cover bg-cover rounded-2xl"
                height={200}
              />

            </div>
            {/* barcode */}
            <h2 className="text-center mt-8 mb-3 text-[18px] font-semibold">Barcode User</h2>
            <div className="w-[300px] border rounded-2xl flex justify-center">
              <BarcodeGenerator code={user?.npa_pdki} />
            </div>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="hover:bg-blue-700 hover:font-semibold duration-75 font-medium flex gap-4 items-center rounded-xl p-4 bg-blue-600">
              <TbLogout
                className="text-xl text-white"
              />
              <p className="text-white">Logout</p>
            </button>
          </aside>
          <main className="bg-[#fff] rounded-2xl w-full p-8">
            <div className="flex flex-col gap-6 ">
              <h2 className="text-[24px] font-semibold">Profil Member</h2>

              <div className="flex flex-col gap-3">
                <h3 className="text-[16px] font-medium text-[#333]">Nama: {user?.nama}</h3>
                <span className="font-medium text-[16px] text-[#333]">Tempat Lahir: {user?.tempat_lahir}</span>
                <span className="font-medium text-[16px] text-[#333]">Tanggal Lahir: {`${new Date(user?.tanggal_lahir).getDate()} - ${new Date(user?.tanggal_lahir).getMonth()} - ${new Date(user?.tanggal_lahir).getFullYear()}`}</span>
                <span className="font-medium text-[16px] text-[#333]">Subspesialisasi: {user?.subspesialisasi}</span>
                <span className="font-medium text-[16px] text-[#333]">No Seri: {user?.no_seri}</span>
                <span className="font-medium text-[16px] text-[#333]">No Serkom: {user?.no_serkom}</span>
                <span className="font-medium text-[16px] text-[#333]">No Idi: {user?.no_idi}</span>
                <span className="font-medium text-[16px] text-[#333]">Npa PDKI: {user?.npa_pdki}</span>
              </div>

              <h2 className="text-[24px] font-semibold">Sertifikat</h2>

              <div className="w-[300px]">
                {user?.sertifikat ?
                  <div className="p-2 w-[300px] h-[400px] border border-gray-800 rounded-2xl flex justify-center items-center">
                    <h2 className="text-[#888] font-medium text-[18px]">Belum Memiliki Sertifikat</h2>
                  </div>
                  :
                  <>
                    <Image
                      src={process.env.BASE_URL + user?.sertifikat}
                      alt="sertifikat"
                      width={300}
                      height={400}
                    />
                    <button
                      className="text-[#fff] hover:bg-blue-600 bg-rounded-2xl py-3 px-12 font-semibold bg-[#274698] rounded-2xl mt-6 w-full"
                    // onClick={() => download(fileUrl, filename)}
                    >
                      Download Sertifikat
                    </button>
                  </>
                }
              </div>
            </div>
          </main>
        </div>
      </>
    )
  } else {
    redirect('/');
  }
}


export default MemberDashboard