import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { CASE_STUDIES_DATA } from '../data/companyData';

export const CaseStudies: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="Proven Execution"
        title="Sector Case Studies & Infrastructure Projects"
        subtitle="Explore how Skylight Luminous delivers mission-critical substation construction, medium-voltage distribution, and civil engineering across diverse industry sectors."
        breadcrumbs={[{ label: 'Case Studies' }]}
        bgImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=85"
      />

      <section className="py-16 lg:py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {CASE_STUDIES_DATA.map((study) => (
              <div 
                key={study.id}
                id={`case-study-card-${study.slug}`}
                className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 flex flex-col group"
              >
                {/* Photo with Overlay Badge */}
                <div className="h-64 sm:h-72 overflow-hidden relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/90 text-lime-300 text-xs font-bold px-3 py-1.5 rounded-md border border-slate-700 backdrop-blur-xs">
                    {study.sector}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-md backdrop-blur-xs flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{study.location}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {study.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {study.shortDesc}
                    </p>
                  </div>

                  {/* Impact Highlights */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Key Outcomes:
                    </p>
                    <div className="space-y-1.5">
                      {study.impact.slice(0, 2).map((imp, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{imp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-slate-500">
                      Completed {study.completionYear}
                    </span>
                    <Link
                      to={`/case-studies/${study.slug}`}
                      className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
