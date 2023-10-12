import { TbArrowUpRight } from "react-icons/tb"
import Link from "next/link"

interface Props {
    totalNews: number;
    totalConference: number;
    totalMember: number;
    totalVideo: number;
}

const AnalyticsOverview = ({ totalNews, totalConference, totalMember, totalVideo }: Props) => {
    return (
        <header className="flex flex-col gap-6">
            <h2 className="text-[18px] xl:text-[20px] text-[#1a1a1a] font-semibold">Ringkasan Jumlah Data</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="relative overflow-hidden rounded-2xl px-4 py-8 bg-[rgba(0,0,255,0.1)] flex flex-col items-center">
                    <h3 className="text-[30px] lg:text-[34px] font-semibold text-[#1a1a1a] z-50">{totalMember}</h3>
                    <p className="text-[16px] font-medium text-[#1a1a1a] z-50">Jumlah Member</p>

                    {/* detail icons */}
                    <Link href="#" className="absolute top-4 right-4 cursor-pointer z-50">
                        <TbArrowUpRight className="text-[24px] text-[#1a1a1a]" />
                    </Link>

                    {/* square background rotate */}
                    <div className="w-[150px] absolute -bottom-4 -right-12 h-[150px] rounded-2xl bg-[rgba(0,0,355,0.2)] rotate-[45deg]"></div>
                    <div className="w-[150px] absolute -bottom-20 -right-4 h-[150px] rounded-2xl bg-[rgba(0,0,255,0.1)] rotate-[45deg]"></div>
                </div>
                <div className="relative overflow-hidden rounded-2xl px-4 py-8 bg-[rgba(0,0,255,0.1)] flex flex-col items-center">
                    <h3 className="text-[30px] lg:text-[34px] font-semibold text-[#1a1a1a] z-50">{totalNews}</h3>
                    <p className="text-[16px] font-medium text-[#1a1a1a] z-50">Jumlah Berita</p>

                    {/* detail icons */}
                    <Link href="#" className="absolute top-4 right-4 cursor-pointer z-50">
                        <TbArrowUpRight className="text-[24px] text-[#1a1a1a]" />
                    </Link>

                    {/* square background rotate */}
                    <div className="w-[150px] absolute -bottom-4 -right-12 h-[150px] rounded-2xl bg-[rgba(0,0,355,0.2)] rotate-[45deg]"></div>
                    <div className="w-[150px] absolute -bottom-20 -right-4 h-[150px] rounded-2xl bg-[rgba(0,0,255,0.1)] rotate-[45deg]"></div>
                </div>
                <div className="relative overflow-hidden rounded-2xl px-4 py-8 bg-[rgba(0,0,255,0.1)] flex flex-col items-center">
                    <h3 className="text-[30px] lg:text-[34px] font-semibold text-[#1a1a1a] z-50">{totalConference}</h3>
                    <p className="text-[16px] font-medium text-[#1a1a1a] z-50">Jumlah Konferensi</p>

                    {/* detail icons */}
                    <Link href="#" className="absolute top-4 right-4 cursor-pointer z-50">
                        <TbArrowUpRight className="text-[24px] text-[#1a1a1a]" />
                    </Link>

                    {/* square background rotate */}
                    <div className="w-[150px] absolute -bottom-4 -right-12 h-[150px] rounded-2xl bg-[rgba(0,0,355,0.2)] rotate-[45deg]"></div>
                    <div className="w-[150px] absolute -bottom-20 -right-4 h-[150px] rounded-2xl bg-[rgba(0,0,255,0.1)] rotate-[45deg]"></div>
                </div>
                <div className="relative overflow-hidden rounded-2xl px-4 py-8 bg-[rgba(0,0,255,0.1)] flex flex-col items-center">
                    <h3 className="text-[30px] lg:text-[34px] font-semibold text-[#1a1a1a] z-50">{totalVideo}</h3>
                    <p className="text-[16px] font-medium text-[#1a1a1a] z-50">Jumlah Video</p>

                    {/* detail icons */}
                    <Link href="#" className="absolute top-4 right-4 cursor-pointer z-50">
                        <TbArrowUpRight className="text-[24px] text-[#1a1a1a]" />
                    </Link>

                    {/* square background rotate */}
                    <div className="w-[150px] absolute -bottom-4 -right-12 h-[150px] rounded-2xl bg-[rgba(0,0,355,0.2)] rotate-[45deg]"></div>
                    <div className="w-[150px] absolute -bottom-20 -right-4 h-[150px] rounded-2xl bg-[rgba(0,0,255,0.1)] rotate-[45deg]"></div>
                </div>
            </div>
        </header>
    )
}

export default AnalyticsOverview