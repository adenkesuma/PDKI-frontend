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
                className='bg-[#fff] shadow-md shadow-gray-300 p-4 rounded-2xl flex flex-col gap-6'
            >
                <figure className='w-[150px] h-[150px] mx-auto mt-4'>
                    <Image
                        className="w-[150px] h-[150px] object-cover rounded-[50%]"
                        src={process.env.BASE_URL + pas_foto}
                        alt="foto member"
                        width={300}
                        height={300}
                    />
                </figure>
                <div className='mt-4'>
                    <p className='mb-2 font-medium text-[16px] text-center'>Nama: {nama}</p>
                    <QRCode value={`${url}#${npa_pdki}`} />
                </div>
            </div>
        </>
    )
}

export default CardMember