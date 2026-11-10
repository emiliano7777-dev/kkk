import React, { useState, useEffect } from 'react';
import { Home, Sparkles, BookOpen, MapPin, Phone, Menu, X, Globe, ExternalLink } from 'lucide-react';
import { UABCEmblem, MueliBrandLogo } from './UABCLogo';
import { INSTITUTION_INFO } from '../data/servicesData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'servicios', label: 'Servicios', icon: Sparkles },
    { id: 'nosotros', label: 'Nosotros', icon: BookOpen },
    { id: 'ubicacion', label: 'Ubicación', icon: MapPin },
    { id: 'contacto', label: 'Contacto', icon: Phone },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Desktop & Tablet Navigation Bar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-emerald-900/10 py-3'
            : 'bg-[#EBF7EE]/95 backdrop-blur-md border-emerald-900/10 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Zone */}
            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={() => handleNavClick('inicio')}
                className="flex items-center gap-3 text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#14B8A6] rounded-lg"
                aria-label="Ir al inicio de Mueli UABC"
              >
                <MueliBrandLogo size="md" />
              </button>
              <div className="hidden sm:block h-6 w-px bg-stone-300" aria-hidden="true" />
              <div className="hidden sm:block">
                <UABCEmblem size="sm" showText={true} />
              </div>
            </div>

            {/* Zone 2: Navigation Links (single line, clean typography) */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#14B8A6] rounded ${
                      isActive
                        ? 'text-[#1B4332] font-semibold border-b-2 border-[#14B8A6]'
                        : 'hover:text-[#1B4332]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action & Mobile Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={INSTITUTION_INFO.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-[#1B4332] bg-white/90 border border-emerald-900/15 hover:border-[#0D9488] px-3 py-2 rounded-lg transition-colors whitespace-nowrap shadow-2xs"
                title="Página Oficial de la Facultad de Odontología UABC Mexicali"
              >
                <Globe className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>Sitio Oficial UABC</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>

              <a
                href="tel:+526865573268"
                className="hidden lg:flex items-center gap-2 text-xs font-semibold text-[#1B4332] bg-white/90 border border-emerald-900/15 hover:border-[#14B8A6] px-3 py-2 rounded-lg transition-colors whitespace-nowrap shadow-2xs"
                title="Llamar a la Facultad: 686 557 3268"
              >
                <Phone className="w-3.5 h-3.5 text-[#0D9488]" />
                <span className="font-mono">686 557 3268</span>
              </a>

              <button
                onClick={() => handleNavClick('contacto')}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#0D9488] hover:bg-[#0F766E] shadow-xs rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D9488]"
              >
                Contáctanos
              </button>

              {/* Mobile Drawer Trigger for tablets/small screens */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#14B8A6]"
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Panel when menu hamburger is tapped */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-3 pb-4 border-t border-stone-200 bg-white/98 shadow-md">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-stone-100">
              <UABCEmblem size="sm" showText={true} />
              <span className="text-[11px] font-semibold text-stone-500">UABC Mexicali</span>
            </div>
            <div className="space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                      isActive
                        ? 'bg-[#14B8A6]/10 text-[#1B4332] font-semibold'
                        : 'text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#0D9488]' : 'text-stone-500'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex flex-col gap-2">
              <a
                href={INSTITUTION_INFO.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-[#1B4332] bg-[#E8F5ED] rounded-lg hover:bg-emerald-100/60"
              >
                <Globe className="w-4 h-4 text-[#0D9488]" />
                <span>Visitar Sitio Oficial UABC (odo3)</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
              <a
                href="tel:+526865573268"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-stone-800 bg-stone-100 rounded-lg hover:bg-stone-200"
              >
                <Phone className="w-4 h-4 text-[#0D9488]" />
                <span>Llamar: 686 557 3268</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation Bar (as per spec: "En celulares puede utilizarse una barra de navegación inferior con iconos") */}
      <nav
        aria-label="Navegación móvil inferior"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-2 py-1.5 shadow-lg shadow-stone-900/10"
      >
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-lg transition-colors min-w-[56px] focus:outline-hidden ${
                  isActive
                    ? 'text-[#0D9488] font-bold'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                <IconComponent className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`} />
                <span className="text-[10px] mt-0.5 tracking-tight">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
