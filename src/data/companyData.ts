import { ServiceItem, CaseStudyItem, TeamMember } from '../types';

export const COMPANY_INFO = {
  name: 'Skylight Luminous',
  address: '1A Iqbal Avenue Phase 3 Lahore',
  phone: '04232351373',
  domain: 'www.skylightluminous.com',
  workingHours: 'Monday - Saturday: 8:30 AM - 6:00 PM',
  tagline: 'Precision Engineering, Power Systems & Infrastructure Excellence',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'testing-commissioning',
    slug: 'testing-commissioning',
    name: 'Testing & Commissioning Services',
    shortDesc: 'Comprehensive pre-commissioning, relay testing, and high-voltage grid validation ensuring zero-fault energization.',
    fullDesc: 'Skylight Luminous delivers industry-standard testing and commissioning protocols for high-voltage and medium-voltage electrical installations. From protective relay coordination and transformer oil dielectric analysis to primary injection testing and switchgear calibration, our certified engineers verify grid compatibility, safety interlocks, and compliance with IEC/IEEE standards prior to energization.',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Protective Relay Testing & Calibration (Numerical & Electromechanical)',
      'High Voltage (HV) & Medium Voltage (MV) Switchgear Testing',
      'Power & Distribution Transformer Testing (Turns Ratio, Insulation, SFRA)',
      'Primary & Secondary Current Injection Testing',
      'SCADA / RTU Communication Interfacing and Interlock Validation',
      'Earthing Grid Resistance & Soil Resistivity Analysis'
    ],
    deliverables: [
      'Detailed Commissioning Test Certificates & As-Tested Reports',
      'Relay Setting Schedules & Tripping Scheme Verification',
      'Pre-Energization Clearance Checklist & Safety Dossier',
      'Client Operational Handover Training'
    ],
    applications: [
      'Grid Substations (132kV / 220kV / 500kV)',
      'Heavy Industrial Power Distribution Centers',
      'Critical Facility Power Generation (Hospitals, Data Centers)',
      'Commercial Mega-Complexes & High-Rise Infrastructure'
    ]
  },
  {
    id: 'installation-erection',
    slug: 'installation-erection',
    name: 'Installation & Erection Services',
    shortDesc: 'Turnkey heavy electromechanical plant erection, high-voltage equipment positioning, and cabling networks.',
    fullDesc: 'Our erection division executes precision mechanical and electrical placement for demanding infrastructure projects. Using certified rigging equipment and calibrated alignment tools, Skylight Luminous handles heavy transformers, gas-insulated switchgears (GIS), air-insulated switchgears (AIS), overhead gantry assemblies, busducts, and structured cabling networks with surgical precision and uncompromising occupational safety.',
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Heavy Power Transformer Rigging, Positioning & Dressing',
      'AIS & GIS Switchgear Structural Assembly & Alignment',
      'Overhead Transmission & Substation Gantry Erection',
      'Control & Protection Panel Suite Installation',
      'High Voltage XLPE Cable Pulling, Terminating & Jointing',
      'Busduct Assembly & Heavy-Gauge Earthing Grid Laying'
    ],
    deliverables: [
      'Certified Rigging & Heavy Lift Plans',
      'Equipment Torqueing & Alignment Verification Logs',
      'Cable Termination Logs & Hi-Pot Test Verifications',
      'Manufacturer-Compliant Installation Warranty Documentation'
    ],
    applications: [
      'Power Plants & Cogeneration Facilities',
      'Primary Transmission Substations',
      'Manufacturing & Automotive Industrial Complexes',
      'Metro & Heavy Rail Electrification Infrastructure'
    ]
  },
  {
    id: 'civil-works',
    slug: 'civil-works',
    name: 'Civil Works',
    shortDesc: 'Engineered reinforced concrete foundations, structural steel frameworks, and control building constructions.',
    fullDesc: 'Infrastructure longevity begins with unshakeable civil foundations. Skylight Luminous engineers high-strength reinforced concrete foundations tailored specifically for heavy vibrating equipment, high-voltage transformers, switchyard towers, drainage culverts, firewalls, and complete multi-storey control buildings. Our civil teams operate under rigorous soil compaction, concrete curing, and seismic resistance standards.',
    iconName: 'HardHat',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Transformer Foundation Pads with Integrated Oil Retention Pits',
      'Substation Control Room & Switchgear Building Construction',
      'Switchyard Equipment Foundations & Gantry Tower Footings',
      'Underground Reinforced Concrete Cable Trenches & Ducts',
      'Blast & Blast-Resistant Firewalls between Heavy Transformers',
      'Perimeter Security Walls, Grading & Heavy-Duty Asphalt Paving'
    ],
    deliverables: [
      'Soil Geotechnical Investigation & Structural Load Calculations',
      'Concrete Cylinder Compression Test Reports (ASTM standard)',
      'As-Built Civil Engineering Blueprint Sets',
      'Drainage, Anti-Erosion, and Environmental Containment Verification'
    ],
    applications: [
      'Electrical Substation Yards & Power Generation Sites',
      'Industrial Manufacturing Facilities & Process Plants',
      'Large Scale Housing & Commercial Infrastructure Developments',
      'Logistics Hubs & Heavy Freight Terminals'
    ]
  },
  {
    id: 'substation-construction',
    slug: 'substation-construction',
    name: 'Substation Construction',
    shortDesc: 'End-to-end EPC execution of Air Insulated (AIS) and Gas Insulated (GIS) high-voltage substations.',
    fullDesc: 'As a full-spectrum engineering procurement and construction partner, Skylight Luminous delivers complete grid substations from initial greenfield surveying to final load energization. We coordinate civil foundations, structural gantry erection, primary equipment placement, secondary automation wiring, auxiliary power systems, and SCADA telemetry into a unified, high-reliability electrical terminal.',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Complete EPC for 11kV, 33kV, and 132kV Substation Facilities',
      'Turnkey Gas-Insulated (GIS) Compact Urban Substation Packages',
      'Air-Insulated (AIS) Outdoor Switchyard Construction',
      'Substation Automation Systems (SAS) & IEC 61850 Protocols',
      'Battery Banks, DC Distribution Boards & Auxiliary UPS Systems',
      'Lightning Protection Mast Installation & Grounding Meshes'
    ],
    deliverables: [
      'Complete Substation Single Line Diagrams (SLD) & Schematics',
      'Protection Coordination Studies and Relay Logic Matrix',
      'Comprehensive Factory Acceptance (FAT) & Site Acceptance (SAT) Protocols',
      'Formal Regulatory Authority Energization Certification'
    ],
    applications: [
      'National Transmission & Distribution Grid Expansion',
      'Dedicated Captive Power Facilities for Mega-Industries',
      'Urban Metropolises & Dense Commercial Business Districts',
      'Renewable Energy Integration Points (Solar & Wind Farms)'
    ]
  },
  {
    id: 'maintenance',
    slug: 'maintenance',
    name: 'Maintenance Services',
    shortDesc: 'Preventive, predictive, and emergency breakdown support for uninterrupted power reliability.',
    fullDesc: 'Downtime in critical power infrastructure incurs monumental losses. Skylight Luminous offers tailored operations and maintenance (O&M) programs, featuring infrared thermographic scanning, transformer oil de-gassing and filtration, circuit breaker timing tests, contact resistance profiling, and rapid-response emergency mobilization teams on standby 24/7 across Pakistan.',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Infrared Thermography for Electrical Hotspot Detection',
      'Dissolved Gas Analysis (DGA) & On-Site Transformer Oil Filtration',
      'Circuit Breaker Contact Resistance & Timing Tests',
      'Switchgear Busbar Torque Audits & Insulation Resistance (Megger)',
      'Substation Battery Capacity Discharge Testing & Impedance Checks',
      '24/7 Rapid Emergency Response for Power Outage & Fault Remediation'
    ],
    deliverables: [
      'Asset Health Index (AHI) Diagnostics & Lifecycle Assessment Reports',
      'Predictive Maintenance Trend Analysis Schedules',
      'Corrective Remediation Action Plans with Cost-Benefit Metrics',
      'Annual Maintenance Contract (AMC) Service Level Agreements'
    ],
    applications: [
      'Continuous 24/7 Manufacturing Plants (Textile, Steel, Chemical)',
      'Mission-Critical Healthcare Facilities & Tertiary Hospitals',
      'Utility Substations & Regional Grid Stations',
      'Corporate Headquarters & High-Density Gated Communities'
    ]
  }
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'healthcare',
    slug: 'healthcare',
    title: 'Healthcare Sector Power & Substation Infrastructure',
    sector: 'Healthcare Sector',
    client: 'Regional Tertiary Healthcare System',
    location: 'Punjab Medical Corridor',
    completionYear: '2024',
    shortDesc: 'Turnkey 11kV dual-source redundant power distribution and dedicated substation for a 650-bed tertiary hospital complex.',
    challenge: 'Tertiary healthcare centers cannot afford even a momentary fluctuation in electrical service. The hospital demanded 100% redundant dual-feed energization with sub-cycle automatic transfer switching (ATS), medical-grade isolated grounding for ICU / surgical suites, and low acoustic noise transformer housing adjacent to patient wards.',
    solution: 'Skylight Luminous engineered and commissioned a custom indoor 11kV substation equipped with vacuum circuit breakers, cast-resin dry-type transformers, and an integrated SCADA-monitored generator synchronization scheme. Our civil team built specialized acoustic attenuation walls and vibration dampening pads.',
    impact: [
      'Zero downtime across 18 surgical theaters and 92 ICU beds since energization',
      '99.999% power availability index achieved with automated dual-source failover',
      'Acoustic noise levels kept strictly below 45 dB in surrounding hospital zones'
    ],
    specs: [
      { label: 'Voltage Rating', value: '11kV / 415V' },
      { label: 'Substation Capacity', value: '4 x 1500 kVA' },
      { label: 'Switchgear Type', value: 'Metal-Clad Vacuum Switchgear' },
      { label: 'Transfer Time', value: '< 80 milliseconds (Automatic)' }
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'industrial',
    slug: 'industrial',
    title: 'Heavy Industrial Complex Electrification & Civil Works',
    sector: 'Industrial Sector',
    client: 'Integrated Manufacturing & Steel Rolling Facility',
    location: 'Lahore Industrial Zone',
    completionYear: '2023',
    shortDesc: 'Comprehensive 132kV switchyard civil works, transformer erection, and heavy busbar integration for high-amperage smelting operations.',
    challenge: 'The plant operates continuous arc furnaces with aggressive harmonic distortion and immense electrical load surges. The project required deep piled civil foundations capable of withstanding vibrating mill machinery and high wind loads on open gantry towers.',
    solution: 'Our civil and electromechanical engineering divisions collaborated to cast 6-meter deep reinforced piling foundations for two 40MVA power transformers. We deployed tuned harmonic filter banks, SF6 outdoor circuit breakers, and computerized protection relay arrays tailored for arc furnace transient suppression.',
    impact: [
      'Enabled continuous 24/7 manufacturing with 80 MVA combined capacity',
      'Reduced harmonic distortion (THD) below 3.5%, exceeding national utility grid codes',
      'Civil foundations showed zero structural settling after extensive static load testing'
    ],
    specs: [
      { label: 'Primary Voltage', value: '132 kV Grid Interconnection' },
      { label: 'Installed Capacity', value: '2 x 40 MVA Transformers' },
      { label: 'Foundations', value: '120 Heavy Concrete Piles' },
      { label: 'Safety Record', value: '145,000 Safe Work Hours (Zero LTI)' }
    ],
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'urban-housing',
    slug: 'urban-housing',
    title: 'Urban Housing Master Community Electrification & Cabling',
    sector: 'Urban Housing',
    client: 'Premier Gated Residential Community',
    location: 'Metropolitan Lahore Region',
    completionYear: '2024',
    shortDesc: 'Complete underground medium-voltage distribution network, 28 compact pad-mounted substations, and smart ring main units (RMU).',
    challenge: 'Modern urban housing demands clean aesthetics with zero overhead cables, high aesthetic standards, flood-resilient underground chambers, and modular ring topologies to isolate local faults without blacking out surrounding residential sectors.',
    solution: 'Skylight Luminous designed and laid over 35 kilometers of armored 11kV cross-linked polyethylene (XLPE) underground cables, constructed precast concrete water-sealed vaults, and installed 28 SF6 insulated Ring Main Units equipped with remote telemetry for instant fault localization.',
    impact: [
      'Flawless underground electrification servicing over 2,400 residential plots and commercial markets',
      'Automated ring switching reduced typical outage isolation times from hours to under 4 minutes',
      'Zero visual clutter with 100% underground cable distribution and landscaped pad-mount stations'
    ],
    specs: [
      { label: 'Cable Network', value: '35+ km Underground XLPE' },
      { label: 'Pad-Mounted Substations', value: '28 Distributed Stations (630 kVA each)' },
      { label: 'Network Architecture', value: 'Self-Healing Medium Voltage Ring' },
      { label: 'Protection Tier', value: 'IP67 Submersible Cable Terminations' }
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'educational',
    slug: 'educational',
    title: 'Higher Educational University Campus Power & Substation Upgrade',
    sector: 'Educational Sector',
    client: 'State-of-the-art Technology Institute & University',
    location: 'Knowledge City Corridor',
    completionYear: '2023',
    shortDesc: 'Campus-wide power modernization, hybrid solar integration substation, and high-efficiency civil control building.',
    challenge: 'A sprawling 85-acre academic campus needed to overhaul its 25-year-old aging switchgear while classes and high-stakes scientific computing research labs were active. Safety protocols were paramount given student foot traffic across all major arteries.',
    solution: 'We implemented phased weekend energizations and temporary mobile bypass switchgears. Skylight Luminous erected a sleek 2-storey architectural civil control center, installed new microprocessor-controlled numerical protection panels, and integrated a 1.2 MW rooftop solar grid tie seamlessly into the main medium-voltage bus.',
    impact: [
      'Overhauled entire campus infrastructure with zero disruption to academic schedules',
      'Integrated 1.2 MW solar feed cutting institutional energy grid costs by 32%',
      'Equipped campus engineering students with a safe, live SCADA educational viewing gallery'
    ],
    specs: [
      { label: 'Campus Area', value: '85 Acres' },
      { label: 'Total Connected Load', value: '6.5 MVA' },
      { label: 'Solar Integration', value: '1.2 MW Synchronized Grid-Tie' },
      { label: 'Control Building', value: '4,500 sq.ft Earthquake-Resistant RCC' }
    ],
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'muhammad-ali',
    name: 'Muhammad Ali',
    role: 'Chief Executive Officer',
    department: 'Executive Leadership',
    credentials: 'Executive Leadership',
    bio: 'Oversees organizational strategy, EPC delivery standards, and long-term client relationships across electrical and civil engineering projects.',
    description: 'Oversees organizational strategy, EPC delivery standards, and long-term client relationships across electrical and civil engineering projects.',
    focusArea: 'Strategic Engineering Management & Corporate Governance',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    specialties: ['Strategic Project Direction', 'Client Alignment', 'Compliance Oversight'],
    responsibilities: [
      'Strategic project direction and governance',
      'Executive stakeholder & client alignment',
      'Safety, quality, and compliance oversight'
    ]
  },
  {
    id: 'ahmed-khan',
    name: 'Ahmed Khan',
    role: 'Project Director',
    department: 'Project Delivery & EPC',
    credentials: 'Project Delivery & EPC',
    bio: 'Leads project scheduling, resource allocation, contractor coordination, and on-time milestones for substation and industrial plant contracts.',
    description: 'Leads project scheduling, resource allocation, contractor coordination, and on-time milestones for substation and industrial plant contracts.',
    focusArea: 'High-Voltage EPC Delivery & Site Coordination',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    specialties: ['EPC Turnkey Execution', 'Critical Path Scheduling', 'Subcontractor Integration'],
    responsibilities: [
      'Turnkey EPC project execution lifecycle',
      'Site milestone & critical path scheduling',
      'Multi-discipline subcontractor integration'
    ]
  },
  {
    id: 'usman-raza',
    name: 'Usman Raza',
    role: 'Engineering Manager',
    department: 'Technical & Engineering',
    credentials: 'Technical & Engineering',
    bio: 'Coordinates technical reviews, single line diagrams, secondary relay injection testing, and high-voltage apparatus diagnostic audits.',
    description: 'Coordinates technical reviews, single line diagrams, secondary relay injection testing, and high-voltage apparatus diagnostic audits.',
    focusArea: 'Testing, Commissioning & Protection Systems',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    specialties: ['Protection Relay Coordination', 'Pre-Commissioning Protocols', 'Grid Standards Compliance'],
    responsibilities: [
      'Protection relay coordination & scheme design',
      'Pre-commissioning test protocol verification',
      'Technical compliance with grid standards'
    ]
  },
  {
    id: 'sara-ahmed',
    name: 'Sara Ahmed',
    role: 'Operations Manager',
    department: 'Operations & Procurement',
    credentials: 'Operations & Procurement',
    bio: 'Manages operational workflows, technical procurement, quality assurance documentation, and day-to-day site support operations.',
    description: 'Manages operational workflows, technical procurement, quality assurance documentation, and day-to-day site support operations.',
    focusArea: 'Operational Workflows, Logistics & HSE Alignment',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    specialties: ['Operational Efficiency', 'Site Safety Adherence', 'Quality Documentation'],
    responsibilities: [
      'Operational efficiency & logistics coordination',
      'Site safety protocol & HSE adherence',
      'Quality documentation & inspection packages'
    ]
  }
];

export const COMPANY_STATS = [
  { label: 'Core Engineering Sectors', value: '4' },
  { label: 'Specialized Service Divisions', value: '5' },
  { label: 'Primary Engineering Focus', value: 'Substations & Civil' },
  { label: 'Corporate Office Location', value: 'Lahore, Pakistan' },
];

export const CORE_VALUES = [
  {
    title: 'Safety First & Zero Compromise',
    description: 'Every project begins and ends with strict adherence to electrical safety and occupational health standards.'
  },
  {
    title: 'Engineering Precision',
    description: 'We adhere to exact IEC, IEEE, and ASTM international tolerances across every foundation, connection, and relay setting.'
  },
  {
    title: 'Integrity & Accountability',
    description: 'Transparent reporting, rigorous testing documentation, and steadfast commitment to client deadlines.'
  },
  {
    title: 'Innovation & Modernization',
    description: 'Deploying digital microprocessors, SCADA integration, and state-of-the-art diagnostic thermography.'
  }
];
