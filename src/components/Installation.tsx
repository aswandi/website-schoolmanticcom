import React from 'react';
import { Wifi, Settings, BarChart3 } from 'lucide-react';
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

        {/* Installation Image */}
        <div ref={imageRef} className={`text-center scroll-animate ${imageVisible ? 'animate' : ''}`}>
          <img
            src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="Easy installation process"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Installation;