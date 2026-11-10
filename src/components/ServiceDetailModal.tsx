import React, { useEffect } from 'react';
import { X, CheckCircle2, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { DentalService, INSTITUTION_INFO } from '../data/servicesData';

interface ServiceDetailModalProps {
  service: DentalService | null;
  onClose: () => void;
  onNavigateToContact: () => void;
  onNavigateToLocation: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onNavigateToContact,
  onNavigateToLocation
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-stone-900 shadow-sm border border-stone-200 transition-colors cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#14B8A6]"
          aria-label="Cerrar detalles del servicio"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Service Photography */}
        <div className="relative h-64 sm:h-72 w-full bg-stone-100 overflow-hidden">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
              Facultad de Odontología UABC
            </span>
            <h2 id="modal-service-title" className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
              {service.name}
            </h2>
            <p className="text-xs sm:text-sm text-stone-200 mt-0.5">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Main Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-2">
              Descripción del servicio
            </h3>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              {service.detailedDescription}
            </p>
          </div>

          {/* Treatments List */}
          <div className="bg-[#EAF2ED] rounded-xl p-5 border border-emerald-900/15">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-3">
              Tratamientos correspondientes
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.treatments.map((treatment, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span>{treatment}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional note */}
          <div className="text-xs text-stone-500 bg-stone-50 rounded-lg p-3.5 border border-stone-200/60 flex items-start gap-2">
            <span className="text-[#0D9488] font-bold">Nota:</span>
            <span>
              Para solicitar información sobre citas o atención en este servicio, acude a la recepción de la facultad o comunícate vía telefónica o correo electrónico.
            </span>
          </div>

          {/* Quick Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
            <div className="w-full sm:w-auto flex items-center gap-2">
              <a
                href={INSTITUTION_INFO.phoneHref}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1B4332] bg-white border border-stone-300 hover:border-[#14B8A6] rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>Llamar ({INSTITUTION_INFO.phoneDisplay})</span>
              </a>
              <a
                href={`mailto:${INSTITUTION_INFO.email}?subject=Información sobre ${encodeURIComponent(service.name)} - Mueli UABC`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1B4332] bg-white border border-stone-300 hover:border-[#14B8A6] rounded-lg transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>Enviar correo</span>
              </a>
            </div>

            <button
              onClick={() => {
                onClose();
                onNavigateToContact();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0D9488] hover:bg-[#0F766E] rounded-lg shadow-2xs transition-colors cursor-pointer"
            >
              <span>Ver medios de contacto</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
