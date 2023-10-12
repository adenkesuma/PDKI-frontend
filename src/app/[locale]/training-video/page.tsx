'use client'
import { Metadata } from "next"
import Header from "@/components/header.tsx"
import Navbar from "@/components/navbar.tsx"
import Footer from "@/components/footer.tsx"
import Image from "next/image"
import Link from "next/link"
import { fetchVideo } from "@/lib/fetch/get-video.tsx"
import { TbArrowUpRight, TbBrandWhatsapp } from "react-icons/tb"
import { VideoProps } from "@/utils/interface.ts"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { useRouter } from "next/navigation"

// metadata for traning video page
// export const metadata: Metadata = {
//   title: 'PDKI | Video',
//   description: 'PDKI training video',
// }

const TrainingVideoContainer = ({ videoData }: { videoData: VideoProps[] }) => {
  const t = useTranslations("TrainingVideos")

  const [token, setToken] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const submitToken = async (id: any) => {
    const res = await fetch(`${process.env.BASE_URL}/api/route/video/${id}`, {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        private_token: token
      })
    })
    const data = await res.json();
    if (data.private_token !== token) {
      setError('Invalid Token')
    } else {
      localStorage.setItem('x-video-token', token)
      router.push(`/training-video/${id}`)
    }
  }

  return (
    <main className="container px-4 sm:px-0 mx-auto">
      {/* header dari halaman video pelatihan */}
      <Header heading="PDKI" subheading={t("description")} />

      <section className="my-12 px-4 lg:px-6 xl:px-12">
        <h2 className="font-semibold text-[30px] mb-4">{t("content.h")}</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoData?.map((vid: VideoProps) => (
            <div key={vid?._id}>
              <div className="w-full relative">
                <Image
                  width={500}
                  height={400}
                  className="w-full h-full rounded-xl"
                  src={vid?.thumbnail_ulr}
                  alt={vid?.title}
                />
                {vid?.is_private === 1 ?
                  <Link href="https://wa.me/6287720638525" className="absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] duration-75 bg-white hover:bg-green-200 py-3 px-4 rounded-2xl flex justify-center items-center gap-2">
                    <span className="text-[16px] font-medium">Hubungi admin</span>
                    <TbBrandWhatsapp className="text-xl text-green-600" />
                  </Link>
                  :
                  <Link href={`training-video/${vid?._id}`} className="absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] duration-75 bg-white hover:bg-gray-200 py-3 px-4 rounded-2xl flex justify-center items-center gap-2">
                    <span className="text-[16px] font-medium">Lihat Pelatihan</span>
                    <TbArrowUpRight className="text-xl text-[#222]" />
                  </Link>
                }
              </div>
              <h2 className="font-semibold text-[18px] mt-6 mb-4">{vid?.title}</h2>
              <p className="font-medium text-[16px] mb-4">{vid?.description}</p>
              <p className="font-medium mb-4 text-[16px]">Instruktor : {vid?.instructor}</p>
              {vid?.is_private === 1 ?
                <div className="bg-orange-200 rounded-2xl p-4 flex flex-col space-y-1">
                  <p className="p-2 rounded-xl font-medium text-center text-[16px] text-orange-700">Premium Video</p>
                  <p className="text-[14px] text-center font-medium text-orange-700">
                    Kamu harus melakukan pembayaran untuk mengakses video pelatihan ini, tekan tombol hubungi admin untuk info lebih lanjut terkait pembayaran
                  </p>
                  <div className="w-full flex gap-6">
                    <input
                      className="w-9/12 p-2 rounded-xl placeholder:text-center placeholder:font-semibold"
                      type="text"
                      placeholder="Masukkan Token"
                      onChange={(e) => setToken(e.target.value)}
                    />
                    <button
                      onClick={() => submitToken(vid?._id)}
                      className="bg-gray-100 hover:bg-gray-500 rounded-xl p-1 font-semibold text-[#1a1a1a] hover">
                      Masukkan Token
                    </button>
                  </div>
                </div> :
                <div className="bg-green-200 rounded-2xl p-4">
                  <p className="p-2 rounded-xl font-medium text-center text-[16px] text-green-700">Gratis</p>
                  <p className="text-[14px] text-center font-medium text-green-700">
                    Video pelatihan ini gratis, kamu bisa langsung akses video dengan menekan tombol lihat pelatihan
                  </p>
                </div>
              }
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}


const TrainingVideo = async () => {
  const videoData = await fetchVideo();

  return (
    <div className="bg-gray-100">
      <Navbar />
      <TrainingVideoContainer videoData={videoData} />
      <Footer />
    </div>
  );
};

export default TrainingVideo;