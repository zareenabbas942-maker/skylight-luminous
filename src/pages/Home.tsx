import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Wrench, 
  HardHat, 
  Zap, 
  Activity, 
  CheckCircle2, 
  Building2, 
  Award, 
  Clock, 
  Users, 
  Target, 
  Lightbulb, 
  Phone, 
  MapPin, 
  Globe, 
  ChevronRight, 
  Star, 
  Quote, 
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA, CASE_STUDIES_DATA, TEAM_MEMBERS } from '../data/companyData';

export const Home: React.FC = () => {
  // Why Choose Us 6 key pillars
  const whyChooseUsPoints = [
    {
      title: 'Professional Expertise',
      desc: 'Registered Professional Engineers (PE) with decades of specialized experience in high-voltage switchyards, protection relays, and heavy civil structures.',
      icon: <Award className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Quality Assurance',
      desc: 'Strict adherence to IEC, IEEE, and ASTM international engineering tolerances, verified through certified third-party testing and comprehensive calibration logs.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Reliable Execution',
      desc: 'Turnkey electromechanical and civil project management with zero-compromise safety protocols, engineered rigging plans, and dedicated on-site HSE teams.',
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Innovative Solutions',
      desc: 'Modernizing legacy electrical networks with numerical microprocessor relays, SCADA telemetry integration, and non-invasive infrared thermography diagnostics.',
      icon: <Lightbulb className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Customer Focus',
      desc: 'Tailored EPC contracts, transparent Bill of Quantities (BOQ), responsive milestone communications, and dedicated post-energization engineering support.',
      icon: <Target className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Timely Delivery',
      desc: 'Disciplined critical-path scheduling, synchronized procurement, and rapid-response field crews ensuring on-time substation energization and handovers.',
      icon: <Clock className="w-6 h-6 text-emerald-600" />
    }
  ];

  // Exactly 4 Case Study Sector Categories
  const caseStudyCategories = [
    {
      name: 'Healthcare Sector',
      slug: 'healthcare',
      desc: 'Critical dual-source 11kV redundant power distribution, acoustic transformer isolation, and medical-grade grounding for tertiary hospitals.',
      stat: '99.999% Uptime',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Industrial Sector',
      slug: 'industrial',
      desc: 'Heavy 132kV switchyard civil works, reinforced piling foundations, and high-amperage busbars designed for severe continuous plant operations.',
      stat: '80 MVA Capacity',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Urban Housing',
      slug: 'urban-housing',
      desc: 'Underground medium-voltage distribution systems, water-sealed vault chambers, and remote-controlled pad-mounted substations for modern communities.',
      stat: '35+ km Cabling',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Educational Sector',
      slug: 'educational',
      desc: 'Sprawling campus power infrastructure modernizations, numerical protection arrays, and synchronized hybrid solar grid integration.',
      stat: '1.2 MW Solar Tie',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  // 3 Editable Demo Testimonials (clearly labeled as demo/fictional profiles)
  const demoTestimonials = [
    {
      id: 'demo-1',
      quote: 'Skylight Luminous delivered our hospital’s 11kV dual-redundant substation with flawless precision. Their protective relay coordination and acoustic dampening measures exceeded all healthcare safety standards.',
      name: 'Engr. M. Asif (Demo Profile)',
      role: 'Healthcare Infrastructure Project Director',
      sector: 'Healthcare Facility Project',
      rating: 5
    },
    {
      id: 'demo-2',
      quote: 'The deep civil piling and heavy transformer erection performed by Skylight Luminous handled our continuous manufacturing loads with absolute stability. Their engineering team is disciplined and technically elite.',
      name: 'Tariq H. Qureshi (Demo Profile)',
      role: 'Industrial Plant Operations Lead',
      sector: 'Heavy Manufacturing Complex',
      rating: 5
    },
    {
      id: 'demo-3',
      quote: 'Executing over 35 kilometers of underground medium-voltage cabling in an active gated development required exceptional HSE coordination. Skylight Luminous completed the pad-mounted substations right on schedule.',
      name: 'Dr. Sarah Malik (Demo Profile)',
      role: 'Master Community Electrification Consultant',
      sector: 'Urban Master Community',
      rating: 5
    }
  ];

  // Map service icon
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

  return (
    <div className="space-y-0">
      {/* ==================================================
          1. HERO SECTION
          ================================================== */}
      <section className="relative bg-slate-950 text-white min-h-[620px] lg:min-h-[720px] flex items-center overflow-hidden border-b border-slate-800">
        {/* Full-width Engineering & Infrastructure Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=2200&q=85"
            alt="Engineering and infrastructure project"
            className="w-full h-full object-cover object-center opacity-30 scale-100 transform transition-transform duration-1000"
          />
          {/* Subtle multi-stop gradient overlay to ensure maximum readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl space-y-7">
            {/* Corporate Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold tracking-wider uppercase backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              Power Systems & Infrastructure Contractors
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
              Building Excellence. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300">
                Creating Possibilities.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
              Skylight Luminous is a premier engineering and infrastructure contractor headquartered in Lahore, delivering turnkey high-voltage substation construction, electrical testing and commissioning, precision plant erection, and high-strength civil foundations across Pakistan.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                to="/services"
                id="hero-explore-services-btn"
                className="inline-flex items-center justify-center px-7 py-3.5 sm:py-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg hover:shadow-emerald-600/20 active:scale-98 transition-all duration-150 group w-full sm:w-auto min-h-[44px]"
              >
                <span>EXPLORE OUR SERVICES</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/get-a-quote"
                id="hero-get-a-quote-btn"
                className="inline-flex items-center justify-center px-7 py-3.5 sm:py-4 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700 hover:border-emerald-500/50 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-150 w-full sm:w-auto min-h-[44px]"
              >
                <span>GET A QUOTE</span>
              </Link>
            </div>

            {/* Fast Credentials Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Standardized Engineering Methodologies</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>ISO & IEC Standard Compliance</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Lahore Central Engineering Office</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          2. ABOUT SKYLIGHT LUMINOUS
          ================================================== */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left text column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                About Skylight Luminous
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Pioneering Engineering Rigor with Unyielding Commitment
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Skylight Luminous is founded on the principles of engineering precision, unwavering integrity, and modern infrastructure execution. We bridge the critical gap between complex electrical design and resilient structural civil works.
              </p>

              {/* Five Focused Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Quality</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Zero-compromise standards across transformer oils, concrete cylinder batching, and calibrated testing.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Reliability</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Proven high-voltage installations with dependable continuous operational uptime under demanding electrical loads.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Award className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Professionalism</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Experienced project engineers, dedicated site HSE officers, and transparent project accounting.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Lightbulb className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Innovation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Modernizing substations with numerical relays, automated SCADA interfaces, and thermal infrared diagnostics.
                  </p>
                </div>
              </div>

              {/* Customer Satisfaction callout */}
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-3">
                <Users className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-emerald-950">Customer Satisfaction at Core</h4>
                  <p className="text-xs text-emerald-800 mt-0.5 leading-relaxed">
                    We maintain close client collaboration from early feasibility studies to long-term post-energization maintenance contracts.
                  </p>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="pt-2">
                <Link
                  to="/about"
                  id="about-learn-more-btn"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right visual card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                  alt="Civil construction and engineering work"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-6 sm:p-8">
                  <div className="text-white space-y-2">
                    <div className="inline-block px-2.5 py-1 rounded-md bg-[#1F6654] text-[#C9A45C] font-mono text-xs font-bold uppercase tracking-wider">
                      Turnkey EPC Contractor
                    </div>
                    <h3 className="text-xl font-bold">Rooted in Lahore, Building for Pakistan</h3>
                    <p className="text-xs text-[#A8BDB3] leading-relaxed">
                      1A Iqbal Avenue Phase 3 Lahore • Engineering & Infrastructure Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. OUR SERVICES (EXACTLY FIVE SERVICES)
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
              Comprehensive Capabilities
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Services
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Skylight Luminous delivers specialized high-voltage electrical, civil, and maintenance divisions staffed by certified engineers and equipped with industry-leading diagnostic instruments.
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
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    
                    {/* Floating Icon Box */}
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-md border border-slate-100">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Learn More Button */}
                    <div className="pt-4 border-t border-slate-100">
                      <Link
                        to={targetRoute}
                        id={`service-card-${service.slug}-btn`}
                        className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-slate-50 group-hover:bg-emerald-50 text-slate-700 group-hover:text-emerald-700 font-bold text-xs uppercase tracking-wider transition-colors"
                      >
                        <span>Learn More</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-emerald-600" />
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
          4. WHY CHOOSE US (6 POINTS)
          ================================================== */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              The Skylight Luminous Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We combine deep technical mastery, strict regulatory compliance, and a collaborative ethos to deliver high-consequence infrastructure on time and on budget.
            </p>
          </div>

          {/* 6 Clean Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-lg transition-all duration-300 space-y-4 group"
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
          5. CASE STUDIES (EXACTLY FOUR CATEGORIES)
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
                Demonstrated Track Record
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Case Studies by Sector
              </h2>
              <p className="mt-3 text-slate-600 text-base leading-relaxed">
                Explore our turnkey accomplishments across key critical infrastructure sectors in Pakistan.
              </p>
            </div>

            <Link
              to="/case-studies"
              id="view-all-case-studies-btn"
              className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 hover:underline gap-1.5"
            >
              <span>Explore All Sector Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Exactly Four Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudyCategories.map((category) => (
              <div
                key={category.slug}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Sector Image */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={category.image}
                    alt={`${category.name} infrastructure project`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  
                  {/* Category Badge & Key Metric */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full bg-slate-900/90 text-lime-400 text-xs font-bold uppercase tracking-wider border border-slate-700">
                      {category.name}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-emerald-600/90 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-400/40">
                    {category.stat}
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {category.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/case-studies/${category.slug}`}
                      id={`case-study-btn-${category.slug}`}
                      className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      <span>View Sector Case Study</span>
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          6. OUR TEAM (SMALL PREVIEW WITH EDITABLE DEMO CARDS)
          ================================================== */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
                Engineering Leadership
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Team
              </h2>
              <p className="mt-3 text-slate-600 text-base leading-relaxed">
                Meet the management and engineering leaders steering Skylight Luminous with precision, safety, and operational excellence.
              </p>
            </div>

            <Link
              to="/team"
              id="meet-our-team-btn"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors group"
            >
              <span>Meet Our Team</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 4 Featured Demo Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {TEAM_MEMBERS.slice(0, 4).map((member) => (
              <div
                key={member.id}
                className="bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-mono font-medium text-lime-300 uppercase tracking-wider">
                      {member.credentials}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-2.5">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          7. TESTIMONIALS (3 EDITABLE DEMO TESTIMONIALS)
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Industry Perspectives & Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Testimonials
            </h2>
            <p className="text-slate-500 text-xs italic">
              * The following editable demo profiles demonstrate feedback scenarios based on typical turnkey engineering deliverables.
            </p>
          </div>

          {/* 3 Testimonials Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demoTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Quote className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {item.role}
                  </p>
                  <p className="text-[11px] font-medium text-emerald-700 uppercase tracking-wider mt-1">
                    {item.sector}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          8. CALL TO ACTION (CTA)
          ================================================== */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 border-b border-slate-800 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=80"
            alt="Electrical substation infrastructure"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/70 z-0" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 mx-auto">
            <Building2 className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Have a Project in Mind?
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Whether you are developing a new high-voltage grid interconnection, requiring primary protection relay testing, or planning heavy equipment foundations, our engineering teams in Lahore are ready to assist.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              to="/get-a-quote"
              id="cta-get-a-quote-btn"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/50 active:scale-98 transition-all duration-150 w-full sm:w-auto min-h-[44px]"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              to="/contact"
              id="cta-contact-us-btn"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 font-bold text-xs sm:text-sm uppercase tracking-wider active:scale-98 transition-all duration-150 w-full sm:w-auto min-h-[44px]"
            >
              <span>CONTACT US</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          9. CONTACT INFORMATION
          ================================================== */}
      <section className="bg-white py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Direct Contact
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Contact Information
            </h2>
            <p className="text-sm text-slate-600">
              Reach out to our Lahore central office or connect directly with our engineering personnel.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
              
              {/* Company Header inside contact section */}
              <div className="border-b border-slate-200 pb-6 mb-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Skylight Luminous
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mt-1">
                    Electrical EPC, Testing & Civil Engineering
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  Send a Message
                </Link>
              </div>

              {/* Exact 3 Contact Items */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-800">
                
                {/* 1. Address */}
                <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-2xs space-y-2.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Office Address
                  </h4>
                  <p className="text-sm font-semibold text-slate-900 leading-snug">
                    1A Iqbal Avenue Phase 3 Lahore
                  </p>
                </div>

                {/* 2. Direct Call Action */}
                <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-2xs space-y-2.5">
                  <div className="w-10 h-10 rounded-lg bg-[#F7F5EF] text-[#1F6654] flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#202522]">
                    Direct Voice Channel
                  </h4>
                  <p className="text-sm font-semibold text-[#123C32]">
                    <a 
                      href={`tel:${COMPANY_INFO.phone}`} 
                      className="hover:text-[#1F6654] transition-colors font-bold text-base inline-flex items-center gap-1.5"
                    >
                      Call Head Office
                    </a>
                  </p>
                </div>

                {/* 3. Website */}
                <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-2xs space-y-2.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Official Website
                  </h4>
                  <p className="text-sm font-semibold text-slate-900">
                    <a
                      href="https://www.skylightluminous.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-600 transition-colors font-mono"
                    >
                      www.skylightluminous.com
                    </a>
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
