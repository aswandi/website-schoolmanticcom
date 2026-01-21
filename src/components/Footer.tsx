import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const menuItems = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Fitur', href: '#fitur' },
    { name: 'Harga', href: '#harga' },
    { name: 'Demo', href: '#demo' },
    { name: 'Tanya Jawab', href: '#faq' },
    { name: 'Hubungi Kami', href: '#contact' }
  ];

  const services = [
    { name: 'Proposal di Slideshare', href: 'https://www.slideshare.net/slideshow/proposal-schoolmantic-absensi-sidikjari-notifikasi-whatsapp-2024/270050113', external: true },
    { name: 'Blog Schoolmantic', href: 'https://blog.schoolmantic.id/', external: true },
    { name: 'Foto', href: '/foto', external: false },
    { name: 'Instagram', href: 'https://www.instagram.com/schoolmantic.pmc/', external: true },
    { name: 'Facebook', href: 'https://www.facebook.com/polmantic', external: true }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white py-16 circuit-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo-schoolmantic.jpg" 
                alt="SchoolMantic Logo" 
                className="h-12 w-12 rounded-lg object-cover"
              />
              <span className="text-2xl font-bold cyber-text">SCHOOLMANTIC</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Software absensi sidik jari siswa dengan notifikasi WhatsApp otomatis ke wali siswa.
            </p>
          </div>

          {/* Menu Cepat */}
          <div>
            <h3 className="text-lg font-bold mb-6 cyber-text">Menu Cepat</h3>
            <div className="space-y-3">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-lg font-bold mb-6 cyber-text">Layanan</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                service.external ? (
                  <a
                    key={index}
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={service.href}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                )
              ))}
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