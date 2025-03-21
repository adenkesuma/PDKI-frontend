import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Link from 'next/link'
import React from 'react'
import { VscArrowLeft } from 'react-icons/vsc'

export const metadata = {
  title: 'PDKI | Privacy',
  description: 'Member Perhimpunan dokter keluarga indonesia',
}

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className="px-6 lg:px-0 mx-auto mt-8 mb-8 flex flex-col gap-6">
        {/* back navigate */}
        <Link href="/" className="flex gap-6 flex-row items-start">
          <VscArrowLeft className="text-[24px] font-semibold mb-6" />
          <p className="font-medium text-[16px]">Kembali</p>
        </Link>
        <p>
          Terima kasih telah mengunjungi situs web PDKI. Kami menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi yang Anda berikan saat menggunakan situs web kami. Kami menyarankan Anda untuk membaca kebijakan privasi ini secara menyeluruh agar Anda memahami cara kami melindungi privasi Anda.
        </p>
        <ol className='flex flex-col gap-6'>
          <li className='flex flex-col gap-2'>
            <h3 className='text-[18px] font-semibold'>1. Informasi yang kami kumpulkan</h3>
            <p className='pl-4'>
              Kami dapat mengumpulkan informasi pribadi tertentu dari Anda, seperti nama, alamat email, alamat fisik, nomor telepon, dan informasi lainnya yang Anda berikan secara sukarela saat mengisi formulir kontak, berlangganan newsletter, atau berinteraksi dengan fitur lain di situs kami. Kami juga dapat mengumpulkan informasi non-pribadi, seperti alamat IP Anda, jenis peramban yang digunakan, waktu akses, dan halaman yang Anda kunjungi.
            </p>
          </li>
          <li className='flex flex-col gap-2'>
            <h3 className='text-[18px] font-semibold'>2. Penggunaan informasi</h3>
            <div className='flex flex-col gap-2 pl-4'>
              <span>
                Informasi yang kami kumpulkan digunakan untuk tujuan berikut:
              </span>
              <ul>
                <li>
                  - Menyediakan informasi, produk, dan layanan yang Anda minta.
                </li>
                <li>
                  - Mengirimkan pembaruan, pemberitahuan, dan komunikasi terkait dengan layanan kami.
                </li>
                <li>
                  - Memproses dan merespons permintaan, komentar, atau pertanyaan yang Anda ajukan kepada kami.
                </li>
                <li>
                  - Menganalisis dan meningkatkan kinerja dan pengalaman penggunaan situs web kami.
                </li>
                <li>
                  - Mengamankan situs web kami dan melindungi terhadap penyalahgunaan atau kegiatan ilegal.
                </li>
              </ul>
              <ol className='flex flex-col gap-2'>
                <li>
                  <h4 className='text-[16px] mb-2 font-semibold text-[#222]'>
                    1. Penanganan dan pengungkapan informasi
                  </h4>
                  <p>
                    Kami tidak akan menjual, menyewakan, menukar, atau mentransfer informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali seperti yang diizinkan oleh hukum yang berlaku. Namun, kami dapat mengungkapkan informasi non-pribadi yang tidak dapat diidentifikasi pribadi kepada pihak ketiga untuk tujuan analisis, periklanan, atau peningkatan layanan.
                  </p>
                </li>
                <li>
                  <h4 className='text-[16px] mb-2 font-semibold text-[#222]'>
                    2. Keamanan Informasi
                  </h4>
                  <p>
                    Kami mengambil langkah-langkah yang wajar untuk melindungi informasi pribadi Anda dari akses yang tidak sah, pengungkapan, perubahan, atau penghancuran yang tidak sah. Namun, tidak ada metode transmisi atau penyimpanan data yang 100% aman, dan kami tidak dapat menjamin keamanan absolut dari informasi yang Anda berikan kepada kami.
                  </p>
                </li>
                <li>
                  <h4 className='text-[16px] mb-2 font-semibold text-[#222]'>
                    3. Tautan Eksternal
                  </h4>
                  <p>
                    Situs web kami mungkin berisi tautan ke situs web eksternal yang tidak dioperasikan oleh kami. Kami tidak bertanggung jawab atas praktik privasi atau isi situs web pihak ketiga. Kami mendorong Anda untuk membaca kebijakan privasi mereka sebelum memberikan informasi pribadi.
                  </p>
                </li>
                <li>
                  <h4 className='text-[16px] mb-2 font-semibold text-[#222]'>
                    4. Cookie
                  </h4>
                  <p>
                    Situs web kami dapat menggunakan teknologi cookie untuk meningkatkan pengalaman penggunaan. Cookie adalah file teks kecil yang disimpan oleh peramban web Anda di hard drive Anda. Cookie memungkinkan kami untuk mengingat preferensi Anda, mengumpulkan informasi tentang penggunaan situs web kami, dan memberikan konten yang lebih relevan. Anda dapat mengatur peramban Anda untuk menolak cookie atau memberi tahu Anda ketika cookie dikirim. Namun, jika Anda menolak cookie, beberapa bagian dari situs web kami mungkin tidak berfungsi dengan baik.
                  </p>
                </li>
                <li>
                  <h4 className='text-[16px] mb-2 font-semibold text-[#222]'>
                    5. Perubahan kebijakan privasi
                  </h4>
                  <p>
                    Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik informasi kami. Kami akan mempublikasikan versi yang diperbarui di situs web kami dan mengubah tanggal terakhir diperbarui yang tercantum di bagian atas kebijakan ini.
                  </p>
                </li>
                <li>
                  <h4 className='text-[16px] mb-2 font-semibold text-[#222]'>
                    6. Kontak
                  </h4>
                  <p>
                    Jika Anda memiliki pertanyaan, komentar, atau permintaan terkait kebijakan privasi ini, silakan hubungi kami melalui informasi kontak yang disediakan di situs web kami.
                  </p>
                </li>
              </ol>
              <p>
                Dengan menggunakan situs web PDKI, Anda menyetujui pengumpulan, penggunaan, dan pengungkapan informasi Anda sesuai dengan kebijakan privasi ini. Jika Anda tidak setuju dengan kebijakan ini, mohon tidak menggunakan situs web kami.
              </p>
            </div>
          </li>
        </ol>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy