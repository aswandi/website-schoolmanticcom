import React from 'react';
import { Smartphone, CreditCard, Fingerprint } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Overview: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const attendanceMethods = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Absensi manual web oleh wali kelas',
      description: 'Wali kelas dapat mencatat kehadiran siswa langsung melalui antarmuka web yang mudah digunakan.'
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Absensi dengan kartu siswa',
      description: 'Pilihan absensi menggunakan sensor RFID, barcode, atau QR code pada kartu siswa.'
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: 'Absensi dengan Biometrik',
      description: 'Sistem canggih menggunakan sidik jari, deteksi wajah, atau telapak tangan untuk verifikasi kehadiran yang akurat.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-indigo-900 circuit-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <div ref={imageRef} className={`order-2 lg:order-1 scroll-animate-left ${imageVisible ? 'animate' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl animate-glow"></div>
            <img
              src="https://images.pexels.com/photos/5212665/pexels-photo-5212665.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="School attendance system dashboard"
              className="relative w-full rounded-2xl shadow-xl animate-hologram"
            />
          </div>

          {/* Right Content */}
          <div ref={contentRef} className={`order-1 lg:order-2 scroll-animate-right ${contentVisible ? 'animate' : ''}`}>
            <div className={`mb-8 scroll-animate ${isVisible ? 'animate' : ''}`}>
              <h2 className="text-lg font-semibold text-cyan-400 mb-4 animate-glow">Gambaran</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight cyber-text">
                Absensi Siswa Fingerprint Otomatis WhatsApp
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                SchoolMantic adalah aplikasi absensi siswa sekolah, yang langsung terhubung ke server aplikasi dan otomatis mengirimkan WhatsApp ke wali siswa.
              </p>
            </div>

            <div className={`mb-8 scroll-animate ${isVisible ? 'animate' : ''} stagger-1`}>
              <p className="text-lg text-gray-300 mb-6 font-medium">
                Media absensinya tersedia dalam beberapa pilihan untuk memenuhi kebutuhan sekolah Anda:
              </p>
              
              <div className="space-y-6">
                {attendanceMethods.map((method, index) => (
                  <div key={index} className={`flex space-x-4 p-4 glass-morphism rounded-lg hover:bg-white/10 transition-all duration-300 scroll-animate ${isVisible ? 'animate' : ''} stagger-${index + 2} card-hover neon-border`}>
                    <div className="text-cyan-400 flex-shrink-0 animate-glow">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 cyber-text">{method.title}</h4>
                      <p className="text-gray-300">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;