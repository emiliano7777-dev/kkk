export interface DentalService {
  id: string;
  name: string;
  subtitle: string;
  shortDescription: string;
  detailedDescription: string;
  treatments: string[];
  image: string;
  imageAlt: string;
  iconName: 'ShieldCheck' | 'Sparkles' | 'Activity' | 'Flame' | 'Scissors' | 'Layers' | 'Smile' | 'ScanLine' | 'AlignLeft';
}

export const DENTAL_SERVICES: DentalService[] = [
  {
    id: 'preventiva',
    name: 'Odontología preventiva',
    subtitle: 'Protección y salud bucal continua',
    shortDescription: 'Se enfoca en prevenir enfermedades bucales y mantener una buena salud oral.',
    detailedDescription: 'La odontología preventiva es la base para una boca sana en todas las etapas. Mediante revisiones periódicas, limpiezas profesionales y orientación personalizada, se previenen caries, problemas periodontales y se conservan los dientes naturales en óptimas condiciones.',
    treatments: [
      'Limpieza dental',
      'Revisiones odontológicas',
      'Prevención de caries',
      'Orientación sobre higiene bucal'
    ],
    image: '/src/assets/images/preventive_dental_clean_1794293909269.jpg',
    imageAlt: 'Limpieza dental profesional en clínica de odontología preventiva UABC',
    iconName: 'ShieldCheck'
  },
  {
    id: 'operatoria',
    name: 'Operatoria dental',
    subtitle: 'Restauración funcional y estética',
    shortDescription: 'Se encarga de tratar los dientes afectados por caries o daños en su estructura, buscando recuperar su función y apariencia.',
    detailedDescription: 'Trata los órganos dentales afectados por caries, fracturas o desgastes. Utilizando materiales restauradores modernos como resinas compuestas de alta resistencia y estética natural, devuelve la anatomía, función masticatoria y belleza de cada diente.',
    treatments: [
      'Eliminación de caries',
      'Restauraciones dentales',
      'Resinas',
      'Reconstrucción de dientes dañados'
    ],
    image: '/src/assets/images/restorative_operatoria_dental_1794293909401.jpg',
    imageAlt: 'Procedimiento de operatoria dental y restauración con resina estética',
    iconName: 'Sparkles'
  },
  {
    id: 'periodoncia',
    name: 'Periodoncia',
    subtitle: 'Cuidado especializado de encías y soporte',
    shortDescription: 'Se encarga de prevenir, diagnosticar y tratar enfermedades que afectan las encías y los tejidos que sostienen los dientes.',
    detailedDescription: 'La salud de las encías y del hueso de soporte es fundamental para la estabilidad dental. La periodoncia atiende desde inflamaciones iniciales como la gingivitis hasta problemas periodontales más avanzados mediante procedimientos de limpieza profunda y cuidados especializados.',
    treatments: [
      'Tratamiento de gingivitis',
      'Tratamiento periodontal',
      'Limpieza profunda',
      'Atención de enfermedades de las encías'
    ],
    image: '/src/assets/images/periodontal_gum_care_1794293910402.jpg',
    imageAlt: 'Evaluación y tratamiento periodontal de encías en clínica dental',
    iconName: 'Activity'
  },
  {
    id: 'endodoncia',
    name: 'Endodoncia',
    subtitle: 'Tratamiento del tejido pulpar interno',
    shortDescription: 'Es el área encargada de tratar problemas que afectan la pulpa dental (tejido interno del diente donde se encuentran los nervios y vasos sanguíneos).',
    detailedDescription: 'Cuando la caries profunda o un traumatismo alcanza la pulpa dental, la endodoncia permite preservar el diente natural en lugar de extraerlo. Consiste en limpiar, desinfectar y sellar el conducto radicular, eliminando el dolor y la infección.',
    treatments: [
      'Tratamiento de conductos',
      'Atención de infecciones pulpares',
      'Tratamiento de dientes con daño pulpar'
    ],
    image: '/src/assets/images/endodontics_root_canal_1794293912055.jpg',
    imageAlt: 'Equipo clínico especializado para tratamiento de conductos y endodoncia',
    iconName: 'Flame'
  },
  {
    id: 'cirugia',
    name: 'Cirugía bucal',
    subtitle: 'Procedimientos quirúrgicos orales',
    shortDescription: 'Comprende procedimientos quirúrgicos realizados en la cavidad oral para solucionar diferentes problemas dentales.',
    detailedDescription: 'Abarca intervenciones quirúrgicas especializadas en la boca, incluyendo la extracción de dientes no restaurables y la extracción de terceros molares (muelas del juicio) retenidos o con malposición, bajo estrictos protocolos de bioseguridad clínica.',
    treatments: [
      'Extracciones dentales',
      'Extracción de terceros molares',
      'Procedimientos quirúrgicos bucales'
    ],
    image: '/src/assets/images/oral_surgery_dental_1794293912152.jpg',
    imageAlt: 'Equipo de cirugía bucal en quirófano de la clínica odontológica',
    iconName: 'Scissors'
  },
  {
    id: 'protesis',
    name: 'Prótesis dental',
    subtitle: 'Rehabilitación y reemplazo dental',
    shortDescription: 'Busca recuperar la función y estética de la boca mediante la sustitución de dientes perdidos o estructuras dentales dañadas.',
    detailedDescription: 'Diseñada para devolver la función masticatoria, la correcta articulación y la estética de la sonrisa en pacientes que han perdido una o varias piezas dentales, utilizando prótesis fijas, coronas dentales, prótesis parciales removibles o totales.',
    treatments: [
      'Prótesis parciales',
      'Prótesis totales',
      'Coronas dentales',
      'Rehabilitación protésica'
    ],
    image: '/src/assets/images/dental_prosthetics_crowns_1794293913478.jpg',
    imageAlt: 'Modelo de prótesis dental y coronas para rehabilitación bucal',
    iconName: 'Layers'
  },
  {
    id: 'odontopediatria',
    name: 'Odontopediatría',
    subtitle: 'Atención dental infantil y juvenil',
    shortDescription: 'Se especializa en la atención de la salud bucal de bebés, niños y adolescentes.',
    detailedDescription: 'Con un enfoque cálido, paciente y adaptado a cada edad, la odontopediatría genera experiencias dentales positivas desde la infancia. Abarca revisiones preventivas, profilaxis, control de hábitos y tratamiento oportuno de caries en dientes temporales y permanentes jóvenes.',
    treatments: [
      'Revisiones dentales infantiles',
      'Prevención de caries',
      'Limpiezas',
      'Restauraciones infantiles',
      'Atención odontológica preventiva'
    ],
    image: '/src/assets/images/pediatric_dentistry_children_1794293914061.jpg',
    imageAlt: 'Odontopediatra atendiendo a una paciente infantil con calidez y simpatía',
    iconName: 'Smile'
  },
  {
    id: 'radiologia',
    name: 'Radiología dental',
    subtitle: 'Diagnóstico por imagen digital',
    shortDescription: 'Utiliza estudios radiográficos para observar estructuras dentales y óseas que no pueden examinarse completamente a simple vista.',
    detailedDescription: 'Área diagnóstica esencial para planificar tratamientos seguros y certeros. Permite visualizar raíces dentales, soporte óseo maxilar, piezas retenidas y lesiones incipientes mediante radiografías periapicales y panorámicas digitales con mínima dosis de exposición.',
    treatments: [
      'Radiografías periapicales',
      'Radiografías panorámicas, si están disponibles',
      'Estudios radiográficos para diagnóstico'
    ],
    image: '/src/assets/images/dental_radiology_panoramic_1794293914097.jpg',
    imageAlt: 'Equipo moderno de radiología panorámica dental digital en la facultad',
    iconName: 'ScanLine'
  },
  {
    id: 'ortodoncia',
    name: 'Ortodoncia',
    subtitle: 'Alineación y armonía de la oclusión',
    shortDescription: 'Se encarga de diagnosticar y tratar alteraciones en la posición de los dientes y las relaciones entre los maxilares.',
    detailedDescription: 'Corrige malposiciones dentales, mordidas cruzadas y desalineaciones de las arcadas dentarias mediante valoraciones clínicas y el empleo de aparatología ortodóntica fija o removible, mejorando tanto la masticación como la armonía facial del paciente.',
    treatments: [
      'Valoración ortodóntica',
      'Tratamiento con aparatología',
      'Corrección de malposiciones dentales'
    ],
    image: '/src/assets/images/orthodontics_braces_smile_1794293915287.jpg',
    imageAlt: 'Consulta de ortodoncia y corrección de posición dental con brackets',
    iconName: 'AlignLeft'
  }
];

