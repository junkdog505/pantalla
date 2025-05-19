import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight, FiPlay } from 'react-icons/fi';
import ButtonBack from '../components/ButtonBack/ButtonBack';
import styles from './Styles/LayoutPacomarcaDetalle.module.css';
// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';

/*************************************************
 * Componente LayoutPacomarcaDetalle
 * Layout para mostrar detalles de un punto de interés
 * siguiendo exactamente el diseño mostrado en la imagen de referencia
 *************************************************/
function LayoutPacomarcaDetalle({
  titulo,
  descripcion,
  videoSrc,
  galeria = [],
  contenido = [],
  onBackClick,
  onPlayClick,
  language = 'es'
}) {
  return (
    <div className={styles.layoutContainer}>
      {/* Header con logo y botón volver */}
      <header className={styles.header}>
        <div className={styles.backButtonWrapper}>
          <ButtonBack 
            text={language === 'es' ? 'Volver' : 'Back'}
            onClick={onBackClick}
            style="light"
            language={language}
          />
        </div>
        
        <div className={styles.logoContainer}>
          <img 
            src="/pacomarca_logo_dark.png" 
            alt="PACOMARCA" 
            className={styles.logo}
          />
        </div>
      </header>
      
      {/* Contenido principal dividido exactamente como en la imagen */}
      <div className={styles.mainContent}>
        {/* Columna izquierda - Título y contenido (cuadro rojo) */}
        <div className={styles.leftColumn}>
          <h1 className={styles.titulo}>{titulo}</h1>
          
          <div className={styles.contenidoWrapper}>
            {contenido && contenido.length > 0 && (
              <div className={styles.contenido}>
                {contenido.map((parrafo, index) => (
                  <p key={index} className={styles.parrafo}>{parrafo}</p>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Columna derecha - dividida en dos partes (cuadro amarillo y azul) */}
        <div className={styles.rightColumn}>
          {/* Área de video (cuadro amarillo) */}
          <div className={styles.videoContainer}>
            {videoSrc && (
              <div 
                className={styles.videoWrapper}
                onClick={onPlayClick}
              >
                <div className={styles.playButtonWrapper}>
                  <div className={styles.playButton}>
                    <FiPlay size={40} />
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Galería de imágenes (cuadro azul) */}
          {galeria && galeria.length > 0 && (
            <div className={styles.galeriaContainer}>
              <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                navigation={{
                  nextEl: '.boton-siguiente',
                  prevEl: '.boton-anterior',
                }}
                className={styles.swiper}
              >
                {galeria.map((imagen, index) => (
                  <SwiperSlide key={index} className={styles.slideSwiper}>
                    <div className={styles.tarjetaImagen}>
                      <img src={imagen} alt={`${titulo} ${index + 1}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Botones de navegación */}
              <div className={styles.botonesNavegacion}>
                <button className={`${styles.botonNav} ${styles.botonAnterior} boton-anterior`}>
                  <FiChevronLeft />
                </button>
                <button className={`${styles.botonNav} ${styles.botonSiguiente} boton-siguiente`}>
                  <FiChevronRight />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LayoutPacomarcaDetalle;