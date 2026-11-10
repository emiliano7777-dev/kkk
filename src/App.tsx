/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesCatalog } from './components/ServicesCatalog';
import { FamilySection } from './components/FamilySection';
import { AboutFaculty } from './components/AboutFaculty';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'nosotros', 'ubicacion', 'contacto'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for PWA installation prompt
  useEffect(() => {
    const handleBeforeInstall = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstallApp = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EBF7EE] text-stone-800 font-sans">
      {/* Permanent Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Inicio / Hero */}
        <Hero onNavigate={scrollToSection} />

        {/* 2. Catálogo de Servicios Odontológicos (9 servicios) */}
        <ServicesCatalog
          onNavigateToContact={() => scrollToSection('contacto')}
          onNavigateToLocation={() => scrollToSection('ubicacion')}
        />

        {/* 3. Sección Especial: Salud Bucal para toda la familia */}
        <FamilySection
          onNavigateToServices={() => scrollToSection('servicios')}
          onNavigateToContact={() => scrollToSection('contacto')}
        />

        {/* 4. Conoce nuestra facultad (Acerca de nosotros) */}
        <AboutFaculty />

        {/* 5. Ubicación (Encuéntranos) */}
        <LocationSection />

        {/* 6. Contacto (Estamos para atenderte) */}
        <ContactSection
          onNavigateToLocation={() => scrollToSection('ubicacion')}
        />
      </main>

      {/* Institutional Footer */}
      <Footer
        onNavigate={scrollToSection}
        deferredPrompt={deferredPrompt}
        onInstallApp={handleInstallApp}
      />
    </div>
  );
}
