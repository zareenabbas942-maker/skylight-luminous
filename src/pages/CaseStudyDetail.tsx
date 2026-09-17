import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  ShieldCheck,
  Phone
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { CASE_STUDIES_DATA, COMPANY_INFO } from '../data/companyData';

export const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const study = CASE_STUDIES_DATA.find((c) => c.slug === slug);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div>
      <PageHeader
        badge={study.sector}
        title={study.title}
        subtitle={study.shortDesc}
        breadcrumbs={[
          { label: 'Case Studies', path: '/case-studies' },
          { label: study.sector }
        ]}
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Project Column (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Feature Image */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                />
              </div>

              {/* Challenge & Solution Architecture */}
              <div className="space-y-8">
                
                {/* Challenge Section */}
                <div className="space-y-3 p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80">
                  <div className="flex items-center gap-2.5 text-amber-900 font-bold text-lg">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span>The Engineering Challenge</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution Section */}
                <div className="space-y-3 p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
                  <div className="flex items-center gap-2.5 text-emerald-900 font-bold text-lg">
                    <Lightbulb className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Engineered Solution by Skylight Luminous</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

              </div>

              {/* Impact & Performance Metrics */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Measurable Operational Impact
                </h3>
                <div className="space-y-3">
                  {study.impact.map((imp, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-800 leading-relaxed">
                        {imp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Technical Parameters & Project Scope
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {study.specs.map((spec, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                      <p className="text-xs uppercase font-bold text-slate-400">
                        {spec.label}
                      </p>
                      <p className="text-base font-bold text-slate-900 mt-1">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Project Meta Card */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 shadow-xs">
                <h4 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-3">
                  Project Factsheet
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-semibold block">Target Sector:</span>
                    <span className="font-bold text-slate-900">{study.sector}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-semibold block">Location:</span>
                    <span className="font-semibold text-slate-800">{study.location}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-semibold block">Client Type:</span>
                    <span className="font-semibold text-slate-800">{study.client}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-semibold block">Completion Year:</span>
                    <span className="font-semibold text-slate-800">{study.completionYear}</span>
                  </div>
                </div>
              </div>

              {/* Other Case Studies Nav */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3 shadow-xs">
                <h4 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3">
                  Other Sector Studies
                </h4>
                <div className="space-y-2">
                  {CASE_STUDIES_DATA.map((cs) => {
                    const isActive = cs.slug === study.slug;
                    return (
                      <Link
                        key={cs.id}
                        to={`/case-studies/${cs.slug}`}
                        className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                          isActive
                            ? 'bg-emerald-600 text-white font-bold'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium'
                        }`}
                      >
                        {cs.sector}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Quote Trigger */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white space-y-4 border border-slate-800">
                <h4 className="text-lg font-bold">
                  Planning a Similar Project?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Connect directly with Skylight Luminous engineering directors in Lahore to review specifications and timelines.
                </p>
                <Link
                  to="/get-a-quote"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm tracking-wide transition-colors"
                >
                  <span>Request Engineering Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
