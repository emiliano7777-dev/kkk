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
  X
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
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar servicio o tratamiento..."
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-white border border-stone-200 rounded-xl placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-600"
                aria-label="Limpiar búsqueda"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 9 Services Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((service, index) => {
            const IconComponent = iconMap[service.iconName];
            return (
              <article
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                {/* Card Photography */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-100">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    loading={index > 2 ? 'lazy' : 'eager'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Floating Treatment Icon Container */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-white/95 text-[#0D9488] shadow-sm backdrop-blur-xs">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-semibold text-white drop-shadow-sm tracking-wide">
                      Área {index + 1}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Name of Service */}
                    <h3 className="font-display text-lg font-bold text-[#1B4332] group-hover:text-[#0D9488] transition-colors leading-snug">
                      {service.name}
                    </h3>

                    {/* Brief Description */}
                    <p className="text-xs sm:text-sm text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Key treatments preview */}
                    <div className="mt-4 pt-3 border-t border-stone-100">
                      <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block mb-1.5">
                        Tratamientos principales:
                      </span>
                      <ul className="space-y-1">
                        {service.treatments.slice(0, 2).map((t, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 text-xs text-stone-700 truncate">
                            <Check className="w-3.5 h-3.5 text-[#0D9488] shrink-0" />
                            <span className="truncate">{t}</span>
                          </li>
                        ))}
                        {service.treatments.length > 2 && (
                          <li className="text-[11px] text-stone-400 pl-5">
                            +{service.treatments.length - 2} más disponibles
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* "Conocer más" Button */}
                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D9488] group-hover:text-[#0F766E] transition-colors cursor-pointer"
                    >
                      <span>Conocer más</span>
                      <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <span className="text-[11px] text-stone-400">
                      {service.treatments.length} tratamientos
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty State for Search */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-stone-200 p-8 max-w-md mx-auto">
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
