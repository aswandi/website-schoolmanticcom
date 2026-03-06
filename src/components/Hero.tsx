import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import HeroIllustration from './HeroIllustration';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden cyber-grid">
        <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-glow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent animate-data-stream"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block text-white animate-neon-pulse">SCHOOLMANTIC</span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl cyber-text mt-2">
                Aplikasi Absensi Sekolah Otomatis WhatsApp
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Software absensi sidik jari siswa dengan <span className="text-cyan-400 font-semibold">notifikasi WhatsApp otomatis</span> ke wali siswa
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              {[
                'Notifikasi WhatsApp Real-time',
                'Cloud-based, Tanpa Server Lokal',
                'Support 24/7 dan Pemeliharaan Gratis'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 animate-glow" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col space-y-4">
              <a 
                href="https://wa.me/62811945222?text=Halo%2C%20saya%20ingin%20mulai%20gratis%20hari%20ini%20dengan%20SchoolMantic.%20Mohon%20informasi%20setup%2024%20jam."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                    (window as any).gtag_report_conversion('https://wa.me/62811945222?text=Halo%2C%20saya%20ingin%20mulai%20gratis%20hari%20ini%20dengan%20SchoolMantic.%20Mohon%20informasi%20setup%2024%20jam.');
                  }
                }}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center group"
              >
                <span className="flex flex-col items-start">
                  <span className="text-2xl">🚀 Mulai Gratis Hari Ini</span>
                  <span className="text-sm font-normal opacity-90">Setup 24 Jam + Konsultasi Gratis</span>
                </span>
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex items-center justify-center space-x-2 text-cyan-400 text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Tanpa Kartu Kredit • Cancel Kapan Saja</span>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;