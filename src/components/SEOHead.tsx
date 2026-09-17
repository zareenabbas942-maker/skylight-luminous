import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageMeta {
  title: string;
  description: string;
  ogDescription?: string;
}

const BASE_URL = 'https://www.skylightluminous.com';
const DEFAULT_OG_DESC = 'A professional engineering, construction, infrastructure, testing, installation, and maintenance services website.';
const DEFAULT_KEYWORDS = 'engineering services, construction services, infrastructure, testing and commissioning, installation and erection, civil works, substation construction, maintenance services, Skylight Luminous, Lahore';

const ROUTE_META_MAP: Record<string, PageMeta> = {
  '/': {
    title: 'Skylight Luminous | Engineering & Infrastructure Services',
    description: 'Skylight Luminous provides professional engineering, construction, infrastructure, testing, installation, and maintenance services.',
    ogDescription: DEFAULT_OG_DESC,
  },
  '/services': {
    title: 'Services | Skylight Luminous',
    description: 'Explore Skylight Luminous engineering divisions: testing & commissioning, installation & erection, civil works, substation construction, and maintenance.',
  },
  '/services/testing-commissioning': {
    title: 'Testing & Commissioning Services | Skylight Luminous',
    description: 'Comprehensive electrical testing, pre-commissioning, relay coordination, insulation diagnostics, and energization testing for critical infrastructure.',
  },
  '/services/installation-erection': {
    title: 'Installation & Erection Services | Skylight Luminous',
    description: 'Precision electromechanical installation and erection of transformers, switchgear, busducts, and heavy industrial plant equipment.',
  },
  '/services/civil-works': {
    title: 'Civil Works | Skylight Luminous',
    description: 'Specialized civil construction for electrical substations, heavy machinery equipment foundations, transformer pads, and control buildings.',
  },
  '/services/substation-construction': {
    title: 'Substation Construction | Skylight Luminous',
    description: 'End-to-end AIS and GIS substation construction, turnkey EPC delivery, switchyard development, and utility grid interconnection.',
  },
  '/services/maintenance': {
    title: 'Maintenance Services | Skylight Luminous',
    description: 'Preventive, corrective, and predictive maintenance programs, thermographic surveys, transformer oil filtration, and 24/7 emergency response.',
  },
  '/about': {
    title: 'About Us | Skylight Luminous',
    description: 'Learn about Skylight Luminous, an engineering and infrastructure services firm headquartered in Lahore with a focus on safety and technical excellence.',
  },
  '/team': {
    title: 'Our Team | Skylight Luminous',
    description: 'Meet the Skylight Luminous leadership, certified electrical engineers, civil construction supervisors, and QHSE safety specialists.',
  },
  '/case-studies': {
    title: 'Case Studies | Skylight Luminous',
    description: 'Review Skylight Luminous engineering project case studies across healthcare, industrial, urban housing, and educational infrastructure sectors.',
  },
  '/case-studies/healthcare': {
    title: 'Healthcare Sector | Skylight Luminous',
    description: 'Hospital and medical facility infrastructure case study featuring uninterrupted power systems, medical isolation panels, and emergency standby generation.',
  },
  '/case-studies/industrial': {
    title: 'Industrial Sector | Skylight Luminous',
    description: 'Heavy industrial manufacturing plant case study featuring 132kV substation expansion, harmonic mitigation, and motor control centers.',
  },
  '/case-studies/urban-housing': {
    title: 'Urban Housing | Skylight Luminous',
    description: 'Master-planned residential community case study featuring underground medium-voltage distribution, ring main units, and substation civil works.',
  },
  '/case-studies/educational': {
    title: 'Educational Sector | Skylight Luminous',
    description: 'University campus infrastructure case study featuring centralized power distribution, backup generation, and institutional substation facilities.',
  },
  '/contact': {
    title: 'Contact Us | Skylight Luminous',
    description: 'Contact Skylight Luminous at 1A Iqbal Avenue Phase 3 Lahore or connect with our engineering team to discuss your infrastructure requirements.',
  },
  '/get-a-quote': {
    title: 'Get a Quote | Skylight Luminous',
    description: 'Request a formal engineering quotation for substation construction, testing, installation, civil works, or electrical maintenance services.',
  },
};

function setOrUpdateMeta(name: string, content: string, isProperty = false) {
  const attribute = isProperty ? 'property' : 'name';
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setOrUpdateCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

export const SEOHead: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/\/$/, '') || '/';
    const meta = ROUTE_META_MAP[pathname] || {
      title: 'Skylight Luminous | Engineering & Infrastructure Services',
      description: 'Skylight Luminous provides professional engineering, construction, infrastructure, testing, installation, and maintenance services.',
      ogDescription: DEFAULT_OG_DESC,
    };

    // Update document title
    document.title = meta.title;

    // Update Meta tags
    setOrUpdateMeta('description', meta.description);
    setOrUpdateMeta('keywords', DEFAULT_KEYWORDS);

    // Open Graph tags
    setOrUpdateMeta('og:site_name', 'Skylight Luminous', true);
    setOrUpdateMeta('og:title', meta.title, true);
    setOrUpdateMeta('og:description', meta.ogDescription || meta.description, true);
    setOrUpdateMeta('og:type', 'website', true);

    const canonicalUrl = `${BASE_URL}${pathname === '/' ? '' : pathname}`;
    setOrUpdateMeta('og:url', canonicalUrl, true);
    setOrUpdateCanonical(canonicalUrl);
  }, [location.pathname]);

  return null;
};
