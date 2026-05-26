import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CampaignTopBar from './components/CampaignTopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Opportunities from './pages/Opportunities';
import Updates from './pages/Updates';
import Gallery from './pages/Gallery';
import './dicampaign.css';

// Auto-Scroll to top of page on route change helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

export const DiCampaignApp = () => {
  return (
    <div className="dicampaign-root">
      <ScrollToTop />
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Redirect bar back to main site */}
        <CampaignTopBar />
        {/* Navigation Head */}
        <Navbar />
        
        {/* Router Pages Switch */}
        <div className="main-content-area" style={{ flex: '1 0 auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<Home />} /> {/* Fallback route redirection */}
          </Routes>
        </div>
        
        {/* Footer Base */}
        <Footer />
      </div>
    </div>
  );
};

export default DiCampaignApp;
