import React from 'react';
import LayoutColecciones from '../../layouts/LayoutColecciones';
import Slider from '../../components/Slider/Slider';
import styles from './Styles/Colecciones.module.css';

/*************************************************
 * Componente Colecciones
 * Muestra información sobre las colecciones
 * usando el layout específico para colecciones
 *************************************************/
function Colecciones() {
  const idioma = localStorage.getItem('idioma') || 'es';
  
  return (
    <div className={styles.coleccionesPage}>
      <LayoutColecciones 
        idioma={idioma}
        logo="/kuna_logo_dark.png"
      >
        <div className={styles.coleccionesContent}>
          <h2 className={styles.coleccionesTitle}>Descubre nuestras colecciones</h2>
          <Slider idioma={idioma} />
        </div>
      </LayoutColecciones>
    </div>
  );
}

export default Colecciones;
