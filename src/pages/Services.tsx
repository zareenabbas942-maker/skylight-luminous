import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Wrench, 
  HardHat, 
  Zap, 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  Layers, 
  Clock, 
  FileCheck2, 
  ChevronRight,
  Target,
  Lightbulb,
  Building2,
  Phone
} from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/companyData';

export const Services: React.FC = () => {
  // Map icons for each service
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-emerald-600" />;
      case 'HardHat':
        return <HardHat className="w-5 h-5 text-emerald-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-emerald-600" />;
      case 'Activity':
      default:
        return <Activity className="w-5 h-5 text-emerald-600" />;
    }
  };

  // Section 4: Our Approach - 4 systematic engineering stages
  const approachStages = [
    {
      step: '01',
      title: 'Geotechnical & Electrical Engineering Survey',
      desc: 'Topographic assessment, soil resistivity testing, load-flow analysis, and comprehensive single-line diagram (SLD) verification before groundwork commences.',
      icon: <Layers className="w-5 h-5 text-emerald-600" />
    },
    {
      step: '02',
      title: 'Engineered Procurement & Site Preparation',
      desc: 'Sourcing certified type-tested equipment, transformer foundation piling, oil containment pits, and perimeter security grounding grids.',
      icon: <HardHat className="w-5 h-5 text-emerald-600" />
    },
    {
      step: '03',
      title: 'Precision Mechanical & Electrical Installation',
      desc: 'Laser-guided switchgear alignment, heavy gantry erection, busduct installation, and certified medium/high voltage cable termination.',
      icon: <Wrench className="w-5 h-5 text-emerald-600" />
    },
    {
      step: '04',
      title: 'Rigorous Testing, Energization & Handover',
      desc: 'Primary and secondary current injection, calibrated relay testing, insulation resistance validation, utility compliance sign-offs, and as-built documentation.',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />
    }
  ];

  // Section 5: Why Choose Our Services - 6 key pillars matching the design system
  const whyChooseServices = [
    {
      title: 'Turnkey Single-Source Accountability',
      desc: 'From civil earthworks and foundation pads to 132kV primary testing, we manage every discipline under a unified engineering contract.',
      icon: <Award className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Certified Testing Equipment',
      desc: 'We utilize regularly calibrated, multi-phase secondary injection test sets, precision micro-ohmmeters, and high-voltage dielectric test sets.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Engineering Leadership',
      desc: 'Field squads are steered by qualified electrical and civil project engineers with dedicated focus on technical accuracy and site safety.',
      icon: <Target className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Zero-Harm Safety Protocol',
      desc: 'Stringent health, safety, and environment (HSE) management with mandatory lock-out tag-out (LOTO) and arc-flash protocols.',
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Rapid Mobilization in Punjab & Nationwide',
      desc: 'Strategically based at 1A Iqbal Avenue Phase 3 Lahore, enabling rapid deployment of mobile testing vans and rigging crews to industrial hubs.',
      icon: <Clock className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Regulatory & Utility Documentation',
      desc: 'Comprehensive technical documentation, single line diagrams, and test reports prepared for smooth utility handovers and approvals.',
      icon: <FileCheck2 className="w-6 h-6 text-emerald-600" />
    }
  ];

  return (
    <div className="space-y-0">
      {/* ==================================================
          1. HERO / BANNER
          ================================================== */}
      <section className="relative bg-slate-950 text-white min-h-[440px] sm:min-h-[480px] flex items-center overflow-hidden border-b border-slate-800">
        {/* Full-width Engineering & Infrastructure Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=2200&q=85"
            alt="Skylight Luminous Engineering & Infrastructure Services"
            className="w-full h-full object-cover object-center opacity-30"
          />
          {/* Subtle multi-stop gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl space-y-6">
            
            {/* Breadcrumbs & Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold tracking-wider uppercase backdrop-blur-xs">
                <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                Specialized Engineering Divisions
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-emerald-400">Services</span>
              </div>
            </div>

            {/* Main Page Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Engineering Excellence Across <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300">
                Power & Infrastructure
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Skylight Luminous provides turnkey power engineering, high-voltage substation construction, heavy industrial equipment erection, and specialized civil works designed to meet demanding operational tolerances across Pakistan.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                to="/get-a-quote"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md active:scale-98 transition-all duration-150 w-full sm:w-auto min-h-[44px]"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 font-bold text-xs sm:text-sm uppercase tracking-wider active:scale-98 transition-all duration-150 w-full sm:w-auto min-h-[44px]"
              >
                <span>CONTACT US</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          2. SERVICES INTRODUCTION
          ================================================== */}
      <section className="bg-white py-14 lg:py-18 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                Turnkey Technical Capabilities
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Precision-Driven Engineering from Groundwork to High-Voltage Energization
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Modern electrical infrastructure requires flawless coordination between civil substructures and complex electromechanical assemblies. Skylight Luminous integrates both domains under one disciplined management structure, eliminating subcontracting delays and ensuring uncompromised safety.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-black text-emerald-600 font-mono">100%</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-1">
                    IEC & IEEE Compliance
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Calibrated secondary injection & primary tests
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-black text-emerald-600 font-mono">Up to 220kV</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-1">
                    Operating Voltage Rating
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Distribution to high-voltage transmission
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-black text-emerald-600 font-mono">Zero Fault</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-1">
                    Energization Protocol
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Multi-stage pre-commissioning sign-offs
                  </p>
                </div>
              </div>
            </div>

            {/* Right side info card */}
            <div className="lg:col-span-4 bg-slate-900 text-white rounded-2xl p-7 border border-slate-800 space-y-4">
              <span className="text-xs font-mono font-bold uppercase text-lime-400 tracking-wider">
                Lahore Engineering Center
              </span>
              <h3 className="text-xl font-bold">
                Direct Engineering Consultations
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our resident electrical engineers in Lahore provide preliminary load calculations, single line diagram evaluations, and site foundation assessments for industrial and commercial projects.
              </p>
              <div className="pt-2 border-t border-slate-800">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center gap-2 text-[#C9A45C] hover:text-[#e4be74] text-sm font-bold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Engineering Hotline</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. FIVE SERVICE CARDS (EXACTLY FIVE SERVICES)
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Our Core Divisions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Specialized Engineering Services
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Explore our five specialized divisions. Each service is fully engineered, staffed with qualified technical personnel, and backed by certified instrumentation.
            </p>
          </div>

          {/* Grid of exactly 5 service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => {
              const targetRoute = `/services/${service.slug}`;

              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group ${
                    index === 3 || index === 4 ? 'lg:col-span-1 md:col-span-1' : ''
                  }`}
                >
                  {/* Service Image */}
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                    
                    {/* Floating Icon Box */}
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-md border border-slate-100">
                      {getServiceIcon(service.iconName)}
                    </div>

                    {/* Voltage or Division Badge */}
                    <div className="absolute bottom-3 left-4">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-lime-300 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-700">
                        {`Division 0${index + 1}`}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {service.shortDesc}
                      </p>

                      {/* Key highlights bullets */}
                      <div className="pt-2 space-y-1.5 border-t border-slate-100">
                        {service.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Learn More Button */}
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                      <Link
                        to={targetRoute}
                        id={`services-page-card-${service.slug}-btn`}
                        className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-colors duration-200"
                      >
                        <span>Learn More</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================
          4. OUR APPROACH
          ================================================== */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Engineered Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Engineering Approach
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Every project follows a disciplined, stage-gated engineering methodology that ensures total compliance with international standards, transparent progress tracking, and zero-defect handovers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachStages.map((stage, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-7 hover:bg-white hover:border-emerald-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono text-emerald-600 group-hover:scale-105 transition-transform">
                      {stage.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-2xs">
                      {stage.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {stage.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Quality Sign-off Required</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          5. WHY CHOOSE OUR SERVICES
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose Our Services
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We provide the technical capability of a premier EPC contractor with the personalized attention and agility required for fast-track infrastructure deployments.
            </p>
          </div>

          {/* 6 Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseServices.map((point, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-8 hover:border-emerald-300 shadow-xs hover:shadow-lg transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100/80 group-hover:bg-emerald-600 text-emerald-800 group-hover:text-white flex items-center justify-center transition-colors">
                  {point.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {point.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          6. CALL TO ACTION (CTA)
          ================================================== */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 border-b border-slate-800 relative overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=80"
            alt="Substation Infrastructure"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/70 z-0" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 mx-auto">
            <Building2 className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Ready to Scope Your Next Engineering Project?
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Our principal electrical and civil estimators at 1A Iqbal Avenue Phase 3 Lahore are prepared to review your single line diagrams, load schedules, and civil specifications to generate comprehensive itemized proposals.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              to="/get-a-quote"
              id="services-cta-quote-btn"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/50 active:scale-98 transition-all duration-150 w-full sm:w-auto min-h-[44px]"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              to="/contact"
              id="services-cta-contact-btn"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 font-bold text-xs sm:text-sm uppercase tracking-wider active:scale-98 transition-all duration-150 w-full sm:w-auto min-h-[44px]"
            >
              <span>CONTACT US</span>
            </Link>
          </div>

          <div className="pt-6 text-xs text-[#A8BDB3] flex flex-wrap justify-center items-center gap-6">
            <span>Engineering Inquiries: <Link to="/contact" className="text-[#C9A45C] hover:underline font-semibold">Contact Head Office</Link></span>
            <span>•</span>
            <span>Headquarters: <strong className="text-white">{COMPANY_INFO.address}</strong></span>
          </div>
        </div>
      </section>

    </div>
  );
};
