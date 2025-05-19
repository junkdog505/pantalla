import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
 * Con navegación a video en ruta específica
 *************************************************/
function LayoutPacomarcaDetalle({
  titulo,
  descripcion,
  videoSrc,
  videoImagenDestacada,
  galeria = [],
  contenido = [],
  onBackClick,
  language = 'es'
}) {
  const navigate = useNavigate();
  const { slug } = useParams();
  
  // Referencias para controlar el swiper
  const swiperRef = useRef(null);
  const [swiper, setSwiper] = useState(null);
  
  // Configurar la instancia de swiper cuando está lista
  const handleSwiperInit = (swiperInstance) => {
    setSwiper(swiperInstance);
  };
  
  // Manejadores de navegación manual
  const handlePrevClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };
  
  const handleNextClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
  
  // Manejador para ir a la página de video
  const handlePlayClick = () => {
    // Navegar a la ruta de video específica
    navigate(`/pacomarca/${slug}/video`);
  };

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
      
      {/* Contenido principal */}
      <div className={styles.mainContent}>
        {/* Columna izquierda - Título y contenido */}
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
        
        {/* Columna derecha - dividida en dos partes */}
        <div className={styles.rightColumn}>
          {/* Área de video con imagen destacada */}
          <div className={styles.videoContainer}>
            {(videoSrc || videoImagenDestacada) && (
              <div 
                className={styles.videoWrapper}
                onClick={handlePlayClick} // Usar nuestro nuevo manejador
              >
                {/* Mostrar la imagen destacada como fondo */}
                {videoImagenDestacada && (
                  <img 
                    src={videoImagenDestacada} 
                    alt={titulo} 
                    className={styles.videoThumbnail}
                  />
                )}
                
                <div className={styles.playButtonWrapper}>
                  <div className={styles.playButton}>
                    <FiPlay size={30} />
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Galería con estructura usando clases CSS */}
          {galeria && galeria.length > 0 && (
            <div className={styles.galeriaContainer}>
              {/* Slider básico sin navegación integrada */}
              <Swiper
                onSwiper={handleSwiperInit}
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={15}
                loop={true}
                className={styles.swiper}
              >
                {galeria.map((imagen, index) => (
                  <SwiperSlide key={index} className={styles.slideSwiper}>
                    <div className={styles.tarjetaImagen}>
                      <img 
                        src={imagen} 
                        alt={`${titulo} ${index + 1}`}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* BOTONES DE NAVEGACIÓN usando clases CSS */}
              <div className={styles.botonesNavegacion}>
                <button 
                  onClick={handlePrevClick}
                  className={styles.botonNav}
                >
                  <FiChevronLeft size={22} />
                </button>
                
                <button 
                  onClick={handleNextClick}
                  className={styles.botonNav}
                >
                  <FiChevronRight size={22} />
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