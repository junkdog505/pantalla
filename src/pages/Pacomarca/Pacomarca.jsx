import React from 'react';
import LayoutBasico from '../../layouts/LayoutBasico';
// import styles from './Styles/Pacomarca.module.css';

/*************************************************
 * Componente Pacomarca
 * Muestra información sobre la marca Pacomarca
 *************************************************/
function Pacomarca() {
  const language = localStorage.getItem('idioma') || 'es';

  return (
    <LayoutBasico 
      buttonText={language === 'es' ? 'Volver' : 'Back'}
    >
      <div className={styles.container}>
        <h1 className={styles.titulo}>PACOMARCA</h1>
        <div className={styles.content}>
          <p className={styles.descripcion}>
            {language === 'es' 
              ? 'Pacomarca es nuestra marca premium de productos de alpaca, reconocida internacionalmente por su calidad excepcional y diseño innovador.' 
              : 'Pacomarca is our premium alpaca brand, internationally recognized for its exceptional quality and innovative design.'}
          </p>
          {/* Aquí puedes agregar:
              - Historia de la marca
              - Productos destacados
              - Galería de imágenes
              - etc.
          */}
        </div>
      </div>
    </LayoutBasico>
  );
}

export default Pacomarca;