import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlay } from 'react-icons/fi'; // Importamos el icono de play
import CertificacionesLayout from '../../layouts/CertificacionesLayout';
import { datosCertificaciones } from '../../lang/certificacionesData';
import styles from './Styles/Certificaciones.module.css';

/*************************************************
 * Componente Certificaciones
 * Muestra información sobre las certificaciones y
 * estándares de calidad de KUNA
 *************************************************/
function Certificaciones() {
  const navigate = useNavigate();
  const idioma = localStorage.getItem('idioma') || 'es';
  const [itemActivo, setItemActivo] = useState(1);

  // Elementos de la barra lateral
  const elementosLateral = datosCertificaciones.map(item => ({
    id: item.id,
    titulo: item.titulo,
    onClick: (id) => {
      setItemActivo(id);
    }
  }));

  // Obtener datos del elemento activo
  const datosItemActivo = datosCertificaciones.find(item => item.id === itemActivo);

  // Manejar clic en la imagen principal para ir a ver el video
  const handleImageClick = () => {
    if (datosItemActivo && datosItemActivo.video) {
      const videoSlug = datosItemActivo.titulo[idioma].toLowerCase().replace(/\s+/g, '-');
      navigate(`/certificaciones/video/${videoSlug}`);
    }
  };

  // Renderizar la imagen destacada con botón de play centrado
  const renderizarImagen = () => {
    if (!datosItemActivo || !datosItemActivo.imgDestacadaVideo) return null;

    return (
      <div className={styles.imgDestacadaContainer} onClick={handleImageClick}>
        <img 
          src={datosItemActivo.imgDestacadaVideo.ruta} 
          alt={datosItemActivo.titulo[idioma]} 
          className={styles.imgDestacada}
        />
        {/* Botón de play central */}
        <div className={styles.playButtonWrapper}>
          <div className={styles.playButton}>
            <FiPlay size={32} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <CertificacionesLayout
      elementosLateral={elementosLateral}
      itemActivo={itemActivo}
      titulo={datosItemActivo?.titulo[idioma]}
      titulo_descripcion={datosItemActivo?.titulo_descripcion?.[idioma]}
      descripcion={datosItemActivo?.descripcion[idioma]}
      idioma={idioma}
      logo={datosItemActivo?.logo?.ruta || '/public/kuna_logo.png'}
    >
      {renderizarImagen()}
    </CertificacionesLayout>
  );
}

export default Certificaciones;