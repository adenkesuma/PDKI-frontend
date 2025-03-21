"use client"
import { useState, ChangeEvent } from 'react'
import { ProvinsiIndonesia } from '../utils/constant'
import RegionData from './region-data'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const RegionResults = () => {
    const [selectedRegion, setSelectedRegion] = useState<string>('')

    const handleRegionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedRegion(event.target.value)
    }

    const t = useTranslations("Branch")

    return (
        <>
            <section className="px-6 lg:px-0 mx-auto container mt-8 mb-8 flex items-end gap-4 flex-col md:flex-row md:justify-between">
                <h2 className="font-semibold text-2xl mb-6 text-gray-800">{t("content.h")}</h2>

                <div className="flex flex-col items-start gap-3">
                    <h3 className="text-sm font-regular text-gray-600">{t("content.filter")}</h3>
                    <select
                        value={selectedRegion}
                        className="rounded-xl p-2 border text-sm font-semibold outline-none bg-transparent border-gray-200 text-[#274698]"
                        onChange={handleRegionChange}
                    >
                        {ProvinsiIndonesia.map((prov, idx) => (
                            <option value={prov.value} key={idx}>
                                {prov.opt}
                            </option>
                        ))}
                    </select>
                </div>
            </section>

            <section className="mx-auto container mb-8">
                {/* data region */}
                <RegionData selectedRegion={selectedRegion} />

                <div className="mt-6">
                    <h3 className="text-sm font-regular text-[#1a1a1a]">
                        Contact Admin klik :
                        <Link href="https://wa.me/6287720638525" className="font-semibold text-[#274698]"> disini</Link>
                    </h3>
                </div>
            </section>
        </>
    )
}

export default RegionResults