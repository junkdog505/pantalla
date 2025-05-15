import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import styles from './Styles/LayoutBasico.module.css';

/*************************************************
 * Componente Layout
 * Proporciona un contenedor base reutilizable
 * con botón de navegación opcional
 *************************************************/
function LayoutBasico({ 
  children, 
  buttonText = '', 
  onButtonClick,
  showButton = true,
  buttonIcon = <FiArrowLeft />,
  customButtonClass = ''
}) {
  const navigate = useNavigate();
  
  /*************************************************
   * Manejador de navegación predeterminado
   * Ejecuta función personalizada si existe,
   * sino navega a la página anterior
   *************************************************/
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      navigate(-1); // Ir a la página anterior
    }
  };

  return (
    <div className={styles.layoutContainer}>
      {/* Sección del botón de navegación */}
      {showButton && (
        <button 
          className={`${styles.actionButton} ${customButtonClass}`} 
          onClick={handleButtonClick}
        >
          {buttonIcon}
          {buttonText}
        </button>
      )}
      
      {/* Área de contenido principal */}
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}

export default LayoutBasico;