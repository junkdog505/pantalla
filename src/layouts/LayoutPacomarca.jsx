import React from 'react';
import ButtonBack from '../components/ButtonBack/ButtonBack';
import styles from './Styles/LayoutPacomarca.module.css';

/*************************************************
 * Componente LayoutPacomarca
 * Layout flexible con cabecera centrada transparente
 * y contenido principal con fondo personalizable
 *************************************************/
function LayoutPacomarca({
  children,
  logo = null,
  description = null,
  backgroundImage = null,
  backgroundColor = '#ffffff',
  onBackClick,
  backButtonStyle = 'light',
  language
}) {
  // Determinar si mostrar logo y/o descripción
  const showLogo = logo !== null;
  const showDescription = description !== null;
  
  /*************************************************
   * Estilos dinámicos para el fondo
   * Permite personalizar imagen y color de fondo
   *************************************************/
  const backgroundStyle = {
    backgroundColor,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
  };

  return (
    <div className={styles.layoutContainer} style={backgroundStyle}>
      {/* Botón de retorno posicionado absolutamente */}
      <div className={styles.backButtonContainer}>
        <ButtonBack 
          style={backButtonStyle}
          onClick={onBackClick}
          language={language}
        />
      </div>
        
      {/* Header con logo y descripción opcionales */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          {showLogo && (
            <div className={styles.logoContainer}>
              <img src={logo} alt="Logo" className={styles.logo} />
            </div>
          )}
          
          {showDescription && (
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>{description}</p>
            </div>
          )}
        </div>
      </header>
      
      {/* Contenido principal (slot para children) */}
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}

export default LayoutPacomarca;