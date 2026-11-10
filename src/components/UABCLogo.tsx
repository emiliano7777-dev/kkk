import React from 'react';

interface UABCLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const OFFICIAL_LOGO_PATH = '/images/logoodonto_23e71318.jpg';

export const UABCEmblem: React.FC<UABCLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Facultad de Odontología Mexicali Crest Image */}
      <div className={`relative shrink-0 rounded-xl overflow-hidden bg-white shadow-xs border border-emerald-900/10 p-0.5 flex items-center justify-center ${sizeMap[size]}`}>
        <img
          src={OFFICIAL_LOGO_PATH}
          alt="Logotipo oficial Facultad de Odontología Mexicali UABC"
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.endsWith('/assets/aistudio/logoodonto_23e71318.jpg')) return;
            target.src = '/assets/aistudio/logoodonto_23e71318.jpg';
          }}
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#1B4332]">
              UABC
            </span>
            <span className="text-[10px] text-emerald-700 font-light">·</span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-emerald-800">
              Mexicali
            </span>
          </div>
          <span className="text-xs font-semibold text-stone-800 tracking-tight leading-tight">
            Facultad de Odontología
          </span>
        </div>
      )}
    </div>
  );
};

export const MueliBrandLogo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const iconSizes = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14'
  };

  return (
    <div className="flex items-center gap-3">
      {/* Official Facultad de Odontología Mexicali Crest */}
      <div className={`relative shrink-0 rounded-xl overflow-hidden bg-white shadow-sm border border-emerald-800/15 p-1 flex items-center justify-center ${iconSizes[size]}`}>
        <img
          src={OFFICIAL_LOGO_PATH}
          alt="Logo Facultad de Odontología UABC Mexicali"
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.endsWith('/assets/aistudio/logoodonto_23e71318.jpg')) return;
            target.src = '/assets/aistudio/logoodonto_23e71318.jpg';
          }}
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#1B4332]">
            Mueli
          </span>
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#0D9488] uppercase">
            UABC
          </span>
        </div>
        <span className="text-[10px] sm:text-[11px] text-emerald-900/80 font-medium tracking-tight -mt-0.5">
          Facultad de Odontología · Mexicali
        </span>
      </div>
    </div>
  );
};
