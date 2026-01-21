import React, { useState } from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SocialMedia: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} id="social" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-animate ${headerVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            📱 Ikuti Sosial Media Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dapatkan update terbaru, tips, dan testimoni pengguna Schoolmantic
          </p>
        </div>

        <div ref={cardsRef} className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Instagram */}
          <div className={`bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 text-center scroll-animate-left ${cardsVisible ? 'animate' : ''}`}>
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Instagram</h3>
            <p className="text-lg font-semibold text-gray-800 mb-4">@schoolmantic.pmc</p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Follow Instagram kami untuk melihat update terbaru sistem absensi sekolah, demo aplikasi, dan implementasi di berbagai sekolah di Indonesia.
            </p>
            <a 
              href="https://www.instagram.com/schoolmantic.pmc/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
            >
              Follow Instagram
            </a>
          </div>

          {/* Facebook */}
          <div className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center scroll-animate-right ${cardsVisible ? 'animate' : ''}`}>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Facebook className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Facebook</h3>
            <p className="text-lg font-semibold text-gray-800 mb-4">Polmantic</p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Kunjungi halaman Facebook kami untuk mendapatkan informasi lengkap tentang produk, layanan support, dan komunitas pengguna Schoolmantic.
            </p>
            <a 
              href="https://www.facebook.com/polmantic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
            >
              Kunjungi Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;