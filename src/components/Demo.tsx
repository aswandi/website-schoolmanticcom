import React from 'react';
import { ExternalLink, User, Lock, FileText } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Demo: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: leftCardRef, isVisible: leftCardVisible } = useScrollAnimation();
  const { ref: rightCardRef, isVisible: rightCardVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} id="demo" className="py-20 lg:py-32 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-animate ${headerVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            DEMO & PANDUAN
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Silahkan pelajari demo online kami untuk melihat fitur-fiturnya
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Demo Access */}
          <div ref={leftCardRef} className={`bg-white rounded-2xl p-8 shadow-xl scroll-animate-left ${leftCardVisible ? 'animate' : ''}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Akses Demo Online</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <ExternalLink className="w-6 h-6 text-indigo-600" />
                <div>
                  <div className="font-semibold text-gray-900">URL Demo:</div>
                  <a href="https://demo.schoolmantic.id" className="text-indigo-600 hover:underline">
                    https://demo.schoolmantic.id
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <User className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900 mb-2">Akses Admin:</div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div><strong>Username:</strong> admin@admin.com</div>
                    <div><strong>Password:</strong> admin</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FileText className="w-6 h-6 text-indigo-600" />
                <div>
                  <div className="font-semibold text-gray-900">Panduan Setting ADMS:</div>
                  <a href="#" className="text-indigo-600 hover:underline">Panduan Setting ADMS</a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800">
                <strong>Info:</strong> Jika ingin testing mesin absensi Anda, masukkan alamat demo.schoolmantic.id di menu cloud / ADMS.
              </p>
            </div>

            <button className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
              Akses Demo Sekarang
            </button>
          </div>

          {/* Right: Documentation */}
          <div ref={rightCardRef} className={`bg-white rounded-2xl p-8 shadow-xl scroll-animate-right ${rightCardVisible ? 'animate' : ''}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Panduan Schoolmantic</h3>
            
            <div className="mb-6">
              <img
                src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Documentation and guides"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-600 mb-6">
              Dokumentasi lengkap dan panduan step-by-step untuk implementasi sistem absensi SchoolMantic di sekolah Anda.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <FileText className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700">Panduan Instalasi</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <FileText className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700">Konfigurasi Sistem</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <FileText className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700">Troubleshooting</span>
              </div>
            </div>

            <button className="w-full mt-6 border-2 border-indigo-600 text-indigo-600 py-3 px-6 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors duration-200">
              Panduan Schoolmantic (Google Drive)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;