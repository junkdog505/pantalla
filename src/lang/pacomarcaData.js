export const pacomarcaData = {
    // Datos generales de la página principal
    pagina: {
      imagen: "/pacomarca_img.png",
      logo: "/pacomarca_logo.png",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
    },
    
    // Lista de locaciones/puntos de interés
    paginas: [
      {
        id: 1,
        titulo: "La Cabaña del Pastor",
        slug: "cabana-pastor",
        boton: {
          etiqueta: "La cabaña del pastor",
          coordenadas: [210, 820, 15], // [x, y, radio]
          posicion: { top: '60%', left: '20%' }
        },
        datos: {
          descripcion: "El hogar tradicional de los pastores de alpaca, construido con técnicas ancestrales para resistir el clima extremo de los Andes.",
          video: "/videos/kuna.mp4",
          video_imagen_destacada: "/pacomarca_img.png",
          galeria: [
            '/home_relax_slider.png',
            '/expressions_slider.png',
            '/milenium_slider.png'
          ],
          contenido: [
            "La cabaña del pastor es una estructura tradicional construida con piedras de la región y techo de paja. Estas construcciones han sido utilizadas por generaciones de pastores de alpacas en los Andes peruanos.",
            "Diseñadas para soportar temperaturas bajo cero, fuertes vientos y nevadas, estas cabañas son un ejemplo perfecto de arquitectura sostenible adaptada al entorno natural."
          ]
        }
      },
      {
        id: 2,
        titulo: "AL",
        slug: "al",
        boton: {
          etiqueta: "AL",
          coordenadas: [400, 770, 15],
          posicion: { top: '60%', left: '43%' }
        },
        datos: {
          descripcion: "Área de alimentación y cuidado especial para las alpacas, donde se implementan técnicas sostenibles de pastoreo.",
          video: "/videos/al.mp4",
          galeria: [
            "/imagenes/al1.jpg",
            "/imagenes/al2.jpg",
            "/imagenes/al3.jpg"
          ],
          contenido: [
            "El área de alimentación es un espacio designado donde las alpacas reciben alimentación complementaria y cuidados especiales.",
            "Aquí se implementan técnicas de rotación de pastizales para mantener la sostenibilidad de los recursos naturales y asegurar una alimentación óptima para los animales."
          ]
        }
      },
      {
        id: 3,
        titulo: "Centro de Investigación",
        slug: "centro-investigacion",
        boton: {
          etiqueta: "Centro de investigación",
          coordenadas: [480, 800, 15],
          posicion: { top: '70%', left: '65%' }
        },
        datos: {
          descripcion: "Instalación dedicada a la investigación genética, veterinaria y mejora continua de prácticas sostenibles en la crianza de alpacas.",
          video: "/videos/centro-investigacion.mp4",
          galeria: [
            "/imagenes/centro1.jpg",
            "/imagenes/centro2.jpg",
            "/imagenes/centro3.jpg"
          ],
          contenido: [
            "El Centro de Investigación de Pacomarca se dedica al estudio y mejora genética de las alpacas, implementando prácticas veterinarias avanzadas y desarrollando técnicas sostenibles de crianza.",
            "Equipado con laboratorios modernos, el centro colabora con universidades e instituciones científicas para impulsar la innovación en toda la cadena de valor de la fibra de alpaca."
          ]
        }
      }
    ]
  };