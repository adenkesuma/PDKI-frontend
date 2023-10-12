import { ConferenceProps } from "@/utils/interface"
import { TbPlus } from "react-icons/tb"
import CardConference from "./card-conference"
import { useRouter } from "next/navigation"

const ConferenceData = ({ conference }: any) => {
  const router = useRouter()
  return (
    <div>
      <div className="flex justify-end gap-4">
        <button
          onClick={() => router.push('conference/post-conference')}
          className="flex items-center gap-2 bg-transparent border-2 border-[#274698] rounded-2xl px-4 py-2 text-[#274698] font-medium text-[16px] hover:bg-[#274698] hover:text-[#fff] duration-75"
        >
          <TbPlus className="text-lg" />
          upload Konferensi
        </button>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {conference.map((item: ConferenceProps) => (
          <CardConference
            key={item?.conference_id}
            conference_id={item?.conference_id}
            title={item?.title}
            description={item?.description}
            image={item?.image}
            start_date={item?.start_date}
            end_date={item?.end_date}
            location={item?.location}
            organizer={item?.organizer}
            website_url={item?.website_url}
            registration_required={item?.registration_required}
            speakers={item?.speakers}
            is_free={item?.is_free}
            topic={item?.topic}
            created_at={item?.created_at}
            updated_at={item?.updated_at}
          />
        ))}
      </section>
    </div>
  )
}

export default ConferenceData