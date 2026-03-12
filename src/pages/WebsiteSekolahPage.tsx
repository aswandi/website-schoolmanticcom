import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, CheckCircle, Star, Globe, Smartphone, Shield, Zap,
  BookOpen, Users, Bell, Image, Calendar, FileText, Award, ChevronDown,
  ExternalLink, MessageSquare, ArrowRight, Monitor, Layout, Search,
  Megaphone, GraduationCap, Building2
} from 'lucide-react';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WebsiteSekolahPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { ref: pricingRef, isVisible: pricingVisible } = useScrollAnimation();
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();
  const { ref: demoRef, isVisible: demoVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'Halaman Beranda Modern',
      description: 'Tampilan beranda yang menarik dengan hero banner, slider foto, dan informasi sekolah yang terstruktur rapi. Desain responsif untuk semua perangkat.',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Berita & Pengumuman',
      description: 'Kelola berita sekolah, pengumuman kegiatan, dan informasi penting secara mudah. Orang tua dan siswa selalu update dengan informasi terkini.',
      gradient: 'from-indigo-500 to-purple-400'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Profil Sekolah Lengkap',
      description: 'Tampilkan visi misi, sejarah sekolah, akreditasi, prestasi, dan program unggulan. Bangun kepercayaan calon siswa baru dan orang tua.',
      gradient: 'from-green-500 to-emerald-400'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Data Guru & Staff',
      description: 'Halaman profil guru dan tenaga kependidikan lengkap beserta kualifikasi, mata pelajaran, dan informasi kontak yang mudah diakses.',
      gradient: 'from-yellow-500 to-orange-400'
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: 'Galeri Foto & Video',
      description: 'Galeri kegiatan sekolah yang menarik untuk menampilkan momen berharga, kegiatan ekstrakurikuler, dan prestasi siswa kepada publik.',
      gradient: 'from-pink-500 to-rose-400'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'PPDB Online',
      description: 'Sistem Penerimaan Peserta Didik Baru (PPDB) online yang memudahkan pendaftaran tanpa antrian panjang. Formulir digital terintegrasi.',
      gradient: 'from-violet-500 to-purple-400'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Kalender Akademik',
      description: 'Jadwal kegiatan sekolah, ujian, libur nasional, dan agenda penting lainnya ditampilkan dalam kalender interaktif yang mudah dipahami.',
      gradient: 'from-cyan-500 to-blue-400'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO Friendly',
      description: 'Dioptimalkan untuk mesin pencari Google agar sekolah Anda mudah ditemukan saat orang tua mencari sekolah terbaik di wilayah Anda.',
      gradient: 'from-orange-500 to-red-400'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Tampilan Mobile Responsif',
      description: 'Website tampil sempurna di semua perangkat: smartphone, tablet, dan komputer. Memberikan pengalaman terbaik bagi semua pengunjung.',
      gradient: 'from-teal-500 to-green-400'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Keamanan SSL & Hosting',
      description: 'Dilengkapi sertifikat SSL (HTTPS) untuk keamanan data, hosting server Indonesia dengan uptime tinggi dan loading cepat.',
      gradient: 'from-slate-500 to-gray-400'
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: 'Notifikasi & Kontak',
      description: 'Formulir kontak terintegrasi, tombol WhatsApp langsung, dan informasi kontak sekolah yang mudah ditemukan oleh pengunjung.',
      gradient: 'from-amber-500 to-yellow-400'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Halaman Prestasi Sekolah',
      description: 'Tampilkan prestasi akademik dan non-akademik, penghargaan, dan pencapaian siswa untuk meningkatkan kepercayaan dan citra sekolah.',
      gradient: 'from-red-500 to-pink-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Paket Starter',
      price: 'Rp 1.500.000',
      period: 'Sekali bayar',
      badge: null,
      color: 'from-blue-500 to-cyan-500',
      features: [
        { text: 'Desain template pilihan (5 tema)', available: true },
        { text: 'Halaman: Beranda, Profil, Kontak', available: true },
        { text: 'Berita & Pengumuman', available: true },
        { text: 'Galeri Foto (max 50 foto)', available: true },
        { text: 'Responsif Mobile', available: true },
        { text: 'SSL (HTTPS)', available: true },
        { text: 'Hosting 1 tahun', available: true },
        { text: 'Domain .sch.id / .com', available: false },
        { text: 'PPDB Online', available: false },
        { text: 'Halaman Guru & Staff', available: false },
        { text: 'Kalender Akademik', available: false },
        { text: 'Revisi desain 2x', available: true }
      ],
      maintenance: 'Rp 300.000 / tahun',
      buttonText: '💬 Pesan Paket Starter',
      waText: 'Halo, saya tertarik dengan Paket Starter Website Sekolah SchoolMantic. Mohon informasi lebih lanjut.',
      buttonStyle: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-blue-500/50 hover:scale-105'
    },
    {
      name: 'Paket Professional',
      price: 'Rp 3.500.000',
      period: 'Sekali bayar',
      badge: 'TERPOPULER',
      color: 'from-indigo-600 to-purple-600',
      features: [
        { text: 'Desain custom sesuai identitas sekolah', available: true },
        { text: 'Semua halaman lengkap (8+ halaman)', available: true },
        { text: 'Berita & Pengumuman', available: true },
        { text: 'Galeri Foto & Video (unlimited)', available: true },
        { text: 'Responsif Mobile', available: true },
        { text: 'SSL (HTTPS)', available: true },
        { text: 'Hosting 1 tahun', available: true },
        { text: 'Domain .sch.id atau .com', available: true },
        { text: 'PPDB Online', available: true },
        { text: 'Halaman Guru & Staff', available: true },
        { text: 'Kalender Akademik', available: true },
        { text: 'Revisi desain 5x', available: true }
      ],
      maintenance: 'Rp 500.000 / tahun',
      buttonText: '⭐ Pesan Paket Professional',
      waText: 'Halo, saya tertarik dengan Paket Professional Website Sekolah SchoolMantic. Mohon informasi lebih lanjut.',
      buttonStyle: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-indigo-500/50 hover:scale-105'
    },
    {
      name: 'Paket Premium',
      price: 'Rp 6.500.000',
      period: 'Sekali bayar',
      badge: 'LENGKAP',
      color: 'from-amber-500 to-orange-500',
      features: [
        { text: 'Desain eksklusif full custom', available: true },
        { text: 'Semua halaman + halaman tambahan', available: true },
        { text: 'Berita & Pengumuman', available: true },
        { text: 'Galeri Foto & Video (unlimited)', available: true },
        { text: 'Responsif Mobile', available: true },
        { text: 'SSL (HTTPS)', available: true },
        { text: 'Hosting 1 tahun + domain gratis', available: true },
        { text: 'Domain .sch.id atau .com', available: true },
        { text: 'PPDB Online + Panel Admin', available: true },
        { text: 'Halaman Guru & Staff + foto', available: true },
        { text: 'Kalender Akademik interaktif', available: true },
        { text: 'Revisi desain unlimited', available: true }
      ],
      maintenance: 'Rp 700.000 / tahun',
      extras: ['Integrasi Google Maps', 'WhatsApp Button', 'SEO Optimization', 'Training penggunaan CMS', 'Support 3 bulan gratis'],
      buttonText: '🚀 Pesan Paket Premium',
      waText: 'Halo, saya tertarik dengan Paket Premium Website Sekolah SchoolMantic. Mohon informasi lebih lanjut.',
      buttonStyle: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-amber-500/50 hover:scale-105'
    }
  ];

  const faqs = [
    {
      question: 'Berapa lama proses pembuatan website sekolah?',
      answer: 'Proses pengerjaan website sekolah berkisar antara 7-21 hari kerja tergantung paket yang dipilih dan kelengkapan konten dari sekolah. Paket Starter sekitar 7-10 hari, Professional 10-14 hari, dan Premium 14-21 hari.'
    },
    {
      question: 'Apakah sekolah bisa mengelola konten website sendiri?',
      answer: 'Ya! Setiap website dilengkapi dengan sistem CMS (Content Management System) yang mudah digunakan. Admin sekolah dapat menambahkan berita, foto, pengumuman, dan informasi lainnya tanpa perlu keahlian coding.'
    },
    {
      question: 'Apakah bisa menggunakan domain .sch.id?',
      answer: 'Tentu bisa! Domain .sch.id adalah domain resmi untuk sekolah di Indonesia. Paket Professional dan Premium sudah termasuk domain .sch.id atau .com sesuai pilihan sekolah. Proses registrasi domain .sch.id memerlukan dokumen legalitas sekolah.'
    },
    {
      question: 'Bagaimana dengan pemeliharaan website setelah jadi?',
      answer: 'Kami menyediakan layanan pemeliharaan tahunan yang mencakup update keamanan, backup data, dan dukungan teknis. Biaya pemeliharaan sudah termasuk hosting dan domain untuk tahun berikutnya.'
    },
    {
      question: 'Apakah ada garansi website setelah selesai dibuat?',
      answer: 'Ya, kami memberikan garansi perbaikan bug dan error selama 3 bulan setelah website diluncurkan. Jika ada masalah teknis, kami akan segera memperbaikinya tanpa biaya tambahan.'
    },
    {
      question: 'Apakah bisa dilihat contoh website sekolah yang sudah dibuat?',
      answer: 'Ya! Anda bisa melihat contoh demo website sekolah kami di https://demowebsekolah.schoolmantic.com/ untuk melihat tampilan dan fitur-fitur yang tersedia.'
    },
    {
      question: 'Apakah website sudah SEO friendly?',
      answer: 'Ya, semua website yang kami buat sudah dioptimalkan untuk mesin pencari (SEO). Ini membantu website sekolah Anda mudah ditemukan di Google saat orang tua mencari sekolah di wilayah Anda.'
    }
  ];

  const stats = [
    { value: '50+', label: 'Sekolah Terbantu', icon: <Building2 className="w-6 h-6" /> },
    { value: '99%', label: 'Kepuasan Klien', icon: <Star className="w-6 h-6" /> },
    { value: '7 Hari', label: 'Proses Tercepat', icon: <Zap className="w-6 h-6" /> },
    { value: '24/7', label: 'Support Aktif', icon: <MessageSquare className="w-6 h-6" /> }
  ];

  const processSteps = [
    { num: '01', title: 'Konsultasi Gratis', desc: 'Hubungi kami via WhatsApp untuk mendiskusikan kebutuhan website sekolah Anda. Tim kami siap memberikan saran terbaik.' },
    { num: '02', title: 'Kirim Konten', desc: 'Siapkan dan kirimkan konten: foto sekolah, logo, daftar guru, berita, dan informasi lainnya yang ingin ditampilkan.' },
    { num: '03', title: 'Proses Pengerjaan', desc: 'Tim desainer dan developer kami mengerjakan website sesuai paket yang dipilih dengan standar kualitas tinggi.' },
    { num: '04', title: 'Review & Revisi', desc: 'Website ditampilkan untuk direview. Sekolah dapat meminta revisi sesuai jumlah yang tertera pada paket.' },
    { num: '05', title: 'Website Live!', desc: 'Website sekolah resmi diluncurkan dan dapat diakses oleh publik. Kami berikan panduan penggunaan CMS.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Sticky Header */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-morphism shadow-2xl border-b border-cyan-400/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-semibold hidden sm:inline">Kembali ke Beranda</span>
              </Link>
              <div className="h-6 w-px bg-gray-600 hidden sm:block"></div>
              <Link to="/" className="flex items-center space-x-2">
                <img src="/logo-schoolmantic.jpg" alt="SchoolMantic" className="h-8 w-8 rounded-lg object-cover" />
                <span className="text-white font-bold cyber-text text-lg">SCHOOLMANTIC</span>
              </Link>
            </div>
            <a
              href={`https://wa.me/62811945222?text=${encodeURIComponent('Halo, saya tertarik dengan jasa pembuatan Website Sekolah SchoolMantic. Mohon informasi lebih lanjut.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Konsultasi Gratis</span>
            </a>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden cyber-grid">
          <div className="absolute top-20 left-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 rounded-full px-6 py-2 mb-8">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Jasa Pembuatan Website Sekolah</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="block text-white">Website Sekolah</span>
              <span className="block cyber-text mt-2">Profesional & Modern</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
              Tingkatkan citra dan kepercayaan sekolah Anda dengan website yang
              <span className="text-cyan-400 font-semibold"> modern, informatif, dan mudah dikelola</span>
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto">
              Khusus untuk sekolah SD, SMP, SMA, SMK, dan Madrasah di seluruh Indonesia. Harga terjangkau, kualitas premium.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={`https://wa.me/62811945222?text=${encodeURIComponent('Halo, saya ingin konsultasi gratis pembuatan Website Sekolah SchoolMantic.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 flex items-center space-x-3 group"
              >
                <MessageSquare className="w-6 h-6" />
                <span className="flex flex-col items-start">
                  <span>Konsultasi Gratis via WhatsApp</span>
                  <span className="text-sm font-normal opacity-90">Respon cepat dalam 1 jam</span>
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://demowebsekolah.schoolmantic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/80 border border-cyan-400/50 text-cyan-400 px-8 py-5 rounded-xl font-bold text-lg hover:bg-cyan-400/10 hover:scale-105 transition-all duration-300 flex items-center space-x-3 group"
              >
                <Monitor className="w-6 h-6" />
                <span className="flex flex-col items-start">
                  <span>Lihat Demo Website</span>
                  <span className="text-sm font-normal text-gray-400">demowebsekolah.schoolmantic.com</span>
                </span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              {['Gratis Konsultasi', 'Garansi 3 Bulan', 'Domain Included', 'SEO Friendly', 'SSL Certificate'].map((badge) => (
                <div key={badge} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Preview */}
          <div className={`mt-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl blur-xl animate-pulse"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-4 shadow-2xl">
                {/* Browser mockup */}
                <div className="bg-slate-700/50 rounded-lg p-3 mb-3 flex items-center space-x-3">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-slate-600/50 rounded-md px-3 py-1.5 text-gray-300 text-sm flex items-center space-x-2">
                    <Globe className="w-3 h-3 text-cyan-400" />
                    <span>demowebsekolah.schoolmantic.com</span>
                  </div>
                  <a
                    href="https://demowebsekolah.schoolmantic.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                {/* Demo website mockup - SMA 1 POLMANTIC */}
                <a
                  href="https://demowebsekolah.schoolmantic.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg overflow-hidden group relative"
                >
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 text-slate-900 px-5 py-3 rounded-xl font-bold text-sm flex items-center space-x-2 shadow-2xl">
                      <ExternalLink className="w-4 h-4" />
                      <span>Buka Demo Website Sekolah</span>
                    </div>
                  </div>
                  {/* Navbar mockup */}
                  <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100">
                    <span className="text-cyan-600 font-bold text-sm tracking-wide">SMA 1 POLMANTIC</span>
                    <div className="hidden sm:flex items-center space-x-3 text-gray-600 text-xs">
                      {["Beranda","Tentang","Fasilitas","Prestasi","Guru & Staff","Berita","Galeri","SPMB","Kontak"].map(m => (
                        <span key={m} className="hover:text-cyan-600">{m}</span>
                      ))}
                    </div>
                    <div className="bg-cyan-500 text-white text-xs px-3 py-1.5 rounded-lg font-semibold flex items-center space-x-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      <span>Hubungi Kami</span>
                    </div>
                  </div>
                  {/* Hero section mockup */}
                  <div className="relative bg-gradient-to-br from-cyan-500 via-teal-500 to-blue-600 px-6 pt-8 pb-0 overflow-hidden" style={{minHeight: "280px"}}>
                    {/* Background school building overlay */}
                    <div className="absolute inset-0 opacity-20" style={{background: "linear-gradient(135deg, #0891b2 0%, #0e7490 40%, #164e63 100%)"}}></div>
                    <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25">
                      <div className="w-full h-full bg-gradient-to-l from-blue-300/40 to-transparent"></div>
                    </div>
                    <div className="relative z-10 max-w-lg">
                      {/* Badge */}
                      <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 mb-4">
                        <span className="text-white text-xs font-medium">🏆 Sekolah Unggulan Bekasi</span>
                      </div>
                      {/* Title */}
                      <h2 className="text-white font-black text-3xl sm:text-4xl leading-tight mb-1" style={{fontFamily: "system-ui, sans-serif"}}>
                        SMA 1 POLMANTIC
                      </h2>
                      {/* Orange underline */}
                      <div className="w-48 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mb-4"></div>
                      {/* Description */}
                      <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-6 max-w-xs">
                        Membentuk generasi berintegritas, berprestasi, dan mandiri melalui pendidikan berkarakter dengan fasilitas modern dan kurikulum terpadan.
                      </p>
                      {/* Buttons */}
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white text-xs font-bold px-5 py-2.5 rounded-lg shadow-lg">
                          Daftar Sekarang
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm border border-white/40 text-white text-xs font-semibold px-5 py-2.5 rounded-lg">
                          Pelajari Lebih Lanjut
                        </div>
                      </div>
                    </div>
                    {/* Stats Cards */}
                    <div className="relative z-10 grid grid-cols-4 gap-2 mt-4">
                      {[
                        {val: "1.200+", label: "Siswa Aktif", icon: "👤"},
                        {val: "98%", label: "Lulus Perguruan Tinggi", icon: "🎓"},
                        {val: "150+", label: "Penghargaan", icon: "🏆"},
                        {val: "25+", label: "Tahun Berdiri", icon: "📚"}
                      ].map((s, i) => (
                        <div key={i} className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                          <div className="text-orange-300 text-lg mb-1">{s.icon}</div>
                          <div className="text-white font-black text-lg leading-none">{s.val}</div>
                          <div className="text-white/70 text-xs mt-1 leading-tight">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section ref={statsRef as any} className="py-16 bg-slate-900/50 border-y border-cyan-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center scroll-animate-scale ${statsVisible ? 'animate' : ''} stagger-${index + 1}`}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SCHOOL NEEDS WEBSITE */}
      <section ref={whyRef as any} className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-animate ${whyVisible ? 'animate' : ''}`}>
            <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text text-sm font-bold tracking-wider uppercase mb-4">
              MENGAPA PERLU WEBSITE?
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Sekolah Tanpa Website<br />
              <span className="cyber-text">Seperti Toko Tanpa Papan Nama</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Di era digital ini, orang tua mencari informasi sekolah lewat internet sebelum mendaftarkan anak mereka. Tanpa website, sekolah Anda "tidak terlihat" oleh mereka.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔍',
                title: '92% Orang Tua Cari Sekolah Lewat Google',
                desc: 'Riset menunjukkan mayoritas orang tua mencari informasi sekolah melalui pencarian Google. Tanpa website, peluang mendapat siswa baru semakin kecil.'
              },
              {
                icon: '🏆',
                title: 'Tingkatkan Kredibilitas Sekolah',
                desc: 'Website profesional membuat sekolah terlihat lebih kredibel dan terpercaya. Orang tua lebih yakin mendaftarkan anak ke sekolah yang memiliki website resmi.'
              },
              {
                icon: '📱',
                title: 'Informasi 24 Jam Non-Stop',
                desc: 'Website bekerja untuk Anda 24 jam sehari, 7 hari seminggu. Orang tua bisa mengakses informasi kapan saja tanpa perlu menghubungi sekolah langsung.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 scroll-animate-scale ${whyVisible ? 'animate' : ''} stagger-${index + 1} hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 group`}
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section ref={featuresRef as any} className="py-20 lg:py-32 bg-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center mb-16 scroll-animate ${featuresVisible ? 'animate' : ''}`}>
            <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text text-sm font-bold tracking-wider uppercase mb-4">
              FITUR LENGKAP
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Semua yang Sekolah Butuhkan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Website sekolah lengkap dengan fitur-fitur modern yang memudahkan komunikasi sekolah dengan orang tua dan masyarakat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl shadow-2xl group scroll-animate-scale ${featuresVisible ? 'animate' : ''} stagger-${(index % 6) + 1} hover:border-cyan-400/50 transition-all duration-500 hover:shadow-cyan-400/20 hover:shadow-2xl hover:-translate-y-2`}
              >
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white w-full h-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO SECTION */}
      <section ref={demoRef as any} className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-animate ${demoVisible ? 'animate' : ''}`}>
            <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text text-sm font-bold tracking-wider uppercase mb-4">
              LIHAT HASILNYA
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Demo Website Sekolah
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Lihat langsung tampilan dan fitur-fitur website sekolah yang akan kami buatkan untuk Anda
            </p>
            <a
              href="https://demowebsekolah.schoolmantic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 group"
            >
              <ExternalLink className="w-6 h-6" />
              <span>Buka Demo Website Sekolah</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Feature highlights dari demo */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎨', title: 'Tampilan Menarik', desc: 'Desain modern dengan warna identitas sekolah Anda' },
              { icon: '📰', title: 'Berita Terkini', desc: 'Sistem manajemen berita dan pengumuman yang mudah' },
              { icon: '📸', title: 'Galeri Kegiatan', desc: 'Tampilkan momen berharga kegiatan sekolah' },
              { icon: '📝', title: 'PPDB Online', desc: 'Pendaftaran siswa baru secara online tanpa antri' }
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center scroll-animate-scale ${demoVisible ? 'animate' : ''} stagger-${index + 1} hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section ref={pricingRef as any} className="py-20 lg:py-32 bg-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center mb-16 scroll-animate ${pricingVisible ? 'animate' : ''}`}>
            <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text text-sm font-bold tracking-wider uppercase mb-4">
              HARGA TERJANGKAU
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Pilih Paket yang Sesuai
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Investasi terbaik untuk meningkatkan citra dan kepercayaan sekolah Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 scroll-animate-scale ${pricingVisible ? 'animate' : ''} stagger-${index + 1} hover:transform hover:-translate-y-2 transition-all duration-300 ${
                  plan.badge === 'TERPOPULER'
                    ? 'border-2 border-indigo-500/70 shadow-2xl shadow-indigo-500/20 scale-105'
                    : 'border border-slate-700/50 hover:border-cyan-400/50'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`bg-gradient-to-r ${plan.color} text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg`}>
                      <Star className="w-4 h-4" />
                      <span>{plan.badge}</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-2">
                    <span className={`text-3xl font-bold text-transparent bg-gradient-to-r ${plan.color} bg-clip-text`}>{plan.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{plan.period}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, fi) => (
                    <div key={fi} className="flex items-start space-x-3">
                      {feature.available ? (
                        <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-gray-400 text-xs">-</span>
                        </div>
                      )}
                      <span className={`text-sm ${feature.available ? 'text-white' : 'text-gray-500'}`}>{feature.text}</span>
                    </div>
                  ))}
                </div>

                {plan.extras && (
                  <div className="mb-6 bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                    <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">Bonus Eksklusif:</p>
                    {plan.extras.map((extra, ei) => (
                      <div key={ei} className="flex items-center space-x-2 mb-1">
                        <Star className="w-3 h-3 text-amber-400 flex-shrink-0" />
                        <span className="text-amber-200 text-sm">{extra}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="bg-slate-700/30 rounded-lg p-3 mb-6 border border-slate-600/30">
                  <p className="text-gray-400 text-xs">Biaya pemeliharaan tahun berikutnya:</p>
                  <p className="text-cyan-400 font-semibold text-sm">{plan.maintenance}</p>
                </div>

                <a
                  href={`https://wa.me/62811945222?text=${encodeURIComponent(plan.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg text-center ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </a>
              </div>
            ))}
          </div>

          <div className={`mt-12 text-center bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 scroll-animate ${pricingVisible ? 'animate' : ''}`}>
            <p className="text-white font-semibold text-lg mb-2">Butuh paket khusus atau anggaran lebih fleksibel?</p>
            <p className="text-gray-300 mb-4">Hubungi kami untuk mendapatkan penawaran harga yang disesuaikan dengan kebutuhan dan anggaran sekolah Anda.</p>
            <a
              href={`https://wa.me/62811945222?text=${encodeURIComponent('Halo, saya ingin diskusi paket khusus Website Sekolah sesuai anggaran kami. Mohon informasi lebih lanjut.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Diskusi Harga Khusus</span>
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text text-sm font-bold tracking-wider uppercase mb-4">
              PROSES PENGERJAAN
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              5 Langkah Mudah<br />Mendapatkan Website Sekolah
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 transform -translate-y-1/2"></div>
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 shadow-cyan-500/30 relative z-10">
                    {step.num}
                  </div>
                  <h3 className="text-white font-bold mb-3 group-hover:text-cyan-300 transition-colors">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section ref={faqRef as any} className="py-20 lg:py-32 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-animate ${faqVisible ? 'animate' : ''}`}>
            <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text text-sm font-bold tracking-wider uppercase mb-4">
              PERTANYAAN UMUM
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ada yang Ingin Ditanyakan?
            </h2>
          </div>

          <div className={`space-y-4 scroll-animate ${faqVisible ? 'animate' : ''}`}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-white font-semibold pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 via-purple-900/50 to-indigo-900/50"></div>
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
          <div className="absolute top-10 left-10 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-cyan-400/20 border border-cyan-400/30 rounded-full px-6 py-2 mb-8">
            <Star className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-semibold">Siap Meningkatkan Citra Sekolah Anda?</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Wujudkan Website Sekolah<br />
            <span className="cyber-text">Impian Anda Sekarang</span>
          </h2>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Bergabung dengan sekolah-sekolah yang telah mempercayakan pembuatan website kepada SchoolMantic. Konsultasi gratis, tanpa komitmen apapun.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/62811945222?text=${encodeURIComponent('Halo, saya ingin konsultasi gratis pembuatan Website Sekolah SchoolMantic. Saya ingin tahu lebih lanjut tentang paket dan proses pengerjaan.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 flex items-center space-x-3 group"
            >
              <MessageSquare className="w-6 h-6" />
              <span>Hubungi Kami via WhatsApp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://demowebsekolah.schoolmantic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/80 border border-cyan-400/50 text-cyan-400 px-10 py-5 rounded-xl font-bold text-lg hover:bg-cyan-400/10 hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <Monitor className="w-6 h-6" />
              <span>Lihat Demo</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          <p className="text-gray-400 text-sm mt-8">
            📞 WhatsApp: <a href="tel:+62811945222" className="text-cyan-400 hover:underline">0811-945-222</a> &nbsp;•&nbsp;
            🌐 Demo: <a href="https://demowebsekolah.schoolmantic.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">demowebsekolah.schoolmantic.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <img src="/logo-schoolmantic.jpg" alt="SchoolMantic" className="h-8 w-8 rounded-lg object-cover" />
              <span className="text-white font-bold cyber-text">SCHOOLMANTIC</span>
            </div>
            <p className="text-gray-400 text-sm text-center">
              © 2025 SchoolMantic. Jasa Pembuatan Website Sekolah Profesional untuk Indonesia.
            </p>
            <Link to="/" className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors flex items-center space-x-1">
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
};

export default WebsiteSekolahPage;
