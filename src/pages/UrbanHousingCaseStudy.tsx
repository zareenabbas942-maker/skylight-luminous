import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  MapPin, 
  HardHat, 
  Zap, 
  Gauge, 
  Clock, 
  Home, 
  Sparkles, 
  X, 
  ChevronRight,
  Check,
  Layers,
  Wrench
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface DemoProject {
  id: string;
  title: string;
  category: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  keyAspects: string[];
  focusAreas: string[];
}

export const UrbanHousingCaseStudy: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<DemoProject | null>(null);
  const [activeGalleryImage, setActiveGalleryImage] = useState<string | null>(null);

  // 3 Editable Demo Projects (clearly noted as demo projects)
  const demoProjects: DemoProject[] = [
    {
      id: 'modern-residential-dev',
      title: 'Modern Residential Development',
      category: 'Multi-Story Infrastructure & Power Distribution',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'Complete electrical distribution planning, transformer substations, vertical busduct trunking, and emergency power backup for high-density residential towers.',
      fullDesc: 'An integrated engineering concept addressing the power continuity and aesthetic demands of modern multi-unit vertical residential communities. Includes dual medium-voltage utility incomers, high-efficiency dry-type transformers, low-noise acoustic enclosures, and precision electrical metering infrastructure.',
      keyAspects: [
        'Compact indoor dry-type substation integration',
        'Vertical rising mains and low-loss sandwich busducts',
        'Automated transfer switching for common services and elevators',
        'Structured grounding and surge suppression systems'
      ],
      focusAreas: ['Electrical Engineering', 'Indoor Substations', 'Power Distribution']
    },
    {
      id: 'urban-housing-infra',
      title: 'Urban Housing Infrastructure',
      category: 'Underground Electrification & Civil Networks',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'Underground 11kV cabling networks, precast concrete cable vaults, pad-mounted distribution transformers, and Ring Main Units (RMU).',
      fullDesc: 'Civil and medium-voltage infrastructure designed to eliminate overhead cable clutter while maximizing power reliability. Incorporates sealed underground duct banks, pad-mounted transformer plinths, modular ring topologies for quick fault isolation, and full compliance with local municipal utility codes.',
      keyAspects: [
        'Armored medium-voltage underground cable routing',
        'Precast concrete water-sealed vaults and joint chambers',
        'Weatherproof outdoor pad-mounted transformer enclosures',
        'Automated ring switching to prevent widespread local outages'
      ],
      focusAreas: ['Underground Cabling', 'Civil Vaults', 'RMU Networks']
    },
    {
      id: 'residential-community-dev',
      title: 'Residential Community Development',
      category: 'Master-Planned Community Electrification',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'Comprehensive site electrification, dedicated community substations, street lighting grid, and statutory testing prior to resident energization.',
      fullDesc: 'End-to-end electrical and civil infrastructure implementation for master-planned gated housing schemes. Covers primary substation construction, secondary feeder distribution, calibrated protective relay verification, and planned preventive maintenance programs for long-term community reliability.',
      keyAspects: [
        'Dedicated 11kV community distribution substations',
        'Calibrated secondary relay injection and insulation testing',
        'Civil foundation pads with integrated oil retention basins',
        'Preventive maintenance frameworks for continuous uptime'
      ],
      focusAreas: ['Substation Construction', 'Testing & Commissioning', 'Maintenance']
    }
  ];

  // Services & Scope (linking to existing 5 services)
  const relatedServices = [
    {
      title: 'Testing & Commissioning Services',
      desc: 'Calibrated relay secondary injection, insulation resistance, contact timing, and statutory pre-energization verification for housing networks.',
      path: '/services/testing-commissioning'
    },
    {
      title: 'Installation & Erection Services',
      desc: 'Precision mechanical rigging, transformer placement, switchgear line-up coupling, and high-voltage busbar installation.',
      path: '/services/installation-erection'
    },
    {
      title: 'Civil Works',
      desc: 'Specialized reinforced foundation plinths, acoustic firewall barriers, transformer soak pits, and durable cable vaults.',
      path: '/services/civil-works'
    },
    {
      title: 'Substation Construction',
      desc: 'Complete turnkey indoor and compact outdoor substation construction, equipment supply coordination, and utility grid integration.',
      path: '/services/substation-construction'
    },
    {
      title: 'Maintenance Services',
      desc: 'Structured preventive maintenance, mobile transformer oil filtration, thermography, and rapid engineering support.',
      path: '/services/maintenance'
    }
  ];

  // 5 Clean Visual Project Highlights (No fake statistics, no numbers)
  const projectHighlights = [
    {
      title: 'Quality Focus',
      desc: 'Adherence to stringent IEC, IEEE, and municipal standards across all electrical terminations, underground ducting, and structural concrete.',
      icon: ShieldCheck
    },
    {
      title: 'Reliable Execution',
      desc: 'Engineered power architectures emphasizing ring redundancy, rapid fault isolation, and stable voltage delivery for urban residents.',
      icon: Gauge
    },
    {
      title: 'Safety-Conscious Approach',
      desc: 'Strict Safe Work Method Statements (SWMS), Lock-Out/Tag-Out (LOTO) protocols, and touch-voltage protection across all public-facing equipment.',
      icon: HardHat
    },
    {
      title: 'Professional Coordination',
      desc: 'Seamless collaboration between civil contractors, electromechanical crews, municipal authorities, and regional electric utilities.',
      icon: Sparkles
    },
    {
      title: 'Timely Project Support',
      desc: 'Disciplined project scheduling synchronized with community development phases to ensure power availability before occupancy.',
      icon: Clock
    }
  ];

  // Professional Urban Housing Infrastructure Image Gallery
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      title: 'Modern Residential Complex & Infrastructure',
      tag: 'Urban Housing'
    },
    {
      src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      title: 'High-Density Residential Architecture',
      tag: 'Residential Towers'
    },
    {
      src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      title: 'Master-Planned Community Development',
      tag: 'Community Development'
    },
    {
      src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      title: 'Structural Foundations & Civil Engineering',
      tag: 'Civil Construction'
    },
    {
      src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      title: 'Power Distribution & Control Switchgear',
      tag: 'Electrical Infrastructure'
    },
    {
      src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
      title: 'Dedicated Community Power Substations',
      tag: 'Substation Engineering'
    }
  ];

  return (
    <div className="space-y-0">
      {/* ==================================================
          1. HERO / PAGE BANNER
          ================================================== */}
      <section className="relative bg-slate-950 text-white min-h-[440px] sm:min-h-[480px] flex items-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2200&q=85"
            alt="Modern urban housing development"
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
                <Home className="w-3.5 h-3.5 text-lime-400" />
                Sector Case Study
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
                <span>/</span>
                <span className="text-emerald-400">Urban Housing</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Urban Housing
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Modern Engineering, Construction and Infrastructure Solutions for Urban Developments
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                to="/get-a-quote"
                id="urban-housing-hero-quote-btn"
                className="inline-flex items-center justify-center px-7 py-3.5 sm:py-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md active:scale-98 transition-all duration-150 w-full sm:w-auto min-h-[44px]"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/contact"
                id="urban-housing-hero-contact-btn"
                className="inline-flex items-center justify-center px-7 py-3.5 sm:py-4 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 font-bold text-xs sm:text-sm uppercase tracking-wider active:scale-98 transition-all duration-150 w-full sm:w-auto min-h-[44px]"
              >
                <span>CONTACT US</span>
              </Link>
            </div>

            {/* Standards Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Underground Power Distribution Networks</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Zero-Compromise Public Safety Compliance</span>
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
          2. URBAN HOUSING INTRODUCTION
          ================================================== */}
      <section className="bg-white py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
                Urban Housing Capabilities
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Modern Power, Underground Cabling, and Structural Solutions for Thriving Communities
              </h2>

              <p className="text-slate-700 text-base leading-relaxed">
                Modern residential communities, apartment complexes, and urban housing schemes demand clean aesthetic environments, safe underground electrification, and uninterrupted power availability. Balancing dense resident populations with low acoustic noise, discrete substation footprints, and robust utility grid tie-ins requires proven engineering integration.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>Skylight Luminous</strong> supports urban housing developers, engineering consultants, and public sector housing authorities through:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Engineering Solutions</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Load demand profiling, ring distribution schemes, and electrical network modeling.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Civil Works & Infrastructure</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Reinforced transformer plinths, precast cable duct banks, and oil containment pits.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Installation & Erection</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Precision placement of compact substations, Ring Main Units (RMU), and switchgear.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Testing & Maintenance</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Calibrated pre-energization tests, insulation validation, and ongoing asset servicing.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Callout Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Urban Residential Development"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex items-end p-6 sm:p-8">
                  <div className="text-white space-y-2">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider">
                      Underground Infrastructure
                    </span>
                    <h3 className="text-lg font-bold">Aesthetic & Safe Community Power</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Zero overhead cable hazards, flood-sealed concrete chambers, and redundant ring networks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. FEATURED HOUSING PROJECTS (EDITABLE DEMO)
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="flex items-center gap-2">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
                Demo Case Studies
              </span>
              <span className="text-xs text-slate-500 font-mono">
                [Editable Concept Models]
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Housing Projects
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Explore representative project frameworks illustrating how Skylight Luminous coordinates civil construction, underground cabling, and compact substation deployment for urban housing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demoProjects.map((project) => (
              <div
                key={project.id}
                id={`housing-card-${project.id}`}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Image Header */}
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/85 text-emerald-300 font-mono text-xs font-bold px-3 py-1 rounded-md border border-slate-800 backdrop-blur-xs">
                    {project.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Focus Tags */}
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {project.focusAreas.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      id={`view-details-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-emerald-600 text-white font-semibold text-xs tracking-wide transition-colors duration-200 group/btn"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          4. SERVICES & SCOPE (LINKING TO 5 EXISTING SERVICES)
          ================================================== */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Core Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Services & Scope for Urban Housing
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Skylight Luminous provides five core engineering disciplines tailored to support residential infrastructure, compact community substations, and long-term network reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((srv, sIdx) => (
              <div
                key={sIdx}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-7 shadow-xs hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-bold text-sm">
                    {`0${sIdx + 1}`}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <Link
                    to={srv.path}
                    className="inline-flex items-center text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors group/link"
                  >
                    <span>Explore Service Scope</span>
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          5. PROJECT HIGHLIGHTS (NO FAKE METRICS / NO STATS)
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Execution Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Project Highlights & Methodology
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Residential development infrastructure requires clean aesthetics, public safety assurance, and dependable coordination with local utility providers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {projectHighlights.map((hl, hIdx) => {
              const IconComp = hl.icon;
              return (
                <div
                  key={hIdx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4 text-center sm:text-left"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto sm:mx-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {hl.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {hl.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================
          6. IMAGE GALLERY
          ================================================== */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Visual Reference
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Urban Housing Infrastructure Image Gallery
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Photographic references highlighting modern urban developments, master-planned housing schemes, underground civil utilities, and power substations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, gIdx) => (
              <div
                key={gIdx}
                onClick={() => setActiveGalleryImage(img.src)}
                className="group relative h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg cursor-pointer transition-all duration-300 bg-slate-900"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-300 block">
                    {img.tag}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                    {img.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          7. CALL TO ACTION (CTA)
          ================================================== */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80"
            alt="Skylight Luminous Urban Housing Engineering"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/75 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 mx-auto">
            <Home className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Have an Urban Housing Project in Mind?
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Discuss your project requirements with Skylight Luminous.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              to="/get-a-quote"
              id="urban-housing-cta-quote-btn"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/50 active:scale-98 transition-all duration-150 w-full sm:w-auto min-h-[44px]"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              to="/contact"
              id="urban-housing-cta-contact-btn"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 font-bold text-xs sm:text-sm uppercase tracking-wider active:scale-98 transition-all duration-150 w-full sm:w-auto min-h-[44px]"
            >
              <span>CONTACT US</span>
            </Link>
          </div>

          <div className="pt-6 text-xs text-[#A8BDB3] flex flex-wrap justify-center items-center gap-6">
            <span>Engineering Inquiries: <Link to="/contact" className="text-[#C9A45C] hover:underline font-semibold">Contact Head Office</Link></span>
            <span>•</span>
            <span>Headquarters: <strong className="text-white">{COMPANY_INFO.address}</strong></span>
            <span>•</span>
            <span>Website: <strong className="text-white">{COMPANY_INFO.domain}</strong></span>
          </div>
        </div>
      </section>

      {/* ==================================================
          INTERACTIVE MODAL: PROJECT DETAILS
          ================================================== */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden h-56 bg-slate-100">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedProject.fullDesc}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Technical Considerations & Scope:
                </h4>
                <div className="space-y-2">
                  {selectedProject.keyAspects.map((asp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{asp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors"
              >
                Close Preview
              </button>
              <Link
                to="/get-a-quote"
                className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================
          INTERACTIVE MODAL: GALLERY LIGHTBOX
          ================================================== */}
      {activeGalleryImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveGalleryImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveGalleryImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeGalleryImage}
              alt="Expanded Urban Housing Project"
              className="w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};
