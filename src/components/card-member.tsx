import Image from "next/image"
import { FC } from "react"
import QRCode from "./qrcode";

interface CardMemberProps {
    npa_pdki: string;
    pas_foto: string;
    nama: string;
    url: string;
}

const CardMember: FC<CardMemberProps> = ({
    npa_pdki,
    pas_foto,
    nama,
    url
}) => {

    return (
        <>
            <div
                id={npa_pdki}
                key={npa_pdki}
                className='bg-[#fjfjfj] border border-[#274698] p-6 flex flex-col items-center gap-6'
            >
                <div className="flex gap-6 items-center">
                    <Image
                        className="w-24 h-24 object-cover"
                        src={process.env.BASE_URL + pas_foto}
                        alt="foto member"
                        width={300}
                        height={300}
                    />
                    <QRCode value={`${url}#${npa_pdki}`} />
                </div>

                <p className='mb-2 font-medium text-center text-sm text-gray-600'>
                    <span className="text-gray-800 font-bold">Nama: </span>
                    {nama}
                </p>
            </div>
        </>
    )
}

export default CardMember