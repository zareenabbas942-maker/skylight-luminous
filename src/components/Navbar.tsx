import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, MapPin, ArrowRight, Globe, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO, SERVICES_DATA, CASE_STUDIES_DATA } from '../data/companyData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [caseStudiesDropdownOpen, setCaseStudiesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCaseStudiesOpen, setMobileCaseStudiesOpen] = useState(false);

  const location = useLocation();
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const caseStudiesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setCaseStudiesDropdownOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Desktop hover handlers with small delay for smooth interaction
  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const handleCaseStudiesMouseEnter = () => {
    if (caseStudiesTimeoutRef.current) clearTimeout(caseStudiesTimeoutRef.current);
    setCaseStudiesDropdownOpen(true);
  };

  const handleCaseStudiesMouseLeave = () => {
    caseStudiesTimeoutRef.current = setTimeout(() => {
      setCaseStudiesDropdownOpen(false);
    }, 150);
  };

  const isServicesActive = location.pathname.startsWith('/services');
  const isCaseStudiesActive = location.pathname.startsWith('/case-studies');

  return (
    <>
      {/* Top corporate info bar for desktop */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
        <div className="hidden lg:block bg-[#123C32] text-slate-300 text-xs py-2 border-b border-[#1F6654]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#C9A45C]" />
                {COMPANY_INFO.address}
              </span>
              <span className="flex items-center gap-1.5 text-[#A8BDB3]">
                <Globe className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>{COMPANY_INFO.domain}</span>
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <a 
                href={`tel:${COMPANY_INFO.phone}`} 
                id="header-call-btn"
                className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#1F6654] hover:bg-[#287d68] text-white text-xs font-semibold transition-colors"
                title="Voice call directly"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>Call Us</span>
              </a>
              <a 
                href="https://wa.me/924232351373"
                target="_blank"
                rel="noopener noreferrer"
                id="header-whatsapp-btn" 
                className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#C9A45C] hover:bg-[#b8934b] text-[#123C32] text-xs font-bold transition-colors"
                title="WhatsApp Inquiry"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Desktop & Mobile Header Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5" aria-label="Main Navigation">
              {/* Home */}
              <NavLink
                to="/"
                id="nav-home"
                end
                className={({ isActive }) =>
                  `px-2.5 xl:px-3.5 py-2 rounded-md text-xs xl:text-sm font-semibold transition-colors duration-150 ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50'
                      : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                  }`
                }
              >
                Home
              </NavLink>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
                onFocus={handleServicesMouseEnter}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setServicesDropdownOpen(false);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setServicesDropdownOpen(false);
                  }
                }}
              >
                <div className="flex items-center">
                  <NavLink
                    to="/services"
                    id="nav-services"
                    className={`flex items-center gap-1 px-2.5 xl:px-3.5 py-2 rounded-md text-xs xl:text-sm font-semibold transition-colors duration-150 ${
                      isServicesActive
                        ? 'text-emerald-700 bg-emerald-50'
                        : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                    }`}
                  >
                    Services
                    <ChevronDown className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} />
                  </NavLink>
                </div>

                {/* Dropdown Menu */}
                {servicesDropdownOpen && (
                  <div 
                    id="services-desktop-dropdown"
                    className="absolute left-0 top-full pt-1 w-80 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  >
                    <div className="rounded-xl bg-white border border-slate-200/90 shadow-xl py-2 overflow-hidden">
                      <div className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                        Our Specialized Services
                      </div>
                      {SERVICES_DATA.map((service) => (
                        <NavLink
                          key={service.id}
                          to={`/services/${service.slug}`}
                          id={`nav-service-${service.slug}`}
                          onClick={() => setServicesDropdownOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                              isActive
                                ? 'bg-emerald-50 text-emerald-700 font-semibold'
                                : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-600 font-medium'
                            }`
                          }
                        >
                          <span>{service.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-600" />
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* About Us */}
              <NavLink
                to="/about"
                id="nav-about"
                className={({ isActive }) =>
                  `px-2.5 xl:px-3.5 py-2 rounded-md text-xs xl:text-sm font-semibold transition-colors duration-150 ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50'
                      : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                  }`
                }
              >
                About Us
              </NavLink>

              {/* Our Team */}
              <NavLink
                to="/team"
                id="nav-team"
                className={({ isActive }) =>
                  `px-2.5 xl:px-3.5 py-2 rounded-md text-xs xl:text-sm font-semibold transition-colors duration-150 ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50'
                      : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                  }`
                }
              >
                Our Team
              </NavLink>

              {/* Case Studies Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleCaseStudiesMouseEnter}
                onMouseLeave={handleCaseStudiesMouseLeave}
                onFocus={handleCaseStudiesMouseEnter}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setCaseStudiesDropdownOpen(false);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setCaseStudiesDropdownOpen(false);
                  }
                }}
              >
                <div className="flex items-center">
                  <NavLink
                    to="/case-studies"
                    id="nav-case-studies"
                    className={`flex items-center gap-1 px-2.5 xl:px-3.5 py-2 rounded-md text-xs xl:text-sm font-semibold transition-colors duration-150 ${
                      isCaseStudiesActive
                        ? 'text-emerald-700 bg-emerald-50'
                        : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                    }`}
                  >
                    Case Studies
                    <ChevronDown className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-200 ${caseStudiesDropdownOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} />
                  </NavLink>
                </div>

                {/* Dropdown Menu */}
                {caseStudiesDropdownOpen && (
                  <div 
                    id="case-studies-desktop-dropdown"
                    className="absolute left-0 top-full pt-1 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  >
                    <div className="rounded-xl bg-white border border-slate-200/90 shadow-xl py-2 overflow-hidden">
                      <div className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                        Sectors & Case Studies
                      </div>
                      {CASE_STUDIES_DATA.map((study) => (
                        <NavLink
                          key={study.id}
                          to={`/case-studies/${study.slug}`}
                          id={`nav-study-${study.slug}`}
                          onClick={() => setCaseStudiesDropdownOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                              isActive
                                ? 'bg-emerald-50 text-emerald-700 font-semibold'
                                : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-600 font-medium'
                            }`
                          }
                        >
                          <span>{study.sector}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-600" />
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Contact */}
              <NavLink
                to="/contact"
                id="nav-contact"
                className={({ isActive }) =>
                  `px-2.5 xl:px-3.5 py-2 rounded-md text-xs xl:text-sm font-semibold transition-colors duration-150 ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50'
                      : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/get-a-quote"
                id="nav-quote-button"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#123C32] hover:bg-[#1F6654] text-[#C9A45C] border border-[#C9A45C]/30 text-xs xl:text-sm font-bold uppercase tracking-wider shadow-xs hover:shadow-md active:scale-98 transition-all duration-150 group"
              >
                GET A QUOTE
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                to="/get-a-quote"
                id="mobile-quick-quote-button"
                className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#123C32] hover:bg-[#1F6654] text-[#C9A45C] border border-[#C9A45C]/40 min-h-[44px] flex items-center shadow-xs transition-colors"
              >
                Quote
              </Link>
              <button
                type="button"
                id="mobile-menu-toggle-button"
                onClick={() => setMobileMenuOpen(true)}
                className="w-11 h-11 rounded-lg text-slate-700 hover:text-[#1F6654] hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-[#1F6654] transition-colors flex items-center justify-center"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Full-Height Navigation Panel */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-backdrop"
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-navigation-drawer"
            className="fixed inset-y-0 right-0 w-full max-w-[85vw] sm:max-w-sm bg-[#123C32] text-white shadow-2xl flex flex-col justify-between overflow-y-auto overscroll-contain z-50 animate-in slide-in-from-right duration-300 border-l border-[#1F6654]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Header: Logo & Circular Close Button */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-[#1F6654] bg-[#0d2a23]">
              <Logo light={true} />
              <button
                type="button"
                id="mobile-menu-close-button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-11 h-11 rounded-full bg-[#1F6654] hover:bg-[#287d68] text-white flex items-center justify-center transition-all focus:outline-hidden focus:ring-2 focus:ring-[#C9A45C] flex-shrink-0"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="px-4 sm:px-5 py-4 flex-1 space-y-1">
              {/* Home */}
              <NavLink
                to="/"
                id="mobile-nav-home"
                end
                className={({ isActive }) =>
                  `block py-3 px-3 text-base font-semibold rounded-lg transition-colors border-b border-emerald-700/40 ${
                    isActive ? 'bg-emerald-700 text-lime-300' : 'text-white hover:bg-emerald-700/60'
                  }`
                }
              >
                Home
              </NavLink>

              {/* Services Accordion */}
              <div className="border-b border-emerald-700/40 py-1">
                <div className="flex items-center justify-between">
                  <NavLink
                    to="/services"
                    id="mobile-nav-services"
                    className="flex-1 py-2.5 px-3 text-base font-semibold text-white hover:text-lime-300 transition-colors"
                  >
                    Services
                  </NavLink>
                  <button
                    type="button"
                    id="mobile-services-expand-button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-11 h-11 flex items-center justify-center text-emerald-200 hover:text-white"
                    aria-label="Toggle Services submenu"
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-lime-300' : ''}`} />
                  </button>
                </div>

                {/* Submenu Items with small circular indicators */}
                {mobileServicesOpen && (
                  <div className="pl-4 pr-2 pb-2 space-y-1 pt-1">
                    {SERVICES_DATA.map((service) => (
                      <NavLink
                        key={service.id}
                        to={`/services/${service.slug}`}
                        id={`mobile-nav-service-${service.slug}`}
                        className={({ isActive }) =>
                          `flex items-center gap-2.5 py-2.5 px-3 min-h-[44px] text-sm rounded-md transition-colors ${
                            isActive
                              ? 'text-lime-300 font-semibold bg-emerald-900/40'
                              : 'text-emerald-100 hover:text-white hover:bg-emerald-700/40'
                          }`
                        }
                      >
                        {/* Circular Indicator */}
                        <span className="w-2 h-2 rounded-full border border-lime-300/80 bg-transparent flex-shrink-0" />
                        <span className="break-words">{service.name}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* About Us */}
              <NavLink
                to="/about"
                id="mobile-nav-about"
                className={({ isActive }) =>
                  `block py-3 px-3 text-base font-semibold rounded-lg transition-colors border-b border-emerald-700/40 ${
                    isActive ? 'bg-emerald-700 text-lime-300' : 'text-white hover:bg-emerald-700/60'
                  }`
                }
              >
                About Us
              </NavLink>

              {/* Our Team */}
              <NavLink
                to="/team"
                id="mobile-nav-team"
                className={({ isActive }) =>
                  `block py-3 px-3 text-base font-semibold rounded-lg transition-colors border-b border-emerald-700/40 ${
                    isActive ? 'bg-emerald-700 text-lime-300' : 'text-white hover:bg-emerald-700/60'
                  }`
                }
              >
                Our Team
              </NavLink>

              {/* Case Studies Accordion */}
              <div className="border-b border-emerald-700/40 py-1">
                <div className="flex items-center justify-between">
                  <NavLink
                    to="/case-studies"
                    id="mobile-nav-case-studies"
                    className="flex-1 py-2.5 px-3 text-base font-semibold text-white hover:text-lime-300 transition-colors"
                  >
                    Case Studies
                  </NavLink>
                  <button
                    type="button"
                    id="mobile-case-studies-expand-button"
                    onClick={() => setMobileCaseStudiesOpen(!mobileCaseStudiesOpen)}
                    className="w-11 h-11 flex items-center justify-center text-emerald-200 hover:text-white"
                    aria-label="Toggle Case Studies submenu"
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileCaseStudiesOpen ? 'rotate-180 text-lime-300' : ''}`} />
                  </button>
                </div>

                {/* Submenu Items with small circular indicators */}
                {mobileCaseStudiesOpen && (
                  <div className="pl-4 pr-2 pb-2 space-y-1 pt-1">
                    {CASE_STUDIES_DATA.map((study) => (
                      <NavLink
                        key={study.id}
                        to={`/case-studies/${study.slug}`}
                        id={`mobile-nav-study-${study.slug}`}
                        className={({ isActive }) =>
                          `flex items-center gap-2.5 py-2.5 px-3 min-h-[44px] text-sm rounded-md transition-colors ${
                            isActive
                              ? 'text-lime-300 font-semibold bg-emerald-900/40'
                              : 'text-emerald-100 hover:text-white hover:bg-emerald-700/40'
                          }`
                        }
                      >
                        {/* Circular Indicator */}
                        <span className="w-2 h-2 rounded-full border border-lime-300/80 bg-transparent flex-shrink-0" />
                        <span className="break-words">{study.sector}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact */}
              <NavLink
                to="/contact"
                id="mobile-nav-contact"
                className={({ isActive }) =>
                  `block py-3 px-3 text-base font-semibold rounded-lg transition-colors border-b border-emerald-700/40 ${
                    isActive ? 'bg-emerald-700 text-lime-300' : 'text-white hover:bg-emerald-700/60'
                  }`
                }
              >
                Contact
              </NavLink>

              {/* Get a Quote button in menu */}
              <div className="pt-3">
                <Link
                  to="/get-a-quote"
                  id="mobile-nav-quote"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 min-h-[44px] rounded-lg bg-[#C9A45C] hover:bg-[#b8934b] text-[#123C32] font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Mobile Footer: Required Location & Direct Actions */}
            <div className="p-5 border-t border-[#1F6654] bg-[#0d2a23] space-y-3">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#A8BDB3] font-bold mb-1">
                  Lahore Headquarters:
                </p>
                <p className="text-sm text-white font-medium flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#C9A45C] mt-0.5 flex-shrink-0" />
                  <span>{COMPANY_INFO.address}</span>
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#A8BDB3] font-bold mb-2">
                  Direct Contact Channels:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#1F6654] hover:bg-[#287d68] text-white font-bold text-xs shadow-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href="https://wa.me/924232351373"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#C9A45C] hover:bg-[#b8934b] text-[#123C32] font-bold text-xs shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
