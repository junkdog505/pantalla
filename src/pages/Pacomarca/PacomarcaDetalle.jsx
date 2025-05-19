import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LayoutPacomarcaDetalle from '../../layouts/LayoutPacomarcaDetalle';
import { pacomarcaData } from '../../lang/pacomarcaData';
import styles from './Styles/PacomarcaDetalle.module.css';

/*************************************************
 * Componente PacomarcaDetalle
 * Muestra el detalle de un punto específico de Pacomarca
 * usando el slug de la URL para identificarlo
 *************************************************/
function PacomarcaDetalle() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const language = localStorage.getItem('idioma') || 'es';
  
  // Estado para guardar el punto encontrado
  const [punto, setPunto] = useState(null);
  
  // Buscar el punto correspondiente al slug en los datos
  useEffect(() => {
    // Buscar el punto de interés que coincida con el slug
    const puntoEncontrado = pacomarcaData.paginas.find(
      p => p.slug === slug
    );
    
    // Si se encuentra, actualizar el estado
    if (puntoEncontrado) {
      setPunto(puntoEncontrado);
    } else {
      // Si no se encuentra, volver a la página principal de Pacomarca
      navigate('/pacomarca');
    }
  }, [slug, navigate]);

  // Manejar el botón de volver
  const handleBackClick = () => {
    navigate('/pacomarca');
  };

  // Manejar clic en reproducir video
  const handlePlayVideo = () => {
    if (punto && punto.datos.video) {
      navigate(`/videos${punto.datos.video}`);
    }
  };

  // Si aún no se ha cargado el punto, mostrar un loader
  if (!punto) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loader}></div>
        <p>{language === 'es' ? 'Cargando...' : 'Loading...'}</p>
      </div>
    );
  }

  // Render del detalle del punto usando el layout actualizado
  return (
    <LayoutPacomarcaDetalle
      titulo={punto.titulo}
      descripcion={punto.datos.descripcion}
      videoSrc={punto.datos.video}
      galeria={punto.datos.galeria}
      contenido={punto.datos.contenido}
      onBackClick={handleBackClick}
      onPlayClick={handlePlayVideo}
      language={language}
    />
  );
}

export default PacomarcaDetalle;