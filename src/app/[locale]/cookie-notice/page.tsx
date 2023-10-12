import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { VscArrowLeft } from 'react-icons/vsc'

export const metadata = {
  title: 'PDKI | Cookie',
  description: 'Cookie Perhimpunan dokter keluarga indonesia',
}

const CookieNotice = () => {
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
          Situs web PDKI menggunakan teknologi cookie untuk meningkatkan pengalaman pengguna. Dalam rangka memberikan informasi yang transparan kepada Anda, kami memberikan pemberitahuan ini mengenai penggunaan cookie di situs web kami. Dengan melanjutkan penggunaan situs web ini, Anda secara aktif menyetujui penggunaan cookie sesuai dengan kebijakan ini. Jika Anda tidak setuju dengan penggunaan cookie, harap hentikan penggunaan situs web kami.
        </p>

        <ol className='flex flex-col gap-4'>
          <li>
            <h3 className='text-[20px] font-semibold text-[#1a1a1a] mb-2'>
              1. Apa itu Cookie?
            </h3>
            <p className='pl-4'>
              Cookie adalah file teks kecil yang disimpan oleh peramban web Anda di hard drive komputer atau perangkat Anda. Mereka digunakan untuk mengumpulkan informasi standar tentang penggunaan internet Anda dan mengirimkannya kembali ke situs web saat Anda mengunjunginya lagi atau ke situs web lain yang mengenali cookie terseb
            </p>
          </li>
          <li>
            <h3 className='text-[20px] font-semibold text-[#1a1a1a] mb-2'>
              2. Jenis Cookie yang digunakan
            </h3>
            <ul className='pl-4 flex flex-col gap-2'>
              <li>
                a. Cookie Wajib: Cookie ini diperlukan untuk mengoperasikan situs web dengan baik. Mereka termasuk cookie yang memungkinkan Anda untuk login ke akun, menavigasi antarmuka situs web, dan mengakses fitur-fitur penting lainnya.
              </li>
              <li>
                b. Cookie Analitis: Kami menggunakan cookie analitis untuk mengumpulkan informasi tentang pengunjung situs web, termasuk jumlah pengunjung, sumber lalu lintas, dan perilaku penggunaan situs web. Informasi ini membantu kami memahami dan meningkatkan kinerja situs web kami.
              </li>
              <li>
                c. Cookie Fungsionalitas: Cookie fungsionalitas digunakan untuk mengingat preferensi pengguna, seperti bahasa yang dipilih atau pilihan tampilan lainnya. Mereka membantu meningkatkan pengalaman pengguna dengan menyimpan preferensi Anda.
              </li>
              <li>
                d. Cookie Pihak Ketiga: Dalam beberapa kasus, kami dapat menggunakan cookie pihak ketiga yang disediakan oleh penyedia layanan eksternal. Cookie ini digunakan untuk tujuan seperti analisis, pelacakan iklan, atau interaksi dengan platform media sosial tertentu. Perhatikan bahwa penggunaan cookie pihak ketiga diatur oleh kebijakan privasi mereka sendiri.
              </li>
            </ul>
          </li>
        </ol>
        <p>
          Jika Anda memiliki pertanyaan lebih lanjut mengenai penggunaan cookie di situs web kami, silakan hubungi kami melalui informasi kontak yang tersedia di situs web. Terima kasih atas pengertian dan kerjasama Anda.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default CookieNotice