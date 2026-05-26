import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HistoryPage from './pages/HistoryPage';
import MembershipPage from './pages/MembershipPage';
import PartnersPage from './pages/PartnersPage';
import StudentVoicesPage from './pages/StudentVoicesPage';
import ContactPage from './pages/ContactPage';
import ExecutiveCommitteePage from './pages/ExecutiveCommitteePage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import TechnicalTeamPage from './pages/TechnicalTeamPage';
import VolunteerPage from './pages/VolunteerPage';
import BecomeMemberPage from './pages/BecomeMemberPage';
import InternshipPage from './pages/InternshipPage';
import NewsPage from './pages/NewsPage';
import EventsPage from './pages/EventsPage';
import ReportsPage from './pages/ReportsPage';
import ContentDetailPage from './pages/ContentDetailPage';
import ProgramsPage from './pages/ProgramsPage';
import GalleryPage from './pages/GalleryPage';
import EducationPage from './pages/priority/EducationPage';
import GenderPage from './pages/priority/GenderPage';
import DemocracyPage from './pages/priority/DemocracyPage';
import CapacityPage from './pages/priority/CapacityPage';
import MigrationPage from './pages/priority/MigrationPage';
import ClimatePage from './pages/priority/ClimatePage';
import CulturePage from './pages/priority/CulturePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CongressPage from './pages/CongressPage';
import BrandingPage from './pages/BrandingPage';
import LanguageToggle from './components/LanguageToggle';
import SmartAssistant from './components/SmartAssistant';

import DiCampaignApp from './dicampaign/DiCampaignApp';
import NelsApp from './nels/NelsApp';

function AppContent() {
  const location = useLocation();
  const isDiCampaign = location.pathname.startsWith('/dicampaign');
  const isNels = location.pathname.startsWith('/nels'); // Re-trigger import analysis

  if (isDiCampaign) {
    return (
      <Routes>
        <Route path="/dicampaign/*" element={<DiCampaignApp />} />
      </Routes>
    );
  }

  if (isNels) {
    return (
      <Routes>
        <Route path="/nels/*" element={<NelsApp />} />
      </Routes>
    );
  }

  return (
    <div className="app-wrapper">
      <TopBar />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/students-voices" element={<StudentVoicesPage />} />
        <Route path="/students/voices" element={<StudentVoicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/executives" element={<ExecutiveCommitteePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/technical-team" element={<TechnicalTeamPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/become-a-member" element={<BecomeMemberPage />} />
        <Route path="/internship" element={<InternshipPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<ContentDetailPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<ContentDetailPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/resources/branding" element={<BrandingPage />} />
        <Route path="/priority/education" element={<EducationPage />} />
        <Route path="/priority/gender" element={<GenderPage />} />
        <Route path="/priority/democracy" element={<DemocracyPage />} />
        <Route path="/priority/capacity" element={<CapacityPage />} />
        <Route path="/priority/migration" element={<MigrationPage />} />
        <Route path="/priority/climate" element={<ClimatePage />} />
        <Route path="/priority/culture" element={<CulturePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/14th-congress" element={<CongressPage />} />
        {/* Catch-all */}
        <Route path="*" element={<div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>404 - Page Not Found</div>} />
      </Routes>
      
      <Footer />
      <LanguageToggle />
      <SmartAssistant />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

