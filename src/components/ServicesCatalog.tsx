import React, { useState } from 'react';
import {
  ShieldCheck,
  Sparkles,
  Activity,
  Flame,
  Scissors,
  Layers,
  Smile,
  ScanLine,
  AlignLeft,
  ChevronRight,
  Search,
  Check,
  X,
  Stethoscope
} from 'lucide-react';
import { DENTAL_SERVICES, DentalService } from '../data/servicesData';
import { ServiceDetailModal } from './ServiceDetailModal';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Activity: Activity,
  Flame: Flame,
  Scissors: Scissors,
  Layers: Layers,
  Smile: Smile,
  ScanLine: ScanLine,
  AlignLeft: AlignLeft
};

interface ServicesCatalogProps {
  onNavigateToContact: () => void;
  onNavigateToLocation: () => void;
}

export const ServicesCatalog: React.FC<ServicesCatalogProps> = ({
  onNavigateToContact,
  onNavigateToLocation
}) => {
  const [selectedService, setSelectedService] = useState<DentalService | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter services if search query is provided
  const filteredServices = DENTAL_SERVICES.filter((service) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const matchesName = service.name.toLowerCase().includes(query);
    const matchesDesc = service.shortDescription.toLowerCase().includes(query);
    const matchesTreatments = service.treatments.some((t) =>
      t.toLowerCase().includes(query)
    );
    return matchesName || matchesDesc || matchesTreatments;
  });

  return (
    <section id="servicios" className="py-16 sm:py-20 bg-[#EAF6EE] border-t border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0D9488] mb-2">
              <Stethoscope className="w-4 h-4" />
              <span>Atención Odontológica Integral</span>
              <span aria-hidden="true">·</span>
              <span>UABC Mexicali</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1B4332]">
              Nuestros servicios
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-2xl">
              Descubre las nueve áreas de atención dental que ofrece la Facultad de Odontología, con tratamientos supervisados y equipo clínico moderno.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar servicio o tratamiento..."
              className="w-full pl-9 pr-8 py-2.5 text-xs sm:text-sm bg-white border border-emerald-900/15 rounded-xl placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-600 cursor-pointer"
                aria-label="Limpiar búsqueda"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 9 Services Rendered in Long Horizontal Bars (Barras Largas) */}
        <div className="space-y-4 sm:space-y-5">
          {filteredServices.map((service, index) => {
            const IconComponent = iconMap[service.iconName];
            return (
              <article
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group bg-white rounded-2xl overflow-hidden border border-emerald-900/10 shadow-xs hover:shadow-md hover:border-[#14B8A6] transition-all duration-200 flex flex-col md:flex-row items-stretch cursor-pointer"
              >
                {/* Long Bar Left Section: Service Photography */}
                <div className="relative w-full md:w-72 lg:w-80 shrink-0 h-48 md:h-auto min-h-[170px] overflow-hidden bg-stone-100">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    loading={index > 2 ? 'lazy' : 'eager'}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.includes('/src/assets/images/')) return;
                      target.src = `/src/assets/images/${service.image.split('/').pop()}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-900/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-stone-900/20" />
                  
                  {/* Floating Treatment Icon Container */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-white/95 text-[#0D9488] shadow-sm backdrop-blur-xs">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-white drop-shadow-sm tracking-wider uppercase">
                      Área {index + 1}
                    </span>
                  </div>
                </div>

                {/* Long Bar Center Section: Service Info and Treatments Preview */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Subtitle / Kicker */}
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D9488]">
                      {service.subtitle}
                    </span>

                    {/* Name of Service */}
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#1B4332] group-hover:text-[#0D9488] transition-colors leading-snug mt-0.5">
                      {service.name}
                    </h3>

                    {/* Brief Description */}
                    <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed max-w-3xl">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Treatments List formatted as clean inline tags */}
                  <div className="mt-4 pt-3.5 border-t border-emerald-900/10">
                    <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-2">
                      Tratamientos correspondientes:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.treatments.map((treatment, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 text-xs text-stone-700 bg-[#F4FAF6] px-3 py-1 rounded-lg border border-emerald-900/10 font-medium"
                        >
                          <Check className="w-3.5 h-3.5 text-[#0D9488] shrink-0" />
                          <span>{treatment}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Long Bar Right Section: Action Button */}
                <div className="p-5 sm:p-6 md:border-l border-emerald-900/10 bg-[#FAFDFB] md:w-56 lg:w-64 shrink-0 flex flex-row md:flex-col items-center justify-between md:justify-center gap-3">
                  <div className="text-left md:text-center">
                    <span className="text-xs font-bold text-[#1B4332] block">
                      {service.treatments.length} tratamientos
                    </span>
                    <span className="text-[11px] text-stone-500 hidden md:block">
                      Atención clínica UABC
                    </span>
                  </div>

                  {/* "Conocer más" Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                    }}
                    className="w-auto md:w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0D9488] group-hover:bg-[#0F766E] rounded-xl shadow-xs transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Conocer más</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty State for Search */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-emerald-900/15 p-8 max-w-md mx-auto shadow-xs">
            <p className="text-sm font-semibold text-stone-700 mb-1">
              No encontramos servicios con "{searchQuery}"
            </p>
            <p className="text-xs text-stone-500 mb-4">
              Intenta buscar por palabras clave como "caries", "limpieza", "conductos", "brackets" o "encías".
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#0D9488] rounded-lg hover:bg-[#0F766E] transition-colors cursor-pointer"
            >
              Ver todos los 9 servicios
            </button>
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onNavigateToContact={onNavigateToContact}
        onNavigateToLocation={onNavigateToLocation}
      />
    </section>
  );
};
