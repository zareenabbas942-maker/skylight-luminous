import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Zap, 
  Activity, 
  CheckCircle2, 
  FileCheck2, 
  Clock, 
  ArrowRight, 
  Phone, 
  MapPin, 
  FileText, 
  Sliders, 
  Layers, 
  Cpu, 
  Flame, 
  Wrench,
  Check,
  AlertTriangle,
  Building2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const TestingCommissioning: React.FC = () => {
  // 1. What We Do items
  const whatWeDoList = [
    {
      title: 'Power & Distribution Transformer Testing',
      desc: 'Complete pre-commissioning diagnostic suite including insulation resistance (Megger), turns ratio (TTR), winding resistance, vector group verification, and transformer oil dielectric breakdown voltage (BDV) testing.',
      deliverables: ['Transformer Turns Ratio (TTR)', 'Winding Resistance at Corrected Temp', 'Insulation Resistance & Polarization Index', 'Oil Dielectric Breakdown (BDV) Analysis']
    },
    {
      title: 'Numerical & Electromechanical Relay Testing',
      desc: 'Secondary injection testing and curve verification for overcurrent, earth fault, differential, distance, reverse power, and frequency protection relays using multi-phase digital injection test sets.',
      deliverables: ['Pick-up and Drop-off Current Validation', 'Time-Current Operating Characteristic Curves', 'Trip Circuit Supervision & Breaker Interlock Checks', 'Setting Schedule Configuration Logs']
    },
    {
      title: 'Medium & High Voltage Switchgear Testing',
      desc: 'Timing analysis, contact resistance (Ductor), and high-potential dielectric withstand testing for vacuum and SF6 circuit breakers, disconnectors, and air-insulated busbar assemblies.',
      deliverables: ['Breaker Open / Close Timing & Simultaneity', 'Main Contact Micro-Ohmic Resistance', 'Vacuum & SF6 Bottle Integrity Checks', 'Control Wiring & Interlocking Verification']
    },
    {
      title: 'Instrument Transformer (CT & PT) Verification',
      desc: 'Primary injection testing, turns ratio verification, polarity verification, secondary burden calculations, and magnetization/kneepoint curve saturation analysis.',
      deliverables: ['CT Knee-Point Voltage & Excitation Curves', 'Ratio & Polarity Confirmation', 'Secondary Winding Resistance & Loop Burdens', 'Voltage Transformer Ratio & Vector Checks']
    },
    {
      title: 'Substation Earthing & Ground Grid Testing',
      desc: 'Fall-of-potential testing, earth pit resistance measurements, step and touch potential calculations, and structural bond continuity tests across switchyard equipment.',
      deliverables: ['Earth Electrode Resistance Measurements', 'Grid Continuity & Loop Impedance Checks', 'Equipment Body Grounding Verification', 'Soil Resistivity Profiling']
    },
    {
      title: 'High Voltage Cable Diagnostic & Hi-Pot Testing',
      desc: 'Insulation resistance, sheath testing, and very low frequency (VLF) AC dielectric withstand testing on 11kV and 132kV medium/high voltage underground power cables.',
      deliverables: ['Insulation Resistance (Core-to-Core & Core-to-Earth)', 'VLF Dielectric Withstand Verification', 'Outer Sheath Integrity Testing', 'Phase Sequence & Phasing Verification']
    }
  ];

  // 2. Key Capabilities
  const keyCapabilities = [
    {
      title: 'Multi-Phase Secondary Injection',
      desc: 'Automated digital secondary current and voltage injection for complex numerical protection schemes and directional relays.',
      icon: <Cpu className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Circuit Breaker Dynamic Timing',
      desc: 'Millisecond-precision measurement of close, open, and close-open operating cycles across all phases simultaneously.',
      icon: <Clock className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Transformer Oil Dielectric BDV Testing',
      desc: 'Calibrated laboratory and field oil breakdown testers to verify moisture content, dielectric strength, and breakdown limits.',
      icon: <Activity className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Primary Current Injection',
      desc: 'High-amperage primary injection up to thousands of amperes to verify overall protection scheme loops and CT primary ratios.',
      icon: <Zap className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Tripping Matrix & Interlock Logic',
      desc: 'Comprehensive end-to-end trip scheme validation ensuring lock-out relays, master trip circuits, and SCADA alarms function reliably.',
      icon: <Sliders className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Thermographic Infrared Diagnostics',
      desc: 'Non-invasive infrared inspections to detect hot spots, loose busbar torque, high-resistance joints, and unbalanced phase loading.',
      icon: <Flame className="w-6 h-6 text-emerald-600" />
    }
  ];

  // 3. Our Testing & Commissioning Process
  const processSteps = [
    {
      step: '01',
      phase: 'Planning & Documentation Review',
      description: 'Review of electrical single line diagrams (SLDs), approved protection setting schedules, equipment manufacturer test sheets, and preparation of custom Inspection and Test Plans (ITP).'
    },
    {
      step: '02',
      phase: 'Cold Physical & Electrical Checks',
      description: 'Pre-test visual inspections, mechanical torque verification, phase identification, CT polarity alignment, control wiring continuity, and safe isolation tagging.'
    },
    {
      step: '03',
      phase: 'Component-Level Diagnostic Testing',
      description: 'Execution of primary and secondary tests across transformers, circuit breakers, instrument transformers, relays, surge arresters, and earth pits with calibrated instrumentation.'
    },
    {
      step: '04',
      phase: 'Protection Scheme & Functional Interlock Validation',
      description: 'Secondary injection tripping verification, master trip relay operation, electrical interlocking, manual and remote trip commands, and SCADA alarm verification.'
    },
    {
      step: '05',
      phase: 'Energization Coordination & Reporting',
      description: 'Supervision during initial no-load energization, load and phasing checks, voltage symmetry measurements, and formal submission of certified test reports.'
    }
  ];

  // 4. Benefits
  const clientBenefits = [
    {
      title: 'Prevention of Costly Equipment Failures',
      desc: 'Detects internal insulation degradation, improper wiring, and manufacturing defects before high-energy energization occurs.'
    },
    {
      title: 'Protection of Personnel & Infrastructure',
      desc: 'Ensures protective relays trip within specified milliseconds during short circuits, clearing faults safely and preventing arc flash hazards.'
    },
    {
      title: 'Seamless Utility Interconnection Compliance',
      desc: 'Provides comprehensive, certified test dossiers required by electric distribution companies (DisCos) and grid operators for energization approval.'
    },
    {
      title: 'Baseline Benchmark for Asset Management',
      desc: 'Certified test records establish precise baseline figures for subsequent annual maintenance and predictive condition monitoring.'
    }
  ];

  return (
    <div className="space-y-0">
      {/* ==================================================
          1. HERO / BANNER
          ================================================== */}
      <section className="relative bg-slate-950 text-white min-h-[460px] sm:min-h-[500px] flex items-center overflow-hidden border-b border-slate-800">
        {/* Relevant High-Voltage Substation Testing Imagery */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=2200&q=85"
            alt="Testing & Commissioning of High Voltage Electrical Infrastructure"
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
                Division 01 • Electrical Engineering
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                <span>/</span>
                <span className="text-emerald-400">Testing & Commissioning</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Testing & Commissioning <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300">
                Services
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Precision electrical diagnostic testing, secondary relay injection, primary current verification, and controlled energization procedures for medium and high-voltage substations, industrial facilities, and distribution systems.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                to="/get-a-quote?service=testing-commissioning"
                id="testing-hero-quote-btn"
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

            {/* Standard Metrics */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>IEC 60076, 62271 & IEEE Standards</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Calibrated Secondary Injection Equipment</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Lahore Mobilization Base</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          2. SERVICE INTRODUCTION
          ================================================== */}
      <section className="bg-white py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
                Independent Engineering Verification
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Ensuring Integrity, Safety, and Compliance Before Voltage Is Applied
              </h2>

              <p className="text-slate-700 text-base leading-relaxed">
                Energizing high-voltage electrical apparatus without structured, verified pre-commissioning testing introduces severe risks of catastrophic insulation breakdown, arc flash explosion, uncoordinated tripping, and costly equipment destruction.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Skylight Luminous provides rigorous, independent testing and commissioning services across Pakistan. Our Lahore-based testing engineers verify that every transformer, circuit breaker, instrument transformer, protection relay, and grounding electrode operates in complete harmony with its engineered design parameters and relevant IEC and IEEE standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Thorough Pre-Energization Checks</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cold wiring, isolation, insulation resistance, and interlock checks before applying any system voltage.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Standardized Reporting Dossiers</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Formal test certificates, tripping graphs, and calibration logs accepted by distribution utilities (DisCos).
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/get-a-quote?service=testing-commissioning"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors group"
                >
                  <span>Request Testing Proposal</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Relevant Professional Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                  alt="Relay Testing and Precision Electrical Calibration"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-6 sm:p-8">
                  <div className="text-white space-y-2">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider">
                      On-Site Diagnostics
                    </span>
                    <h3 className="text-lg font-bold">Relay Coordination & Protection Testing</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Secondary injection calibration for numeric overcurrent, differential, and distance relays.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. WHAT WE DO
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Full-Spectrum Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What We Do
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Our testing and commissioning engineering division undertakes individual component tests as well as complete turnkey substation schemes across the following areas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDoList.map((item, idx) => (
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
                    Core Tests & Deliverables:
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
          4. KEY CAPABILITIES
          ================================================== */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Instrumentation & Technical Mastery
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Key Capabilities
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We leverage modern, calibrated testing kits to conduct non-destructive diagnostics, functional tripping verifications, and precision calibration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyCapabilities.map((cap, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-lg transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100/80 group-hover:bg-emerald-600 text-emerald-800 group-hover:text-white flex items-center justify-center transition-colors">
                  {cap.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          5. OUR PROCESS
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Methodological Rigor
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Commissioning Process
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Our 5-phase testing protocol guarantees zero ambiguity, verifiable traceability, and complete stakeholder transparency prior to system energization.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {processSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center gap-6"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 font-mono font-black text-2xl flex items-center justify-center border border-emerald-100">
                  {step.step}
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-lg font-bold text-slate-900">
                    {step.phase}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
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
              Strategic Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Benefits of Professional Testing
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Engaging an independent engineering team for pre-commissioning provides concrete technical and operational safeguards for plant owners and EPC contractors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {clientBenefits.map((b, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-900">
                    {b.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          7. RELEVANT PROFESSIONAL IMAGE SHOWCASE
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80"
                alt="Substation Transformer Diagnostics"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
                Field Evidence & Standard Adherence
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Calibrated Instrumentation on Every Site
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our testing engineers bring calibrated test benches directly to customer project locations across Punjab and throughout Pakistan. Each test kit possesses current calibration traceability to eliminate measurement discrepancy and ensure absolute compliance with utility benchmarks.
              </p>
              <div className="pt-2 space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Routine calibration records maintained for all injection test kits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Qualified testing engineers supervising all high-voltage energization steps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Zero-tolerance LOTO (Lock-Out / Tag-Out) and arc flash safety protocols</span>
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
            alt="Substation High Voltage Switchyard"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/75 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 mx-auto">
            <Building2 className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Require Testing & Commissioning for Your Substation?
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Submit your single-line diagram, protection settings schedule, or equipment inventory to Skylight Luminous engineers at 1A Iqbal Avenue Phase 3 Lahore for a comprehensive testing quotation and execution timeline.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              to="/get-a-quote?service=testing-commissioning"
              id="testing-cta-quote-btn"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/50 active:scale-98 transition-all duration-150 w-full sm:w-auto min-h-[44px]"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              to="/contact"
              id="testing-cta-contact-btn"
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
