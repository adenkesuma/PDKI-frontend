import Link from 'next/link'
import React from 'react'
import { TbBrandWhatsapp } from 'react-icons/tb'

const Whathsapp = () => {
    return (
        <Link href="https://wa.me/6287720638525" className='fixed z-[999] bottom-10 right-10 bg-green-600 p-4 rounded-[50%] hover:bg-green-700'>
            <TbBrandWhatsapp className='text-[#fff] text-[24px]' />
        </Link>
    )
}

export default Whathsapp