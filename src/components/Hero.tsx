import React from 'react';
import { Sparkles, MapPin, Phone, GraduationCap, ChevronRight, Clock, Building } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/servicesData';
import { UABCEmblem } from './UABCLogo';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="inicio" className="relative overflow-hidden pt-6 pb-16 sm:py-20 lg:py-24">
      {/* Subtle organic background accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#5F8D78]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#14B8A6]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Institutional Messaging and Action Triggers */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Institutional Kicker with Official Logo Image */}
            <div className="flex items-center gap-3.5 mb-5 bg-white/90 backdrop-blur-xs py-1.5 px-3 rounded-2xl border border-emerald-900/10 shadow-2xs">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white shrink-0 p-0.5">
                <img
                  src={INSTITUTION_INFO.officialLogo}
                  alt="Escudo oficial Facultad de Odontología Mexicali"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#1B4332]">
                  <span>Facultad de Odontología</span>
                  <span aria-hidden="true" className="text-emerald-600">·</span>
                  <span className="text-emerald-800">UABC Mexicali</span>
                </div>
                <span className="text-[10px] text-emerald-900/75 font-medium -mt-0.5">
                  Ciencia en Salud Oral · Campus Mexicali
                </span>
              </div>
            </div>

            {/* Main Motto Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1B4332] text-balance leading-tight mb-4">
              {INSTITUTION_INFO.motto}
            </h1>

            {/* Intro Prose */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mb-8">
              {INSTITUTION_INFO.welcomeText}
            </p>

            {/* 4 Main Requested CTA Buttons */}
            <div className="w-full flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-3.5 mb-8">
              {/* 1. Conoce nuestros servicios */}
              <button
                onClick={() => onNavigate('servicios')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0D9488] hover:bg-[#0F766E] rounded-xl shadow-xs transition-all hover:shadow-md cursor-pointer whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0D9488]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Conoce nuestros servicios</span>
              </button>

              {/* 2. Encuentra nuestra ubicación */}
              <button
                onClick={() => onNavigate('ubicacion')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#1B4332] bg-white hover:bg-stone-50 border border-stone-200 hover:border-[#14B8A6] rounded-xl shadow-2xs transition-all cursor-pointer whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#14B8A6]"
              >
                <MapPin className="w-4 h-4 text-[#0D9488]" />
                <span>Encuentra nuestra ubicación</span>
              </button>

              {/* 3. Contáctanos */}
              <button
                onClick={() => onNavigate('contacto')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#1B4332] bg-white hover:bg-stone-50 border border-stone-200 hover:border-[#14B8A6] rounded-xl shadow-2xs transition-all cursor-pointer whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#14B8A6]"
              >
                <Phone className="w-4 h-4 text-[#0D9488]" />
                <span>Contáctanos</span>
              </button>

              {/* 4. Conoce nuestra facultad */}
              <button
                onClick={() => onNavigate('nosotros')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#1B4332] bg-white hover:bg-stone-50 border border-emerald-900/15 hover:border-[#14B8A6] rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-2xs"
              >
                <GraduationCap className="w-4 h-4 text-[#5F8D78]" />
                <span>Conoce nuestra facultad</span>
              </button>
            </div>

            {/* Quick Operational Information Strip */}
            <div className="w-full pt-6 border-t border-emerald-900/15 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-700">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#0D9488] shrink-0" />
                <div>
                  <span className="font-semibold text-stone-800">Horario de atención: </span>
                  <span>{INSTITUTION_INFO.hours}</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Building className="w-4 h-4 text-[#0D9488] shrink-0" />
                <div className="truncate">
                  <span className="font-semibold text-stone-800">3 Clínicas en Mexicali: </span>
                  <span>Calafia · Naranjos · Calle 11</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Dental Clinic Photography Frame */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative background framing */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#5F8D78]/20 to-[#14B8A6]/20 rounded-3xl transform -rotate-1 hidden sm:block" />

              <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg border border-stone-200/80">
                <img
                  src={INSTITUTION_INFO.heroImage}
                  alt="Instalaciones clínicas de atención odontológica en la Facultad de Odontología UABC Mexicali"
                  className="w-full h-72 sm:h-84 lg:h-96 object-cover object-center"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid caption card */}
                <div className="p-4 sm:p-5 bg-white border-t border-stone-100">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <UABCEmblem size="sm" showText={false} />
                      <div>
                        <p className="text-xs font-bold text-[#1B4332]">
                          Clínica Odontológica UABC
                        </p>
                        <p className="text-[11px] text-stone-500">
                          Instalaciones universitarias al servicio de Mexicali
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => onNavigate('servicios')}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#0D9488] hover:text-[#0F766E] transition-colors cursor-pointer"
                    >
                      <span>Ver 9 servicios</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
