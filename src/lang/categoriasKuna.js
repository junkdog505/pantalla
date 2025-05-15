export const categoriasKuna = [
  {
    id: 1,
    imagenFondo: '/kuna_cat.png',
    logo: '/kuna_logo.png',
    titulo: {
      es: 'KUNA',
      en: 'KUNA'
    },
    // Ruta de la página específica
    ruta: '/kuna',
    // Configuración de video (solo este tiene video)
    video_ruta: '/public/videos/kuna.mp4'
  },
  {
    id: 2,
    imagenFondo: '/colecciones_cat.png',
    logo: null,
    titulo: {
      es: 'Colecciones',
      en: 'Collections'
    },
    ruta: '/colecciones',
    video_ruta: null  // No tiene video
  },
  {
    id: 3,
    imagenFondo: '/pacomarca_cat.png',
    logo: '/pacomarca_logo.png',
    titulo: {
      es: 'PACOMARCA',
      en: 'PACOMARCA'
    },
    ruta: '/pacomarca',
    video_ruta: null  // No tiene video
  },
  {
    id: 4,
    imagenFondo: '/certificaciones_cat.png',
    logo: null,
    titulo: {
      es: 'Certificaciones y Trazabilidad',
      en: 'Certifications and Traceability'
    },
    ruta: '/certificaciones',
    video_ruta: null  // No tiene video
  }
];