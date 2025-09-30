import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

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
                Aplikasi Absensi Sekolah
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
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold btn-hover neon-border flex items-center justify-center group">
                Coba Gratis 1 Bulan
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="glass-morphism text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-cyan-400/50">
                Lihat Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl animate-glow"></div>
              <img
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students using biometric attendance system"
                className="relative w-full rounded-2xl shadow-2xl animate-hologram"
              />
              <div className="absolute -bottom-6 -left-6 glass-morphism p-6 rounded-xl shadow-lg neon-border">
                <div className="text-2xl font-bold cyber-text">99.9%</div>
                <div className="text-gray-300 text-sm">Akurasi Sistem</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;