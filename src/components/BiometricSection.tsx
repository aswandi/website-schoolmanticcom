import React from 'react';
import { Zap, Shield, Database, Bell } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BiometricSection: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      text: 'Verifikasi kehadiran dalam hitungan detik'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: 'Mencegah manipulasi data kehadiran'
    },
    {
      icon: <Database className="w-6 h-6" />,
      text: 'Terintegrasi langsung dengan database sekolah'
    },
    {
      icon: <Bell className="w-6 h-6" />,
      text: 'Notifikasi real-time ke wali siswa'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="cyber-grid absolute inset-0 opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={contentRef} className={`scroll-animate-left ${contentVisible ? 'animate' : ''}`}>
            <h2 className={`text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight scroll-animate ${isVisible ? 'animate' : ''}`}>
              Absensi Siswa Deteksi Wajah
              <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">Face Recognition</span>
            </h2>
            
            <div className={`mb-8 scroll-animate ${isVisible ? 'animate' : ''} stagger-1`}>
              <h3 className="text-2xl font-bold text-white mb-4">
                Teknologi Biometrik Canggih
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                Sistem absensi biometrik kami menggunakan teknologi pengenalan sidik jari dan wajah terkini untuk memastikan keakuratan data kehadiran.
              </p>
            </div>

            {/* Benefits List */}
            <div className={`space-y-4 scroll-animate ${isVisible ? 'animate' : ''} stagger-2`}>
              {benefits.map((benefit, index) => (
                <div key={index} className={`flex items-center space-x-4 p-4 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-lg scroll-animate ${isVisible ? 'animate' : ''} stagger-${index + 3} hover:border-cyan-400/50 hover:bg-slate-700/50 transition-all duration-300`}>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <span className="text-white font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div ref={imageRef} className={`relative scroll-animate-right ${imageVisible ? 'animate' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl animate-pulse"></div>
            <img
              src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Biometric face recognition system"
              className="relative w-full rounded-2xl shadow-2xl border border-slate-700/50"
            />
            <div className={`absolute -top-6 -right-6 bg-slate-800/90 backdrop-blur-sm border border-cyan-400/50 text-white p-6 rounded-xl shadow-lg scroll-animate-scale ${imageVisible ? 'animate' : ''} stagger-1`}>
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">{"< 3s"}</div>
              <div className="text-sm text-gray-200">Waktu Verifikasi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiometricSection;