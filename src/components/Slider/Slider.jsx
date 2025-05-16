import React from 'react';
import { useNavigate } from 'react-router-dom';
import { coleccionesData } from '../../lang/coleccionesData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import styles from './Styles/Slider.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

/*************************************************
 * Componente Slider
 * Muestra exactamente 5 colecciones fijas en un formato horizontal
 * con la del centro más grande usando Swiper
 *************************************************/
function Slider({ idioma = 'es' }) {
  const navigate = useNavigate();

  // Manejar clic en ver video
  const handleVerVideo = (coleccion) => {
    if (coleccion.video) {
      navigate(coleccion.video);
    }
  };

  return (
    <div className="slider-container" style={{ padding: '20px 0' }}>
      <Swiper
        modules={[EffectCoverflow]}
        slidesPerView={5}
        spaceBetween={10}
        centeredSlides={true}
        loop={false}
      >
        {coleccionesData.map((coleccion) => (
          <SwiperSlide key={coleccion.id}>
            <div className={styles.coleccionCard}>
              <div className={styles.coleccionImageContainer}>
                <img
                  src={coleccion.imagen}
                  alt={coleccion.titulo[idioma]}
                  className={styles.coleccionImage}
                />
              </div>
              <div className={styles.coleccionInfo}>
                <h3 className={styles.coleccionTitle}>{coleccion.titulo[idioma]}</h3>
                <button
                  className={styles.verVideoBtn}
                  onClick={() => handleVerVideo(coleccion)}
                >
                  Ver video
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;