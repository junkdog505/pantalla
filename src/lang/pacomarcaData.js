// src/lang/pacomarcaData.js

/*************************************************
 * Datos de Pacomarca
 * Contiene la información para la página principal y sus subpáginas
 *************************************************/
export const pacomarcaData = {
    // Datos generales de la página principal
    pagina: {
      imagen: "/pacomarca_panorama.jpg",
      logo: "/pacomarca_logo.png",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
    },
    
    // Configuración de áreas (puntos) en el mapa
    puntos: [
      {
        id: 'cabana-pastor',
        forma: 'circulo',
        coordenadas: [245, 530, 15], // [x, y, radio]
        colorRelleno: "rgba(255, 255, 255, 0.3)",
        colorRellenoActivo: "rgba(255, 255, 255, 0.5)"
      },
      {
        id: 'al',
        forma: 'circulo',
        coordenadas: [465, 495, 15],
        colorRelleno: "rgba(255, 255, 255, 0.3)",
        colorRellenoActivo: "rgba(255, 255, 255, 0.5)"
      },
      {
        id: 'centro-investigacion',
        forma: 'circulo',
        coordenadas: [725, 530, 15],
        colorRelleno: "rgba(255, 255, 255, 0.3)",
        colorRellenoActivo: "rgba(255, 255, 255, 0.5)"
      }
    ],
    
    // Configuración de botones en el mapa
    botones: [
      {
        id: 'cabana-pastor',
        etiqueta: 'La cabaña del pastor',
        posicion: { top: '40%', left: '20%' },
        puntoConectado: 0 // Índice del punto al que está conectado
      },
      {
        id: 'al',
        etiqueta: 'AL',
        posicion: { top: '30%', left: '43%' },
        puntoConectado: 1
      },
      {
        id: 'centro-investigacion',
        etiqueta: 'Centro de investigación',
        posicion: { top: '40%', left: '75%' },
        puntoConectado: 2
      }
    ],
    
    // Información detallada de cada subpágina
    detalle: {
      'cabana-pastor': {
        titulo: 'La Cabaña del Pastor',
        descripcion: 'El hogar tradicional de los pastores de alpaca, construido con técnicas ancestrales para resistir el clima extremo de los Andes.',
        video: '/videos/cabana-pastor.mp4',
        galeria: [
          '/imagenes/cabana1.jpg',
          '/imagenes/cabana2.jpg',
          '/imagenes/cabana3.jpg'
        ],
        contenido: `
          <p>La cabaña del pastor es una estructura tradicional construida con piedras de la región y techo de paja. Estas construcciones han sido utilizadas por generaciones de pastores de alpacas en los Andes peruanos.</p>
          <p>Diseñadas para soportar temperaturas bajo cero, fuertes vientos y nevadas, estas cabañas son un ejemplo perfecto de arquitectura sostenible adaptada al entorno natural.</p>
        `
      },
      'al': {
        titulo: 'AL',
        descripcion: 'Área de alimentación y cuidado especial para las alpacas, donde se implementan técnicas sostenibles de pastoreo.',
        video: '/videos/al.mp4',
        galeria: [
          '/imagenes/al1.jpg',
          '/imagenes/al2.jpg',
          '/imagenes/al3.jpg'
        ],
        contenido: `
          <p>El área de alimentación es un espacio designado donde las alpacas reciben alimentación complementaria y cuidados especiales.</p>
          <p>Aquí se implementan técnicas de rotación de pastizales para mantener la sostenibilidad de los recursos naturales y asegurar una alimentación óptima para los animales.</p>
        `
      },
      'centro-investigacion': {
        titulo: 'Centro de Investigación',
        descripcion: 'Instalación dedicada a la investigación genética, veterinaria y mejora continua de prácticas sostenibles en la crianza de alpacas.',
        video: '/videos/centro-investigacion.mp4',
        galeria: [
          '/imagenes/centro1.jpg',
          '/imagenes/centro2.jpg',
          '/imagenes/centro3.jpg'
        ],
        contenido: `
          <p>El Centro de Investigación de Pacomarca se dedica al estudio y mejora genética de las alpacas, implementando prácticas veterinarias avanzadas y desarrollando técnicas sostenibles de crianza.</p>
          <p>Equipado con laboratorios modernos, el centro colabora con universidades e instituciones científicas para impulsar la innovación en toda la cadena de valor de la fibra de alpaca.</p>
        `
      }
    }
  };