import React from 'react';
import LayoutBasico from '../../layouts/LayoutBasico';
import styles from './Styles/Colecciones.module.css';

/*************************************************
 * Componente Colecciones
 * Muestra información sobre las colecciones
 *************************************************/
function Colecciones() {
  const language = localStorage.getItem('idioma') || 'es';

  return (
    <LayoutBasico 
      buttonText={language === 'es' ? 'Volver' : 'Back'}
    >
      <div className={styles.container}>
        <h1 className={styles.titulo}>
          {language === 'es' ? 'Colecciones' : 'Collections'}
        </h1>
        <div className={styles.content}>
          {/* Aquí puedes agregar el contenido específico de Colecciones */}
          <p className={styles.descripcion}>
            {language === 'es' 
              ? 'Nuestras colecciones exclusivas de alpaca...' 
              : 'Our exclusive alpaca collections...'}
          </p>
          {/* Puedes agregar imágenes, galería, información, etc. */}
        </div>
      </div>
    </LayoutBasico>
  );
}

export default Colecciones;