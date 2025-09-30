import React from 'react';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Hubungi Kami untuk Informasi Lebih Lanjut
        </h2>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center group">
            Hubungi Kami Sekarang
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200">
            Download Proposal
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;