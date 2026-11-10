import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Copy, Check, Clock, Building2, CheckCircle2 } from 'lucide-react';
import { CLINIC_LOCATIONS, ClinicLocation, INSTITUTION_INFO } from '../data/servicesData';

export const LocationSection: React.FC = () => {
  const [selectedClinicId, setSelectedClinicId] = useState<string>('calafia');
  const [copiedClinicId, setCopiedClinicId] = useState<string | null>(null);

  const activeClinic: ClinicLocation =
    CLINIC_LOCATIONS.find((c) => c.id === selectedClinicId) || CLINIC_LOCATIONS[0];

  const handleCopyAddress = (clinic: ClinicLocation) => {
    navigator.clipboard.writeText(clinic.address);
    setCopiedClinicId(clinic.id);
    setTimeout(() => setCopiedClinicId(null), 2000);
  };

  // Google Maps embed URL generated dynamically for the selected clinic
  const getMapEmbedUrl = (clinic: ClinicLocation) => {
    return `https://maps.google.com/maps?q=${clinic.embedQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  };

  return (
    <section id="ubicacion" className="py-16 sm:py-20 bg-[#E8F5ED] border-t border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0D9488] mb-2">
            <MapPin className="w-4 h-4" />
            <span>Red de Clínicas UABC Mexicali</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1B4332]">
            Encuéntranos
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-2xl mx-auto">
            La Facultad de Odontología cuenta con 3 clínicas para la atención odontológica de la comunidad de Mexicali: <strong>Clínica Calafia</strong> (sede principal), <strong>Clínica Naranjos</strong> y <strong>Clínica Calle 11</strong>.
          </p>
        </div>

        {/* 3 Clinics Interactive Segmented Tab Selector */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 max-w-2xl mx-auto mb-10 p-1.5 bg-white/90 backdrop-blur-xs rounded-2xl border border-emerald-900/15 shadow-2xs">
          {CLINIC_LOCATIONS.map((clinic) => {
            const isActive = clinic.id === selectedClinicId;
            return (
              <button
                key={clinic.id}
                onClick={() => setSelectedClinicId(clinic.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap focus:outline-hidden ${
                  isActive
                    ? 'bg-[#0D9488] text-white shadow-xs'
                    : 'text-stone-700 hover:text-[#1B4332] hover:bg-[#EBF7EE]'
                }`}
              >
                <Building2 className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#0D9488]'}`} />
                <span>{clinic.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Active Clinic Detail View (Card + Map Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Active Clinic Information Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-emerald-900/15 shadow-xs">
              {/* Header with badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D9488] bg-[#E8F5ED] px-2.5 py-1 rounded-md">
                  {activeClinic.badge}
                </span>
                <span className="text-xs text-stone-400 font-mono">Mexicali, B.C.</span>
              </div>

              <h3 className="font-display text-xl font-bold text-[#1B4332] mb-1">
                {activeClinic.name}
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                Facultad de Odontología · UABC
              </p>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                {activeClinic.description}
              </p>

              {/* Address Box */}
              <div className="p-3.5 bg-[#F4FAF6] rounded-xl border border-emerald-900/10 mb-4 text-xs sm:text-sm text-stone-700 font-sans flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                <span className="leading-snug">{activeClinic.address}</span>
              </div>

              {/* Action Buttons with the User's Provided Exact Google Maps Share Links */}
              <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <a
                  href={activeClinic.mapShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0D9488] hover:bg-[#0F766E] rounded-xl shadow-xs transition-colors whitespace-nowrap cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Cómo llegar</span>
                </a>

                <a
                  href={activeClinic.mapShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1B4332] bg-white hover:bg-stone-50 border border-stone-300 hover:border-[#0D9488] rounded-xl transition-colors whitespace-nowrap cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>Abrir en Google Maps</span>
                </a>
              </div>

              {/* Copy Address Button */}
              <button
                onClick={() => handleCopyAddress(activeClinic)}
                className="mt-3 w-full inline-flex items-center justify-center gap-2 text-xs font-medium text-stone-500 hover:text-stone-800 py-1.5 transition-colors cursor-pointer"
              >
                {copiedClinicId === activeClinic.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">¡Dirección copiada al portapapeles!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar dirección de {activeClinic.shortName}</span>
                  </>
                )}
              </button>
            </div>

            {/* Operational Hours Box */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-emerald-900/10 shadow-xs flex items-center justify-between gap-3 text-xs text-stone-700">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#0D9488]" />
                <span>
                  <strong>Horario de atención: </strong>
                  {INSTITUTION_INFO.hours}
                </span>
              </div>
              <span className="text-[11px] font-semibold text-emerald-800 bg-[#E8F5ED] px-2 py-0.5 rounded">
                UABC Mexicali
              </span>
            </div>
          </div>

          {/* Interactive Google Map Column */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-900/15 shadow-xs bg-stone-100 h-96 sm:h-[430px] w-full">
              <iframe
                key={activeClinic.id}
                title={`Mapa interactivo de ${activeClinic.name}`}
                src={getMapEmbedUrl(activeClinic)}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating clinic badge bar over map */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-stone-200 shadow-sm flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0D9488]" />
                  <span className="text-xs font-bold text-[#1B4332]">
                    {activeClinic.shortName}
                  </span>
                </div>
                <a
                  href={activeClinic.mapShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-[#0D9488] hover:underline"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Clinics Quick Cards Grid */}
        <div className="mt-8 pt-8 border-t border-emerald-900/15">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-4 text-center sm:text-left">
            Directorio de las 3 Clínicas Odontológicas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CLINIC_LOCATIONS.map((clinic) => {
              const isCurrent = clinic.id === selectedClinicId;
              return (
                <div
                  key={clinic.id}
                  onClick={() => setSelectedClinicId(clinic.id)}
                  className={`bg-white p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isCurrent
                      ? 'border-[#0D9488] ring-2 ring-[#0D9488]/20 shadow-xs'
                      : 'border-emerald-900/10 hover:border-emerald-500/40 shadow-xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-[#0D9488] uppercase tracking-wider">
                        {clinic.badge}
                      </span>
                      {isCurrent && (
                        <span className="text-[10px] font-bold text-white bg-[#0D9488] px-2 py-0.5 rounded-full">
                          Viendo en mapa
                        </span>
                      )}
                    </div>
                    <h4 className="font-display text-base font-bold text-[#1B4332]">
                      {clinic.shortName}
                    </h4>
                    <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                      {clinic.address}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#0D9488]">
                      Seleccionar clínica
                    </span>
                    <a
                      href={clinic.mapShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs text-stone-600 hover:text-[#0D9488]"
                      title="Abrir mapa de esta clínica"
                    >
                      <span>Mapa</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
