import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  path?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: Breadcrumb[];
  badge?: string;
  bgImage?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  breadcrumbs,
  badge,
  bgImage,
}) => {
  return (
    <section className="relative bg-slate-950 text-white pt-16 pb-16 lg:pt-20 lg:pb-20 overflow-hidden border-b border-slate-800">
      {/* Optional Background Image */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
        </div>
      )}

      {/* Background Subtle Grid & Accent Gradient */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none z-1"
        style={{
          backgroundImage: `radial-gradient(#10b981 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      <div className="absolute -top-32 right-0 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none z-1" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-medium">
            <li>
              <Link to="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-emerald-400 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-emerald-400 font-semibold">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Header Content */}
        <div className="max-w-3xl">
          {badge && (
            <span className="inline-block px-3 py-1 mb-3 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-950 text-emerald-300 border border-emerald-800/80">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
