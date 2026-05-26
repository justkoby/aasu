import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NelsTopBar from './components/NelsTopBar';
import NelsNavbar from './components/NelsNavbar';
import NelsFooter from './components/NelsFooter';
import Home from './pages/Home';
import './nels.css';

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

export const NelsApp = () => {
  return (
    <div className="nels-root">
      <ScrollToTop />
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Redirect bar back to main site */}
        <NelsTopBar />
        
        {/* Navigation Head */}
        <NelsNavbar />
        
        {/* Router Pages Switch */}
        <div className="main-content-area" style={{ flex: '1 0 auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} /> {/* Fallback route redirection */}
          </Routes>
        </div>
        
        {/* Footer Base */}
        <NelsFooter />
      </div>
    </div>
  );
};

export default NelsApp;
