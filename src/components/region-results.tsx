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
            <section className="mt-8 px-6 mb-8 flex items-center gap-4 flex-col md:flex-row md:justify-between">
                <h2 className="font-semibold text-[30px] mb-6">{t("content.h")}</h2>
                <div className="flex flex-col items-center sm:flex-row sm:items-center gap-6">
                    <h3 className="text-lg font-medium text-[#1a1a1a]">{t("content.filter")}</h3>
                    <select
                        value={selectedRegion}
                        className="rounded-xl p-2 bg-[#274698] text-white"
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

            <section className="mb-8 px-6">
                {/* data region */}
                <RegionData selectedRegion={selectedRegion} />

                <div className="mt-6">
                    <h3 className="text-[18px] font-medium text-[#1a1a1a]">
                        Contact Admin klik :
                        <Link href="https://wa.me/6287720638525" className="text-[#274698]"> disini</Link>
                    </h3>
                </div>
            </section>
        </>
    )
}

export default RegionResults