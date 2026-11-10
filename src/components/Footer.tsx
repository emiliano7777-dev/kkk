import React from 'react';
import { Phone, Mail, Facebook, MapPin, Sparkles, Heart, ChevronUp, Download, Globe, ExternalLink } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/servicesData';
import { UABCEmblem, MueliBrandLogo } from './UABCLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  deferredPrompt?: any;
  onInstallApp?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  deferredPrompt,
  onInstallApp
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F2E22] text-stone-200 pt-16 pb-24 md:pb-16 border-t border-[#1B4B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1B4B38]">
          {/* Col 1: Institutional and Mueli Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 p-1 rounded-xl bg-white shadow-xs shrink-0 flex items-center justify-center">
                <img
                  src={INSTITUTION_INFO.officialLogo}
                  alt="Logo Facultad de Odontología Mexicali"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-white tracking-tight">
                  Mueli UABC
                </span>
                <span className="text-xs text-emerald-200/80">
                  Facultad de Odontología · Campus Mexicali
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed max-w-sm">
              Universidad Autónoma de Baja California. Cuidamos sonrisas y formamos con excelencia profesional el futuro de la odontología en Mexicali.
            </p>

            <div className="pt-2 text-xs text-[#2DD4BF] font-semibold italic">
              "Por la realización plena del hombre"
            </div>

            {/* PWA Install Button if available */}
            {deferredPrompt && onInstallApp && (
              <div className="pt-2">
                <button
                  onClick={onInstallApp}
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-[#0D9488] hover:bg-[#0F766E] rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Instalar Mueli UABC en dispositivo</span>
                </button>
              </div>
            )}
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicios')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Nuestros servicios (9 áreas)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('nosotros')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Conoce nuestra facultad
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ubicacion')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Ubicación en Mexicali
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Medios de contacto
                </button>
              </li>
              <li>
                <a
                  href={INSTITUTION_INFO.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>Sitio Web Oficial UABC</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Official Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contacto y Ubicación
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                <span>{INSTITUTION_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0D9488] shrink-0" />
                <a href={INSTITUTION_INFO.phoneHref} className="hover:text-white transition-colors font-mono">
                  {INSTITUTION_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0D9488] shrink-0" />
                <a href={INSTITUTION_INFO.emailHref} className="hover:text-white transition-colors">
                  {INSTITUTION_INFO.email}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Facebook className="w-4 h-4 text-[#0D9488] shrink-0" />
                <a
                  href={INSTITUTION_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facultad de Odontología UABC Mexicali
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#0D9488] shrink-0" />
                <a
                  href={INSTITUTION_INFO.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-white transition-colors inline-flex items-center gap-1 font-mono text-[11px]"
                >
                  <span>odontologia.mxl.uabc.mx/odo3</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Mueli UABC · Facultad de Odontología, Campus Mexicali. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Volver arriba</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
