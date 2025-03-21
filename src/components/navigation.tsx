"use client"

import { FC, useState } from "react"
import Link from "next/link"

const Navigation: FC = () => {
  const [pdki, setPdki] = useState<boolean>(false)
  const [member, setMember] = useState<boolean>(false)

  return (
    <nav className="relative bg-[#274698] py-4">
      <ul className="flex items-center sm:justify-center gap-6 lg:gap-8 xl:gap-12 snap overflow-scroll sm:overflow-auto">
        <li className="shrink-0">
          <Link href="/" className="text-xs text-white font-semibold hover:underline delay-100">
            PDKI
          </Link>
        </li>

        <li className="shrink-0">
          <button onClick={() => setPdki(!pdki)} className="font-semibold text-white rounded-lg text-xs text-center inline-flex items-center" type="button">Tentang PDKI
            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>

          {pdki && (
            <div className={`absolute top-12 p-3 flex flex-col gap-3 z-50 rounded-lg bg-[#274698] border border-gray-200`}>
              <Link href="/about" className="text-xs text-white font-semibold hover:bg-[rgba(255,255,255,0.2)] py-2 px-4 rounded-lg">
                Tentang PDKI
              </Link>
              <Link href="/pdki-structure" className="text-xs text-white font-semibold hover:bg-[rgba(255,255,255,0.2)] py-2 px-4 rounded-lg">
                Struktur PDKI
              </Link>
            </div>
          )}
        </li>


        <li className="shrink-0">
          <Link href="/news" className="text-xs text-white font-semibold hover:underline delay-100">
            Berita
          </Link>
        </li>
        <li className="shrink-0">
          <Link href="/conference" className="text-xs text-white font-semibold hover:underline delay-100">
            Konferensi
          </Link>
        </li>

        <li className="shrink-0">
          <button onClick={() => setMember(!member)} className="font-semibold text-white rounded-lg text-xs text-center inline-flex items-center" type="button">Anggota PDKI
            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>

          {member && (
            <div className={`absolute top-12 p-3 flex flex-col gap-3 z-50 rounded-lg bg-[#274698] border border-gray-200`}>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSemnLw1xbr01SWjsbWZTcYYcPoif77a8LKsG40yIGiO-gLDZQ/viewform?fbzx=7610966734699982512" className="text-xs text-white font-semibold hover:bg-[rgba(255,255,255,0.2)] py-2 px-4 rounded-lg">
                Daftar Anggota PDKI
              </Link>
              <Link href="/member/copc" className="text-xs text-white font-semibold hover:bg-[rgba(255,255,255,0.2)] py-2 px-4 rounded-lg">
                Anggota PDKI
              </Link>
            </div>
          )}
        </li>

        <li className="shrink-0">
          <Link href="https://ldplayananprimer.pdkindonesia.com/" className="text-xs text-white font-semibold hover:underline delay-100">
            P2KB 
          </Link>
        </li>
        <li className="shrink-0">
          <Link href="https://familymedicineforum2025.pdkindonesia.com/" className="text-xs text-white font-semibold hover:underline delay-100">
            FMF Conference
          </Link>
        </li>
        <li className="shrink-0">
          <Link href="/dedication" className="text-xs text-white font-semibold hover:underline delay-100">
            <p>Pengabdian Masyarakat</p>
          </Link>
        </li>
        <li className="shrink-0">
          <Link href="/pdki-regions" className="text-xs text-white font-semibold hover:underline delay-100">
            Cabang
          </Link>
        </li>
        <li className="shrink-0">
          <Link href="/video" className="text-xs text-white font-semibold hover:underline delay-100">
            Video
          </Link>
        </li>
        <li className="shrink-0">
          <Link href="https://www.koperasipdki.com/login" className="text-xs text-white font-semibold hover:underline delay-100">
            Koperasi
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

