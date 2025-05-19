import React from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutPacomarca from '../../layouts/LayoutPacomarca';
import BotonesUbicables from '../../components/BotonesUbicables/BotonesUbicables';
import { pacomarcaData } from '../../lang/pacomarcaData';
import styles from './Styles/Pacomarca.module.css';

function Pacomarca() {
  const navigate = useNavigate();
  const language = localStorage.getItem('idioma') || 'es';
  
  // Datos para el componente BotonesUbicables
  const { pagina, paginas } = pacomarcaData;
  
  const handleBackClick = () => {
    navigate('/categorias');
  };
  
  // Manejar clic en punto o botón
  const handlePuntoClick = (punto) => {
    // Navegar a la página de detalles usando el slug del punto
    navigate(`/pacomarca/${punto.slug}`);
  };

  return (
    <LayoutPacomarca
      logo={pagina.logo}
      description={pagina.descripcion}
      backgroundColor="transparent"
      backgroundImage={pagina.imagen} // Usar la imagen como fondo
      onBackClick={handleBackClick}
      backButtonStyle="light"
      language={language}
    >
      <div className={styles.pacomarcaContainer}>
        <BotonesUbicables 
          imagen={pagina.imagen}
          puntos={paginas}
          onPuntoClick={handlePuntoClick}
        />
      </div>
    </LayoutPacomarca>
  );
}

export default Pacomarca;