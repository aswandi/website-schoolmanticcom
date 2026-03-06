import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FAQ: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Berapa syarat minimal jumlah siswa?',
      answer: 'Jumlah siswa minimal adalah 100. Namun, jika kurang dari 100, sekolah tetap dapat menggunakan layanan dengan biaya minimal Rp 300.000,- per bulan.'
    },
    {
      question: 'Apa saja persiapan yang diperlukan?',
      answer: 'Persiapan yang diperlukan meliputi: mesin absensi (fingerprint atau deteksi wajah) dan pemasangannya di sekolah, kabel LAN untuk menghubungkan mesin absensi ke router internet, akses internet, staf operator untuk mengoperasikan sistem, dan pembayaran biaya bulanan.'
    },
    {
      question: 'Bagaimana langkah selanjutnya bagi sekolah yang berminat?',
      answer: 'Hubungi SchoolMantic melalui WA di 0811945222 dengan menyebutkan nama lengkap sekolah. SchoolMantic akan membuat grup WhatsApp yang terdiri dari tim sekolah dan tim mereka. Sekolah menyiapkan dan memasang mesin absensi, serta mendaftarkan data sidik jari atau wajah siswa.'
    },
    {
      question: 'Apa perbedaan SchoolMantic dengan aplikasi lain?',
      answer: 'Aplikasi lain biasanya dijual putus, memerlukan biaya besar di awal, dan perawatan sistem ditanggung sekolah. SchoolMantic tidak memerlukan biaya besar di awal; sekolah hanya membayar biaya operasional bulanan sesuai jumlah siswa. Perawatan server dan aplikasi ditangani oleh SchoolMantic.'
    },
    {
      question: 'Apakah tersedia aplikasi Android untuk wali siswa?',
      answer: 'Selain notifikasi SMS/WhatsApp, tersedia aplikasi Android dengan logo dan nama sekolah. Biaya pembuatan aplikasi adalah Rp 1.000.000,- (sekali bayar), termasuk pemasangan di Google Playstore.'
    },
    {
      question: 'Bagaimana akses data kehadiran oleh guru?',
      answer: 'Pejabat sekolah, staf TU, dan guru dapat mengakses data kehadiran real-time melalui komputer atau HP yang terhubung internet. Wali kelas akan menerima notifikasi harian mengenai siswa yang tidak hadir atau terlambat.'
    },
    {
      question: 'Apakah bisa digunakan untuk Bimbingan Belajar (Bimbel)?',
      answer: 'SchoolMantic dapat digunakan oleh Bimbel, dengan sensor seperti scan barcode, mesin sidik jari, atau deteksi wajah. Biaya untuk Bimbel adalah Rp 300.000,- per bulan, tanpa batasan jumlah siswa.'
    },
    {
      question: 'Apakah ada fitur nilai dan pembayaran?',
      answer: 'Saat ini, SchoolMantic hanya memiliki fitur absensi. Modul nilai dan sistem pembayaran siswa sedang dalam pengembangan.'
    },
    {
      question: 'Perangkat apa saja yang didukung oleh aplikasi SchoolMantic?',
      answer: 'Pada prinsipnya semua mesin yang ada fitur ADMS atau CLOUD SERVER bisa digunakan. Namun untuk pastinya bisa gunakan mesin yang pernah kami tes yaitu: Solution X100C, Solution X302-S, Bio-Finger AT-620, mesin absensi deteksi wajah Solution X609 (maksimal 200 wajah), BioFinger VL-320, Solution X902 (deteksi wajah), Falco (face recognition), Solution X105-ID.'
    },
    {
      question: 'Apakah bisa diintegrasikan dengan aplikasi absensi yang sudah dijalankan di sekolah? Aplikasi kami belum ada fitur WhatsApp, jadi kami hanya ingin tambahkan fitur WhatsApp saja.',
      answer: 'Bisa, kami menyediakan beberapa akun WhatsApp yang siap digunakan untuk sekolah. Jadi dalam hal ini akun WA dari kami dan kami menyediakan API untuk tujuan pengiriman WhatsApp yang bisa diintegrasikan dengan aplikasi internal pihak sekolah.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} id="faq" className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-animate ${headerVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        {/* FAQ Items */}
        <div ref={faqRef} className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`bg-gray-50 rounded-lg overflow-hidden scroll-animate ${faqVisible ? 'animate' : ''} stagger-${index + 1}`}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;