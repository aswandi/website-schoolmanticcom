import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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
  };

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
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href, item.isRoute)}
                className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${isScrolled ? 'text-white' : 'text-gray-300'} hover:glow`}
              >
                {item.name}
              </button>
            ))}
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;