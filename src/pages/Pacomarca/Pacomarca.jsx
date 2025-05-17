import React from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutPacomarca from '../../layouts/LayoutPacomarca';
import styles from './Styles/Pacomarca.module.css';

function Pacomarca() {
  const navigate = useNavigate();
  const language = localStorage.getItem('idioma') || 'es';
  
  const handleBackClick = () => {
    navigate('/categorias');
  };

  const getDescription = () => {
    return language === 'es' 
      ? 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
      : 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.';
  };

  return (
    <LayoutPacomarca
      logo="/pacomarca_logo.png"
      description={getDescription()}
      backgroundImage="/pacomarca_img.png"
      onBackClick={handleBackClick}
      backButtonStyle="light"
      language={language}
    >
      <div className={styles.pacomarcaContainer}>
        <div className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>
            {language === 'es' ? 'SUSTENTABLE ALPACA NETWORK' : 'SUSTAINABLE ALPACA NETWORK'}
          </h2>
          <p className={styles.sectionText}>
            {language === 'es' 
              ? 'Pacomarca es nuestra red de alpaca sustentable, que representa nuestro compromiso con la calidad, el bienestar animal y las comunidades locales.'
              : 'Pacomarca is our sustainable alpaca network, representing our commitment to quality, animal welfare, and local communities.'}
          </p>
          {/* Aquí puedes añadir más contenido específico de Pacomarca */}
        </div>
      </div>
    </LayoutPacomarca>
  );
}

export default Pacomarca;