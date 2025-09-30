import React from 'react';
import { Instagram, Facebook, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SocialMedia: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: communityRef, isVisible: communityVisible } = useScrollAnimation();

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
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
              Follow Instagram
            </button>
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
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
              Kunjungi Facebook
            </button>
          </div>
        </div>

        {/* Community Section */}
        <div ref={communityRef} className={`bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white scroll-animate-scale ${communityVisible ? 'animate' : ''}`}>
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            Bergabunglah dengan Komunitas Schoolmantic
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Dapatkan tips, update produk, dan berbagi pengalaman dengan pengguna lain
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Follow Instagram
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200">
              Like Facebook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;