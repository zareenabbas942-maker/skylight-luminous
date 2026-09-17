import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Wrench, 
  HardHat, 
  Zap, 
  Activity, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  Phone, 
  Building,
  Check
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { SERVICES_DATA, COMPANY_INFO } from '../data/companyData';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
  Wrench: <Wrench className="w-8 h-8 text-emerald-600" />,
  HardHat: <HardHat className="w-8 h-8 text-emerald-600" />,
  Zap: <Zap className="w-8 h-8 text-emerald-600" />,
  Activity: <Activity className="w-8 h-8 text-emerald-600" />,
};

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div>
      <PageHeader
        badge="Specialized Engineering Service"
        title={service.name}
        subtitle={service.shortDesc}
        bgImage={service.image}
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: service.name }
        ]}
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Area (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Primary Image */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                />
              </div>

              {/* Service Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Overview & Engineering Methodology
                </h2>
                <p className="text-slate-700 leading-relaxed text-base">
                  {service.fullDesc}
                </p>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Skylight Luminous deploys calibrated digital test sets, precision rigging crews, and registered professional engineers to ensure complete safety and standard compliance across every stage of work.
                </p>
              </div>

              {/* Key Technical Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Scope of Technical Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.keyFeatures.map((feat, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-medium text-slate-800 leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Deliverables */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Formal Deliverables & Client Documentation
                </h3>
                <div className="space-y-3">
                  {service.deliverables.map((deliv, index) => (
                    <div key={index} className="flex items-start gap-3 p-3.5 rounded-lg border border-emerald-100 bg-emerald-50/50">
                      <FileText className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-800">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry Applications */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Key Sector Applications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.applications.map((app, index) => (
                    <div key={index} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar Column (4 Cols) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Other Services Menu */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-xs">
                <h4 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-3">
                  All Services
                </h4>
                <div className="space-y-2">
                  {SERVICES_DATA.map((item) => {
                    const isActive = item.slug === service.slug;
                    return (
                      <Link
                        key={item.id}
                        to={`/services/${item.slug}`}
                        className={`block px-4 py-3 rounded-lg text-sm transition-all font-medium ${
                          isActive
                            ? 'bg-emerald-600 text-white font-bold shadow-xs'
                            : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/60'
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Request a Quote Card */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white space-y-4 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                  <Building className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold">
                  Need {service.name}?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Submit project specifications or single line diagrams for an itemized estimate from our technical team.
                </p>
                <Link
                  to={`/get-a-quote?service=${service.slug}`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider active:scale-98 transition-all duration-150 shadow-md min-h-[44px]"
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Direct Office Contact Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Engineering Inquiries
                </h4>
                <p className="text-sm font-semibold text-slate-900">
                  {COMPANY_INFO.name}
                </p>
                <p className="text-xs text-slate-600">
                  {COMPANY_INFO.address}
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#1F6654] hover:text-[#123C32]"
                  >
                    <Phone className="w-4 h-4 text-[#1F6654]" />
                    <span>Call Engineering Desk</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
