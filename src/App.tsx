import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { SEOHead } from './components/SEOHead';

import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { AboutUs } from './pages/AboutUs';
import { Team } from './pages/Team';
import { CaseStudies } from './pages/CaseStudies';
import { CaseStudyDetail } from './pages/CaseStudyDetail';
import { Contact } from './pages/Contact';
import { GetAQuote } from './pages/GetAQuote';
import { TestingCommissioning } from './pages/TestingCommissioning';
import { InstallationErection } from './pages/InstallationErection';
import { CivilWorks } from './pages/CivilWorks';
import { SubstationConstruction } from './pages/SubstationConstruction';
import { Maintenance } from './pages/Maintenance';
import { HealthcareCaseStudy } from './pages/HealthcareCaseStudy';
import { IndustrialCaseStudy } from './pages/IndustrialCaseStudy';
import { UrbanHousingCaseStudy } from './pages/UrbanHousingCaseStudy';
import { EducationalCaseStudy } from './pages/EducationalCaseStudy';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SEOHead />
      <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-emerald-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/team" element={<Team />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-a-quote" element={<GetAQuote />} />

            {/* Services Sub-Pages */}
            <Route path="/services/testing-commissioning" element={<TestingCommissioning />} />
            <Route path="/services/installation-erection" element={<InstallationErection />} />
            <Route path="/services/civil-works" element={<CivilWorks />} />
            <Route path="/services/substation-construction" element={<SubstationConstruction />} />
            <Route path="/services/maintenance" element={<Maintenance />} />
            <Route path="/services/maintenance-services" element={<Navigate to="/services/maintenance" replace />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />

            {/* Case Studies Sub-Pages */}
            <Route path="/case-studies/healthcare" element={<HealthcareCaseStudy />} />
            <Route path="/case-studies/industrial" element={<IndustrialCaseStudy />} />
            <Route path="/case-studies/urban-housing" element={<UrbanHousingCaseStudy />} />
            <Route path="/case-studies/educational" element={<EducationalCaseStudy />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
