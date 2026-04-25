import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
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

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <TopBar />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
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
          {/* Catch-all */}
          <Route path="*" element={<div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>404 - Page Not Found</div>} />
        </Routes>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
