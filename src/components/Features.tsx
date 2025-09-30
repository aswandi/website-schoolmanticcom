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
      description: 'Sekolah tidak perlu anggaran besar untuk pembelian software, karena software sudah kami instalkan atas nama sekolah di server kami, sekolah tinggal akses dari internet'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Fully Cloud-Based – No Local Server',
      description: 'Tidak diperlukan komputer atau server di sekolah untuk menjalankan aplikasi, karena aplikasi web sudah online dari server kami 24 jam.'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Manage WhatsApp without the hassle',
      description: 'Kami kelola penuh akun whatsapp sekolah dan server API whatsapp, kami menyiapkan 1 akun untuk setiap 200an siswa, sekolah terima beres dan fokus ke administrasi sekolah.'
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: 'WhatsApp Notifications',
      description: 'Wali siswa / orang tua siswa akan mendapatkan pesan notifikasi whatsapp setiap siswa hadir, pulang dan juga jika tidak hadir, beserta informasi tanggal dan jam.'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Real-Time Monitoring',
      description: 'Wali kelas bisa memantau kehadiran siswanya melalui handphone, cek siswa yang tidak hadir dan izin, pastikan sesuai dengan di data kehadiran kelas.'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Flexible attendance system options',
      description: 'Sekolah bisa memilih paket langganan, ada versi absensi oleh wali kelas langsung di kelas atau versi lengkap absensi deteksi wajah / sidik jari dan otomatis kirim whatsapp'
    }
  ];

  return (
    <section ref={sectionRef} id="fitur" className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 tech-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-animate ${headerVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-neon-pulse">
            Fitur Unggulan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            SchoolMantic menawarkan solusi lengkap untuk kebutuhan absensi di sekolah Anda
          </p>
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`glass-morphism p-8 rounded-2xl shadow-lg card-hover group scroll-animate-scale ${gridVisible ? 'animate' : ''} stagger-${index + 1} neon-border circuit-pattern`}
            >
              <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300 animate-glow">
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
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
          <img
            src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="Modern school technology"
            className="relative w-full max-w-4xl rounded-2xl shadow-xl animate-hologram"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;