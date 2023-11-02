import Link from "next/link"

const RegisterMember = () => {
  return (
    <main className="my-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Formulir Pendaftaran Anggota PDKI</h1>
      <p className="lg:text-sm text-xs font-medium text-gray-600">
        Terima kasih telah berminat bergabung dengan Perhimpunan Dokter Keluarga Indonesia. Kami berharap bersama-sama kita dapat memajukan profesi dokter keluarga di Indonesia
      </p>

      <div className="mt-4 lg:mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Persyaratan untuk menjadi anggota PDKI</h2>
        <ul className="flex flex-col gap-2">
          <li className="lg:text-sm text-xs font-medium text-gray-600">1. Anggota adalah dokter {'(dibuktikan dengan unggahan ijasah dokter)'}</li>
          <li className="lg:text-sm text-xs font-medium text-gray-600">2. Anggota Ikatan Dokter Indonesia {'(dibuktikan dengan KTA IDI atau screenshoot di )'}
            <Link href="https://idionline.org/" className="text-[#274698]"> idionline.org</Link>
          </li>
          <li className="lg:text-sm text-xs font-medium text-gray-600">3. Bersedia menaati aturan organisasi {'AD/ART PDKI'}</li>
          <li className="lg:text-sm text-xs font-medium text-gray-600">4. Membayar iuran keanggotaan</li>
        </ul>
      </div>

      <p className="mt-4 lg:mt-8 lg:text-sm text-xs font-medium text-gray-600">
        Biaya pendaftaran <span className="font-semibold">IDR 50.000</span> (baik untuk pendaftaran baru atau pendaftaran ulang)
        Iuran tahunan <span className="font-semibold">IDR 25.000</span> per bulan dan dibayarkan untuk 1 (satu) tahun ke 
        depan senilai <span className="font-semibold">IDR 300.000</span>,-
      </p>

      <p className="mt-4 lg:mt-8 lg:text-sm text-xs font-medium text-gray-600">
        SEBELUM anda melanjutkan mengisi formulir pendaftaran ini, sebaiknya anda MEMPERSIAPKAN DOKUMEN berikut  ini dan PELAJARI PENJELASAN di bawah ini. 
        Yang perlu dipersiapkan:
      </p>

      <ul className="flex flex-col gap-2 mt-4">
        <li className="lg:text-sm text-xs font-medium text-gray-600">1. KTP</li>
        <li className="lg:text-sm text-xs font-medium text-gray-600">2. Ijasah dokter (S.ked dan Kedokteran)</li>
        <li className="lg:text-sm text-xs font-medium text-gray-600">3. STR Dokter</li>
        <li className="lg:text-sm text-xs font-medium text-gray-600">4. Kartu IDI anda</li>
        <li className="lg:text-sm text-xs font-medium text-gray-600">5. Kartu PDKI (bagi anda yang sudah pernah mendaftar)</li>
        <li className="lg:text-sm text-xs font-medium text-gray-600">6. Pas foto 3 x 4 dengan ketentuan sebagai berikut:
          <ul className="pl-4">
            <li>
              - Latar belakang merah (Sp KKLP / PPDS Sp. KKLP / Dokter berkewarganegaraan INDONESIA yang berminat atau bekerja dalam ruang lingkup ilmu Kedokteran keluarga)
            </li>
            <li>
              - Latar belakang biru (Dokter, Warga negara asing, yang melakukan praktik dalam ruang lingkup ilmu kedokteran keluarga)
            </li>
          </ul>
        </li>
        <li className="lg:text-sm text-xs font-medium text-gray-600">
          7. Menandatangani lembar persetujuan untuk menaati AD/ART PDKI, Kode Etik Kedokteran Keluarga Indonesia dan Tata Laksana Organisasi (untuk formatnya terlampir),
          Klik link dibawah ini: 
          <Link href="https://docs.google.com/document/d/1vmaQFkSZPAO_JaFRGZcDn-Jqig2QxDx7oixPEsFEk64/edit?usp=sharing" className="text-[#274698]"> https://docs.google.com/document/d/1vmaQFkSZPAO_JaFRGZcDn-Jqig2QxDx7oixPEsFEk64/edit?usp=sharing</Link>
        </li>
      </ul>

      <div className="mt-4 lg:mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Dokumen Tambahan yang diperlukan khusus WNA:
        </h2>
        <ul className="flex flex-col gap-2">
          <li className="lg:text-sm text-xs font-medium text-gray-600">1. Surat persetujuan dari konsil kedokteran indonesia</li>
          <li className="lg:text-sm text-xs font-medium text-gray-600">2. Fotokopi Paspor, Visa dan Kitas (kartu ijin tinggal terbatas) yang divalidasi oleh Kementrian Hukum dan HAM</li>
          <li className="lg:text-sm text-xs font-medium text-gray-600">3. Wajib bisa berbahasa indonesia aktif dibuktikan dengan surat dari lembaga pendidikan Bahasa Indonesia yang diakui oleh pemerintah</li>
          <li className="lg:text-sm text-xs font-medium text-gray-600">4. Surat keterangan dari Konsil Kedokteran dari Negara asal</li>
        </ul>
      </div>

      <p className="lg:text-sm text-xs font-medium text-gray-600">
        Silahkan siapkan semua dokumen tersebut dalam bentuk file pdf kecuali foto pribadi dalam bentuk jpg atau jpeg. BIla anda kesulitan silahkan menghubungi pdki cabang terdekat atau chat ke <span className="font-semibold">+628111820075.</span>
      </p>

      <p className="lg:text-sm text-xs font-medium text-gray-600 mt-4 lg:mt-8">
        Pemberitahuan data telah kami terima akan dikirimkan melalui email yang telah didaftarkan. Bila anda tidak menerima email silahkan periksa spam atau hubungi kami di <span className="font-semibold">+628111820075.</span>
      </p>

      <p className="lg:text-sm text-xs font-medium text-gray-600 mt-4 lg:mt-8">
        Kami akan mengirimkan pemberitahuan no. KTA PDKI sejawat dalam waktu paling lambat 10 (sepuluh) hari kerja. Lakukan pembayaran setelah sejawat menerima pemberitahuan kami. Sejawat dapat melakukan pembayaran ke rekening  PDKI Cabang sesuai dengan Cabang Saudara mendaftar (No rekening Bisa diminta kepada PENGURUS CABANG PDKI). Jumlah yang dibayarkan adalah IURAN DITAMBAH DITAMBAH 4 (empat) digit no. KTA PDKI anda untuk memudahkan identifikasi pembayaran. (misalnya, no anggota 1022, maka pembayarannya Rp. 301.022,0)
      </p>

      <p className="lg:text-sm text-xs font-medium text-gray-600 mt-4 lg:mt-8">
        Setelah itu sejawat perlu mengirimkan bukti pembayaran melalui Whatsapp di no 08111820075 atau email ke <span className="font-semibold text-[#274698]">anggota.pdki@gmail.com</span>. Setelah pembayaran kami terima, maka sejawat akan menerima pemberitahuan melalui Whatsapp, SMS, atau email.
      </p>

      <p className="lg:text-sm text-xs font-medium text-gray-600 mt-4 lg:mt-8">
        Kartu digital akan kami kirimkan melalui email paling lama 1 (satu) bulan sejak pembayaran diterima. Sedangkan kartu fisik akan dikirimkan paling lambat 2 (dua) bulan sejak pembayaran diterima.
      </p>

      <p className="lg:text-sm text-xs font-medium text-gray-600 mt-4 lg:mt-8">
        Terima kasih atas kerjasamanya
      </p>

      <p className="lg:text-sm text-xs font-medium text-gray-600 mt-4 lg:mt-8">
        Salam Hangat
      </p>

      <p className="lg:text-sm text-xs font-medium text-gray-600 mt-4 lg:mt-8">
        Marilah menjadi bagian aktif dalam transformasi pelayanan kesehatan 
      </p>

      <p className="lg:text-sm text-xs font-medium text-gray-600 mt-4 lg:mt-8">
        Hormat kami,<br />
        Pengurus Pusat PDKi   
      </p>

      <div className="flex justify-end items-center mt-4 lg:mt-8">
        <Link href="/register-member/form" className="py-3 px-6 rounded-lg bg-[#274698] text-white">
          Lanjut
        </Link>
      </div>
    </main>
  )
}

export default RegisterMember