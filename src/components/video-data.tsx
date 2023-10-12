import { VideoProps } from "@/utils/interface"
import { TbPlus } from "react-icons/tb"
import { useRouter } from "next/navigation"
import CardVideo from "./card-video"
const VideoData = ({ video }: any) => {
  const router = useRouter()
  return (
    <div>
      <div className="flex justify-end gap-4">
        <button
          onClick={() => router.push('/admin/video/post-video')}
          className="flex items-center gap-2 bg-transparent border-2 border-[#274698] rounded-2xl px-4 py-2 text-[#274698] font-medium text-[16px] hover:bg-[#274698] hover:text-[#fff] duration-75"
        >
          <TbPlus className="text-lg" />
          Upload Video
        </button>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {video?.map((item: VideoProps) => (
          <CardVideo
            key={item?._id}
            _id={item?._id}
            title={item?.title}
            description={item?.description}
            duration={item?.duration}
            video_url={item?.video_url}
            thumbnail_ulr={item?.thumbnail_ulr}
            is_private={item?.is_private}
            harga={item?.harga}
            published_date={item?.published_date}
            categories={item?.categories}
            tags={item?.tags}
            views={item?.views}
            instructor={item?.instructor}
            online={item?.online}
            private_token={item?.private_token}
          />
        ))}
      </section>
    </div>
  )
}

export default VideoData