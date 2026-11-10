import React from 'react';
import { GraduationCap, Award, BookOpen, Users2, Building2, Globe, ExternalLink } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/servicesData';
import { UABCEmblem } from './UABCLogo';

export const AboutFaculty: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 sm:py-20 bg-[#EAF6EE] border-t border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Academic Photography */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-white">
                <img
                  src={INSTITUTION_INFO.facultyImage}
                  alt="Estudiantes y docentes en formación odontológica clínica en UABC Campus Mexicali"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-white border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <UABCEmblem size="sm" showText={false} />
                    <div>
                      <p className="text-xs font-bold text-[#1B4332]">
                        Docencia y Práctica Clínica
                      </p>
                      <p className="text-[11px] text-stone-500">
                        Universidad Autónoma de Baja California
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#0D9488]">
                    Campus Mexicali
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Identity & Exact Required Text */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0D9488] mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>Institución Educativa y de Salud</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1B4332] mb-6">
              Conoce nuestra facultad
            </h2>

            {/* Official Institutional Text from prompt */}
            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p>
                La Facultad de Odontología de la Universidad Autónoma de Baja California, campus Mexicali, forma parte de una institución comprometida con la educación superior y la formación de profesionales de la salud bucal.
              </p>
              <p>
                A través de sus actividades académicas y clínicas, contribuye a la formación de estudiantes de odontología y a la atención de las necesidades de salud bucal de la población.
              </p>
            </div>

            {/* Institutional Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-stone-200">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200/80">
                <div className="p-2 rounded-lg bg-[#5F8D78]/15 text-[#1B4332] shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#1B4332] uppercase tracking-wide">
                    Formación Profesional
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 leading-normal">
                    Preparación rigurosa de futuros cirujanos dentistas con enfoque científico y ético.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200/80">
                <div className="p-2 rounded-lg bg-[#0D9488]/15 text-[#0D9488] shrink-0 mt-0.5">
                  <Users2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#1B4332] uppercase tracking-wide">
                    Servicio a la Comunidad
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 leading-normal">
                    Atención odontológica integral y accesible para los habitantes de Mexicali y su valle.
                  </p>
                </div>
              </div>
            </div>

            {/* Official Website Direct Button */}
            <div className="mt-6 pt-4 border-t border-emerald-900/10">
              <a
                href={INSTITUTION_INFO.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1B4332] bg-white hover:bg-emerald-50 border border-emerald-900/15 rounded-xl shadow-2xs transition-colors"
              >
                <Globe className="w-4 h-4 text-[#0D9488]" />
                <span>Visitar sitio web oficial: odontologia.mxl.uabc.mx/odo3</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
