import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Show button after 1 second
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Hide tooltip after 5 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleClick = () => {
    const url = 'https://wa.me/62811945222?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20SchoolMantic.%20Mohon%20informasi%20lebih%20lanjut.';
    
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion(url);
    } else {
      window.open(url, '_blank');
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col">
        {/* Tooltip */}
        {showTooltip && (
          <div className="mb-3 mr-2 bg-white rounded-lg shadow-2xl p-4 max-w-xs animate-bounce-in relative">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-sm font-semibold text-gray-900 mb-1">
              💬 Butuh Bantuan?
            </p>
            <p className="text-xs text-gray-600">
              Chat dengan tim kami untuk konsultasi gratis!
            </p>
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={handleClick}
          className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 animate-pulse-slow"
          aria-label="Chat WhatsApp"
        >
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
          
          {/* Icon */}
          <MessageCircle className="w-8 h-8 relative z-10" />
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
            1
          </div>
        </button>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default WhatsAppFloat;
