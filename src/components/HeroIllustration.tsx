import React from 'react';

const HeroIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-3xl blur-3xl animate-pulse"></div>
      
      <svg
        viewBox="0 0 400 350"
        className="relative w-full h-auto drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="fingerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          
          <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          
          <linearGradient id="whatsappGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#25D366" />
            <stop offset="100%" stopColor="#128C7E" />
          </linearGradient>
          
          <linearGradient id="scanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
          
          <linearGradient id="faceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          {/* Glow Filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="glowStrong">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Main Device - Fingerprint Scanner */}
        <g className="animate-float">
          {/* Scanner Body */}
          <rect x="50" y="80" width="140" height="180" rx="20" fill="url(#phoneGradient)" stroke="url(#fingerGradient)" strokeWidth="2"/>
          
          {/* Scanner Screen */}
          <rect x="60" y="95" width="120" height="130" rx="10" fill="#0f172a" stroke="#334155" strokeWidth="1"/>
          
          {/* Fingerprint Icon */}
          <g transform="translate(85, 115)" filter="url(#glow)">
            {/* Fingerprint Lines */}
            <path d="M35 5 C15 5, 5 20, 5 40 C5 55, 10 65, 20 70" fill="none" stroke="url(#fingerGradient)" strokeWidth="2" strokeLinecap="round" className="animate-draw">
              <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="2s" repeatCount="indefinite"/>
            </path>
            <path d="M35 15 C20 15, 12 25, 12 40 C12 50, 15 58, 22 62" fill="none" stroke="url(#fingerGradient)" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="stroke-dasharray" from="0,80" to="80,0" dur="2s" begin="0.2s" repeatCount="indefinite"/>
            </path>
            <path d="M35 25 C25 25, 20 32, 20 40 C20 48, 22 53, 26 56" fill="none" stroke="url(#fingerGradient)" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="stroke-dasharray" from="0,60" to="60,0" dur="2s" begin="0.4s" repeatCount="indefinite"/>
            </path>
            <path d="M35 35 C30 35, 28 38, 28 42 C28 46, 30 48, 32 50" fill="none" stroke="url(#fingerGradient)" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="stroke-dasharray" from="0,40" to="40,0" dur="2s" begin="0.6s" repeatCount="indefinite"/>
            </path>
            
            {/* Right side */}
            <path d="M35 5 C55 5, 65 20, 65 40 C65 55, 60 65, 50 70" fill="none" stroke="url(#fingerGradient)" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="2s" repeatCount="indefinite"/>
            </path>
            <path d="M35 15 C50 15, 58 25, 58 40 C58 50, 55 58, 48 62" fill="none" stroke="url(#fingerGradient)" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="stroke-dasharray" from="0,80" to="80,0" dur="2s" begin="0.2s" repeatCount="indefinite"/>
            </path>
            <path d="M35 25 C45 25, 50 32, 50 40 C50 48, 48 53, 44 56" fill="none" stroke="url(#fingerGradient)" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="stroke-dasharray" from="0,60" to="60,0" dur="2s" begin="0.4s" repeatCount="indefinite"/>
            </path>
          </g>
          
          {/* Scan Line Animation */}
          <rect x="65" y="100" width="110" height="4" fill="url(#scanGradient)" rx="2">
            <animate attributeName="y" values="100;215;100" dur="2s" repeatCount="indefinite"/>
          </rect>
          
          {/* Status Text */}
          <text x="120" y="245" textAnchor="middle" fill="#06b6d4" fontSize="10" fontFamily="monospace">
            <tspan>SCANNING...</tspan>
            <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/>
          </text>
        </g>

        {/* Face Recognition Device */}
        <g transform="translate(210, 60)" className="animate-float-delayed">
          {/* Device Body */}
          <rect x="0" y="0" width="130" height="160" rx="15" fill="url(#phoneGradient)" stroke="url(#faceGradient)" strokeWidth="2"/>
          
          {/* Screen */}
          <rect x="10" y="15" width="110" height="100" rx="8" fill="#0f172a"/>
          
          {/* Face Outline */}
          <g transform="translate(35, 25)" filter="url(#glow)">
            <ellipse cx="30" cy="35" rx="25" ry="32" fill="none" stroke="url(#faceGradient)" strokeWidth="2" strokeDasharray="5,3">
              <animate attributeName="stroke-dashoffset" from="0" to="50" dur="3s" repeatCount="indefinite"/>
            </ellipse>
            
            {/* Eyes */}
            <circle cx="20" cy="30" r="4" fill="url(#faceGradient)">
              <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="40" cy="30" r="4" fill="url(#faceGradient)">
              <animate attributeName="opacity" values="1;0.5;1" dur="2s" begin="0.1s" repeatCount="indefinite"/>
            </circle>
            
            {/* Scan Grid */}
            <line x1="5" y1="20" x2="55" y2="20" stroke="#f472b6" strokeWidth="0.5" opacity="0.5"/>
            <line x1="5" y1="35" x2="55" y2="35" stroke="#f472b6" strokeWidth="0.5" opacity="0.5"/>
            <line x1="5" y1="50" x2="55" y2="50" stroke="#f472b6" strokeWidth="0.5" opacity="0.5"/>
            <line x1="15" y1="5" x2="15" y2="65" stroke="#f472b6" strokeWidth="0.5" opacity="0.5"/>
            <line x1="30" y1="5" x2="30" y2="65" stroke="#f472b6" strokeWidth="0.5" opacity="0.5"/>
            <line x1="45" y1="5" x2="45" y2="65" stroke="#f472b6" strokeWidth="0.5" opacity="0.5"/>
          </g>
          
          {/* Recognition Status */}
          <rect x="25" y="125" width="80" height="20" rx="10" fill="#22c55e" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.5;0.9" dur="1.5s" repeatCount="indefinite"/>
          </rect>
          <text x="65" y="139" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">VERIFIED ✓</text>
        </g>

        {/* WhatsApp Notification */}
        <g transform="translate(240, 230)" filter="url(#glowStrong)" className="animate-bounce-slow">
          {/* Notification Bubble */}
          <rect x="0" y="0" width="140" height="80" rx="15" fill="url(#whatsappGradient)"/>
          
          {/* WhatsApp Icon */}
          <g transform="translate(10, 15)">
            <circle cx="15" cy="15" r="12" fill="white"/>
            <path d="M15 5 C9 5, 4 10, 4 16 C4 18.5, 5 21, 6.5 23 L5 27 L9.5 25.5 C11 26.5, 13 27, 15 27 C21 27, 26 22, 26 16 C26 10, 21 5, 15 5" fill="#25D366"/>
            <path d="M20 18.5 C19.5 18.3, 18 17.5, 17.5 17.3 C17 17.1, 16.7 17, 16.4 17.5 C16.1 18, 15.5 18.7, 15.2 19 C15 19.3, 14.7 19.3, 14.2 19.1 C13.7 18.9, 12.5 18.5, 11 17.2 C9.9 16.2, 9.1 15, 8.9 14.5 C8.7 14, 8.9 13.7, 9.1 13.5 C9.3 13.3, 9.5 13, 9.7 12.8 C9.9 12.6, 10 12.4, 10.1 12.1 C10.2 11.8, 10.1 11.5, 10 11.3 C9.9 11.1, 9.2 9.5, 8.9 8.5 C8.6 7.5, 8.3 7.7, 8.1 7.7 L7.5 7.7 C7.2 7.7, 6.7 7.8, 6.3 8.3 C5.9 8.8, 5 9.7, 5 11.3 C5 12.9, 6.3 14.5, 6.5 14.8 C6.7 15.1, 9.1 19, 12.8 20.3 C16.5 21.6, 16.5 21.2, 17.2 21.1 C17.9 21, 19.2 20.3, 19.5 19.6 C19.8 18.9, 19.8 18.3, 19.7 18.2 C19.6 18.1, 19.3 18, 18.8 17.8" fill="white"/>
          </g>
          
          {/* Message Text */}
          <text x="45" y="25" fill="white" fontSize="8" fontWeight="bold">Notifikasi Absensi</text>
          <text x="45" y="40" fill="white" fontSize="7" opacity="0.9">Anak Anda telah hadir</text>
          <text x="45" y="52" fill="white" fontSize="7" opacity="0.9">di sekolah pukul 07:15</text>
          <text x="45" y="68" fill="white" fontSize="6" opacity="0.7">Baru saja • SMA Negeri 1</text>
        </g>

        {/* Connection Lines */}
        <g stroke="url(#fingerGradient)" strokeWidth="2" fill="none" filter="url(#glow)">
          {/* Line from Fingerprint to WhatsApp */}
          <path d="M190 170 Q220 200, 250 240" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite"/>
          </path>
          
          {/* Line from Face to WhatsApp */}
          <path d="M275 220 Q270 235, 270 250" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite"/>
          </path>
        </g>

        {/* Floating Particles */}
        <g fill="#06b6d4" opacity="0.6">
          <circle cx="30" cy="50" r="2">
            <animate attributeName="cy" values="50;30;50" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="380" cy="100" r="3">
            <animate attributeName="cy" values="100;70;100" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="200" cy="320" r="2">
            <animate attributeName="cy" values="320;290;320" dur="3.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="50" cy="280" r="2.5">
            <animate attributeName="cy" values="280;250;280" dur="4.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4.5s" repeatCount="indefinite"/>
          </circle>
        </g>
        
        {/* Floating Particles Purple */}
        <g fill="#8b5cf6" opacity="0.5">
          <circle cx="370" cy="280" r="2">
            <animate attributeName="cy" values="280;260;280" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="20" cy="150" r="2.5">
            <animate attributeName="cy" values="150;130;150" dur="4s" repeatCount="indefinite"/>
          </circle>
        </g>
      </svg>
      
      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(210px); }
          50% { transform: translateY(-8px) translateX(210px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) translateX(240px); }
          50% { transform: translateY(-5px) translateX(240px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 4s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .animate-bounce-slow {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default HeroIllustration;
