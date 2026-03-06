import React from 'react';
import { GraduationCap, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ClientSchools: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: schoolsRef, isVisible: schoolsVisible } = useScrollAnimation();

  const schools = [
    { name: 'SMK Harapan Bangsa', location: 'Depok' },
    { name: 'MTs Negeri 1 Bukittinggi', location: 'Bukittinggi' },
    { name: 'SMK Negeri 2 Surabaya', location: 'Surabaya' },
    { name: 'SMK PGRI Karang Ampel', location: 'Indramayu' },
    { name: 'SMA Negeri 1 Maluku Tengah', location: 'Maluku Tengah' },
    { name: 'SMP Negeri 34 Maluku Tengah', location: 'Maluku Tengah' },
    { name: 'SMK Teknika Cisaat', location: 'Kabupaten Sukabumi' },
    { name: 'SMK Rekayasa Denpasar', location: 'Denpasar' },
    { name: 'Bimbel Konstanta', location: 'Indonesia' },
    { name: 'SMP Negeri 1 Rogojampi', location: 'Kabupaten Banyuwangi' },
    { name: 'SMP Rahmaniyah', location: 'Kota Bogor' },
    { name: 'SMP Bina Salam', location: 'Bekasi' },
    { name: 'SMA Plus Bina Mandiri', location: 'Lampung' },
    { name: 'Sekolah Yamima', location: 'Indonesia' },
    { name: 'SMA Negeri 2 Air Sugihan', location: 'Kabupaten Ogan Komering Ilir' },
    { name: 'MAN Keerom', location: 'Kabupaten Keerom, Papua' },
    { name: 'SMA Negeri 30 Maluku Tengah', location: 'Maluku Tengah' },
    { name: 'Kumon Mayang', location: 'Kota Jambi' },
    { name: 'SMK TI Bulukumba', location: 'Kabupaten Bulukumba, Sulawesi Selatan' },
    { name: 'IB Course', location: 'Indonesia' },
    { name: 'SPAN Pangkal Pinang', location: 'Pangkal Pinang' },
    { name: 'SMP Al Munir Cikarang', location: 'Bekasi' },
    { name: 'MAN Bangkalan', location: 'Bangkalan' },
    { name: 'MTs Al Hasaniyyah', location: 'Tuban' },
    { name: 'SMK Pratama Mulya', location: 'Indonesia' },
    { name: 'SMK Perintis', location: 'Indonesia' },
    { name: 'MA Al Mansturiyah', location: 'Indonesia' },
    { name: 'SMP Tuban', location: 'Kabupaten Tuban, Jawa Timur' },
    { name: 'SMA Muhammadiyah 4 Porong', location: 'Kabupaten Sidoarjo' },
    { name: 'MA Ma\'arif 06', location: 'Lampung' },
    { name: 'MAN 1 Indramayu', location: 'Indramayu' },
    { name: 'MTs Negeri 4 Indramayu', location: 'Indramayu' },
    { name: 'SMA Negeri 7 Cirebon', location: 'Cirebon' },
    { name: 'SMP/SMA Nurul Iman', location: 'Palembang' },
    { name: 'SMK Negeri 1 Cirebon', location: 'Cirebon' }
  ];

  const stats = [
    { number: '35+', label: 'Sekolah Terdaftar', icon: <GraduationCap className="w-8 h-8" /> },
    { number: '15+', label: 'Kota di Indonesia', icon: <CheckCircle className="w-8 h-8" /> },
    { number: '10,000+', label: 'Siswa Terlayani', icon: <CheckCircle className="w-8 h-8" /> }
  ];

  return (
    <section ref={sectionRef as any} className="py-20 lg:py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef as any} className={`text-center mb-16 scroll-animate ${headerVisible ? 'animate' : ''}`}>
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-6">
            DIPERCAYA OLEH
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sekolah yang Sudah Menggunakan SchoolMantic
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bergabunglah dengan puluhan sekolah di seluruh Indonesia yang telah merasakan manfaat sistem absensi otomatis dengan notifikasi WhatsApp
          </p>
        </div>

        {/* Statistics */}
        <div ref={statsRef as any} className={`grid md:grid-cols-3 gap-8 mb-16 scroll-animate-scale ${statsVisible ? 'animate' : ''}`}>
          {stats.map((stat, index) => (
            <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 stagger-${index + 1}`}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Schools Marquee */}
        <div ref={schoolsRef as any} className={`scroll-animate ${schoolsVisible ? 'animate' : ''}`}>
          {/* First Row - Moving Right */}
          <div className="overflow-hidden mb-4">
            <div className="flex animate-marquee-right whitespace-nowrap">
              {[...schools.slice(0, 18), ...schools.slice(0, 18)].map((school, index) => (
                <div 
                  key={index} 
                  className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md mx-2 border border-indigo-100"
                >
                  <GraduationCap className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-900 font-semibold text-sm">{school.name}</span>
                  <span className="text-gray-500 text-sm ml-2">• {school.location}</span>
                  <CheckCircle className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Moving Left */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee-left whitespace-nowrap">
              {[...schools.slice(18), ...schools.slice(18)].map((school, index) => (
                <div 
                  key={index} 
                  className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md mx-2 border border-purple-100"
                >
                  <GraduationCap className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-900 font-semibold text-sm">{school.name}</span>
                  <span className="text-gray-500 text-sm ml-2">• {school.location}</span>
                  <CheckCircle className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes marquee-right {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          @keyframes marquee-left {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
          
          .animate-marquee-right {
            animation: marquee-right 40s linear infinite;
          }
          
          .animate-marquee-left {
            animation: marquee-left 40s linear infinite;
          }
          
          .animate-marquee-right:hover,
          .animate-marquee-left:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Sekolah Anda Selanjutnya?
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Bergabunglah dengan sekolah-sekolah terpercaya yang telah meningkatkan sistem absensi mereka
            </p>
            <a 
              href="https://wa.me/62811945222?text=Halo%2C%20saya%20tertarik%20untuk%20bergabung%20dengan%20SchoolMantic.%20Mohon%20informasi%20lebih%20lanjut."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                  (window as any).gtag_report_conversion('https://wa.me/62811945222?text=Halo%2C%20saya%20tertarik%20untuk%20bergabung%20dengan%20SchoolMantic.%20Mohon%20informasi%20lebih%20lanjut.');
                }
              }}
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Hubungi Kami Sekarang
              <CheckCircle className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSchools;
