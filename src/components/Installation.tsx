import React from 'react';
import { Wifi, Settings, BarChart3, FileText, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Installation: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();

  const steps = [
    {
      number: '1',
      icon: <Settings className="w-8 h-8" />,
      title: 'Pasang Mesin Absensi',
      description: 'Cukup pasang mesin absensi (fingerprint atau deteksi wajah) di sekolah Anda.'
    },
    {
      number: '2', 
      icon: <Wifi className="w-8 h-8" />,
      title: 'Sambungkan ke Internet',
      description: 'Sambungkan kabel LAN ke switch internet sekolah. Selesai!'
    },
    {
      number: '3',
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Akses Data Real-Time',
      description: 'Data kehadiran dapat dilihat saat itu juga (REAL TIME) melalui aplikasi yang kami siapkan di server online.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`text-center mb-16 scroll-animate ${headerVisible ? 'animate' : ''}`}>
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-6">
            TIDAK RIBET
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Easy Installation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Instalasi Mudah, Langsung Bisa Digunakan
          </p>
        </div>

        <div ref={stepsRef} className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className={`text-center scroll-animate-scale ${stepsVisible ? 'animate' : ''} stagger-${index + 1}`}>
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <div className="text-indigo-600 flex justify-center">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Proposal Link */}
        <div ref={imageRef} className={`text-center scroll-animate ${imageVisible ? 'animate' : ''}`}>
          <a 
            href="https://www.slideshare.net/slideshow/proposal-schoolmantic-absensi-sidikjari-notifikasi-whatsapp-2024/270050113"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-4xl mx-auto group"
          >
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl shadow-xl p-12 hover:shadow-2xl hover:border-indigo-400 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-24 h-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FileText className="w-12 h-12" />
                </div>
                
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    Proposal SchoolMantic
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Absensi Sidik Jari dengan Notifikasi WhatsApp
                  </p>
                  <div className="inline-flex items-center space-x-2 text-indigo-600 font-semibold group-hover:text-purple-600 transition-colors">
                    <span>Lihat Proposal Lengkap</span>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span className="px-4 py-2 bg-white rounded-full border border-gray-200">PDF Presentation</span>
                  <span className="px-4 py-2 bg-white rounded-full border border-gray-200">SlideShare</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Installation;