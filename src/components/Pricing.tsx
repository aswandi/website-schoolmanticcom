import React from 'react';
import { Check, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Pricing: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();

  const plans = [
    {
      name: 'Trial Gratis',
      price: 'GRATIS',
      period: '1 bulan pertama',
      features: [
        'absensi fingerprint/wajah',
        'web laporan wali siswa',
        'notifikasi whatsapp',
        'app android wali siswa'
      ],
      info: 'Walau paket gratis, kami akan membantu sepenuhnya melalui whatsapp grup sampai mesin absensi terhubung ke sistem kami dan menghubungkan ke server whatsapp sampai berhasil terkirim ke wali siswa, setelah 1 bulan, sekolah dapat berhenti tanpa perlu memberikan alasan apapun',
      buttonText: 'Coba Gratis',
      buttonStyle: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
    },
    {
      name: 'Basic',
      price: 'Rp 1.000,-',
      period: 'per siswa per bulan',
      features: [
        'absensi fingerprint/wajah',
        'web laporan wali siswa', 
        'notifikasi whatsapp',
        'app android wali siswa'
      ],
      info: 'Misalnya jumlah siswa ada 350 maka sekolah membayar Rp 350.000 per bulan atau Rp 3.500.000 per tahun.',
      buttonText: 'Pilih Paket',
      buttonStyle: 'bg-indigo-600 text-white hover:bg-indigo-700'
    },
    {
      name: 'Premium',
      price: 'Rp 3.000,-',
      period: 'per siswa per bulan',
      popular: true,
      features: [
        'absensi fingerprint/wajah',
        'web laporan wali siswa',
        'notifikasi whatsapp', 
        'app android wali siswa'
      ],
      info: 'Misalnya jumlah siswa ada 350 maka sekolah membayar Rp 1.050.000 per bulan atau Rp 10.500.000 jika bayar sekaligus 1 tahun.',
      buttonText: 'Pilih Paket',
      buttonStyle: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg'
    }
  ];

  return (
    <section ref={sectionRef} id="harga" className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-animate ${headerVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-neon-pulse">
            Harga
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan sekolah Anda
          </p>
        </div>

        {/* Pricing Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative glass-morphism rounded-2xl shadow-xl p-8 scroll-animate-scale ${cardsVisible ? 'animate' : ''} stagger-${index + 1} card-hover ${
                plan.popular ? 'neon-border transform scale-105 animate-glow' : 'border border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1 animate-glow">
                    <Star className="w-4 h-4" />
                    <span>Paling Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 cyber-text">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold cyber-text">{plan.price}</span>
                </div>
                <p className="text-gray-300">{plan.period}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 animate-glow" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                <strong>Info:</strong> {plan.info}
              </p>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold btn-hover ${plan.buttonStyle} ${plan.popular ? 'neon-border' : ''}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div ref={infoRef} className={`text-center glass-morphism rounded-xl p-8 shadow-lg scroll-animate ${infoVisible ? 'animate' : ''} neon-border`}>
          <p className="text-gray-300 font-medium">
            Minimal jumlah siswa adalah 100. Jika kurang dari 100, maka billing tetap 100 siswa
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;