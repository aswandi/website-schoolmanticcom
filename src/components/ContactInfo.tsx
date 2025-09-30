import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactInfo: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: leftContentRef, isVisible: leftContentVisible } = useScrollAnimation();
  const { ref: rightImageRef, isVisible: rightImageVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-animate ${headerVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hubungi kami untuk informasi lebih lanjut atau untuk memulai proses implementasi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Information */}
          <div ref={leftContentRef} className={`scroll-animate-left ${leftContentVisible ? 'animate' : ''}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Informasi Kontak</h3>
            
            <div className="space-y-6">
              <div className={`flex items-start space-x-4 scroll-animate ${isVisible ? 'animate' : ''} stagger-1`}>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Alamat</h4>
                  <p className="text-gray-600">
                    POLMANTIC MEDIA CITRA<br />
                    Jl. Flamboyan No 28 Duta Kranji - Bekasi Kota
                  </p>
                  <button className="text-indigo-600 hover:underline mt-2">
                    Lihat di Google Maps
                  </button>
                </div>
              </div>

              <div className={`flex items-start space-x-4 scroll-animate ${isVisible ? 'animate' : ''} stagger-2`}>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
                  <p className="text-gray-600">0811945222</p>
                </div>
              </div>

              <div className={`flex items-start space-x-4 scroll-animate ${isVisible ? 'animate' : ''} stagger-3`}>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">info@schoolmantic.com</p>
                </div>
              </div>

              <div className={`flex items-start space-x-4 scroll-animate ${isVisible ? 'animate' : ''} stagger-4`}>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Jam Operasional</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Senin - Jumat: 08:00 - 17:00</p>
                    <p>Sabtu: 09:00 - 15:00</p>
                    <p>Minggu: Tutup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Image */}
          <div ref={rightImageRef} className={`relative scroll-animate-right ${rightImageVisible ? 'animate' : ''}`}>
            <img
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Contact us"
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h4 className="text-2xl font-bold mb-2">Siap Membantu Anda</h4>
              <p>Tim profesional kami siap memberikan solusi terbaik</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className={`mt-16 text-center bg-white rounded-2xl p-8 shadow-lg scroll-animate-scale ${ctaVisible ? 'animate' : ''}`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Mulai Transformasi Digital Sekolah Anda
          </h3>
          <p className="text-gray-600 mb-6">
            Hubungi kami sekarang untuk konsultasi gratis dan demo sistem
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
              WhatsApp Sekarang
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors duration-200">
              Kirim Email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;