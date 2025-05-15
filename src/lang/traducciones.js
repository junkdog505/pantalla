// src/utils/traducciones.js

export const traducciones = {
    es: {
      // Página inicial
      logo: 'KUNA',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
      botonEspanol: 'Español',
      botonIngles: 'English',
      
      // Categorías
      categoriaKuna: 'KUNA',
      categoriaColecciones: 'Colecciones',
      categoriaPacomarca: 'PACOMARCA',
      categoriaCertificaciones: 'Certificaciones y Trazabilidad',
      volverBoton: 'Volver',
      
      // Página de selección de video
      tituloSeleccionVideo: 'Selecciona un video',
      video1Titulo: 'Video 1',
      video1Descripcion: 'Descripción del video 1',
      video2Titulo: 'Video 2',
      video2Descripcion: 'Descripción del video 2',
      
      // Reproductor de video
      siguienteBoton: 'Siguiente',
      pausarBoton: 'Pausar',
      reproducirBoton: 'Reproducir',
      
      // Mensajes generales
      cargando: 'Cargando...',
      error: 'Ha ocurrido un error',
      bienvenida: 'Bienvenido',
    },
    en: {
      // Initial page
      logo: 'KUNA',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      botonEspanol: 'Spanish',
      botonIngles: 'English',
      
      // Categories
      categoriaKuna: 'KUNA',
      categoriaColecciones: 'Collections',
      categoriaPacomarca: 'PACOMARCA',
      categoriaCertificaciones: 'Certifications and Traceability',
      volverBoton: 'Back',
      
      // Video selection page
      tituloSeleccionVideo: 'Select a video',
      video1Titulo: 'Video 1',
      video1Descripcion: 'Video 1 description',
      video2Titulo: 'Video 2',
      video2Descripcion: 'Video 2 description',
      
      // Video player
      siguienteBoton: 'Next',
      pausarBoton: 'Pause',
      reproducirBoton: 'Play',
      
      // General messages
      cargando: 'Loading...',
      error: 'An error has occurred',
      bienvenida: 'Welcome',
    }
  };
  
  // Función helper para usar traducciones más fácilmente
  export const useTranslation = (language) => {
    return traducciones[language] || traducciones.es; // Por defecto español si no existe el idioma
  };