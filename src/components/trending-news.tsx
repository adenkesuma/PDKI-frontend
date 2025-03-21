import { fetchNews } from "@/lib/fetch/get-news"
import { NewsProps } from "@/utils/interface"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

const TrendingNewsBox = ({ topNews }: { topNews: NewsProps[] }) => {
  const t = useTranslations("Home.trending-news") 

  return (
    <div className="w-full overflow-hidden">
      <h2 className="font-semibold text-[18px] lg:text-[20px] mb-4">
        {t("title")}
      </h2>
      <div className="h-[380px] lg:h-[410px] bg-[#f7f7f7] border border-[#274698] p-4 text-white flex flex-col gap-6">
        {topNews.map((item: NewsProps) => (
          <div key={item.id} className="flex items-center gap-4 delay-75 hover:bg-gray-100 rounded-xl duration-75">
            <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[55px]">
              <Image
                width={300}
                height={200}
                className="w-full h-full object-cover bg-center border border-gray-200"
                src={process.env.BASE_URL + item.image}
                alt="Image"
              />
            </div>
            <Link href={`/news/${item.id}`} className="w-full overflow-hidden">
              <h3 className="font-semibold text-sm text-gray-800 line-clamp-1">{item.title}</h3>
              <p className="font-regular text-xs text-gray-600 line-clamp-1">{item.description}</p>
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
  const sortedNews = await getTrendingNews.sort(
    (a: { views: number }, b: { views: number }) => b.views - a.views
  )

  // mengambil 5 data teratas dengan views terbanyak
  const topNews: [] = await sortedNews.slice(0, 5)

  return (
    <>
      <TrendingNewsBox topNews={topNews} />
    </>
  );
};
export default TrendingNews