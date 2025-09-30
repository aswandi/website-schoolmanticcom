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
    <section ref={sectionRef} id="fitur" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-animate ${headerVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Fitur Unggulan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SchoolMantic menawarkan solusi lengkap untuk kebutuhan absensi di sekolah Anda
          </p>
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group scroll-animate-scale ${gridVisible ? 'animate' : ''} stagger-${index + 1}`}
            >
              <div className="text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Image */}
        <div ref={imageRef} className={`mt-16 flex justify-center scroll-animate ${imageVisible ? 'animate' : ''}`}>
          <img
            src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="Modern school technology"
            className="w-full max-w-4xl rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;