export const INSTITUTION_INFO = {
  appName: 'Mueli UABC',
  faculty: 'Facultad de Odontología',
  university: 'Universidad Autónoma de Baja California',
  campus: 'Campus Mexicali',
  motto: 'Cuidamos sonrisas, construimos confianza',
  welcomeText: 'Bienvenido a Mueli UABC. Conoce los servicios odontológicos de la Facultad de Odontología de la Universidad Autónoma de Baja California, campus Mexicali. Encuentra información sobre tratamientos, ubicación y medios de contacto.',
  aboutText: `La Facultad de Odontología de la Universidad Autónoma de Baja California, campus Mexicali, forma parte de una institución comprometida con la educación superior y la formación de profesionales de la salud bucal.

A través de sus actividades académicas y clínicas, contribuye a la formación de estudiantes de odontología y a la atención de las necesidades de salud bucal de la población.`,
  familyTitle: 'Una sonrisa saludable en cada etapa de la vida',
  familyText: 'El cuidado de nuestra boca es importante para toda la familia. Desde los más pequeños hasta los adultos, mantener una buena higiene y acudir a revisiones odontológicas ayuda a conservar una sonrisa saludable.',
  address: 'Facultad de Odontología UABC, campus Mexicali. Zotoluca s/n, Calafia, C.P. 21040, Mexicali, Baja California, México.',
  phoneDisplay: '686 557 3268',
  phoneHref: 'tel:+526865573268',
  email: 'katherine.limon@uabc.edu.mx',
  emailHref: 'mailto:katherine.limon@uabc.edu.mx',
  facebookUrl: 'https://www.facebook.com/facultadde.odontologiamexicali/?locale=es_LA',
  hours: '8:00 a. m. a 4:00 p. m.',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Facultad+de+Odontolog%C3%ADa+UABC+Mexicali+Zotoluca',
  heroImage: '/src/assets/images/hero_mueli_clinic_1794293908339.jpg',
  familyImage: '/src/assets/images/family_oral_health_care_1794293915932.jpg',
  facultyImage: '/src/assets/images/faculty_academic_clinic_uabc_1794293915434.jpg',
  officialLogo: '/assets/aistudio/logoodonto_23e71318.jpg',
  officialWebsite: 'https://odontologia.mxl.uabc.mx/odo3/'
};

