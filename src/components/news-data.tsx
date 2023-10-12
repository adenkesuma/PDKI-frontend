import { NewsProps } from "@/utils/interface"
import { TbPlus } from "react-icons/tb"
import CardNews from "./card-news"
import { useRouter } from "next/navigation"

const NewsData = ({ news }: any) => {
  const router = useRouter()
  return (
    <main>
      <div className="flex justify-end gap-4">
        <button
          onClick={() => router.push("/admin/news/post-news")}
          className="flex items-center gap-2 bg-transparent border-2 border-[#274698] rounded-2xl px-4 py-2 text-[#274698] font-medium text-[16px] hover:bg-[#274698] hover:text-[#fff] duration-75"
        >
          <TbPlus className="text-lg" />
          Upload Berita
        </button>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {news.map((item: NewsProps) => (
          <CardNews
            key={item?.id}
            id={item?.id}
            title={item?.title}
            description={item?.description}
            image={item?.image}
            video={item?.video}
            content={item?.content}
            published={item?.published}
            region={item?.region}
            published_date={item?.published_date}
            categories={item?.categories}
            tags={item?.tags}
            website_url={item?.website_url}
          />
        ))}
      </section>
    </main>
  )
}

export default NewsData