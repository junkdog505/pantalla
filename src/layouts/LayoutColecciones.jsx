import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonBack from '../components/ButtonBack/ButtonBack'; // Importamos el componente ButtonBack
import styles from './Styles/LayoutColecciones.module.css';

/*************************************************
 * Componente LayoutColecciones
 * Layout para la página de Colecciones
 * con logo central, botón de regreso y slider
 *************************************************/
function LayoutColecciones({
  children,
  idioma = 'es',
  logo = '/kuna_logo.png'
}) {
  const navigate = useNavigate();

  const volverAtras = () => {
    navigate('/categorias');
  };

  return (
    <div className={styles.contenedorLayout}>
      {/* Encabezado superior */}
      <header className={styles.cabecera}>
        <div className={styles.menuButtonContainer}>
          {/* Reemplazamos el botón anterior por el componente ButtonBack */}
          <ButtonBack 
            text={idioma === 'es' ? 'Menú' : 'Menu'}
            onClick={volverAtras}
            style="dark" // Puedes usar 'light' o 'dark' según el diseño
            icon="arrow"
            language={idioma}
            defaultText="menu"
          />
        </div>
        
        <div className={styles.contenedorLogo}>
          <img src={logo} alt="KUNA" className={styles.logo} />
        </div>
      </header>

      {/* Contenido principal */}
      <div className={styles.contenidoPrincipal}>
        {children}
      </div>
    </div>
  );
}

export default LayoutColecciones;