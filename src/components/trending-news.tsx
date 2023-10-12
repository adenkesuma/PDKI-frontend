import { fetchNews } from "@/lib/fetch/get-news"
import { NewsProps } from "@/utils/interface"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

const TrendingNewsBox = ({ topVideos }: { topVideos: any }) => {
  const t = useTranslations("Home.trending-news") 

  return (
    <div className="w-full overflow-hidden">
      <h2 className="font-semibold text-[18px] lg:text-[20px] mb-4">
        {t("title")}
      </h2>
      <div className="h-[380px] lg:h-[410px] bg-[#274698] rounded-2xl p-4 text-white flex flex-col gap-6">
        {topVideos.map((item: NewsProps) => (
          <div key={item.id} className="flex items-center gap-4 hover:bg-[#19388b] rounded-xl duration-75">
            <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[55px]">
              <Image
                width={300}
                height={200}
                className="w-full h-full object-cover bg-center rounded-xl border-2 border-white"
                src={process.env.BASE_URL + item.image}
                alt="Image"
              />
            </div>
            <Link href={`/news/${item.id}`} className="w-full overflow-hidden">
              <h3 className="font-medium text-[16px] text-[#fff] text-ellipsis whitespace-nowrap overflow-hidden">{item.title}</h3>
              <p className="font-medium text-[14px] text-[#cacaca] text-ellipsis whitespace-nowrap overflow-hidden">{item.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

const TrendingNews = async () => {
  const getTrendingNews = await fetchNews()

  // mengurutkan data berdasarkan views
  const sortedVideos = await getTrendingNews.sort(
    (a: { views: number }, b: { views: number }) => b.views - a.views
  )

  // mengambil 5 data teratas dengan views terbanyak
  const topVideos: [] = await sortedVideos.slice(0, 5)

  return (
    <>
      <TrendingNewsBox topVideos={topVideos} />
    </>
  );
};
export default TrendingNews