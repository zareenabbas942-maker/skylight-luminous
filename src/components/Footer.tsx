import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Globe, Mail, ArrowUpRight, ShieldCheck, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO, SERVICES_DATA, CASE_STUDIES_DATA } from '../data/companyData';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#123C32] text-slate-200 border-t border-[#1F6654]">
      {/* Upper CTA Strip */}
      <div className="border-b border-[#1F6654]/80 bg-[#0d2a23] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Ready to execute your power or infrastructure project?
            </h3>
            <p className="text-sm text-[#A8BDB3] mt-1">
              Consult with our principal electrical and civil engineers in Lahore today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <Link
              to="/get-a-quote"
              id="footer-cta-quote-btn"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#C9A45C] hover:bg-[#b8934b] text-[#123C32] text-xs font-bold uppercase tracking-wider shadow-md active:scale-98 transition-all duration-150 min-h-[44px]"
            >
              <span>GET A QUOTE</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Link>
            <Link
              to="/contact"
              id="footer-cta-contact-btn"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#1F6654] hover:bg-[#287d68] text-white text-xs font-bold uppercase tracking-wider border border-[#A8BDB3]/30 active:scale-98 transition-all duration-150 min-h-[44px]"
            >
              <span>CONTACT US</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <Logo light={true} />
            <p className="text-sm text-[#A8BDB3] leading-relaxed max-w-sm">
              Skylight Luminous delivers high-voltage substation construction, electromechanical erection, testing & commissioning, and structural civil works for critical industries across Pakistan.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#C9A45C] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#C9A45C] flex-shrink-0" />
              <span>Certified IEC & IEEE Compliant Engineering Standards</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C9A45C]">
              Quick Links
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" id="footer-link-home" className="hover:text-[#C9A45C] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" id="footer-link-about" className="hover:text-[#C9A45C] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" id="footer-link-services" className="hover:text-[#C9A45C] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" id="footer-link-team" className="hover:text-[#C9A45C] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/case-studies" id="footer-link-case-studies" className="hover:text-[#C9A45C] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" id="footer-link-contact" className="hover:text-[#C9A45C] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/get-a-quote" id="footer-link-quote" className="hover:text-[#C9A45C] transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C9A45C]">
              Services
            </p>
            <ul className="space-y-2 text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.slug}`} 
                    id={`footer-service-${service.slug}`}
                    className="hover:text-[#C9A45C] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 & 5: Case Studies & Contact Info */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[#C9A45C]">
                Case Studies
              </p>
              <ul className="space-y-2 text-sm">
                {CASE_STUDIES_DATA.map((study) => (
                  <li key={study.id}>
                    <Link 
                      to={`/case-studies/${study.slug}`} 
                      id={`footer-study-${study.slug}`}
                      className="hover:text-[#C9A45C] transition-colors"
                    >
                      {study.sector}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 pt-2 border-t border-[#1F6654]">
              <p className="text-xs font-bold uppercase tracking-wider text-[#C9A45C]">
                Contact
              </p>
              <div className="space-y-2.5 text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C9A45C] mt-0.5 flex-shrink-0" />
                  <span>{COMPANY_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#C9A45C] flex-shrink-0" />
                  <a 
                    href={`https://${COMPANY_INFO.domain}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-[#C9A45C] transition-colors"
                  >
                    {COMPANY_INFO.domain}
                  </a>
                </div>
                <div className="pt-2 flex items-center gap-2">
                  <a 
                    href={`tel:${COMPANY_INFO.phone}`} 
                    id="footer-call-btn"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1F6654] hover:bg-[#287d68] text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span>Call Us</span>
                  </a>
                  <a 
                    href="https://wa.me/924232351373" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    id="footer-whatsapp-btn"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#C9A45C] hover:bg-[#b8934b] text-[#123C32] text-xs font-bold shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-[#1F6654]/40 bg-[#0a221c] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8BDB3] gap-3 text-center sm:text-left">
          <p>© 2026 {COMPANY_INFO.name}. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <span>Engineering Excellence</span>
            <span>Substation Construction</span>
            <span>Lahore, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
