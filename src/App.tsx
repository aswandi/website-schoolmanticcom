import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import WebsiteSekolahPage from './pages/WebsiteSekolahPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/foto" element={<GalleryPage />} />
        <Route path="/website-sekolah" element={<WebsiteSekolahPage />} />
      </Routes>
    </Router>
  );
}

export default App;
