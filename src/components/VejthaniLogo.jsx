import React, { useState } from 'react';

export default function VejthaniLogo({
  variant = 'full', // 'full' | 'symbol' | 'white' | 'dark'
  className = '',
  size = 'md' // 'sm' | 'md' | 'lg'
}) {
  const [imageError, setImageError] = useState(false);

  const officialLogoUrl = 'https://www.vejthani.com/wp-content/themes/vejthani-revamp/assets/images/logo-vejthani-international.webp';

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-14',
    xl: 'h-16'
  };

  // If image loads successfully from official CDN
  if (!imageError && variant !== 'symbol') {
    return (
      <div className={`flex items-center space-x-2 select-none ${className}`}>
        <img
          src={officialLogoUrl}
          alt="โรงพยาบาลเวชธานี อินเตอร์เนชันแนล - Vejthani Hospital"
          className={`${sizeClasses[size] || sizeClasses.md} object-contain transition-transform duration-200`}
          onError={() => setImageError(true)}
          loading="eager"
        />
      </div>
    );
  }

  // High-fidelity SVG Official Emblem & Typography Fallback
  return (
    <div className={`flex items-center space-x-3 select-none ${className}`}>
      {/* Vejthani Official Emblem Emblem */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 120 120"
          className={`${size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-14 h-14' : 'w-11 h-11'} drop-shadow-sm`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Ring */}
          <circle cx="60" cy="60" r="56" stroke="#00A3AD" strokeWidth="4" fill="#002D62" />
          
          {/* Inner Teal Lotus / Star Emblem */}
          <path
            d="M60 22 C64 38 78 52 94 56 C78 60 64 74 60 90 C56 74 42 60 26 56 C42 52 56 38 60 22 Z"
            fill="#00A3AD"
          />
          {/* Golden Center Accent */}
          <circle cx="60" cy="56" r="10" fill="#C5A880" stroke="#FFFFFF" strokeWidth="2" />
          
          {/* Cross highlight */}
          <rect x="58" y="38" width="4" height="36" rx="2" fill="#FFFFFF" opacity="0.9" />
          <rect x="42" y="54" width="36" height="4" rx="2" fill="#FFFFFF" opacity="0.9" />
        </svg>
      </div>

      {/* Official Typography */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center space-x-1.5">
          <span className={`font-black tracking-tight ${
            variant === 'white' ? 'text-white' : 'text-[#002D62]'
          } ${size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl'}`}>
            VEJTHANI
          </span>
          <span className="text-[#00A3AD] font-bold text-xs uppercase tracking-wider">
            HOSPITAL
          </span>
        </div>
        <div className="flex items-center space-x-1.5 mt-0.5">
          <span className={`text-[10px] font-medium tracking-wide ${
            variant === 'white' ? 'text-slate-300' : 'text-slate-500'
          }`}>
            โรงพยาบาลเวชธานี อินเตอร์เนชันแนล
          </span>
          <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-600 border border-amber-500/30">
            JCI
          </span>
        </div>
      </div>
    </div>
  );
}
