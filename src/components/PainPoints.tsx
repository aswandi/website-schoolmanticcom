import React from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PainPoints: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: problemsRef, isVisible: problemsVisible } = useScrollAnimation();
  const { ref: solutionRef, isVisible: solutionVisible } = useScrollAnimation();

  const problems = [
    {
      icon: '👨‍👩‍👦',
      text: 'Orang tua komplain tidak tahu anaknya bolos',
      description: 'Komunikasi tidak transparan membuat orang tua khawatir'
    },
    {
      icon: '👨‍🏫',
      text: 'Guru repot rekap absensi manual',
      description: 'Membuang waktu berharga yang seharusnya untuk mengajar'
    },
    {
      icon: '💸',
      text: 'Biaya SMS mahal dan tidak efektif',
      description: 'Pulsa habis, notifikasi sering tidak terkirim'
    },
    {
      icon: '📝',
      text: 'Data absensi tidak real-time',
      description: 'Laporan terlambat, sulit monitoring kehadiran siswa'
    }
  ];

  return (
    <section ref={sectionRef as any} className="py-20 lg:py-32 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef as any} className={`text-center mb-16 scroll-animate ${headerVisible ? 'animate' : ''}`}>
          <div className="inline-flex items-center bg-red-100 text-red-600 px-6 py-3 rounded-full text-lg font-bold mb-6">
            <AlertCircle className="w-6 h-6 mr-2" />
            MASALAH YANG SERING DIALAMI
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Apakah Sekolah Anda Mengalami Ini?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Masalah klasik yang membuat kepala sekolah, guru, dan orang tua pusing
          </p>
        </div>

        {/* Problems Grid */}
        <div ref={problemsRef as any} className={`grid md:grid-cols-2 gap-6 mb-16 scroll-animate ${problemsVisible ? 'animate' : ''}`}>
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500 stagger-${index + 1}`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-3xl">
                    {problem.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start mb-2">
                    <X className="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-bold text-gray-900">{problem.text}</h3>
                  </div>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solution */}
        <div ref={solutionRef as any} className={`scroll-animate-scale ${solutionVisible ? 'animate' : ''}`}>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 shadow-2xl text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                SchoolMantic Solusinya! ✅
              </h3>
              
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Sistem absensi otomatis dengan notifikasi WhatsApp real-time. 
                Semua masalah teratasi dalam satu aplikasi!
              </p>

              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl mb-2">📱</div>
                  <div className="text-white font-semibold">Notifikasi WhatsApp Otomatis</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-white font-semibold">Data Real-Time</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl mb-2">💰</div>
                  <div className="text-white font-semibold">Hemat Biaya</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="text-white font-semibold">Mudah Digunakan</div>
                </div>
              </div>

              <a 
                href="https://wa.me/62811945222?text=Halo%2C%20saya%20ingin%20solusi%20untuk%20masalah%20absensi%20di%20sekolah%20kami.%20Mohon%20informasi%20SchoolMantic."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                    (window as any).gtag_report_conversion('https://wa.me/62811945222?text=Halo%2C%20saya%20ingin%20solusi%20untuk%20masalah%20absensi%20di%20sekolah%20kami.%20Mohon%20informasi%20SchoolMantic.');
                  }
                }}
                className="inline-flex items-center bg-white text-green-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Atasi Masalah Sekarang - Gratis Konsultasi
                <CheckCircle className="ml-3 w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
