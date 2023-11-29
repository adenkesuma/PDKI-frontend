"use client"
import Link from "next/link"
import { TbUser } from "react-icons/tb"
import { getSession, useSession } from "next-auth/react"
import DashboardData from "@/components/dashboard-data"
import { useEffect, useState } from "react"
import { fetchData, options } from "@/lib/fetch/dashboard-fetch"

const Dashboard = () => {
  const [member, setMember] = useState([])
  const [news, setNews] = useState([])
  const [conference, setConference] = useState([])
  const [video, setVideo] = useState([])

  // session  
  const { data: session, status } = useSession()


  useEffect(() => {
    const fetchAllData = async () => {
      const memberUrl = `${process.env.BASE_URL}/api/route/admin/member`
      const newsUrl = `${process.env.BASE_URL}/api/route/news`
      const conferenceUrl = `${process.env.BASE_URL}/api/route/conference`
      const videoUrl = `${process.env.BASE_URL}/api/route/video`

      // fetching member data
      const memberData = await fetchData(
        `${memberUrl}`,
        options
      )
      setMember(memberData)

      // fetching news data
      const newsData = await fetchData(
        `${newsUrl}`,
        options
      )
      setNews(newsData)

      // fetching conference data
      const conferenceData = await fetchData(
        `${conferenceUrl}`,
        options
      )
      setConference(conferenceData)

      // fetching video data
      const videoData = await fetchData(
        `${videoUrl}`,
        options
      )
      setVideo(videoData)
    }

    fetchAllData()
  }, [])

  const totalMember = member?.length
  const totalNews = news?.length
  const totalConference = conference?.length
  const totalVideo = video?.length

  if (status === "authenticated") {
    return (
      <div className="w-full inherit flex flex-col gap-2 relative">
        {/* navigation for dashboard data */}
        <nav className="sticky top-0 ml-[236px] right-[14px] flex justify-between items-center pb-6 pr-4 pt-6 z-[999]">
          <h3 className="font-semibold text-[30px] text-[#1a1a1a]">Dashboard</h3>

          <div className="flex items-center justify-between gap-6">
            <div className="flex gap-4 items-center justify-between">
              <p className="font-medium text-[16px]">{session.user.username}</p>
              <Link href={`#`} className="rounded-2xl bg-[#fff] shadow-md shadow-gray-300 p-3">
                <TbUser className="text-lg text-[#888]" />
              </Link>
            </div>
          </div>
        </nav>

        <div className="mr-6 flex flex-col ml-[240px] gap-6">
          <DashboardData
            news={news}
            conference={conference}
            member={member}
            totalNews={totalNews}
            totalMember={totalMember}
            totalConference={totalConference}
            totalVideo={totalVideo}
          />
        </div>

      </div>
    )
  }
}

export default Dashboard
