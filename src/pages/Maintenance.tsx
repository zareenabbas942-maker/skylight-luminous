import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Wrench, 
  Check, 
  Building2, 
  Clock, 
  Flame, 
  Zap, 
  BatteryCharging, 
  FileText, 
  MapPin, 
  AlertTriangle,
  RotateCw,
  Gauge
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Maintenance: React.FC = () => {
  // Maintenance Capabilities
  const capabilities = [
    {
      title: 'Power Transformer Servicing & Oil Dehydration',
      desc: 'On-site transformer oil filtration, high-vacuum degassing, moisture extraction, dielectric breakdown voltage (BDV) enhancement, gasket replacement, and silica gel breather rejuvenation.',
      deliverables: [
        'High-vacuum mobile oil filtration and dehydration',
        'Dielectric breakdown voltage (BDV) testing & moisture analysis',
        'Bushing cleaning, spark gap verification, and seal replacement',
        'Buchholz relay, oil temperature, and winding temperature calibration'
      ]
    },
    {
      title: 'Circuit Breaker & Switchgear Overhaul',
      desc: 'Complete servicing of vacuum and SF6 medium/high-voltage circuit breakers, contact resistance (Ductor) measurements, mechanism lubrication, and timing audits.',
      deliverables: [
        'Main contact micro-ohmic resistance measurement',
        'Operating mechanism disassembly, cleaning, and synthetic greasing',
        'Open/close/close-open timing and pole simultaneity checks',
        'SF6 gas density pressure audit and vacuum bottle integrity'
      ]
    },
    {
      title: 'Protective Relay Recalibration & Trip Verification',
      desc: 'Periodic secondary current and voltage injection testing of numerical and electromechanical relays to verify pickup thresholds, operating time curves, and master trip linkages.',
      deliverables: [
        'Multi-phase secondary injection testing using calibrated test sets',
        'Tripping characteristic curves verified against setting schedules',
        'Trip circuit supervision (TCS) and lock-out relay health checks',
        'Relay event log download, disturbance analysis, and time sync'
      ]
    },
    {
      title: 'Thermographic Infrared (IR) Surveys Under Load',
      desc: 'Non-destructive infrared thermal imaging of energised switchyards, transformer bushings, busbar joints, and cable terminations to detect abnormal heating and high-resistance connections.',
      deliverables: [
        'High-resolution thermographic imaging under operational load',
        'Thermal delta (ΔT) classification according to severity criteria',
        'Identified hot spot coordinates with recommended torque interventions',
        'Standardized IR condition inspection reports'
      ]
    },
    {
      title: 'Station Battery Bank & DC Charger Servicing',
      desc: 'Preventive maintenance for 110V/220V substation battery systems to guarantee uninterruptible DC power for trip coils, protective relays, and emergency indicators.',
      deliverables: [
        'Individual cell internal impedance and conductance measurements',
        'Electrolyte specific gravity and terminal torque verification',
        'Controlled DC load bank discharge capacity testing',
        'Float and boost charger calibration with ripple voltage checks'
      ]
    },
    {
      title: 'Substation Earthing & Lightning Protection Audits',
      desc: 'Periodic verification of substation grounding grids, earth electrode pits, bonding conductor continuity, and earth resistance measurements to prevent touch-voltage hazards.',
      deliverables: [
        'Fall-of-potential earth pit resistance testing',
        'Equipment body to ground grid bond continuity checks',
        'Earth pit refurbishment and low-resistivity compound treatment',
        'Surge arrester leakage current monitoring and counter checks'
      ]
    }
  ];

  // Preventive Maintenance Programs
  const preventivePrograms = [
    {
      title: 'Planned Annual Substation Turnarounds',
      desc: 'Structured annual plant shutdown maintenance covering comprehensive de-energized inspections, high-pressure dielectric cleaning, mechanical re-torqueing, and full functional relay trip schemes.',
      cadence: 'Annual Turnaround'
    },
    {
      title: 'Quarterly Diagnostic Health Audits',
      desc: 'Online thermographic surveys, transformer oil sampling, battery conductance measurements, and visual switchyard inspections performed without interrupting facility operations.',
      cadence: 'Quarterly Routine'
    },
    {
      title: 'Trend Analysis & Predictive Condition Logging',
      desc: 'Continuous tracking of contact resistance, insulation resistance, and oil quality trends over multiple service cycles to anticipate component fatigue before threshold violations occur.',
      cadence: 'Predictive Baseline'
    },
    {
      title: 'Pre-Seasonal Electrical Hardening',
      desc: 'Specialized maintenance ahead of peak summer load conditions or monsoon weather, including transformer cooling fan audits, breather refurbishment, and yard drainage clearing.',
      cadence: 'Seasonal Prep'
    }
  ];

  // Inspection and Support Features
  const inspectionSupport = [
    {
      title: 'Dissolved Gas Analysis (DGA) & Laboratory Oil Diagnostics',
      desc: 'Accredited laboratory analysis of transformer oil samples to identify dissolved gases (acetylene, ethylene, methane, hydrogen) and evaluate internal thermal faults or arcing.'
    },
    {
      title: 'Rapid Emergency Troubleshooting & Mobilization',
      desc: 'Dedicated field response engineers operating from Lahore equipped with diagnostic kits to respond to unexpected trips, insulation breakdowns, or switchgear lockouts.'
    },
    {
      title: 'Post-Fault Investigation & Root-Cause Analysis',
      desc: 'Systematic examination of relay fault records, trip waveforms, and equipment physical damage to isolate fault causes and recommend mitigation measures.'
    },
    {
      title: 'Ultrasound & Partial Discharge (PD) Screening',
      desc: 'Non-invasive acoustic ultrasound and TEV (Transient Earth Voltage) measurements across metal-clad switchgear to pinpoint tracking and corona discharges.'
    }
  ];

  // 5-Stage Service Approach
  const serviceStages = [
    {
      step: '01',
      title: 'Pre-Shutdown Audit & Scope Alignment',
      desc: 'Review of past maintenance records, single line diagrams, load logs, and pre-outage thermography to define a precise, milestone-driven work schedule.'
    },
    {
      step: '02',
      title: 'Safe Isolation, LOTO & Permit-to-Work',
      desc: 'Coordination of switching sequences, application of Lock-Out / Tag-Out (LOTO) locks, portable earth leads clamping, and confirmation of zero-energy state.'
    },
    {
      step: '03',
      title: 'Mechanical Servicing, Cleaning & Re-Torqueing',
      desc: 'Dielectric solvent cleaning of insulators, breaker racking mechanism inspection, re-greasing with synthetic lubricants, and calibrated bolt torqueing.'
    },
    {
      step: '04',
      title: 'Diagnostic Electrical & Protection Testing',
      desc: 'Insulation resistance measurements, contact resistance checks, secondary injection testing of numerical relays, and trip circuit verification.'
    },
    {
      step: '05',
      title: 'Controlled Re-Energization & Comprehensive Dossier',
      desc: 'Supervision during re-energization, voltage balance checks, phase sequence confirmation, and submission of a detailed asset condition report with recommendations.'
    }
  ];

  // Benefits
  const benefits = [
    {
      title: 'Prevention of Unscheduled Plant Downtime',
      desc: 'Identifying localized thermal hotspots, contact degradation, and moisture ingress before they trigger catastrophic circuit breaker or transformer failure.'
    },
    {
      title: 'Extended Capital Asset Lifespan',
      desc: 'Regular transformer oil vacuum dehydration and switchgear contact maintenance significantly extends operational longevity, delaying capital replacement costs.'
    },
    {
      title: 'Guaranteed Protection Selectivity',
      desc: 'Calibrated numerical relays ensure faults are cleared locally within milliseconds, preventing upstream grid cascading outages and utility penalties.'
    },
    {
      title: 'Audit-Ready Regulatory & Insurance Compliance',
      desc: 'Structured, traceable test certificates demonstrate compliance with mandatory electrical safety codes and provide certified documentation for industrial insurers.'
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
            src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=2200&q=85"
            alt="High Voltage Electrical Maintenance and Diagnostic Testing"
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
                Division 05 • Asset Reliability & Maintenance
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                <span>/</span>
                <span className="text-emerald-400">Maintenance</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Maintenance & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300">
                Reliability Services
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Preventive maintenance, transformer oil filtration, switchgear refurbishment, secondary relay calibration, and thermographic diagnostics for high-voltage substations and heavy industrial plants.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                to="/get-a-quote?service=maintenance"
                id="maintenance-hero-quote-btn"
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
                <span>Planned Turnaround & Shutdown Specialists</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Calibrated Test Sets & Thermography Rigs</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Lahore Rapid Response Team</span>
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
                Asset Health & Lifecycle Management
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Safeguarding High-Voltage Infrastructure Against Costly Unscheduled Outages
              </h2>

              <p className="text-slate-700 text-base leading-relaxed">
                Industrial power distribution networks operate under continuous electrical, thermal, and mechanical stresses. Over time, transformer insulating oil absorbs moisture, circuit breaker main contacts accumulate micro-ohmic oxidation, and protective relay settings may drift, creating dangerous risks of uncoordinated tripping or flashover failures.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Skylight Luminous delivers structured preventive and predictive maintenance solutions designed to preserve asset integrity and maximize uptime. Headquartered in Lahore, our registered engineers perform comprehensive diagnostic turnarounds, vacuum oil treatment, and switchboard servicing compliant with international IEC maintenance guidelines.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Predictive Condition Diagnostics</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Infrared thermography, Dissolved Gas Analysis (DGA), and contact resistance logging.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Planned Outage Coordination</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Precision execution during scheduled weekend or seasonal plant shutdowns to prevent production loss.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/get-a-quote?service=maintenance"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors group"
                >
                  <span>Request Maintenance Quotation</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                  alt="Transformer Oil Servicing and Electrical Diagnostics"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-6 sm:p-8">
                  <div className="text-white space-y-2">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider">
                      Specialized Servicing
                    </span>
                    <h3 className="text-lg font-bold">Transformer & Switchgear Overhaul</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      High-vacuum oil treatment and contact micro-ohmic testing in industrial substations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. MAINTENANCE CAPABILITIES
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Full-Spectrum Maintenance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Maintenance Capabilities
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We provide comprehensive mechanical overhauls, oil processing, electrical testing, and protective relay maintenance across all primary and secondary substation equipment.
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
                    Maintenance Scope:
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
          4. PREVENTIVE MAINTENANCE
          ================================================== */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Scheduled Care Programs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Preventive Maintenance Programs
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Transition from reactive firefighting to proactive, scheduled asset management. Our structured maintenance intervals protect equipment against unexpected breakdowns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {preventivePrograms.map((prog, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-emerald-300 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-md">
                    {prog.cadence}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {prog.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          5. INSPECTION AND SUPPORT
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Diagnostic & Field Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Specialized Inspection & Engineering Support
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              From advanced laboratory oil diagnostics to rapid troubleshooting on active switchgear, we back your facility with dedicated engineering expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {inspectionSupport.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 space-y-3 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-1">
                  <Activity className="w-5 h-5" />
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
          6. SERVICE APPROACH
          ================================================== */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Systematic Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our 5-Stage Maintenance Approach
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Every maintenance turnaround follows an engineered sequence designed to safeguard technician safety, maintain outage timeframes, and ensure verifiable equipment reliability.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {serviceStages.map((stage, idx) => (
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
          7. RELEVANT PROFESSIONAL IMAGERY
          ================================================== */}
      <section className="bg-slate-50 py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                alt="Substation Transformer Maintenance and High-Vacuum Processing"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
                Equipment & Tooling Standards
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Calibrated Field Test Benches & Mobile Processing
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our maintenance division deploys mobile high-vacuum oil treatment units, digital micro-ohmmeters, insulation resistance testers, and multi-phase secondary injection sets directly to industrial sites across Punjab.
              </p>
              <div className="pt-2 space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Mobile high-vacuum transformer oil dehydration and filtration units</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Certified secondary current/voltage injection test sets for protection relays</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Calibrated infrared thermography cameras for live-load surveys</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          8. BENEFITS
          ================================================== */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              Tangible Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Benefits of Structured Maintenance
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Planned electrical maintenance directly translates into lower operational risk, longer asset lifecycles, and protected industrial revenues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((b, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between"
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
          9 & 10. CALL TO ACTION & GET A QUOTE BUTTON
          ================================================== */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=80"
            alt="Electrical Substation Maintenance Infrastructure"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/75 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 mx-auto">
            <Building2 className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Require Scheduled Maintenance or Emergency Electrical Support?
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Contact our maintenance engineers at 1A Iqbal Avenue Phase 3 Lahore with your equipment schedule or shutdown dates for a tailored maintenance quotation and service SLA.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              to="/get-a-quote?service=maintenance"
              id="maintenance-cta-quote-btn"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/50 active:scale-98 transition-all duration-150 w-full sm:w-auto min-h-[44px]"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              to="/contact"
              id="maintenance-cta-contact-btn"
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
