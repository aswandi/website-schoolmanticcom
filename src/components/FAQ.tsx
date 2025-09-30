import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FAQ: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: exampleRef, isVisible: exampleVisible } = useScrollAnimation();
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

        {/* WhatsApp Notification Example */}
        <div ref={exampleRef} className={`bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 mb-12 scroll-animate-scale ${exampleVisible ? 'animate' : ''}`}>
          <div className="flex items-center mb-6">
            <MessageSquare className="w-8 h-8 text-green-600 mr-4" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Contoh Notifikasi WhatsApp</h3>
              <p className="text-gray-600">Tampilan WhatsApp Absensi Siswa</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                S
              </div>
              <div>
                <div className="font-semibold text-gray-900">Sekolah ABC</div>
                <div className="text-sm text-gray-500">Notifikasi Kehadiran</div>
              </div>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg">
              <p>🎓 <strong>SCHOOLMANTIC</strong></p>
              <p>📅 Selasa, 15 Januari 2025</p>
              <p>👦 <strong>Ahmad Rizki</strong> (Kelas 10A)</p>
              <p>✅ <strong>HADIR</strong> - 07:15 WIB</p>
              <p>🏫 SMA Negeri 1 Jakarta</p>
            </div>
          </div>
          <p className="text-gray-600 text-center mt-4">
            Orang tua akan menerima notifikasi WhatsApp real-time ketika siswa datang atau pulang sekolah
          </p>
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