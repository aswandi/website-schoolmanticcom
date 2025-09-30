import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Features from './components/Features';
import BiometricSection from './components/BiometricSection';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Installation from './components/Installation';
import ServerManagement from './components/ServerManagement';
import FAQ from './components/FAQ';
import Demo from './components/Demo';
import SocialMedia from './components/SocialMedia';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <Overview />
      <Features />
      <BiometricSection />
      <Pricing />
      <Installation />
      <ServerManagement />
      <Demo />
      <FAQ />
      <SocialMedia />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;