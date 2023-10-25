import { VideoProps } from "@/utils/interface"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

async function fetchTrendingVideo() {
  const res = await fetch(`${process.env.BASE_URL}/api/route/video`, {
    cache: 'no-store',
    method: 'GET'
  })

  const trendingVideo = await res.json()

  return trendingVideo
}

const TrendingVideoBox = ({ topVideos }: { topVideos: VideoProps[] }) => {
  const t = useTranslations("Home") 

  return (
    <div className="w-full overflow-hidden">
      <h2 className="font-semibold text-[18px] lg:text-[20px] mb-4">
        {t("trending-videos.title")}
      </h2>
      <div className="h-[380px] lg:h-[410px] border border-gray-200 rounded-xl p-4 text-white flex flex-col gap-6">
        {topVideos.map((item: VideoProps) => (
          <div key={item._id} className="flex items-center gap-4 delay-75 hover:bg-gray-100 rounded-xl duration-75">
            <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[55px]">
              <Image
                width={300}
                height={200}
                className="w-full h-full object-cover bg-center rounded-xl border border-gray-200"
                src={item.thumbnail_ulr}
                alt="Image"
              />
            </div>
            <Link href={`/news/${item._id}`} className="w-full overflow-hidden">
              <h3 className="font-semibold text-sm text-gray-800 line-clamp-1">{item.title}</h3>
              <p className="font-regular text-xs text-gray-600 line-clamp-1">{item.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

const TrendingVideo = async () => {
  const getTrendingVideo = await fetchTrendingVideo()

  // mengurutkan data berdasarkan views
  const sortedVideos = await getTrendingVideo.sort(
    (a: { views: number }, b: { views: number }) => b.views - a.views
  )

  // mengambil 5 data teratas dengan views terbanyak
  const topVideos: [] = await sortedVideos.slice(0, 5)

  return (
    <>
      <TrendingVideoBox topVideos={topVideos} />
    </>
  )
}

export default TrendingVideo