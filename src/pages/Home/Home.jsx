import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Styles/Home.module.css';
import { useTranslation } from '../../lang/traducciones';

/*************************************************
 * Componente Home
 * Página de inicio con selector de idioma
 * Permite al usuario elegir el idioma preferido
 * antes de navegar en la web
 *************************************************/
function Home() {
  const [idiomaSeleccionado, setIdiomaSeleccionado] = useState('es');
  const navigate = useNavigate();
  
  // Obtener las traducciones para el idioma actual de los botones del Home
  const t = useTranslation(idiomaSeleccionado);

  /*************************************************
   * Manejador de selección de idioma
   * Guarda el idioma en localStorage y navega
   * a la página de categorías
   *************************************************/
  const manejarSeleccionIdioma = (idioma) => {
    setIdiomaSeleccionado(idioma);
    // Guardar el idioma en localStorage para usarlo en otras páginas
    localStorage.setItem('idioma', idioma);
    // Navegar a la página de categorías
    navigate('/categorias');
  };

  return (
    <section className={styles.mainContainer}>
      <div className={styles.overlay}>
        <div className={styles.contentBox}>
          {/* Contenido principal */}
          <div className={styles.contentWrapper}>
            <div className={styles.logo}>
              <img src="/kuna_logo.png" alt={t.logo} />
            </div>
            <p className={styles.descripcion}>
              {t.descripcion}
            </p>
          </div>
          
          {/* Botones de selección de idioma */}
          <div className={styles.botonesIdioma}>
            <button onClick={() => manejarSeleccionIdioma('es')}>{t.botonEspanol}</button>
            <button onClick={() => manejarSeleccionIdioma('en')}>{t.botonIngles}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;