export interface ClinicLocation {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  address: string;
  description: string;
  mapShareUrl: string;
  embedQuery: string;
}

export const CLINIC_LOCATIONS: ClinicLocation[] = [
  {
    id: 'calafia',
    name: 'Clínica Calafia (Sede Principal)',
    shortName: 'Clínica Calafia',
    badge: 'Facultad de Odontología',
    address: 'Zotoluca s/n, Calafia, C.P. 21040, Mexicali, Baja California, México.',
    description: 'Sede principal de la Facultad de Odontología UABC en Mexicali. Alberga las clínicas centrales, aulas de docencia, estudios radiológicos y áreas de especialidad.',
    mapShareUrl: 'https://share.google/llOCbfNRJfN4kvi0d',
    embedQuery: 'Facultad+de+Odontolog%C3%ADa+UABC+Mexicali+Zotoluca+Calafia'
  },
  {
    id: 'naranjos',
    name: 'Clínica Naranjos',
    shortName: 'Clínica Naranjos',
    badge: 'Atención Comunitaria',
    address: 'Av. De los Naranjos, Fracc. Los Naranjos, Mexicali, Baja California, México.',
    description: 'Clínica odontológica universitaria periférica orientada al servicio y atención de salud oral preventiva y restauradora para los residentes de la zona.',
    mapShareUrl: 'https://share.google/gbBp22xnXEh3KqWps',
    embedQuery: 'Clinica+Odontologica+Naranjos+UABC+Mexicali'
  },
  {
    id: 'calle11',
    name: 'Clínica Calle 11',
    shortName: 'Clínica Calle 11',
    badge: 'Atención Clínica',
    address: 'Calle 11 (Av. Héroe de Nacozari / Colegio Militar), Mexicali, Baja California, México.',
    description: 'Centro de atención odontológica UABC con instalaciones para diagnóstico, profilaxis, operatoria dental y atención bucal a la población mexicalense.',
    mapShareUrl: 'https://share.google/526lsheI23PZ14Aoz',
    embedQuery: 'UABC+Facultad+de+Odontologia+Calle+11+Mexicali'
  }
];
