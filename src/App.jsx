import React, { useEffect } from 'react';
import { currentPage, contactUrl, navigate, legacyDestination } from './navigation.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Mission from './components/Mission.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import Process from './components/Process.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';
import CaseStudy from './components/CaseStudy.jsx';
import FAQ from './components/FAQ.jsx';
import DataHandling from './components/DataHandling.jsx';

export default function App() {
  const page = currentPage();
  const params = new URLSearchParams(window.location.search);
  const service = params.get('service');
  const selectedService = ['excel', 'analysis', 'python', 'other'].includes(service) ? service : 'excel';
  const presentation = params.get('presentation');
  const presentationRequest = ['template', 'custom'].includes(presentation) ? { id: presentation } : null;

  useEffect(() => {
    const oldCaseStudyLink = page === 'portfolio' && ['#nonprofit-case-study', '#reporting-case-study'].includes(window.location.hash);
    const redirect = (page === 'home' || oldCaseStudyLink) && legacyDestination(window.location.hash);
    if (redirect) {
      navigate(redirect);
      return;
    }
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, [page]);

  const handleSelectService = (serviceId) => {
    navigate(contactUrl(serviceId));
  };

  return (
    <div className="min-h-screen bg-[#0D1B2A] text-[#F3EFE9] selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] flex flex-col font-sans">
      {/* Sticky Navigation */}
      <Navbar onSelectService={handleSelectService} currentPage={['nonprofit', 'reporting'].includes(page) ? 'portfolio' : page} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {page === 'home' && <><Hero onStartProject={handleSelectService} /><Mission /></>}
        {page === 'services' && <><Services onSelectService={handleSelectService} onSelectPresentation={(id) => navigate(contactUrl(selectedService, id))} /><Process /><FAQ /></>}
        {page === 'portfolio' && <Portfolio onDiscussProject={handleSelectService} />}
        {['nonprofit', 'reporting'].includes(page) && <CaseStudy kind={page} onDiscussProject={handleSelectService} />}
        {page === 'about' && <><About onConnectClick={handleSelectService} /><Testimonials /></>}
        {page === 'contact' && <><Contact preselectedService={selectedService} presentationRequest={presentationRequest} /><DataHandling /></>}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

