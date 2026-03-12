import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: 'BERANDA', href: '#beranda' },
    { name: 'FITUR', href: '#fitur' },
    { name: 'PROPOSAL', href: '#proposal' },
    { name: 'HARGA', href: '#harga' },
    { name: 'DEMO & PANDUAN', href: '#demo' },
    { name: 'SOCIAL MEDIA', href: '#social' },
    { name: 'TANYA JAWAB', href: '#faq' },
    { name: 'FOTO', href: '/foto', isRoute: true }
  ];

  const productSubMenu = [
    { name: 'Website Sekolah', href: '/website-sekolah', icon: <Globe className="w-4 h-4" /> }
  ];

  const scrollToSection = (href: string, isRoute?: boolean) => {
    if (isRoute) {
      navigate(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
    setIsProductMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-morphism shadow-2xl border-b border-cyan-400/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo-schoolmantic.jpg"
              alt="SchoolMantic Logo"
              className="h-10 w-10 lg:h-12 lg:w-12 rounded-lg object-cover"
            />
            <span className="text-xl lg:text-2xl font-bold cyber-text">
              SCHOOLMANTIC
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href, item.isRoute)}
                className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${isScrolled ? 'text-white' : 'text-gray-300'} hover:glow`}
              >
                {item.name}
              </button>
            ))}

            {/* PRODUK BARU Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
                className={`flex items-center space-x-1 text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${isScrolled ? 'text-white' : 'text-gray-300'} hover:glow`}
              >
                <span className="relative">
                  PRODUK BARU
                  <span className="absolute -top-2 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold text-[10px] leading-none">
                    NEW
                  </span>
                </span>
                <ChevronDown className={`w-4 h-4 mt-1 transition-transform duration-200 ${isProductMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProductMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-52 glass-morphism border border-cyan-400/20 rounded-xl shadow-2xl py-2 overflow-hidden">
                  <div className="px-3 py-2 border-b border-gray-700/50">
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Produk Terbaru</p>
                  </div>
                  {productSubMenu.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsProductMenuOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 text-white hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 group"
                    >
                      <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-white hover:text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass-morphism shadow-xl border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href, item.isRoute)}
                  className="block w-full text-left text-white hover:text-cyan-400 font-medium transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile PRODUK BARU */}
              <div>
                <button
                  onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 font-medium transition-colors duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <span>PRODUK BARU</span>
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">NEW</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileProductOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileProductOpen && (
                  <div className="mt-2 ml-4 space-y-2 border-l border-cyan-400/30 pl-4">
                    {productSubMenu.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
