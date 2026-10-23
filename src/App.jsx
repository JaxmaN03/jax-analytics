import React, { useState } from 'react';
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
  const [selectedService, setSelectedService] = useState('excel');
  const [presentationRequest, setPresentationRequest] = useState(null);

  const handleSelectService = (serviceId) => {
    setSelectedService(serviceId);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#F1F5F9] selection:bg-[#00D9FF]/30 selection:text-[#00D9FF] flex flex-col font-sans">
      {/* Sticky Navigation */}
      <Navbar onSelectService={handleSelectService} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onStartProject={handleSelectService} />
        <Mission />
        <Services onSelectService={handleSelectService} onSelectPresentation={(id) => setPresentationRequest({ id })} />
        <Portfolio onDiscussProject={handleSelectService} />
        <Process />
        <About onConnectClick={handleSelectService} />
        <Testimonials />
        <Contact preselectedService={selectedService} presentationRequest={presentationRequest} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

