import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Facebook,
  Clock,
  MapPin,
  ExternalLink,
  MessageSquare,
  Send,
  Check,
  Building,
  Globe
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/servicesData';

interface ContactSectionProps {
  onNavigateToLocation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigateToLocation }) => {
  const [patientName, setPatientName] = useState('');
  const [inquiryTopic, setInquiryTopic] = useState('Información general sobre servicios odontológicos');
  const [customNotes, setCustomNotes] = useState('');

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`${inquiryTopic} - Paciente: ${patientName || 'Interesado'}`);
    const body = encodeURIComponent(
      `Hola Katherine Limón y equipo de la Facultad de Odontología UABC,\n\n` +
      `Mi nombre es ${patientName || '[Nombre del paciente]'}.\n` +
      `Me comunico a través de la aplicación Mueli UABC para solicitar información respecto a:\n` +
      `- Motivo de consulta: ${inquiryTopic}\n` +
      (customNotes ? `- Detalles adicionales: ${customNotes}\n\n` : `\n`) +
      `Agradezco su atención y quedo al pendiente de las indicaciones para acudir a la facultad.\n\n` +
      `Saludos cordiales.`
    );
    return `mailto:${INSTITUTION_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="py-16 sm:py-20 bg-[#EAF6EE] border-t border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0D9488] mb-2">
            <Phone className="w-4 h-4" />
            <span>Atención Al Paciente</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1B4332]">
            Estamos para atenderte
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-xl mx-auto">
            Comunícate directamente con la Facultad de Odontología a través de nuestros canales oficiales de contacto.
          </p>
        </div>

        {/* 4 Contact Data Cards with Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {/* Card 1: Teléfono */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs hover:border-[#14B8A6] transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#5F8D78]/15 text-[#1B4332] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#0D9488]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                Teléfono Directo
              </span>
              <h3 className="font-display text-lg font-bold text-[#1B4332] mt-1 font-mono">
                {INSTITUTION_INFO.phoneDisplay}
              </h3>
              <p className="text-xs text-stone-500 mt-2">
                Atención telefónica durante horario de recepción.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-stone-100">
              <a
                href={INSTITUTION_INFO.phoneHref}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-white bg-[#0D9488] hover:bg-[#0F766E] rounded-xl transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Llamar por teléfono</span>
              </a>
            </div>
          </div>

          {/* Card 2: Correo Electrónico */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs hover:border-[#14B8A6] transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0D9488]/15 text-[#0D9488] flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                Correo Electrónico
              </span>
              <h3 className="font-display text-xs sm:text-sm font-bold text-[#1B4332] mt-1 break-all">
                {INSTITUTION_INFO.email}
              </h3>
              <p className="text-xs text-stone-500 mt-2">
                Contacto institucional para orientación y dudas.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-stone-100">
              <a
                href={INSTITUTION_INFO.emailHref}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-[#1B4332] bg-white border border-stone-300 hover:border-[#0D9488] hover:bg-stone-50 rounded-xl transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>Enviar correo electrónico</span>
              </a>
            </div>
          </div>

          {/* Card 3: Facebook Oficial */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs hover:border-[#14B8A6] transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Facebook className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                Red Social
              </span>
              <h3 className="font-display text-base font-bold text-[#1B4332] mt-1">
                Página de Facebook
              </h3>
              <p className="text-xs text-stone-500 mt-2">
                Facultad de Odontología UABC Mexicali oficial.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-stone-100">
              <a
                href={INSTITUTION_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-[#1B4332] bg-white border border-stone-300 hover:border-[#0D9488] hover:bg-stone-50 rounded-xl transition-colors cursor-pointer"
              >
                <Facebook className="w-3.5 h-3.5 text-blue-600" />
                <span>Visitar Facebook</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            </div>
          </div>

          {/* Card 4: Horario Oficial Proporcionado */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs hover:border-[#14B8A6] transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                Horario Proporcionado
              </span>
              <h3 className="font-display text-base font-bold text-[#1B4332] mt-1">
                {INSTITUTION_INFO.hours}
              </h3>
              <p className="text-xs text-stone-500 mt-2">
                Recepción y atención clínica en la facultad.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-stone-100">
              <button
                onClick={onNavigateToLocation}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-[#1B4332] bg-white border border-stone-300 hover:border-[#0D9488] hover:bg-stone-50 rounded-xl transition-colors cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>Consultar ubicación</span>
              </button>
            </div>
          </div>
        </div>

        {/* Functional Action Buttons Bar */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-900/15 shadow-xs mb-10">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-4 text-center sm:text-left">
            Canales y enlaces directos de atención
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {/* 1. Llamar por teléfono */}
            <a
              href={INSTITUTION_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-3.5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#0D9488] hover:bg-[#0F766E] rounded-xl transition-colors shadow-2xs whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>Llamar teléfono</span>
            </a>

            {/* 2. Enviar correo electrónico */}
            <a
              href={INSTITUTION_INFO.emailHref}
              className="inline-flex items-center justify-center gap-2 px-3.5 py-3 text-xs sm:text-sm font-semibold text-[#1B4332] bg-[#F4FAF6] hover:bg-stone-100 border border-emerald-900/10 rounded-xl transition-colors whitespace-nowrap"
            >
              <Mail className="w-4 h-4 text-[#0D9488]" />
              <span>Enviar correo</span>
            </a>

            {/* 3. Visitar Facebook */}
            <a
              href={INSTITUTION_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3.5 py-3 text-xs sm:text-sm font-semibold text-[#1B4332] bg-[#F4FAF6] hover:bg-stone-100 border border-emerald-900/10 rounded-xl transition-colors whitespace-nowrap"
            >
              <Facebook className="w-4 h-4 text-blue-600" />
              <span>Página Facebook</span>
            </a>

            {/* 4. Consultar las 3 clínicas */}
            <button
              onClick={onNavigateToLocation}
              className="inline-flex items-center justify-center gap-2 px-3.5 py-3 text-xs sm:text-sm font-semibold text-[#1B4332] bg-[#F4FAF6] hover:bg-stone-100 border border-emerald-900/10 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#0D9488]" />
              <span>Ver 3 Clínicas</span>
            </button>

            {/* 5. Página Web Oficial */}
            <a
              href={INSTITUTION_INFO.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3.5 py-3 text-xs sm:text-sm font-semibold text-[#1B4332] bg-[#E8F5ED] hover:bg-emerald-100/70 border border-emerald-900/20 rounded-xl transition-colors whitespace-nowrap"
            >
              <Globe className="w-4 h-4 text-[#0D9488]" />
              <span>Pág. Oficial UABC</span>
              <ExternalLink className="w-3 h-3 text-stone-400" />
            </a>
          </div>
        </div>

        {/* Interactive Email Drafter Tool */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0D9488] uppercase tracking-wider mb-2">
              <MessageSquare className="w-4 h-4" />
              <span>Asistente de consulta rápida por correo</span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#1B4332] mb-1">
              ¿Deseas enviar una consulta a la facultad?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6">
              Completa estos campos para redactar un correo automático dirigido a{' '}
              <span className="font-semibold text-stone-800">{INSTITUTION_INFO.email}</span>.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Tu nombre completo
                </label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Ej. María González"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#FAF8F5] border border-stone-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0D9488]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Servicio de interés
                </label>
                <select
                  value={inquiryTopic}
                  onChange={(e) => setInquiryTopic(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#FAF8F5] border border-stone-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0D9488]"
                >
                  <option value="Información general sobre servicios odontológicos">Información general sobre servicios odontológicos</option>
                  <option value="Odontología preventiva (Limpieza y revisiones)">Odontología preventiva (Limpieza y revisiones)</option>
                  <option value="Operatoria dental (Caries y resinas)">Operatoria dental (Caries y resinas)</option>
                  <option value="Periodoncia (Encías y limpieza profunda)">Periodoncia (Encías y limpieza profunda)</option>
                  <option value="Endodoncia (Tratamiento de conductos)">Endodoncia (Tratamiento de conductos)</option>
                  <option value="Cirugía bucal (Extracción dental / muelas del juicio)">Cirugía bucal (Extracción dental / muelas del juicio)</option>
                  <option value="Prótesis dental (Coronas y prótesis)">Prótesis dental (Coronas y prótesis)</option>
                  <option value="Odontopediatría (Atención infantil)">Odontopediatría (Atención infantil)</option>
                  <option value="Radiología dental (Estudios radiográficos)">Radiología dental (Estudios radiográficos)</option>
                  <option value="Ortodoncia (Valoración y brackets)">Ortodoncia (Valoración y brackets)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Mensaje o pregunta opcional
                </label>
                <textarea
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  rows={3}
                  placeholder="Escribe si tienes alguna duda específica..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#FAF8F5] border border-stone-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0D9488]"
                />
              </div>

              <div className="pt-2">
                <a
                  href={generateMailtoUrl()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0D9488] hover:bg-[#0F766E] rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Redactar y abrir en mi correo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
