import { fetchMember } from '@/lib/fetch/get-member'
import { MemberProps } from '@/utils/interface'
import CardMember from '@/components/card-member'

const MemberFomc = async () => {
    const data = await fetchMember()
    const url = "https://pdkindonesia.vercel.app/member/fomc"

    const dataFomc = data?.map((item: MemberProps) => {
        if (item?.subspesialisasi === "Family Oriented Medical Care (FOMC)") {
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
        <div className='my-12'>
            <h3 className='text-gray-800 text-xl mb-4 font-semibold'>Member Family Oriented Medical Care</h3>

            <div id="71-04295" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {dataFomc}
            </div>
        </div>
    )
}

export default MemberFomc