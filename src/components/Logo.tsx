import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  light?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link 
      to="/" 
      id="brand-logo" 
      className={`inline-flex items-center group transition-opacity hover:opacity-95 ${className}`}
      aria-label="Skylight Luminous"
    >
      <img
        src="/image/skylight-logo.jpeg"
        alt="Skylight Luminous"
        className="w-32 h-12 sm:w-36 sm:h-14 object-contain transform group-hover:scale-105 transition-transform duration-300"
      />
    </Link>
  );
};


