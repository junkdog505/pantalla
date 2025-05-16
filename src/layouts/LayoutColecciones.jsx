import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
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
        <button 
          className={styles.menuButton}
          onClick={volverAtras}
        >
          <FiArrowLeft /> Menú
        </button>
        
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
