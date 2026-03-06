import React, { useState } from 'react';
import { X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppFloat from '../components/WhatsAppFloat';

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const photos = {
    aktifitas: [
      { url: '/foto/aktifitas/461999652_2268116693546315_958310324127118573_n-DCq8ycX6.jpg', title: 'Aktivitas Sekolah' },
      { url: '/foto/aktifitas/aplikasi absensi sekolah stabil-DMEilyaB.jpg', title: 'Aplikasi Absensi Stabil' },
      { url: '/foto/aktifitas/aplikasi-presensi-siswa-sekolah-BJwQpiQQ.png', title: 'Aplikasi Presensi Siswa' },
      { url: '/foto/aktifitas/server-aplikasi-sekolah-ErUfz9qm.png', title: 'Server Aplikasi Sekolah' },
      { url: '/foto/aktifitas/trial software absensi 2024-B1JctheT.png', title: 'Trial Software Absensi 2024' },
      { url: '/foto/aktifitas/unnamed (1)-oiC0FiHP.png', title: 'Aktivitas' },
      { url: '/foto/aktifitas/unnamed (3)-CY1ZxJwJ.png', title: 'Aktivitas' },
      { url: '/foto/aktifitas/whatsapp untuk tim pilkada 2024-DtJ2eeJC.jpg', title: 'WhatsApp Tim Pilkada 2024' }
    ],
    liputan: [
      { url: '/foto/liputan/aplikasi absensi sekolah pengalamanan-Drn_qzYC.jpg', title: 'Pengalaman Aplikasi Absensi' },
      { url: '/foto/liputan/Screenshot_30-CLQetV3F.jpg', title: 'Liputan Media' },
      { url: '/foto/liputan/unnamed (2)-Ci3r3fGV.png', title: 'Liputan' }
    ],
    tampilan: [
      { url: '/foto/tampilan/Screenshot_34-jmY7-5FT.jpg', title: 'Tampilan Dashboard' },
      { url: '/foto/tampilan/unnamed (5)-CQJzOFuC.png', title: 'Tampilan Aplikasi' },
      { url: '/foto/tampilan/unnamed (6)-D2I2Ev7i.png', title: 'Tampilan Aplikasi' },
      { url: '/foto/tampilan/unnamed (7)-B5Gj5zwH.png', title: 'Tampilan Aplikasi' },
      { url: '/foto/tampilan/unnamed-Dml5cwQM.png', title: 'Tampilan Aplikasi' }
    ]
  };

  const allPhotos = [
    ...photos.aktifitas,
    ...photos.liputan,
    ...photos.tampilan
  ];

  const displayPhotos = selectedCategory === 'all' 
    ? allPhotos 
    : photos[selectedCategory as keyof typeof photos];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border-b border-cyan-400/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-semibold">Kembali</span>
              </Link>
              <div className="h-6 w-px bg-gray-600"></div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white">
                📸 Galeri Foto SchoolMantic
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
            }`}
          >
            Semua Foto ({allPhotos.length})
          </button>
          <button
            onClick={() => setSelectedCategory('aktifitas')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedCategory === 'aktifitas'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
            }`}
          >
            Aktivitas ({photos.aktifitas.length})
          </button>
          <button
            onClick={() => setSelectedCategory('liputan')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedCategory === 'liputan'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
            }`}
          >
            Liputan ({photos.liputan.length})
          </button>
          <button
            onClick={() => setSelectedCategory('tampilan')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedCategory === 'tampilan'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
            }`}
          >
            Tampilan ({photos.tampilan.length})
          </button>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayPhotos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer bg-slate-800/50 hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-300"
              onClick={() => setSelectedImage(photo.url)}
            >
              <div className="aspect-square">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm">{photo.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-slate-800/50 rounded-full p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default GalleryPage;
