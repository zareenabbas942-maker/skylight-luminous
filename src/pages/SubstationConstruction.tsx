import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Check, 
  Building2, 
  Compass, 
  Sliders, 
  Activity, 
  MapPin, 
  Cpu, 
  Clock, 
  FileCheck2,
  HardHat,
  Phone
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const SubstationConstruction: React.FC = () => {
  // Substation construction capabilities
  const capabilities = [
    {
      title: 'Turnkey Air-Insulated Substations (AIS up to 132kV)',
      desc: 'Complete engineering, civil construction, equipment erection, and commissioning of outdoor air-insulated switchyards featuring high-voltage transformers, SF6 breakers, disconnector switches, and structural steel gantries.',
      deliverables: [
        'Overhead line termination gantries and equipment support structures',
        'SF6 live-tank circuit breakers and motorized isolator switches',
        'Instrument transformers (CTs/PTs) and surge arresters',
        'Flexible overhead aluminum conductor stringing and buswork'
      ]
    },
    {
      title: 'Gas-Insulated Switchgear (GIS) Indoor Substations',
      desc: 'Compact indoor substation construction tailored for industrial complexes and space-constrained urban sites requiring high environmental protection, cleanroom assembly standards, and SF6 gas handling.',
      deliverables: [
        'Reinforced concrete GIS halls with crane lifting infrastructure',
        'Cleanroom bay alignment and gas-tight coupling',
        'SF6 gas density monitoring and vacuum filling interfaces',
        'Indoor cable terminations and high-voltage busduct tie-ins'
      ]
    },
    {
      title: 'Substation Earthing Grid & Lightning Protection',
      desc: 'Comprehensive grounding network engineering utilizing deeply driven copper-clad electrodes, buried copper tape mesh, thermal welding, and overhead shield wires to safeguard personnel from step and touch voltages.',
      deliverables: [
        'Engineered grounding grid mesh designed to IEEE 80 standards',
        'Exothermic cadweld joints and perimeter ring conductors',
        'Equipment body, neutral, and surge arrester earth bonding',
        'Lightning protection masts and overhead shield wire grids'
      ]
    },
    {
      title: 'Power Transformer Bays & Containment Facilities',
      desc: 'Construction of heavy reinforced transformer plinths, acoustic firewall barriers, oil retention pits, water-tight drainage sumps, and automated deluge or nitrogen fire protection systems.',
      deliverables: [
        'Reinforced foundation pads engineered for dynamic equipment vibration',
        'Blast-rated and fire-resistant concrete barrier walls',
        'Gravel flame-trap oil soak pits and containment tanks',
        'High-capacity radiator banks and conservator assembly'
      ]
    },
    {
      title: 'Indoor MV Switchgear & Auxiliary Control Rooms',
      desc: 'Turnkey erection of medium-voltage switchboards (11kV to 33kV), station auxiliary transformers, AC/DC distribution boards, battery banks with seismic racks, and uninterrupted power supply (UPS) units.',
      deliverables: [
        'Multi-panel indoor metal-clad switchgear assemblies',
        '110V/220V DC station battery banks and battery charger rectifiers',
        'Essential auxiliary services AC/DC distribution boards',
        'Cable trench covers, fire-stopping, and HVAC environmental controls'
      ]
    },
    {
      title: 'Control, Protection & SCADA Automation Systems',
      desc: 'Integration of numerical protection relay panels, bay control units (BCUs), substation automation systems (SAS), RTUs, and fiber-optic communication interfaces complying with IEC 61850 protocols.',
      deliverables: [
        'Numerical relay protection cabinets with master trip circuits',
        'Substation automation and SCADA telemetry interfaces',
        'Multipair control cabling with comprehensive wire ferruling',
        'Fiber-optic patch panels and redundant communication rings'
      ]
    }
  ];

  // Project execution process
  const executionProcess = [
    {
      step: '01',
      phase: 'Feasibility, Load-Flow & Grid Interconnection Planning',
      desc: 'Review of electrical load schedules, short-circuit fault levels, single line diagrams (SLDs), utility connection requirements, and soil resistivity surveys.'
    },
    {
      step: '02',
      phase: 'Civil Earthworks, Ground Grid & Foundation Construction',
      desc: 'Site grading, deep earthing mesh installation, reinforced transformer foundations, gantry footings, cable trenches, and control building erection.'
    },
    {
      step: '03',
      phase: 'Structural Gantry Erection & Primary Equipment Placement',
      desc: 'Assembling hot-dip galvanized steel towers, hydraulic positioning of power transformers, circuit breaker mounting, and overhead busbar stringing.'
    },
    {
      step: '04',
      phase: 'Secondary Control Cabling, DC Systems & Relay Integration',
      desc: 'Pulling and terminating multicore shielded control cables, station battery bank assembly, protection panel wiring, and SCADA automation tie-ins.'
    },
    {
      step: '05',
      phase: 'Pre-Commissioning Testing, Utility Approval & Energization',
      desc: 'Conducting primary and secondary injection tests, transformer dielectric checks, interlock tripping validations, and final utility DisCo energization sign-off.'
    }
  ];

  // Quality & safety
  const qualitySafetyPoints = [
    {
      title: 'Strict Adherence to IEC & IEEE Grid Standards',
      desc: 'Substation layouts and equipment clearances are engineered in accordance with IEC 61936-1 (power installations exceeding 1 kV AC) and IEEE 80 grounding safety criteria.'
    },
    {
      title: 'Comprehensive Inspection & Test Plans (ITP)',
      desc: 'Every milestone—from civil rebar binding to high-voltage breaker timing—is verified through formal hold-point quality inspection documents.'
    },
    {
      title: 'Zero-Harm HSE & Arc-Flash Mitigation',
      desc: 'Field execution is supervised by dedicated safety officers enforcing lock-out/tag-out (LOTO), certified rigging tackles, and boundary zone barricades.'
    },
    {
      title: 'Factory & Field Quality Verification',
      desc: 'Ensuring all primary switchgear, instrument transformers, and protection relays arrive with authenticated factory test records and undergo on-site calibration.'
    }
  ];

  // Benefits
  const benefits = [
    {
      title: 'Single-Source EPC Accountability',
      desc: 'From initial civil earthworks to final energization with the distribution company, Skylight Luminous manages the entire project lifecycle without subcontracting conflicts.'
    },
    {
      title: 'Maximized Operational Reliability',
      desc: 'Precision busbar torqueing, calibrated relay curves, and high-resistivity switchyard gravel reduce unscheduled downtime and safeguard against system outages.'
    },
    {
      title: 'Streamlined Utility Interconnection',
      desc: 'Experience with local grid regulations and electric distribution company (DisCo) standards ensures smooth permit approvals and timely energization.'
    },
    {
      title: 'Engineered Asset Longevity',
      desc: 'Heavy hot-dip galvanization, water-tight cable trenching, and oil containment designs ensure decades of resilient service in harsh industrial environments.'
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
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=85"
            alt="Electrical substation infrastructure"
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
                Division 04 • Turnkey Power Infrastructure
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                <span>/</span>
                <span className="text-emerald-400">Substation Construction</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Substation Construction <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300">
                & EPC Services
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Turnkey engineering, procurement, civil foundations, structural steel gantry erection, electromechanical installation, and energization for medium- and high-voltage substations up to 132kV.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                to="/get-a-quote?service=substation-construction"
                id="substation-hero-quote-btn"
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

            {/* Quick Metrics */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Up to 132kV AIS & GIS Capabilities</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Full EPC Single-Source Accountability</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Lahore Engineering Operations</span>
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
                Turnkey Grid Engineering
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Complete Power Substation Delivery from Groundwork to Grid Energization
              </h2>

              <p className="text-slate-700 text-base leading-relaxed">
                Building a grid substation requires seamless coordination across multiple engineering disciplines. Civil foundation plinths must absorb heavy transformer vibration, switchyard earthing grids must safely dissipate high-voltage fault currents, and protective relays must be calibrated to clear line faults in milliseconds.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Skylight Luminous provides turnkey engineering, procurement, and construction (EPC) management for industrial consumers, commercial projects, and utility grid interconnections across Pakistan. Based in Lahore, our registered engineers ensure every gantry, circuit breaker, control panel, and earthing conductor is integrated to rigorous IEC and IEEE specifications.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Turnkey EPC Integration</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Single-point accountability across civil works, gantry erection, cabling, and energization.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Utility Interface Compliance</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Coordination with distribution companies (DisCos) for swift interconnection and energization sign-offs.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/get-a-quote?service=substation-construction"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors group"
                >
                  <span>Request Substation Proposal</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Substation Infrastructure Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80"
                  alt="High Voltage Substation Switchyard and Transformer Plinths"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-6 sm:p-8">
                  <div className="text-white space-y-2">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider">
                      Grid Infrastructure
                    </span>
                    <h3 className="text-lg font-bold">132kV Air-Insulated Switchyard</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Erection of structural steel gantries, SF6 circuit breakers, and power transformer plinths.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. SUBSTATION CONSTRUCTION CAPABILITIES
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Full-Scope Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Substation Construction Capabilities
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We manage the entire spectrum of substation infrastructure, delivering reliable grid interconnections built for extreme operational conditions.
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
                    Core Technical Deliverables:
                  </span>
                  {item.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          4. PROJECT EXECUTION PROCESS
          ================================================== */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Engineered Execution Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Substation EPC Process
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Every substation construction project follows a structured 5-phase engineering protocol ensuring full technical compliance and on-time commissioning.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {executionProcess.map((stage, idx) => (
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
          5. QUALITY AND SAFETY
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Zero-Harm Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Quality Assurance & Site Safety
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              High-voltage electrical installations operate under extreme electromagnetic and physical stresses. We enforce rigorous safety codes across all active sites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {qualitySafetyPoints.map((item, idx) => (
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
          6. RELEVANT SUBSTATION INFRASTRUCTURE IMAGERY
          ================================================== */}
      <section className="bg-white py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="Protection Relay Panels and Substation Control Room"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
                Secondary Control & SCADA Integration
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Engineered Protection Schemes & Control Rooms
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A reliable substation requires a resilient secondary control ecosystem. We assemble and test climate-controlled control rooms with complete cable basement routing, battery backup banks, numerical protection relay cabinets, and SCADA automation interfaces.
              </p>
              <div className="pt-2 space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Redundant 110V/220V DC station battery banks and charging rectifiers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Fiber-optic communication interfaces adhering to IEC 61850 substation standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Trip circuit supervision and inter-bay electrical interlock schemes</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          7. BENEFITS
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Benefits of Our Substation Construction
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Choosing an integrated engineering partner ensures streamlined execution, dependable equipment operation, and rapid utility grid energization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((b, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between"
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
          8 & 9. CALL TO ACTION & GET A QUOTE BUTTON
          ================================================== */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
            alt="Substation Construction Engineering"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/75 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 mx-auto">
            <Building2 className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Developing or Upgrading a High-Voltage Substation?
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Contact our power engineering division at 1A Iqbal Avenue Phase 3 Lahore to discuss single line diagrams, utility interconnection criteria, and turnkey EPC timelines.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              to="/get-a-quote?service=substation-construction"
              id="substation-cta-quote-btn"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/50 active:scale-98 transition-all duration-150 w-full sm:w-auto min-h-[44px]"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              to="/contact"
              id="substation-cta-contact-btn"
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
