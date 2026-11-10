import React from 'react';
import { Heart, Sparkles, Users, Smile, ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/servicesData';

interface FamilySectionProps {
  onNavigateToServices: () => void;
  onNavigateToContact: () => void;
}

export const FamilySection: React.FC<FamilySectionProps> = ({
  onNavigateToServices,
  onNavigateToContact
}) => {
  const familyStages = [
    {
      stage: 'Infancia y Niñez',
      subtitle: 'Primeros hábitos y prevención',
      icon: Smile,
      description: 'Acompañamiento temprano para que los más pequeños crezcan sin temor al dentista, previniendo caries en dientes de leche y cuidando la erupción de su dentición definitiva.',
      treatments: ['Odontopediatría', 'Selladores y profilaxis infantil', 'Guía de cepillado']
    },
    {
      stage: 'Jóvenes y Adultos',
      subtitle: 'Mantenimiento, armonía y función',
      icon: Users,
      description: 'Atención a las necesidades cotidianas: limpiezas preventivas semestrales, eliminación oportuna de caries con resina estética, ortodoncia y salud de las encías.',
      treatments: ['Limpiezas dentales', 'Resinas estéticas', 'Ortodoncia y periodoncia']
    },
    {
      stage: 'Adultos Mayores',
      subtitle: 'Rehabilitación y confort bucal',
      icon: Heart,
      description: 'Recuperación de piezas dentales, prótesis y prótesis totales para mantener una alimentación completa, una pronunciación clara y una sonrisa digna y segura.',
      treatments: ['Prótesis dentales', 'Coronas y rehabilitación', 'Cuidado de encías']
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#EEF5F0] border-t border-emerald-900/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0D9488] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Salud Bucal Para Toda La Familia</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1B4332] text-balance">
            {INSTITUTION_INFO.familyTitle}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            {INSTITUTION_INFO.familyText}
          </p>
        </div>

        {/* Hero Family Photo & Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Photography Column */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-stone-200/80 bg-stone-100">
              <img
                src={INSTITUTION_INFO.familyImage}
                alt="Familia multigeneracional sonriendo con salud bucal en la clínica odontológica"
                className="w-full h-72 sm:h-96 object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                  Compromiso con la comunidad de Mexicali
                </span>
                <p className="text-white text-base sm:text-lg font-bold font-display mt-0.5">
                  Atención integral con calidad universitaria para cada miembro del hogar
                </p>
              </div>
            </div>
          </div>

          {/* Educational Family Callout Card */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-white p-6 sm:p-8 rounded-2xl border border-emerald-900/10 shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#1B4332] uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                <span>¿Por qué acudir a revisión periódica?</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#1B4332] mb-3">
                Prevenir es el mejor cuidado para tu boca
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                Detectar a tiempo una caries pequeña, un sangrado de encías o una mordida desalineada evita procedimientos complejos y preserva tus dientes naturales por muchos años.
              </p>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                  <span>Revisiones recomendadas al menos una vez al año.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                  <span>Cepillado después de cada comida con técnica adecuada.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                  <span>Atención clínica supervisada por docentes universitarios.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onNavigateToServices}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0D9488] hover:bg-[#0F766E] rounded-xl transition-colors cursor-pointer"
              >
                <span>Explorar servicios clínicos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onNavigateToContact}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1B4332] bg-white border border-stone-200 hover:border-[#0D9488] rounded-xl transition-colors cursor-pointer"
              >
                <span>Contactar a la facultad</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Life Stages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {familyStages.map((stageItem, idx) => {
            const Icon = stageItem.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-xs hover:border-[#14B8A6] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0D9488] border border-stone-200 flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-[#1B4332]">
                    {stageItem.stage}
                  </h4>
                  <p className="text-xs font-medium text-[#0D9488] mt-0.5 mb-2">
                    {stageItem.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {stageItem.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-200/60">
                  <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                    Áreas de apoyo:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {stageItem.treatments.map((t, i) => (
                      <span key={i} className="text-[11px] text-[#1B4332] font-medium">
                        {t}{i < stageItem.treatments.length - 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
