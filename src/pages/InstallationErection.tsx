import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  HardHat, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Layers, 
  Compass, 
  Anchor, 
  Building2, 
  Check, 
  Truck, 
  Gauge, 
  Zap,
  MapPin,
  Phone
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const InstallationErection: React.FC = () => {
  // Services & Capabilities
  const capabilities = [
    {
      title: 'Power Transformer Rigging & Dressing',
      desc: 'Precision skidding, hydraulic jacking, and placement of multi-MVA power transformers onto reinforced civil plinths, followed by radiator banks, bushings, and conservator tank dressing.',
      features: [
        'Hydraulic skidding and load-distributing rail systems',
        'Bushing mounting and optical vertical alignment',
        'Radiator, fan, and conservator pipework assembly',
        'Vacuum pulling and oil filtration interface'
      ]
    },
    {
      title: 'MV & LV Switchgear Lineup Alignment',
      desc: 'Laser-guided leveling, coupling, and torque-controlled assembly of medium and low voltage indoor switchgear panels, vacuum circuit breaker boards, and motor control centers (MCC).',
      features: [
        'Laser optical alignment to prevent mechanical frame racking',
        'Inter-panel main busbar joining and torque seal marking',
        'Draw-out breaker racking mechanism inspection',
        'Control and auxiliary bus wiring coupling'
      ]
    },
    {
      title: 'Outdoor Switchyard Structural Gantry Erection',
      desc: 'Assembly and bolting of heavy hot-dip galvanized steel gantries, dead-end towers, equipment support structures, surge arresters, and motorized isolator switches up to 132kV.',
      features: [
        'Tower anchor bolt survey and foundation grouting',
        'High-tensile torque-controlled structural bolt fastening',
        'Disconnect switch and earth switch mechanical alignment',
        'Flexible and tubular busbar stringing'
      ]
    },
    {
      title: 'Busway & Heavy Busduct Installation',
      desc: 'Overhead and subterranean busduct erection linking power transformers to indoor switchgear panels, incorporating thermal expansion joints, fire stops, and seismic hangers.',
      features: [
        'Engineered hanger supports and spring vibration isolators',
        'Joint torque auditing and insulation phase barrier fitting',
        'Wall penetrations and IP-rated weatherproof seals',
        'Phase sequence continuity checks'
      ]
    },
    {
      title: 'Heavy Cable Tray & Cable Pulling Systems',
      desc: 'Installation of perforated and ladder-type hot-dip galvanized cable trays, automated winch cable pulling with continuous tension monitoring, and medium/high voltage terminations.',
      features: [
        'Engineered cable tray layouts with seismic bracing',
        'Controlled pulling winch with calibrated dynamometers',
        'Heat-shrink and cold-shrink cable termination kits',
        'Trellis and trefoil cable cleat fastening for fault restraint'
      ]
    },
    {
      title: 'Control, Protection & Auxiliary Systems Assembly',
      desc: 'Installation of relay and protection panels, SCADA RTU cabinets, station battery banks with seismic tiered racks, DC rectifiers, and auxiliary distribution boards.',
      features: [
        'Station battery rack assembly and acid-resistant spill containment',
        'Multipair control cable routing and gland plate sealing',
        'System and equipment earthing copper tape ties',
        'Point-to-point ferruling and schematic schedule audits'
      ]
    }
  ];

  // 5-Stage Installation Process
  const installationStages = [
    {
      step: '01',
      phase: 'Rigging Study & Route Feasibility',
      desc: 'Crane lift radius calculations, axle weight distribution analysis, access road clearance verification, and site soil bearing capacity validation for heavy cranes.'
    },
    {
      step: '02',
      phase: 'Civil Foundation & Anchor Audit',
      desc: 'Verification of equipment foundation plinths, laser elevation checks, anchor bolt projection and thread integrity, and oil sump drainage alignment.'
    },
    {
      step: '03',
      phase: 'Controlled Offloading, Skidding & Placement',
      desc: 'Execution of engineered lift plans using mobile cranes, hydraulic climbing jacks, and low-friction skidding tracks to position heavy assets accurately onto civil pads.'
    },
    {
      step: '04',
      phase: 'Mechanical Coupling, Dressing & Torqueing',
      desc: 'Erection of auxiliary components, radiators, pipe headers, structural steel towers, and calibrated torque-tightening of all critical electrical busbars.'
    },
    {
      step: '05',
      phase: 'Cabling, Earthing & Cold Handover',
      desc: 'Routing and termination of main power feeders and multicore control wires, copper earthing ties to the substation ground grid, and handover for pre-commissioning testing.'
    }
  ];

  // Safety and Quality Approach Points
  const safetyQualityPillars = [
    {
      title: 'Engineered Lifting & Rigging Calculations',
      desc: 'Every heavy lift is governed by a documented lift plan outlining crane capacity charts, sling configurations, center of gravity checks, and crane outrigger pad pressure.'
    },
    {
      title: 'Laser Optical Alignment Verification',
      desc: 'Multi-panel switchgear lineups are optically aligned within millimeter tolerances, preventing mechanical binding of draw-out circuit breakers and busbar shear stresses.'
    },
    {
      title: 'Calibrated Torque Auditing & Visual Sealing',
      desc: 'All electrical connections and structural bolts are tightened using certified, calibrated torque wrenches and marked with torque-seal paint for permanent visual quality verification.'
    },
    {
      title: 'Safe Work Method Statements (SWMS) & LOTO',
      desc: 'Comprehensive hazard identification, mandatory PPE, certified riggers, crane daily inspection checklists, and lock-out/tag-out procedures across all active work fronts.'
    }
  ];

  // Benefits
  const benefits = [
    {
      title: 'Minimized Mechanical Stress on Equipment',
      desc: 'Precision laser alignment and controlled torque prevent busbar warping, terminal fractures, and switchgear interlock jamming over decades of operation.'
    },
    {
      title: 'Protected Internal Insulation',
      desc: 'Carefully monitored nitrogen blankets and clean environment handling ensure transformers and SF6 equipment maintain dry, contamination-free internal chambers.'
    },
    {
      title: 'Streamlined Transition to Commissioning',
      desc: 'Properly dressed, torqued, and tagged assemblies allow testing engineers to begin secondary injection and dielectric testing without delays or structural adjustments.'
    },
    {
      title: 'High Structural Resilience',
      desc: 'Engineered anchoring, seismic brackets, and hot-dip galvanized gantries withstand heavy vibration, high wind loads, and short-circuit electrodynamic forces.'
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
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=85"
            alt="Installation & Erection of Substation Infrastructure"
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
                Division 02 • Electromechanical Erection
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                <span>/</span>
                <span className="text-emerald-400">Installation & Erection</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Installation & Erection <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300">
                Services
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Turnkey electromechanical installation, heavy rigging, power transformer positioning, switchgear alignment, busbar torqueing, and structural steel gantry erection for high-voltage substations and heavy industrial facilities.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                to="/get-a-quote?service=installation-erection"
                id="installation-hero-quote-btn"
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

            {/* Fast Credentials Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Engineered Lift Studies & Certified Riggers</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Calibrated Torque Auditing & Visual Sealing</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Lahore Central Equipment Yard</span>
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
                Heavy Electromechanical Execution
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Precision-Engineered Placement of Critical Electrical Infrastructure
              </h2>

              <p className="text-slate-700 text-base leading-relaxed">
                The mechanical erection of high-voltage electrical apparatus demands rigorous engineering calculations, dedicated rigging gear, and millimeter-level alignment. Improper lifting, uneven foundation loading, or forced busbar connections introduce mechanical strains that inevitably lead to premature failure and operational tripping.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Skylight Luminous provides turnkey installation and heavy erection services throughout Pakistan from our headquarters in Lahore. Our multidisciplinary engineering teams coordinate civil foundation handovers, crane rigging paths, hydraulic skidding systems, and laser optical leveling to guarantee pristine asset placement ready for energization.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Engineered Rigging Protocols</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Formal lift plans, crane outrigger mat calculations, and certified rigging tackles for all heavy assets.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Laser Alignment Standards</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Zero-twist leveling across multi-bay switchgear to protect circuit breaker racking mechanisms.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/get-a-quote?service=installation-erection"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors group"
                >
                  <span>Request Erection Quotation</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80"
                  alt="Heavy Substation Transformer Installation"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-6 sm:p-8">
                  <div className="text-white space-y-2">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider">
                      Heavy Rigging
                    </span>
                    <h3 className="text-lg font-bold">Transformer Positioning & Dressing</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Skidding multi-MVA power transformers onto reinforced civil plinths in industrial facilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. SERVICES / CAPABILITIES
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Full Electromechanical Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Erection Services & Capabilities
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Our erection division executes comprehensive mechanical positioning, structural bolting, busbar joining, and cable management across power plants, utility substations, and manufacturing hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, idx) => (
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
                    Execution Highlights:
                  </span>
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          4. INSTALLATION PROCESS
          ================================================== */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Systematic Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our 5-Stage Installation Process
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Every equipment arrival, offloading, and structural erection follows a disciplined sequence designed to safeguard delicate internal mechanisms and maintain tight project milestones.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {installationStages.map((stage, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center gap-6"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 font-mono font-black text-2xl flex items-center justify-center border border-emerald-200">
                  {stage.step}
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-lg font-bold text-slate-900">
                    {stage.phase}
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
          5. SAFETY AND QUALITY APPROACH
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Zero-Harm Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Safety & Quality Approach
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Rigging multi-ton equipment within live substations or high-density industrial plants demands unyielding adherence to occupational safety codes and calibrated quality checks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {safetyQualityPillars.map((item, idx) => (
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
          6. BENEFITS
          ================================================== */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Long-Term Reliability
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Benefits of Engineered Erection
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Professional electromechanical installation safeguards high-value assets and ensures reliable lifetime performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((b, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                    {`0${idx + 1}`}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          7. RELEVANT PROFESSIONAL IMAGES
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80"
                alt="Switchgear Erection and Industrial Cabling"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
                Equipment & Tooling Rigor
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Specialized Rigging Gear & Hydraulic Tooling
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Skylight Luminous maintains dedicated heavy rigging equipment, hydraulic torque multipliers, optical alignment lasers, and heavy winch sets at our Lahore facility. This equipment is deployed directly to project locations with qualified rigging supervisors.
              </p>
              <div className="pt-2 space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Inspected spreader bars, wire rope slings, and hydraulic climbing jacks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Laser line projectors for multi-panel indoor switchboard alignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Experienced rigging master and certified heavy equipment operators</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          8 & 9. CALL TO ACTION & GET A QUOTE BUTTON
          ================================================== */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=80"
            alt="Substation Infrastructure Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/75 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 mx-auto">
            <Building2 className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Planning an Installation or Rigging Project?
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Contact our electromechanical estimators at 1A Iqbal Avenue Phase 3 Lahore with your equipment weight schedules, layout drawings, and delivery timelines for a detailed quotation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              to="/get-a-quote?service=installation-erection"
              id="installation-cta-quote-btn"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/50 active:scale-98 transition-all duration-150 w-full sm:w-auto min-h-[44px]"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              to="/contact"
              id="installation-cta-contact-btn"
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
