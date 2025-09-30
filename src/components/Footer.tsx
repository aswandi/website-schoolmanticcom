import React from 'react';
import { Smartphone } from 'lucide-react';

const Footer: React.FC = () => {
  const menuItems = [
    'Beranda', 'Fitur', 'Harga', 'Demo', 'Tanya Jawab', 'Hubungi Kami'
  ];

  const services = [
    'Proposal di Slideshare', 'Blog Schoolmantic', 'Foto', 'Instagram', 'Facebook'
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white py-16 circuit-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg animate-glow">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold cyber-text">SCHOOLMANTIC</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Software absensi sidik jari siswa dengan notifikasi WhatsApp otomatis ke wali siswa.
            </p>
          </div>

          {/* Menu Cepat */}
          <div>
            <h3 className="text-lg font-bold mb-6 cyber-text">Menu Cepat</h3>
            <div className="space-y-3">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-lg font-bold mb-6 cyber-text">Layanan</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 cyber-text">Kontak</h3>
              <div className="space-y-2 text-gray-300">
                <p>POLMANTIC MEDIA CITRA</p>
                <p>Jl. Flamboyan No 28 Duta Kranji - Bekasi Kota</p>
                <p>WhatsApp: <span className="text-cyan-400">0811945222</span></p>
                <p>info@schoolmantic.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © 2025 SCHOOLMANTIC - POLMANTIC MEDIA CITRA. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;