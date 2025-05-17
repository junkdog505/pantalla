import React from 'react';
import { useNavigate } from 'react-router-dom';
import { coleccionesData } from '../../lang/coleccionesData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './Styles/Slider.module.css';
// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';

/************************************************
 * Componente Slider
 * Muestra carrusel con 5 colecciones en pantalla
 * que permite navegación infinita
 ************************************************/
function Slider({ idioma = 'es' }) {
  const navegar = useNavigate();
 
  /************************************************
   * Maneja el clic en el botón "Ver video"
   * Navega a la ruta del video correspondiente
   ************************************************/
  const manejarVerVideo = (coleccion) => {
    if (coleccion.video) {
      navegar(coleccion.video);
    }
  };
 
  return (
    <div className={styles.contenedorSlider}>
      <div className={styles.contenedorSwiper}>
        <Swiper
          modules={[Navigation]}
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          navigation={{
            nextEl: '.boton-siguiente',
            prevEl: '.boton-anterior',
          }}
          className={styles.swiper}
        >
          {coleccionesData.map((coleccion) => (
            <SwiperSlide key={coleccion.id} className={styles.slideSwiper}>
              <div
                className={styles.tarjetaColeccion}
                style={{ backgroundImage: `url(${coleccion.imagen})` }}
              >
                <div className={styles.infoColeccion}>
                  <h3 className={styles.tituloColeccion}>{coleccion.titulo[idioma]}</h3>
                  <button
                    className={styles.botonVerVideo}
                    onClick={() => manejarVerVideo(coleccion)}
                  >
                    {idioma === 'es' ? 'Ver video' : 'Watch video'}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/************************************************
       * Botones de navegación personalizados
       * Ubicados en el centro inferior del slider
       ************************************************/}
      <div className={styles.botonesNavegacion}>
        <button className={`${styles.botonNav} ${styles.botonAnterior} boton-anterior`}>
          <FiChevronLeft />
        </button>
        <button className={`${styles.botonNav} ${styles.botonSiguiente} boton-siguiente`}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Slider;