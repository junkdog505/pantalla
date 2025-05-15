import React, { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import ButtonBack from '../components/ButtonBack/ButtonBack';
import styles from './Styles/LayoutVideo.module.css';

/*************************************************
 * Componente LayoutVideo
 * Layout de pantalla completa para contenido de video
 * con botón de retorno configurable
 *************************************************/
function LayoutVideo({
  children,
  buttonText = '',
  onButtonClick,
  buttonStyle = 'default', // 'default' o 'minimal'
  buttonVariant = 'dark', // 'light' o 'dark' para ButtonBack
  language
}) {
  // Desactivar zoom en doble toque
  useEffect(() => {
    // Guardar el viewport original
    const originalViewport = document.querySelector('meta[name="viewport"]')?.getAttribute('content');
    
    // Agregar meta tag para prevenir zoom
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
      document.head.appendChild(meta);
    }
    
    // Desactivar eventos de zoom táctil en el contenedor
    const handleTouchStart = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault(); // Prevenir pellizco para zoom
      }
    };
    
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    
    // Restaurar al desmontar
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      
      // Restaurar viewport original
      if (originalViewport && viewport) {
        viewport.setAttribute('content', originalViewport);
      }
    };
  }, []);

  /*************************************************
   * Renderiza el botón según el estilo
   *************************************************/
  const renderButton = () => {
    // Estilo minimal: solo ícono de cerrar
    if (buttonStyle === 'minimal') {
      return (
        <button
          className={styles.buttonMinimal}
          onClick={onButtonClick || (() => window.history.back())}
        >
          <IoMdClose />
        </button>
      );
    }

    // Estilo default: usa ButtonBack
    return (
      <div className={styles.buttonWrapper}>
        <ButtonBack
          text={buttonText}
          onClick={onButtonClick}
          style={buttonVariant} // Usa el variant pasado como prop
          icon="arrow"
          language={language}
          defaultText="volver"
        />
      </div>
    );
  };

  return (
    <div 
      className={styles.layoutContainer}
      // Estilos adicionales para prevenir zoom
      style={{
        touchAction: 'pan-x pan-y'
      }}
    >
      {/* Botón de navegación */}
      {renderButton()}

      {/* Contenido principal del video */}
      <main className={styles.videoContent}>
        {children}
      </main>
    </div>
  );
}

export default LayoutVideo;