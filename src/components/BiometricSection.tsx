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
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 tech-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={contentRef} className={`scroll-animate-left ${contentVisible ? 'animate' : ''}`}>
            <h2 className={`text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight scroll-animate ${isVisible ? 'animate' : ''} animate-neon-pulse`}>
              Absensi Siswa Deteksi Wajah
              <span className="block cyber-text">Face Recognition</span>
            </h2>
            
            <div className={`mb-8 scroll-animate ${isVisible ? 'animate' : ''} stagger-1`}>
              <h3 className="text-2xl font-bold text-white mb-4 cyber-text">
                Teknologi Biometrik Canggih
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Sistem absensi biometrik kami menggunakan teknologi pengenalan sidik jari dan wajah terkini untuk memastikan keakuratan data kehadiran.
              </p>
            </div>

            {/* Benefits List */}
            <div className={`space-y-4 scroll-animate ${isVisible ? 'animate' : ''} stagger-2`}>
              {benefits.map((benefit, index) => (
                <div key={index} className={`flex items-center space-x-4 p-4 glass-morphism rounded-lg scroll-animate ${isVisible ? 'animate' : ''} stagger-${index + 3} card-hover neon-border`}>
                  <div className="text-cyan-400 flex-shrink-0 animate-glow">
                    {benefit.icon}
                  </div>
                  <span className="text-gray-300 font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div ref={imageRef} className={`relative scroll-animate-right ${imageVisible ? 'animate' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl animate-glow"></div>
            <img
              src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Biometric face recognition system"
              className="relative w-full rounded-2xl shadow-2xl animate-hologram"
            />
            <div className={`absolute -top-6 -right-6 glass-morphism text-white p-6 rounded-xl shadow-lg scroll-animate-scale ${imageVisible ? 'animate' : ''} stagger-1 neon-border`}>
              <div className="text-3xl font-bold cyber-text">{"< 3s"}</div>
              <div className="text-sm text-gray-300">Waktu Verifikasi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiometricSection;