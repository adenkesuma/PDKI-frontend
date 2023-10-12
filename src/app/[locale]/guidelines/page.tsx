import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { VscArrowLeft } from 'react-icons/vsc'

export const metadata = {
  title: 'PDKI | Guidelines',
  description: 'Guidelines Perhimpunan dokter keluarga indonesia',
}

const Guidelines = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="px-8 xl:px-12 container mx-auto mt-8 mb-8 flex flex-col gap-6">
        {/* back navigate */}
        <Link href="/" className="flex gap-6 flex-row items-start">
          <VscArrowLeft className="text-[24px] font-semibold mb-6" />
          <p className="font-medium text-[16px]">Kembali</p>
        </Link>

        <p>
          Kami di PDKI memprioritaskan etika dalam segala interaksi dan penggunaan situs web kami. Dalam upaya kami untuk menjaga lingkungan online yang aman, positif, dan inklusif, berikut adalah pedoman etika yang diharapkan untuk diikuti oleh semua pengguna situs web PDKI:
        </p>

        <ol className='flex flex-col gap-4'>
          <li>
            <h3 className='text-[18px] font-semibold text-[#1a1a1a] mb-2'>
              1. Menghormati hak privasi
            </h3>
            <ul className="pl-2 flex flex-col gap-2">
              <li>
                - Jangan mempublikasikan atau mengunggah informasi pribadi tentang orang lain tanpa izin mereka.
              </li>
              <li>
                - Jangan menyebarkan atau membagikan informasi yang dapat merugikan privasi atau reputasi individu atau organisasi.
              </li>
            </ul>
          </li>
          <li>
            <h3 className='text-[18px] font-semibold text-[#1a1a1a] mb-2'>
              2. Tidak mencemarkan nama baik
            </h3>
            <ul className="pl-2 flex flex-col gap-2">
              <li>
                - Hindari menggunakan bahasa kasar, mengancam, menyinggung, atau merendahkan dalam komentar, tanggapan, atau konten lain yang Anda bagikan di situs web kami.
              </li>
              <li>
                - Jangan menyerang atau memfitnah individu atau organisasi dalam bentuk apapun
              </li>
            </ul>
          </li>
          <li>
            <h3 className='text-[18px] font-semibold text-[#1a1a1a] mb-2'>
              3. Penggunaan yang bertanggung jawab
            </h3>
            <ul className="pl-2 flex flex-col gap-2">
              <li>
                - Jangan menggunakan situs web kami untuk tujuan yang ilegal, melanggar hukum, atau merugikan orang lain.
              </li>
              <li>
                - Jangan melakukan tindakan yang dapat mengakibatkan kerusakan atau gangguan pada situs web kami, termasuk mencoba mengakses data yang tidak diizinkan atau merusak sistem.
              </li>
              <li>
                - Hindari penyalahgunaan fitur atau alat di situs web kami, termasuk spamming, penyebaran virus, atau aktivitas yang merugikan lainnya.
              </li>
            </ul>
          </li>
          <li>
            <h3 className='text-[18px] font-semibold text-[#1a1a1a] mb-2'>
              4. Menghormati kekayaan intelektual
            </h3>
            <ul className="pl-2 flex flex-col gap-2">
              <li>
                - Menghormati hak cipta, merek dagang, dan hak kekayaan intelektual lainnya yang terkait dengan konten yang ada di situs web kami.
              </li>
              <li>
                - Jangan mengunggah, membagikan, atau menggunakan materi yang dilindungi hak cipta tanpa izin atau lisensi yang sesuai.
              </li>
            </ul>
          </li>
          <li>
            <h3 className='text-[18px] font-semibold text-[#1a1a1a] mb-2'>
              5. Melaporkan Pelanggaran
            </h3>
            <p className="pl-2 flex flex-col gap-2">
              - Jika Anda melihat atau mengalami pelanggaran terhadap pedoman etika ini, mohon segera melaporkannya kepada kami melalui informasi kontak yang tersedia di situs web kami.
            </p>
          </li>
          <li></li>
        </ol>
      </div>
      <Footer />
    </div>
  )
}

export default Guidelines 