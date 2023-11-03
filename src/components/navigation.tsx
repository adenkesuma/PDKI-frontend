import { FC } from "react"
import Link from "next/link"

const Navigation: FC = () => {

  return (
    <nav className="container mx-auto rounded-tl-xl rounded-tr-xl bg-[#274698] py-4 px-4 sm:px-8 lg:px-12 h-10 md:h-14">
      <ul className="flex items-center sm:justify-center gap-6 lg:gap-8 xl:gap-12 snap overflow-scroll sm:overflow-auto">
        <li>
          <Link href="/" className="text-xs text-white font-semibold hover:underline delay-100">
            PDKI
          </Link>
        </li>
        <li>
          <select className="bg-transparent outline-none border-none text-white text-xs font-semibold hover:underline delay-100">
            <option value="pdki-structure" className="text-sm text-gray-800 font-semibold py-6 border-none">
              <Link href="/pdki-structure">
                Struktur PDKI
              </Link>
            </option>
            <option value="about" className="text-sm text-gray-800 font-semibold py-6 border-none">
              <Link href="/about">
                About
              </Link>
            </option>
          </select>
        </li>
        <li>
          <Link href="/facilities" className="text-xs text-white font-semibold hover:underline delay-100">
            Fasilitas
          </Link>
        </li>
        <li>
          <Link href="/news" className="text-xs text-white font-semibold hover:underline delay-100">
            Berita
          </Link>
        </li>
        <li>
          <Link href="/conference" className="text-xs text-white font-semibold hover:underline delay-100">
            Konferensi
          </Link>
        </li>
        <li>
          <select className="bg-transparent outline-none border-none text-white text-xs font-semibold hover:underline delay-100">
            <option value="register-member" className="text-sm text-gray-800 font-semibold py-6 border-none">
              <Link href="/register-member">
                Daftar Anggota PDKI
              </Link>
            </option>
            <option value="member" className="text-sm text-gray-800 font-semibold py-6 border-none">
              <Link href="/member/copc">
                Anggota PDKI
              </Link>
            </option>
          </select>
        </li>
        <li>
          <Link href="https://l2-kb-lms.vercel.app/" className="text-xs text-white font-semibold hover:underline delay-100">
            P2KB 
          </Link>
        </li>
        <li>
          <Link href="/dedication" className="text-xs text-white font-semibold hover:underline delay-100">
            Pengabdian Masyarakat
          </Link>
        </li>
        <li>
          <Link href="/pdki-regions" className="text-xs text-white font-semibold hover:underline delay-100">
            Cabang
          </Link>
        </li>
        <li>
          <Link href="/video" className="text-xs text-white font-semibold hover:underline delay-100">
            Video
          </Link>
        </li>
        <li>
          <Link href="https://www.koperasipdki.com/login" className="text-xs text-white font-semibold hover:underline delay-100">
            Koperasi
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

