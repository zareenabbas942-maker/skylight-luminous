import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Check, 
  MapPin, 
  HardHat, 
  Clock, 
  Users2, 
  Sparkles, 
  Award, 
  HeartHandshake, 
  Gauge, 
  Cpu, 
  Wrench, 
  Zap,
  Phone
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const AboutUs: React.FC = () => {
  // Core Values aligned strictly with user criteria:
  // Quality, Reliability, Professionalism, Innovation, Customer satisfaction, Safety, Timely execution, Long-term relationships
  const coreValues = [
    {
      title: 'Uncompromising Quality',
      category: 'Quality',
      desc: 'We uphold strict engineering precision across every civil foundation, busbar connection, and protective relay calibration, verifying results with calibrated test instruments.',
      icon: ShieldCheck
    },
    {
      title: 'Operational Reliability',
      category: 'Reliability',
      desc: 'Power infrastructure must perform flawlessly under peak loads and harsh weather. We engineer every system to mitigate downtime and ensure uninterrupted continuity.',
      icon: Gauge
    },
    {
      title: 'Engineering Professionalism',
      category: 'Professionalism',
      desc: 'Our registered engineers conduct business with complete technical integrity, transparent documentation, accurate reporting, and direct client accountability.',
      icon: Award
    },
    {
      title: 'Technical Innovation',
      category: 'Innovation',
      desc: 'We embrace modern numerical relay automation, advanced thermographic analysis, digital secondary injection testing, and modern civil construction methodologies.',
      icon: Cpu
    },
    {
      title: 'Safety First & Zero Compromise',
      category: 'Safety',
      desc: 'Occupational health and safety is integrated into every workflow. We enforce strict Safe Work Method Statements (SWMS), Lock-Out/Tag-Out (LOTO), and PPE mandates.',
      icon: HardHat
    },
    {
      title: 'Disciplined Timely Execution',
      category: 'Timely Execution',
      desc: 'Shutdown windows and project milestones are managed with rigorous planning. We meet scheduled targets without taking shortcuts on technical or safety standards.',
      icon: Clock
    },
    {
      title: 'Customer Satisfaction',
      category: 'Customer Satisfaction',
      desc: 'We prioritize clear communication, accessible engineering leadership, and proactive problem-solving to ensure our clients have total confidence in their electrical assets.',
      icon: Sparkles
    },
    {
      title: 'Long-Term Relationships',
      category: 'Long-Term Relationships',
      desc: 'We view every project as the foundation for an enduring engineering partnership, standing behind our work with ongoing technical advisory, maintenance, and support.',
      icon: HeartHandshake
    }
  ];

  // Why Choose Us Pillars (focusing on capability, methodology, and engineering rigor without invented metrics)
  const whyChooseUsPillars = [
    {
      title: 'Integrated Civil & Electrical Synergy',
      desc: 'Unlike isolated contractors, we handle both heavy reinforced concrete civil works and high-voltage electrical erection under one engineering umbrella, eliminating interface mismatches.'
    },
    {
      title: 'In-House Testing & Diagnostic Capabilities',
      desc: 'From mobile transformer oil filtration to secondary injection testing and infrared thermography, we maintain our own field test equipment for rapid and independent verification.'
    },
    {
      title: 'Direct Engineering Oversight on Every Site',
      desc: 'Qualified project engineers supervise field activities daily, ensuring that all works match engineering drawings, manufacturer specifications, and applicable grid standards.'
    },
    {
      title: 'Transparent Technical Documentation',
      desc: 'Every milestone concludes with comprehensive test certificates, as-built drawings, and inspection dossiers ready for regulatory review and facility archives.'
    },
    {
      title: 'Proven Shutdown Management',
      desc: 'Experienced in organizing tight weekend turnaround outages and live-facility bypasses, ensuring critical industrial production and institutional operations face minimal disruption.'
    },
    {
      title: 'Strategic Central Location in Lahore',
      desc: 'Headquartered at 1A Iqbal Avenue Phase 3 Lahore, our rapid-response teams, tooling inventory, and engineering office provide responsive support throughout the region.'
    }
  ];

  // Professional Infrastructure Imagery Showcase
  const projectGallery = [
    {
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
      title: 'High-Voltage Switchyard Engineering',
      desc: 'Outdoor air-insulated gantry structures, SF6 circuit breakers, and equipment support frames.',
      tag: 'Electrical EPC'
    },
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
      title: 'Reinforced Substation Civil Works',
      desc: 'Monolithic concrete foundations, transformer oil soak pits, and heavy equipment plinths.',
      tag: 'Civil & Structural'
    },
    {
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      title: 'Control Room & Protection Testing',
      desc: 'Numerical relay integration, secondary injection calibration, and SCADA automation wiring.',
      tag: 'Testing & Commissioning'
    }
  ];

  return (
    <div className="space-y-0">
      {/* ==================================================
          1. HERO / BANNER
          ================================================== */}
      <section className="relative bg-slate-950 text-white min-h-[460px] sm:min-h-[500px] flex items-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=85"
            alt="Skylight Luminous Engineering & Infrastructure Headquarters"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl space-y-6">
            
            {/* Breadcrumbs & Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold tracking-wider uppercase backdrop-blur-xs">
                <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                Corporate Profile & Principles
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-emerald-400">About Us</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Engineering Built on <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300">
                Integrity & Technical Rigor
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Skylight Luminous delivers specialized electrical EPC contracting, testing and commissioning, electromechanical installation, and reinforced civil engineering for mission-critical power infrastructure.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                to="/get-a-quote"
                id="about-hero-quote-btn"
                className="inline-flex items-center justify-center px-7 py-3.5 sm:py-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md active:scale-98 transition-all duration-150 w-full sm:w-auto min-h-[44px]"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 sm:py-4 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 font-bold text-xs sm:text-sm uppercase tracking-wider active:scale-98 transition-all duration-150 w-full sm:w-auto min-h-[44px]"
              >
                <span>CONTACT US</span>
              </Link>
            </div>

            {/* Core Standards Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Standardized IEC & IEEE Methodologies</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Zero-Compromise Safety Protocols</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{COMPANY_INFO.address}</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
                Company Overview
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Dedicated to High-Voltage Reliability and Resilient Civil Infrastructure
              </h2>

              <p className="text-slate-700 text-base leading-relaxed">
                <strong>Skylight Luminous</strong> is an engineering firm focused on providing comprehensive electrical and civil solutions for substations, industrial plants, and commercial complexes. Operating from our central facility at 1A Iqbal Avenue Phase 3 Lahore, our engineering team manages critical infrastructure projects requiring precision execution, stringent safety compliance, and disciplined technical coordination.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Our operations integrate power engineering with structural construction. By combining in-house capabilities for transformer foundation plinths, cable trenches, structural gantry erection, protective relay testing, and complete grid commissioning, we offer our clients a unified and dependable execution partner.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Multidisciplinary Engineering</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Seamless integration between heavy civil foundations and complex high-voltage electrical assemblies.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Calibrated Field Testing</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In-house diagnostic equipment ensuring all primary and secondary gear is verified before energization.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/get-a-quote"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors group"
                >
                  <span>Request an Engineering Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Corporate Imagery Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80"
                  alt="Skylight Luminous Engineering Team at Substation Facility"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-6 sm:p-8">
                  <div className="text-white space-y-2">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider">
                      Lahore Operations
                    </span>
                    <h3 className="text-lg font-bold">Engineering Excellence & Field Safety</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Coordinating testing, erection, and civil operations from 1A Iqbal Avenue Phase 3 Lahore.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3 & 4. OUR MISSION & OUR VISION
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Strategic Direction
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Mission & Vision
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Our foundational commitments guide every design calculation, foundation pour, and testing sequence we perform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Mission Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs hover:shadow-md transition-all duration-200 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center border border-emerald-200">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Our Mission
                </h3>
                <p className="text-slate-700 text-base leading-relaxed">
                  To provide robust, reliable, and compliant electrical and civil engineering services that empower industrial manufacturers, commercial enterprises, and power utilities with safe, uninterrupted, and fault-resilient infrastructure.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Deliver zero-defect testing and commissioning before energization</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Construct durable civil structures engineered for heavy electrical equipment</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Maintain rigorous safety standards on every active job site</span>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs hover:shadow-md transition-all duration-200 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center border border-emerald-200">
                  <Compass className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Our Vision
                </h3>
                <p className="text-slate-700 text-base leading-relaxed">
                  To be the region's most trusted engineering partner for power distribution, substation construction, and high-voltage testing, recognized for technical depth, uncompromised integrity, and lasting client partnerships.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Set benchmarks for precision in relay calibration and electrical testing</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Foster long-term relationships through transparent engineering advisory</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Continuously innovate with modern diagnostics and digital tools</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          5. OUR CORE VALUES
          ================================================== */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Every decision we make—from equipment selection to field safety protocols—is guided by eight core principles that define our engineering philosophy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-emerald-300 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                        {val.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        {val.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================
          6. WHY CHOOSE US
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              The Skylight Luminous Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose Skylight Luminous
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              When delivering mission-critical power systems, selecting the right partner means choosing verified expertise, dependable accountability, and safe field execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsPillars.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-mono font-bold text-sm">
                    {`0${idx + 1}`}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          7. PROFESSIONAL IMAGE SECTION
          ================================================== */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Field Infrastructure Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineering in the Field
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              A visual look at the high-voltage switchyards, control rooms, and heavy civil construction projects that define our engineering operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectGallery.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 text-white flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-600/90 text-white font-mono text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between bg-slate-950">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-800 flex items-center text-xs text-emerald-400 font-semibold">
                    <span>Engineered by Skylight Luminous</span>
                  </div>
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
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=2000&q=80"
            alt="Skylight Luminous Engineering Project Site"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/75 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 mx-auto">
            <Building2 className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Ready to Partner with Skylight Luminous?
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Whether you are planning a high-voltage substation upgrade, seeking pre-commissioning testing, or requiring heavy civil infrastructure in Pakistan, our engineering team is ready to assist.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              to="/get-a-quote"
              id="about-cta-quote-btn"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/50 active:scale-98 transition-all duration-150 w-full sm:w-auto min-h-[44px]"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              to="/contact"
              id="about-cta-contact-btn"
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
