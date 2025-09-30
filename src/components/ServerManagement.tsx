import React from 'react';
import { Server, Shield, Database, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServerManagement: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();

  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Server Hosting',
      description: 'Server berperforma tinggi dengan ketersediaan 99.9%'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Pemeliharaan',
      description: 'Pemeliharaan dan update rutin tanpa biaya tambahan'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backup Data',
      description: 'Backup data otomatis untuk keamanan informasi'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Keamanan',
      description: 'Perlindungan data dengan enkripsi end-to-end'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={contentRef} className={`scroll-animate-left ${contentVisible ? 'animate' : ''}`}>
            <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight scroll-animate ${isVisible ? 'animate' : ''}`}>
              Urusan Aplikasi
              <span className="block text-indigo-600">Urusan Kami</span>
            </h2>
            
            <p className={`text-xl text-gray-600 mb-8 leading-relaxed scroll-animate ${isVisible ? 'animate' : ''} stagger-1`}>
              Semua Pengelolaan Server dan Aplikasi Ditangani oleh Tim Profesional Kami
            </p>
            
            <p className={`text-lg text-gray-700 mb-8 scroll-animate ${isVisible ? 'animate' : ''} stagger-2`}>
              Selanjutnya kami yang menyiapkan aplikasi di server online. Sekolah bisa mengakses aplikasi dari password yang kami berikan, termasuk server WhatsApp dan akun WhatsApp dari kami.
            </p>

            {/* Services Grid */}
            <div className={`grid sm:grid-cols-2 gap-6 scroll-animate ${isVisible ? 'animate' : ''} stagger-3`}>
              {services.map((service, index) => (
                <div key={index} className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 scroll-animate-scale ${isVisible ? 'animate' : ''} stagger-${index + 4}`}>
                  <div className="text-indigo-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div ref={imageRef} className={`relative scroll-animate-right ${imageVisible ? 'animate' : ''}`}>
            <img
              src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Server management and cloud infrastructure"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className={`absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg scroll-animate-scale ${imageVisible ? 'animate' : ''} stagger-1`}>
              <div className="text-2xl font-bold text-green-600">24/7</div>
              <div className="text-gray-600 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerManagement;