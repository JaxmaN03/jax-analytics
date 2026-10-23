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

export default function App() {
  const page = currentPage();
  const params = new URLSearchParams(window.location.search);
  const service = params.get('service');
  const selectedService = ['excel', 'analysis', 'python', 'other'].includes(service) ? service : 'excel';
  const presentation = params.get('presentation');
  const presentationRequest = ['template', 'custom'].includes(presentation) ? { id: presentation } : null;

  useEffect(() => {
    const redirect = page === 'home' && legacyDestination(window.location.hash);
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
    <div className="min-h-screen bg-[#0B0F19] text-[#F1F5F9] selection:bg-[#00D9FF]/30 selection:text-[#00D9FF] flex flex-col font-sans">
      {/* Sticky Navigation */}
      <Navbar onSelectService={handleSelectService} currentPage={page} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {page === 'home' && <><Hero onStartProject={handleSelectService} /><Mission /></>}
        {page === 'services' && <><Services onSelectService={handleSelectService} onSelectPresentation={(id) => navigate(contactUrl(selectedService, id))} /><Process /></>}
        {page === 'portfolio' && <Portfolio onDiscussProject={handleSelectService} />}
        {page === 'about' && <><About onConnectClick={handleSelectService} /><Testimonials /></>}
        {page === 'contact' && <Contact preselectedService={selectedService} presentationRequest={presentationRequest} />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

