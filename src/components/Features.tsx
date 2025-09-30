import React from 'react';
import { 
  DollarSign, 
  Cloud, 
  MessageSquare, 
  Bell, 
  Monitor, 
  Settings 
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Features: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();

  const features = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Software-Free Investment',
      description: 'Sekolah tidak perlu anggaran besar untuk pembelian software, karena software sudah kami instalkan atas nama sekolah di server kami, sekolah tinggal akses dari internet',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Fully Cloud-Based – No Local Server',
      description: 'Tidak diperlukan komputer atau server di sekolah untuk menjalankan aplikasi, karena aplikasi web sudah online dari server kami 24 jam.',
      gradient: 'from-indigo-500 to-purple-400'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'WhatsApp Management',
      description: 'Kami kelola penuh akun whatsapp sekolah dan server API whatsapp, kami menyiapkan 1 akun untuk setiap 200an siswa, sekolah terima beres dan fokus ke administrasi sekolah.',
      gradient: 'from-green-500 to-emerald-400'
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: 'WhatsApp Notifications',
      description: 'Wali siswa / orang tua siswa akan mendapatkan pesan notifikasi whatsapp setiap siswa hadir, pulang dan juga jika tidak hadir, beserta informasi tanggal dan jam.',
      gradient: 'from-yellow-500 to-orange-400'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Real-Time Monitoring',
      description: 'Wali kelas bisa memantau kehadiran siswanya melalui handphone, cek siswa yang tidak hadir dan izin, pastikan sesuai dengan di data kehadiran kelas.',
      gradient: 'from-pink-500 to-rose-400'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Flexible System Options',
      description: 'Sekolah bisa memilih paket langganan, ada versi absensi oleh wali kelas langsung di kelas atau versi lengkap absensi deteksi wajah / sidik jari dan otomatis kirim whatsapp',
      gradient: 'from-violet-500 to-purple-400'
    }
  ];

  return (
    <section ref={sectionRef} id="fitur" className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="cyber-grid absolute inset-0 opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-animate ${headerVisible ? 'animate' : ''}`}>
          <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text text-sm font-bold tracking-wider uppercase mb-4">
            ADVANCED TECHNOLOGY
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Fitur Unggulan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            SchoolMantic menawarkan solusi lengkap untuk kebutuhan absensi di sekolah Anda
          </p>
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl shadow-2xl group scroll-animate-scale ${gridVisible ? 'animate' : ''} stagger-${index + 1} hover:border-cyan-400/50 transition-all duration-500 hover:shadow-cyan-400/20 hover:shadow-2xl hover:-translate-y-2`}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              {/* Icon with gradient background */}
              <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <div className="text-white w-full h-full flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="relative text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="relative text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 cyber-text">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Image */}
        <div ref={imageRef} className={`mt-16 flex justify-center scroll-animate ${imageVisible ? 'animate' : ''}`}>
          <div className="relative w-full max-w-4xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl animate-pulse"></div>
            <img
              src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Modern school technology"
              className="relative w-full rounded-2xl shadow-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;