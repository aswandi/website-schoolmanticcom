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
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={contentRef} className={`scroll-animate-left ${contentVisible ? 'animate' : ''}`}>
            <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight scroll-animate ${isVisible ? 'animate' : ''}`}>
              Absensi Siswa Deteksi Wajah
              <span className="block text-indigo-600">Face Recognition</span>
            </h2>
            
            <div className={`mb-8 scroll-animate ${isVisible ? 'animate' : ''} stagger-1`}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Teknologi Biometrik Canggih
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sistem absensi biometrik kami menggunakan teknologi pengenalan sidik jari dan wajah terkini untuk memastikan keakuratan data kehadiran.
              </p>
            </div>

            {/* Benefits List */}
            <div className={`space-y-4 scroll-animate ${isVisible ? 'animate' : ''} stagger-2`}>
              {benefits.map((benefit, index) => (
                <div key={index} className={`flex items-center space-x-4 p-4 bg-indigo-50 rounded-lg scroll-animate ${isVisible ? 'animate' : ''} stagger-${index + 3}`}>
                  <div className="text-indigo-600 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div ref={imageRef} className={`relative scroll-animate-right ${imageVisible ? 'animate' : ''}`}>
            <img
              src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Biometric face recognition system"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className={`absolute -top-6 -right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl shadow-lg scroll-animate-scale ${imageVisible ? 'animate' : ''} stagger-1`}>
              <div className="text-3xl font-bold">{"< 3s"}</div>
              <div className="text-sm">Waktu Verifikasi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiometricSection;