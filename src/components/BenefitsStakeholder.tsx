import React, { useState } from 'react';
import { Users, GraduationCap, UserCheck, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BenefitsStakeholder: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState('kepala-sekolah');

  const stakeholders = [
    {
      id: 'kepala-sekolah',
      title: 'Kepala Sekolah',
      icon: <Users className="w-6 h-6" />,
      color: 'from-blue-600 to-blue-700',
      benefits: [
        { icon: '📊', title: 'Monitoring Real-Time', desc: 'Pantau kehadiran seluruh siswa dari mana saja, kapan saja' },
        { icon: '📈', title: 'Laporan Otomatis', desc: 'Laporan harian, mingguan, bulanan tersedia otomatis' },
        { icon: '💼', title: 'Meningkatkan Citra Sekolah', desc: 'Sistem modern yang meningkatkan kepercayaan orang tua' },
        { icon: '⚙️', title: 'Tanpa Maintenance', desc: 'Tidak perlu IT khusus, semua dikelola oleh kami' }
      ]
    },
    {
      id: 'guru',
      title: 'Guru & Wali Kelas',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-purple-600 to-purple-700',
      benefits: [
        { icon: '⏱️', title: 'Hemat Waktu Rekap', desc: 'Tidak perlu rekap manual, data tersedia otomatis' },
        { icon: '📱', title: 'Notifikasi Siswa Tidak Hadir', desc: 'Langsung tahu siswa yang bolos atau terlambat' },
        { icon: '📋', title: 'Akses Data Mudah', desc: 'Lihat riwayat kehadiran siswa dari HP atau komputer' },
        { icon: '🎯', title: 'Fokus Mengajar', desc: 'Lebih banyak waktu untuk kegiatan pembelajaran' }
      ]
    },
    {
      id: 'orang-tua',
      title: 'Orang Tua / Wali Siswa',
      icon: <Heart className="w-6 h-6" />,
      color: 'from-pink-600 to-pink-700',
      benefits: [
        { icon: '💬', title: 'Notifikasi WhatsApp Langsung', desc: 'Dapat pesan otomatis saat anak datang/pulang sekolah' },
        { icon: '😌', title: 'Tenang & Aman', desc: 'Tidak khawatir anak bolos, semua terpantau' },
        { icon: '📲', title: 'Gratis Tanpa Biaya Tambahan', desc: 'Tidak perlu bayar SMS atau pulsa' },
        { icon: '🕐', title: 'Real-Time', desc: 'Informasi langsung, bukan laporan kemarin' }
      ]
    },
    {
      id: 'siswa',
      title: 'Siswa',
      icon: <UserCheck className="w-6 h-6" />,
      color: 'from-green-600 to-green-700',
      benefits: [
        { icon: '✅', title: 'Absensi Cepat & Mudah', desc: 'Cukup tap jari atau scan wajah, selesai!' },
        { icon: '🚫', title: 'Tidak Bisa Bolos 😊', desc: 'Sistem akurat, tidak bisa titip absen' },
        { icon: '🏆', title: 'Disiplin Meningkat', desc: 'Kehadiran tercatat otomatis, melatih kedisiplinan' },
        { icon: '📊', title: 'Transparansi', desc: 'Orang tua langsung tahu, jadi lebih bertanggung jawab' }
      ]
    }
  ];

  const activeStakeholder = stakeholders.find(s => s.id === activeTab) || stakeholders[0];

  return (
    <section ref={sectionRef as any} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef as any} className={`text-center mb-16 scroll-animate ${headerVisible ? 'animate' : ''}`}>
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-6">
            MANFAAT UNTUK SEMUA
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Keuntungan untuk Setiap Pihak
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SchoolMantic memberikan solusi lengkap untuk semua stakeholder di sekolah
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {stakeholders.map((stakeholder) => (
            <button
              key={stakeholder.id}
              onClick={() => setActiveTab(stakeholder.id)}
              className={`flex items-center space-x-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === stakeholder.id
                  ? `bg-gradient-to-r ${stakeholder.color} text-white shadow-lg scale-105`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {stakeholder.icon}
              <span>{stakeholder.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-6">
            {activeStakeholder.benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-3xl">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">
            Semua pihak mendapat manfaat maksimal dengan SchoolMantic
          </p>
          <a 
            href="https://wa.me/62811945222?text=Halo%2C%20saya%20tertarik%20dengan%20manfaat%20SchoolMantic%20untuk%20sekolah%20kami.%20Mohon%20informasi%20lebih%20lanjut."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                (window as any).gtag_report_conversion('https://wa.me/62811945222?text=Halo%2C%20saya%20tertarik%20dengan%20manfaat%20SchoolMantic%20untuk%20sekolah%20kami.%20Mohon%20informasi%20lebih%20lanjut.');
              }
            }}
            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Dapatkan Manfaat Ini Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsStakeholder;
