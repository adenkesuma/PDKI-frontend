import { fetchMember } from '@/lib/fetch/get-member'
import { MemberProps } from '@/utils/interface'
import CardMember from '@/components/card-member'

const MemberCopc = async () => {
    const data = await fetchMember()
    const url = "https://pdkindonesia.vercel.app/member/copc"

    const dataCopc = data?.map((item: MemberProps) => {
        if (item?.subspesialisasi === "Community Oriented Primary Care (COPC)") {
            return (
                <CardMember
                    key={item?.npa_pdki}
                    npa_pdki={item?.npa_pdki}
                    nama={item?.nama}
                    pas_foto={item?.pas_foto}
                    url={url}
                />
            )
        }
    })

    return (
        <div className='my-12 container mx-auto'>
            <h3 className='text-gray-800 text-xl mb-4 font-semibold'>Member Community Oriented Primary Care</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {dataCopc}
            </div>
        </div>
    )
}

export default MemberCopc