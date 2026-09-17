import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  HardHat, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Check, 
  Phone, 
  MapPin, 
  Maximize2, 
  Truck, 
  Ruler, 
  Droplet,
  Flame
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const CivilWorks: React.FC = () => {
  // Civil works capabilities
  const civilCapabilities = [
    {
      title: 'Heavy Transformer Plinths & Oil Soak Pits',
      desc: 'Reinforced concrete foundation pads designed for dynamic equipment loading, integrated with oil retention basins, flame-trap gravel layers, and drainage sumps complying with environmental spill safety.',
      highlights: [
        'Mass concrete and reinforced raft foundations',
        'Flame-arresting crushed rock gravel beds',
        'Oil containment sumps with water-tight elastomeric liners',
        'Precision anchor pockets and jacking pads'
      ]
    },
    {
      title: 'Substation Control Buildings & Switchgear Rooms',
      desc: 'Turnkey construction of masonry and reinforced concrete frame control buildings featuring cable basements, air-conditioned relay rooms, fire-rated blast doors, and acid-resistant battery rooms.',
      highlights: [
        'Reinforced concrete moment-resisting frames',
        'Suspended cable basement slabs and false flooring',
        'Acid-proof ceramic tiling for battery storage areas',
        'Weather-sealed roof waterproofing and thermal insulation'
      ]
    },
    {
      title: 'Cable Trench Networks & Underground Duct Banks',
      desc: 'Cast-in-place and precast reinforced concrete cable trenches with chequered plate covers, structural divider walls, and concrete-encased PVC/HDPE duct banks for road crossings.',
      highlights: [
        'Precast modular trench sections with lifting lugs',
        'Hot-dip galvanized steel angle iron edging and covers',
        'Concrete-encased conduit banks with pulling manholes',
        'Integral drainage slopes to prevent water accumulation'
      ]
    },
    {
      title: 'Equipment Support & Gantry Tower Foundations',
      desc: 'Rigid pad-and-chimney or drilled shaft pile foundations designed to absorb high-tensile cantilever forces from high-voltage switchyard gantries, isolators, and lightning masts.',
      highlights: [
        'Anchor bolt cage placement using steel alignment jigs',
        'High-strength non-shrink cementitious grouting',
        'Bored piles for low-bearing-capacity soils',
        'Earthing copper tape penetration sleeves'
      ]
    },
    {
      title: 'Perimeter Security Walls & Substation Fencing',
      desc: 'Heavy reinforced boundary walls, anti-climb security fencing, perimeter intrusion lighting foundations, and wide reinforced entry aprons built to accommodate heavy multi-axle transport trailers.',
      highlights: [
        'Reinforced concrete column-and-beam boundary walls',
        'Heavy-duty hot-dip galvanized chain-link fencing',
        'Engineered gate columns capable of carrying heavy cantilever gates',
        'Reinforced concrete vehicle crossing culverts'
      ]
    },
    {
      title: 'Site Earthworks, Drainage & Yard Surfacing',
      desc: 'Bulk cut-and-fill grading, subgrade compaction, storm water drainage culverts, and uniform spreading of high-resistivity switchyard gravel to ensure safe touch and step potentials.',
      highlights: [
        'Laser-guided site grading and proctor compaction testing',
        'Precast storm water drains with silt traps',
        'High-resistivity 50mm clean crushed rock switchyard surfacing',
        'Erosion control and retaining wall structures'
      ]
    }
  ];

  // Project execution approach
  const executionStages = [
    {
      step: '01',
      title: 'Geotechnical Soil Survey & Foundation Review',
      desc: 'Evaluating borehole soil logs, standard penetration test (SPT) values, groundwater tables, and verifying foundation drawings against equipment vendor dynamic load schedules.'
    },
    {
      step: '02',
      title: 'Earthworks, Trenching & Subgrade Preparation',
      desc: 'Excavation to specified depths, subgrade compaction with vibratory rollers, field density testing (sand cone method), and placement of blinding lean concrete.'
    },
    {
      step: '03',
      title: 'Reinforcement Fixing & Formwork Assembly',
      desc: 'High-yield deformed rebar binding according to structural bar bending schedules (BBS), rigid steel formwork alignment, and anchor bolt template installation with optical transits.'
    },
    {
      step: '04',
      title: 'Monolithic Concrete Placement & Controlled Curing',
      desc: 'Pouring certified ready-mix concrete with mechanized vibrators, conducting slump and temperature checks, casting test cylinders, and applying continuous water curing.'
    },
    {
      step: '05',
      title: 'Waterproofing, Grouting & Cold Handover',
      desc: 'Application of bituminous waterproofing membranes, non-shrink equipment grouting under baseplates, trench cover placement, and formal handover to the electrical erection team.'
    }
  ];

  // Quality & safety pillars
  const qualitySafetyPillars = [
    {
      title: 'Rigorous Concrete Cylinder Compressive Testing',
      desc: 'Field casting of concrete test cylinders for every major pour, followed by calibrated laboratory crushing at 7 and 28 days to verify design compressive strength (PSI/MPa).'
    },
    {
      title: 'Certified Rebar Tensile & Bending Audits',
      desc: 'Mill test certificates and independent laboratory tensile and elongation testing on high-yield deformed steel rebar before fixing on site.'
    },
    {
      title: 'Deep Excavation Shoring & Soil Stability Protocols',
      desc: 'Engineered trench shoring, benching, continuous atmospheric testing, and safe access ladders implemented for all excavations exceeding 1.2 meters depth.'
    },
    {
      title: 'Substation Environment HSE & Underground Utility Scans',
      desc: 'Ground-penetrating radar (GPR) and cable locator scans to identify existing buried cables or water mains before breaking ground, paired with strict PPE mandates.'
    }
  ];

  return (
    <div className="space-y-0">
      {/* ==================================================
          1. HERO
          ================================================== */}
      <section className="relative bg-slate-950 text-white min-h-[460px] sm:min-h-[500px] flex items-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=2200&q=85"
            alt="Civil construction and engineering work"
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
                Division 03 • Civil & Structural Engineering
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                <span>/</span>
                <span className="text-emerald-400">Civil Works</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Civil Works & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300">
                Structural Infrastructure
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Specialized civil engineering for power substations, heavy industrial plants, reinforced transformer plinths, cable trench networks, and durable control building structures.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                to="/get-a-quote?service=civil-works"
                id="civil-hero-quote-btn"
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

            {/* Standards & Certifications Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>ASTM & ACI Concrete Standards</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>7 & 28-Day Compressive Break Testing</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Lahore Central Operations</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          2. INTRODUCTION
          ================================================== */}
      <section className="bg-white py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
                Infrastructure Foundations
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Foundations Engineered to Endure Heavy Dynamic Electrical Loads
              </h2>

              <p className="text-slate-700 text-base leading-relaxed">
                Civil construction for power substations and heavy industrial plants presents unique engineering challenges. Massive transformers impose significant static weights while generating continuous harmonic vibration. Meanwhile, outdoor switchyards demand precise earth resistivity control, oil containment safety, and stable anchor bolting for tall structural gantries.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Skylight Luminous bridges civil engineering and electrical requirements with precision. Operating from Lahore, our civil engineering teams deliver reinforced foundations, water-tight cable trench networks, and durable control buildings constructed to rigorous structural tolerances.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Environmental Oil Containment</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Transformer plinths equipped with gravel flame traps and water-tight oil separator pits.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Optical Anchor Bolt Alignment</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Steel alignment templates ensuring millimeter-level precision for gantry tower installation.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/get-a-quote?service=civil-works"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors group"
                >
                  <span>Request Civil Engineering Quote</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                  alt="Reinforced Concrete Civil Foundation Works"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-6 sm:p-8">
                  <div className="text-white space-y-2">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider">
                      Civil Execution
                    </span>
                    <h3 className="text-lg font-bold">Reinforced Concrete Plinths & Basements</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Precision formwork and rebar binding for high-capacity industrial electrical infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. CIVIL WORKS CAPABILITIES
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Engineered Concrete & Earthworks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Civil Works Capabilities
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              From heavy equipment foundation design to turnkey control building construction, our civil engineering division covers the complete scope of electrical infrastructure support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {civilCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-mono font-bold text-sm">
                    {`0${idx + 1}`}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Key Features:
                  </span>
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          4. PROJECT EXECUTION APPROACH
          ================================================== */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Systematic Civil Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Project Execution Approach
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We apply a disciplined 5-stage project execution framework from initial geotechnical soil verification to final concrete curing and handover.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {executionStages.map((stage, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center gap-6"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 font-mono font-black text-2xl flex items-center justify-center border border-emerald-200">
                  {stage.step}
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-lg font-bold text-slate-900">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          5. QUALITY AND SAFETY
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Standards & Protection
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Quality & Safety Standards
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Our civil works adhere to established structural engineering codes, mandatory cylinder break testing, and comprehensive on-site safety procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {qualitySafetyPillars.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 space-y-3 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-900">
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
          6. RELEVANT CONSTRUCTION IMAGERY
          ================================================== */}
      <section className="bg-white py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80"
                alt="Reinforced Concrete Pouring and Formwork"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
                Engineering Supervision
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Supervised Concrete Pouring & Curing
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every concrete pour is supervised by qualified site civil engineers from batching plant dispatch to on-site slump testing, vibration compaction, and water curing. We ensure high-density, crack-resistant concrete capable of withstanding industrial vibration and seasonal thermal cycles.
              </p>
              <div className="pt-2 space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>On-site slump cone and temperature monitoring for every mixer truck</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Curing compound and ponding methods for maximum compressive strength</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Non-shrink grouting under equipment baseplates for total contact</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          7 & 8. CALL TO ACTION & GET A QUOTE BUTTON
          ================================================== */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=80"
            alt="Infrastructure Construction Site"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/75 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 mx-auto">
            <Building2 className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Planning a Civil or Substation Foundation Project?
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Send your architectural drawings, geotechnical soil reports, or equipment foundation specifications to Skylight Luminous engineers at 1A Iqbal Avenue Phase 3 Lahore for an itemized Bill of Quantities (BOQ) and construction timeline.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              to="/get-a-quote?service=civil-works"
              id="civil-cta-quote-btn"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/50 active:scale-98 transition-all duration-150 w-full sm:w-auto min-h-[44px]"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              to="/contact"
              id="civil-cta-contact-btn"
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
