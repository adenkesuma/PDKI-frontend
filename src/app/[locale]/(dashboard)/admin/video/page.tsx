"use client"
import { useState, useEffect, useCallback, ChangeEvent } from "react"
import { useRouter } from "next/navigation"
import { useSession, getSession } from "next-auth/react"
import Search from "@/components/search"
import Link from "next/link"
import { TbUser } from "react-icons/tb"
import VideoData from "@/components/video-data"

const Video = () => {
  const [search, setSearch] = useState<string>('')
  const [video, setVideo] = useState<[]>([])

  // session
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    fetch(`${process.env.BASE_URL}/api/route/video?title=${search}`, {
      cache: 'no-store',
      mode: 'cors',
      credentials: "include"
    })
      .then((res) => res.json())
      .then((data) => setVideo(data))
      .catch((err) => {
        console.log(err)
      })

  }, [search])

  const onSetSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }, [])

  if (status === "authenticated") {
    return (
      <div className="w-full inherit flex flex-col gap-2 relative bg-gray-100">
        {/* navigation for member data */}
        <nav className="sticky top-0 ml-[236px] bg-gray-100 right-[14px] flex justify-between items-center pb-6 pr-4 pt-6 z-[999]">
          <h3 className="font-semibold text-[30px] text-[#1a1a1a]">Video Pelatihan</h3>

          {/* search */}
          <div className="flex items-center justify-between gap-6">
            <Search search={search} onSetSearch={onSetSearch} holder={"Cari sesuai nama..."} />
            <div className="flex gap-4 items-center justify-between">
              <Link href={`#`} className="rounded-2xl bg-[#fff] shadow-md shadow-gray-300 p-3">
                <TbUser className="text-lg text-[#888]" />
              </Link>
            </div>
          </div>
        </nav>

        <div className="mr-6 flex flex-col gap-6 ml-[240px]">
          <VideoData video={video} />
        </div>
      </div>
    )
  }

  if (status === "unauthenticated") {
    router.push("/")
  }
}

export default Video

