import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiMenu, FiX } from 'react-icons/fi';
import styles from './Styles/ButtonBack.module.css';

/*************************************************
 * Componente ButtonBack
 * Botón de navegación reutilizable con múltiples
 * estilos y opciones de texto/icono
 *************************************************/
function ButtonBack({ 
  text,           // Texto personalizado del botón
  onClick,        // Función personalizada al hacer clic
  style = 'light', // 'light' o 'dark'
  icon = 'arrow', // 'arrow', 'menu', 'close'
  language,       // Idioma (si no se proporciona, usa localStorage)
  defaultText = 'volver' // 'volver' o 'menu'
}) {
  const navigate = useNavigate();
  const currentLanguage = language || localStorage.getItem('idioma') || 'es';

  /*************************************************
   * Obtiene el texto del botón según el idioma
   *************************************************/
  const getButtonText = () => {
    if (text) return text;
    
    const texts = {
      volver: {
        es: 'Volver',
        en: 'Back'
      },
      menu: {
        es: 'Menú',
        en: 'Menu'
      }
    };

    return texts[defaultText][currentLanguage];
  };

  /*************************************************
   * Obtiene el ícono según el tipo especificado
   *************************************************/
  const getIcon = () => {
    const icons = {
      arrow: <FiArrowLeft />,
      menu: <FiMenu />,
      close: <FiX />
    };
    return icons[icon] || icons.arrow;
  };

  /*************************************************
   * Manejador de clic por defecto
   *************************************************/
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1); // Navegar hacia atrás por defecto
    }
  };

  /*************************************************
   * Determina las clases de estilo
   *************************************************/
  const buttonClass = style === 'dark' 
    ? styles.buttonDark 
    : styles.buttonLight;

  return (
    <button 
      className={`${styles.buttonBase} ${buttonClass}`}
      onClick={handleClick}
    >
      <span className={styles.iconCircle}>
        {getIcon()}
      </span>
      <span className={styles.text}>
        {getButtonText()}
      </span>
    </button>
  );
}

export default ButtonBack;